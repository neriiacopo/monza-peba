import json
from flask import current_app
from ..errors import NotFound
from ..utils.queries import DIJKSTRA_SQL_SIMPLE_DETAILS, DIJKSTRA_SQL_WEIGHTED_DETAILS, SNAP_SQL_TMPL


def snap_vertex(cur, lon, lat, vertices_tbl):
    cur.execute(SNAP_SQL_TMPL.format(vertices=vertices_tbl), (lon, lat))
    row = cur.fetchone()
    if not row:
        raise NotFound("No nearby vertex found.")
    return row

# def retreive_vertex(cur, lon, lat, vertices_tbl):
#     cur.execute(SNAP_SQL_TMPL.format(vertices=vertices_tbl), (lon, lat))
#     row = cur.fetchone()
#     if not row:
#         raise NotFound("No nearby vertex found.")
#     return row

def shortest_path(cur, start_vid, end_vid, edges_tbl, algo, params=None):
    if algo == "weighted" and params is not None:
        where_clause = build_where_clause(params)
        cost_expr = build_cost_expr(params)
        sql = DIJKSTRA_SQL_WEIGHTED_DETAILS.format(
            edges=edges_tbl,
            where_clause=where_clause,
            cost_expr=cost_expr,
        )
    else:
        sql = DIJKSTRA_SQL_SIMPLE_DETAILS.format(edges=edges_tbl)

    cur.execute(sql, (start_vid, end_vid))
    row = cur.fetchone()

    if not row:
        raise NotFound("No path found")

    geometry = json.loads(row[0]) if row[0] else None
    segments = row[1]
    total_length = row[2]
    total_cost = row[3]

    return {
        "geometry": geometry,     
        "segments": segments,    
        "total_length": total_length,
        "total_cost": total_cost,
    }




def route_between(cur, o_lon, o_lat, d_lon, d_lat, algo, params=None):
    cfg = current_app.config
    s_v = snap_vertex(cur, o_lon, o_lat, cfg["VERTICES_TABLE"])
    e_v = snap_vertex(cur, d_lon, d_lat, cfg["VERTICES_TABLE"])

    s_vid = s_v[0]
    e_vid = e_v[0]

    result = shortest_path(cur, s_vid, e_vid, cfg["EDGES_TABLE"], algo, params)

    result["start_vid"] = s_vid
    result["end_vid"] = e_vid
    result["algo"] = algo

    result["endpoints"]= {
        "origin": {"id": s_vid, "geometry": json.loads(s_v[1]) if s_v[1] else None},
        "destination": {"id": e_vid, "geometry": json.loads(e_v[1]) if e_v[1] else None},
    }
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

