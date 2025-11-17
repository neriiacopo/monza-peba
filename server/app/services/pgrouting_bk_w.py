import json
from flask import current_app
from ..errors import NotFound

SNAP_SQL_TMPL = """
SELECT id
FROM {vertices}
ORDER BY the_geom <-> ST_SetSRID(ST_Point(%s, %s), 4326)
LIMIT 1;
"""

DIJKSTRA_SQL_SIMPLE = """
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


DIJKSTRA_SQL_WEIGHTED = """
WITH route AS (
  SELECT * FROM pgr_dijkstra(
    'SELECT
         gid AS id,
         source,
         target,
         {cost_expr} AS cost
     FROM {edges}
     WHERE {where_clause}',
    %s, %s, directed := false
  )
),
geom_path AS (
  SELECT
      ST_LineMerge(ST_Union(w.geom)) AS geom,
      SUM(w.length) AS total_length,
      SUM(r.cost)   AS total_cost
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

def shortest_path(cur, start_vid, end_vid, edges_tbl, algo, params=None):
    if algo == "weighted" and params is not None:
        print("building where clause with params:", params)
        where_clause = build_where_clause(params)
        cost_expr = build_cost_expr(params)
        sql = DIJKSTRA_SQL_WEIGHTED.format(
            edges=edges_tbl,
            where_clause=where_clause,
            cost_expr=cost_expr,
        )
    else:
      sql = DIJKSTRA_SQL_SIMPLE

    cur.execute(sql.format(edges=edges_tbl), (start_vid, end_vid))
    row = cur.fetchone()
    if not row or row[0] is None:
        raise NotFound("No path found between snapped vertices.")
    geojson = json.loads(row[0])
    print("tot len", row[1], "tot cost", row[2])
    return {"geometry": geojson, "total_length": row[1], "total_cost": row[2]}

def route_between(cur, o_lon, o_lat, d_lon, d_lat, algo, params=None):
    cfg = current_app.config
    s_vid = snap_vertex(cur, o_lon, o_lat, cfg["VERTICES_TABLE"])
    e_vid = snap_vertex(cur, d_lon, d_lat, cfg["VERTICES_TABLE"])

    result = shortest_path(cur, s_vid, e_vid, cfg["EDGES_TABLE"], algo, params)

    result["start_vid"] = s_vid
    result["end_vid"] = e_vid
    result["algo"] = algo
    return result

ALLOWED_STEPS_TAGS = {"STEPS", "STEP_STAIRS"}

def build_where_clause(params: dict) -> str:
    clauses = ["1=1"]  

    steps = params.get("steps") or []
    if steps:
        escaped_tags = [s.replace("'", "''") for s in steps]
        steps_list_sql = ", ".join(f"''{tag}''" for tag in escaped_tags)
        clauses.append(f"steps NOT IN ({steps_list_sql})")

    width_min = params.get("width_min")
    if width_min is not None:
        width_min = float(width_min)
        clauses.append(f"(width_min = 0.1 OR width_min >= {width_min:.3f})")

    # slope_max = params.get("slope")
    # if slope_max is not None:
    #     slope_max = float(slope_max)
    #     clauses.append(f"(slope = 9999 OR slope <= {slope_max:.3f})")
      
    final_string = " AND ".join(clauses)
    print("where clause:", final_string)

    return str(final_string)

def build_cost_expr(params: dict) -> str:
    w_len = 1.0

    w_crash = float(params.get("crash", 0.0))
    w_pali = float(params.get("pali_luce", 0.0))

    slope_threshold = float(params.get("slope", 0.0))
    # Higher allowed slope -> lower weight
    w_slope = 1.0 / (1.0 + max(slope_threshold, 0.0))

    cost_expr = (
        f"{w_len:.6f} * length"
        f" + {w_crash:.6f} * COALESCE(crash, 0)"
        f" + {w_pali:.6f} * COALESCE(pali_luce, 0)"
        f" + {w_slope:.6f} * CASE WHEN slope = 9999 THEN 0 ELSE slope END"
    )
    return cost_expr

