from contextlib import contextmanager
from ..extensions import get_conn, put_conn

@contextmanager
def cursor():
    conn = get_conn("routing")
    try:
        with conn.cursor() as cur:
            yield cur
    finally:
        put_conn(conn, "routing")



@contextmanager
def reporting_cursor():
    conn = get_conn("reporting")
    try:
        with conn.cursor() as cur:
            yield cur
        conn.commit()  
    except Exception as e:
        conn.rollback() # Undo everything if there's an error
        raise e
    finally:
        put_conn(conn, "reporting")



@contextmanager
def analytics_cursor():
    conn = get_conn("analytics")
    try:
        with conn.cursor() as cur:
            yield cur
        conn.commit()  
    except Exception as e:
        conn.rollback() # Undo everything if there's an error
        raise e
    finally:
        put_conn(conn, "analytics")