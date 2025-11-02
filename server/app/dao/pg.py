from contextlib import contextmanager
from ..extensions import get_conn, put_conn

@contextmanager
def cursor():
    conn = get_conn()
    try:
        with conn.cursor() as cur:
            yield cur
    finally:
        put_conn(conn)
