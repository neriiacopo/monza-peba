from flask import jsonify
from ..dao.pg import cursor
from ..services.pgrouting import route_between
from ..services.telemetry import log_usage_input, log_usage_output


def build_feature(profile_name, res):
    return {
        "type": "Feature",
        "geometry": res["geometry"],
        "segments": res["segments"],
        "endpoints": res["endpoints"],
        "properties": {
            "profile": profile_name,
            "total_length": res["total_length"],
            "total_cost": res["total_cost"],
            "algo": res["algo"],
            "start_vid": res["start_vid"],
            "end_vid": res["end_vid"],
        },
    }

def build_logs(profile_name,res):
    return {
        "type": "Feature",
        "geometry": res["geometry"],
        "properties": {
            "profile": profile_name,
            "total_length": res["total_length"],
            "total_cost": res["total_cost"],
            "algo": res["algo"],
        },
    }


def compute_route(origin, destination, params=None, metadata={}, call_id=None):
    # Start log with input data
    log_usage_input(call_id, metadata, origin, destination, params)

    o_lat, o_lon = origin.lat, origin.lon
    d_lat, d_lon = destination.lat, destination.lon

    profiles = [
        ("baseline", "shortest", None),      
    ]
    
    if params is not None:
        profiles.append(("accessible", "weighted", params))

    features = []
    logs = []

    for profile_name, algo, route_params in profiles:
        with cursor() as cur:
            res = route_between(cur, o_lon, o_lat, d_lon, d_lat, algo, route_params)

        features.append(build_feature(profile_name, res)) # response features
        logs.append(build_logs(profile_name, res)) # analytics logs

    # Complete log with results
    log_usage_output(call_id, logs) 

    return jsonify({"type": "FeatureCollection", "features": features, "id": call_id})
