import json
from flask import current_app
from ..errors import NotFound

SNAP_SQL_TMPL = """
SELECT id
FROM {vertices}
ORDER BY the_geom <-> ST_SetSRID(ST_Point(%s, %s), 4326)
LIMIT 1;
"""

DIJKSTRA_SQL_TMPL = """
WITH route AS (
  SELECT * FROM pgr_dijkstra(
    'SELECT id, source, target, cost, reverse_cost FROM {edges}',
    %s, %s, directed := true
  )
),
geom_path AS (
  SELECT ST_LineMerge(ST_Union(w.geom)) AS geom,
         SUM(w.length_m) FILTER (WHERE w.length_m IS NOT NULL) AS total_length_m,
         SUM(r.cost) AS total_cost
  FROM route r
  JOIN {edges} w ON r.edge = w.id
)
SELECT ST_AsGeoJSON(geom), total_length_m, total_cost
FROM geom_path;
"""

ASTAR_SQL_TMPL = """
WITH route AS (
  SELECT * FROM pgr_astar(
    'SELECT id, source, target, cost, reverse_cost,
            ST_X(ST_StartPoint(geom)) AS x1, ST_Y(ST_StartPoint(geom)) AS y1,
            ST_X(ST_EndPoint(geom))   AS x2, ST_Y(ST_EndPoint(geom))   AS y2
     FROM {edges}',
    %s, %s, directed := true, heuristic := 5, factor := 1.0
  )
),
geom_path AS (
  SELECT ST_LineMerge(ST_Union(w.geom)) AS geom,
         SUM(w.length_m) FILTER (WHERE w.length_m IS NOT NULL) AS total_length_m,
         SUM(r.cost) AS total_cost
  FROM route r
  JOIN {edges} w ON r.edge = w.id
)
SELECT ST_AsGeoJSON(geom), total_length_m, total_cost
FROM geom_path;
"""

def snap_vertex(cur, lon, lat, vertices_tbl):
    cur.execute(SNAP_SQL_TMPL.format(vertices=vertices_tbl), (lon, lat))
    row = cur.fetchone()
    if not row:
        raise NotFound("No nearby vertex found.")
    return row[0]

def shortest_path(cur, start_vid, end_vid, edges_tbl, algo):
    sql = ASTAR_SQL_TMPL if algo == "astar" else DIJKSTRA_SQL_TMPL
    print(sql)
    cur.execute(sql.format(edges=edges_tbl), (start_vid, end_vid))
    row = cur.fetchone()
    if not row or row[0] is None:
        raise NotFound("No path found between snapped vertices.")
    geojson = json.loads(row[0])
    return {"geometry": geojson, "total_length_m": row[1], "total_cost": row[2]}

def route_between(cur, o_lon, o_lat, d_lon, d_lat):
    cfg = current_app.config
    s_vid = snap_vertex(cur, o_lon, o_lat, cfg["VERTICES_TABLE"])
    e_vid = snap_vertex(cur, d_lon, d_lat, cfg["VERTICES_TABLE"])
    result = shortest_path(cur, s_vid, e_vid, cfg["EDGES_TABLE"], cfg["PGR_ALGO"])
    print(result)
    result["start_vid"] = s_vid
    result["end_vid"] = e_vid
    result["algo"] = cfg["PGR_ALGO"]
    return result
