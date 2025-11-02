from psycopg2 import sql
from ..errors import NotFound

# Returns (minx, miny, maxx, maxy, geojson_polygon, count)
def table_bbox(cur, table_name: str, srid: int = 4326):
    # Safe identifier injection
    extent_sql = sql.SQL("""
        WITH ext AS (
          SELECT ST_Extent(geom) AS b FROM {tbl}
        ),
        stats AS (
          SELECT COUNT(*)::BIGINT AS n FROM {tbl}
        )
        SELECT
          ST_XMin(b) AS minx,
          ST_YMin(b) AS miny,
          ST_XMax(b) AS maxx,
          ST_YMax(b) AS maxy,
          ST_AsGeoJSON(
            ST_MakeEnvelope(
              ST_XMin(b), ST_YMin(b), ST_XMax(b), ST_YMax(b), %s
            )
          ) AS envelope_geojson,
          n AS count
        FROM ext, stats;
    """).format(tbl=sql.Identifier(table_name))

    cur.execute(extent_sql, (srid,))
    row = cur.fetchone()
    if not row or row[0] is None:
        raise NotFound(f"No geometry found in table '{table_name}'.")
    return row  # tuple


def table_network(cur, table_name: str, srid: int = 4326):
  # Assumes the table has a 'geom' column representing edges
  edges_sql = sql.SQL("""
    SELECT json_build_object(
      'type', 'FeatureCollection',
      'features', COALESCE(json_agg(
        json_build_object(
          'type', 'Feature',
          'geometry', ST_AsGeoJSON(geom)::json,
          'properties', to_jsonb(t) - 'geom'
        )
      ), '[]'::json)
    )
    FROM (
      SELECT * FROM {tbl}
    ) AS t;
  """).format(tbl=sql.Identifier(table_name))

  cur.execute(edges_sql)
  result = cur.fetchone()
  if not result or result[0] is None:
    raise NotFound(f"No edges found in table '{table_name}'.")
  return result[0]