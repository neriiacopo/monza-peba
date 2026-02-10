import json
from ..dao.pg import analytics_cursor


def log_usage_input(call_id, metadata, origin, destination, params):
    query = """
        INSERT INTO activity_logs (
            call_id, client_id, profile_id, origin, destination, params, status
        ) VALUES (
            %s, 
            %s,
            %s,
            ST_SetSRID(ST_MakePoint(%s, %s), 4326), 
            ST_SetSRID(ST_MakePoint(%s, %s), 4326), 
            %s, 'pending'
        )
    """
    
    with analytics_cursor() as cur:
        cur.execute(query, (
            call_id,
            metadata.client_id,
            metadata.profile_id,
            origin.lon, origin.lat,
            destination.lon, destination.lat,
            json.dumps(params),
        ))


def log_usage_output(call_id, features, status='success'):
    query = """
        UPDATE activity_logs 
        SET results = %s, 
            status = %s, 
            has_accessible_path = %s,
            completed_at = now()
        WHERE call_id = %s
    """

    has_accessible_path = any(
        feature["properties"]["profile"] == "accessible" and feature["geometry"] is not None for feature in features)
    
    with analytics_cursor() as cur:
        cur.execute(query, (json.dumps(features), status,  has_accessible_path, call_id))


def log_journey(call_id, coordinate_list):
    
    formatted_points = ", ".join([f"{lon} {lat}" for lon, lat in coordinate_list]) # [[lon1, lat1], [lon2, lat2], ...]
    wkt_line = f"LINESTRING({formatted_points})"

    print("call_id:", call_id, "wkt_line:", wkt_line )
    
    query = """
        INSERT INTO journeys (call_id, path, point_count)
        VALUES (
            %s, 
            ST_GeomFromText(%s, 4326), 
            %s
        )
        ON CONFLICT (call_id) DO UPDATE 
        SET path = EXCLUDED.path, 
            point_count = EXCLUDED.point_count
    """

    
    with analytics_cursor() as cur:
        cur.execute(query, (str(call_id), wkt_line, len(coordinate_list)))


def update_journey_telemetry(call_id, status=None, path_coords=None, rating=None):
    cid = str(call_id)
    
    wkt_line = None
    if path_coords and len(path_coords) >= 2:
        formatted_points = ", ".join([f"{p[0]} {p[1]}" for p in path_coords])
        wkt_line = f"LINESTRING({formatted_points})"

    query = """
        INSERT INTO journeys (call_id, status, path, point_count, rating, started_at)
        VALUES (
            %s, 
            COALESCE(%s, 'started'), 
            ST_GeomFromText(%s, 4326), 
            %s, %s, now()
        )
        ON CONFLICT (call_id) DO UPDATE SET
            status = COALESCE(EXCLUDED.status, journeys.status),
            path = COALESCE(ST_GeomFromText(%s, 4326), journeys.path),
            point_count = COALESCE(EXCLUDED.point_count, journeys.point_count),
            rating = COALESCE(EXCLUDED.rating, journeys.rating),
            finished_at = CASE 
                WHEN EXCLUDED.status = 'completed' THEN now() 
                ELSE journeys.finished_at 
            END;
    """
    
    with analytics_cursor() as cur:
        
        cur.execute(query, (
            cid, status, wkt_line, 
            len(path_coords) if path_coords else None,
            rating,
            wkt_line 
        ))