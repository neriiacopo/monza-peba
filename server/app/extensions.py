from typing import Optional
from psycopg2.pool import SimpleConnectionPool

pool: Optional[SimpleConnectionPool] = None

def init_extensions(app):
    global pool
    pool = SimpleConnectionPool(
        minconn=1, maxconn=10,
        host=app.config["PGHOST"],
        port=app.config["PGPORT"],
        dbname=app.config["PGDATABASE"],
        user=app.config["PGUSER"],
        password=app.config["PGPASSWORD"],
    )

def get_conn():
    return pool.getconn()

def put_conn(conn):
    pool.putconn(conn)
