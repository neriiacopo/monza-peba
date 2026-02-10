from typing import Dict, Optional
from psycopg2.pool import SimpleConnectionPool

pools: Dict[str, SimpleConnectionPool] = {}

def init_extensions(app):
    """
    Initializes connection pools.
    Keep 'routing' as default 
    """
    global pools

    pools["routing"] = SimpleConnectionPool(
        minconn=1, maxconn=10,
        host=app.config["PGHOST"],
        port=app.config["PGPORT"],
        dbname=app.config["PGDATABASE"],
        user=app.config["PGUSER"],
        password=app.config["PGPASSWORD"],
    )

    pools["reporting"] = SimpleConnectionPool(
        minconn=1, maxconn=10,
        host=app.config["PGHOST"],
        port=app.config["PGPORT"],
        dbname=app.config["PGREPORTS"],
        user=app.config["PGUSER"],
        password=app.config["PGPASSWORD"],
    )

    pools["analytics"] = SimpleConnectionPool(
        minconn=1, maxconn=10,
        host=app.config["PGHOST"],
        port=app.config["PGPORT"],
        dbname=app.config["PGANALYTICS"],
        user=app.config["PGUSER"],
        password=app.config["PGPASSWORD"],
    )

def get_conn(db: str = "routing"):
    try:
        return pools[db].getconn()
    except KeyError:
        raise RuntimeError(f"Unknown DB pool '{db}'. Did you init_extensions()?")

def put_conn(conn, db: str = "routing"):
    pools[db].putconn(conn)
