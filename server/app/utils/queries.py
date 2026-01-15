
SNAP_SQL_TMPL = """
SELECT id, ST_AsGeoJSON(the_geom)
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

DIJKSTRA_SQL_SIMPLE_DETAILS = """
WITH route AS (
  SELECT * FROM pgr_dijkstra(
    'SELECT gid as id, source, target, length AS cost FROM {edges}',
    %s, %s, directed := false
  )
),
seg AS (
  SELECT r.seq,
         r.node,
         r.edge,
         r.cost AS edge_cost,
         e.*
  FROM route r
  JOIN {edges} e ON r.edge = e.gid
  WHERE r.edge <> -1
),
tot AS (
  SELECT SUM(seg.length) AS total_length,
         SUM(seg.edge_cost) AS total_cost
  FROM seg
),
merged AS (
  SELECT ST_LineMerge(ST_Union(geom)) AS geom
  FROM seg
)
SELECT
  ST_AsGeoJSON((SELECT geom FROM merged)) AS geometry,
  (
    SELECT json_agg(
      json_build_object(
        'gid', s.gid,
        'source', s.source,
        'target', s.target,
        'length', s.length,
        'cost', s.edge_cost,
        'geom', ST_AsGeoJSON(s.geom)::json,
        'metadata', to_jsonb(s) - 'geom' - 'seq' - 'node' - 'edge' - 'edge_cost'
      )
      ORDER BY s.seq
    )
    FROM seg s
  ) AS segments,
  (SELECT total_length FROM tot),
  (SELECT total_cost   FROM tot);
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


DIJKSTRA_SQL_WEIGHTED_DETAILS = """
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
seg AS (
  SELECT r.seq,
         r.node,
         r.edge,
         r.cost AS edge_cost,
         e.*
  FROM route r
  JOIN {edges} e ON r.edge = e.gid
  WHERE r.edge <> -1
),
tot AS (
  SELECT SUM(seg.length) AS total_length,
         SUM(seg.edge_cost) AS total_cost
  FROM seg
),
merged AS (
  SELECT ST_LineMerge(ST_Union(geom)) AS geom
  FROM seg
)
SELECT
  ST_AsGeoJSON((SELECT geom FROM merged)) AS geometry,
  (
    SELECT json_agg(
      json_build_object(
        'gid', s.gid,
        'source', s.source,
        'target', s.target,
        'length', s.length,
        'cost', s.edge_cost,
        'geom', ST_AsGeoJSON(s.geom)::json,
        'metadata', to_jsonb(s) - 'geom' - 'seq' - 'node' - 'edge' - 'edge_cost'
      )
      ORDER BY s.seq
    )
    FROM seg s
  ) AS segments,
  (SELECT total_length FROM tot),
  (SELECT total_cost   FROM tot);
"""
