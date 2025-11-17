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
    'SELECT gid as id, source, target, length AS cost FROM {edges}',
    %s, %s, directed := false
  )
),
geom_path AS (
  SELECT ST_LineMerge(ST_Union(w.geom)) AS geom,
         SUM(w.length) AS total_length, 
         SUM(r.cost) AS total_cost
  FROM route r
  JOIN {edges} w ON r.edge = w.gid
)
SELECT ST_AsGeoJSON(geom), total_length, total_cost
FROM geom_path;
"""


def snap_vertex(cur, lon, lat, vertices_tbl):
    cur.execute(SNAP_SQL_TMPL.format(vertices=vertices_tbl), (lon, lat))
    row = cur.fetchone()
    if not row:
        raise NotFound("No nearby vertex found.")
    return row[0]

def shortest_path(cur, start_vid, end_vid, edges_tbl, algo):
    sql = DIJKSTRA_SQL_TMPL
    cur.execute(sql.format(edges=edges_tbl), (start_vid, end_vid))
    row = cur.fetchone()
    if not row or row[0] is None:
        raise NotFound("No path found between snapped vertices.")
    geojson = json.loads(row[0])
    print("geo", geojson, "tot len", row[1], "tot cost", row[2])
    return {"geometry": geojson, "total_length": row[1], "total_cost": row[2]}

def route_between(cur, o_lon, o_lat, d_lon, d_lat):
    cfg = current_app.config
    s_vid = snap_vertex(cur, o_lon, o_lat, cfg["VERTICES_TABLE"])
    e_vid = snap_vertex(cur, d_lon, d_lat, cfg["VERTICES_TABLE"])
    result = shortest_path(cur, s_vid, e_vid, cfg["EDGES_TABLE"], cfg["PGR_ALGO"])
    print("result", result)
    result["start_vid"] = s_vid
    result["end_vid"] = e_vid
    result["algo"] = cfg["PGR_ALGO"]
    return result
