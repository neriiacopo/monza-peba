import os

class Config:
    PGHOST = os.getenv("PGHOST", "localhost")
    PGPORT = int(os.getenv("PGPORT", "5432"))
    PGDATABASE = os.getenv("PGDATABASE", "routing")
    PGUSER = os.getenv("PGUSER", "postgres")
    PGPASSWORD = os.getenv("PGPASSWORD", "postgres")

    EDGES_TABLE = os.getenv("EDGES_TABLE", "ways")
    VERTICES_TABLE = os.getenv("VERTICES_TABLE", "ways_vertices_pgr")
    PGR_ALGO = os.getenv("PGR_ALGO", "dijkstra")  # or 'astar'

    JSON_SORT_KEYS = False
