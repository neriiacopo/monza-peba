from flask import jsonify
from ..dao.pg import cursor
from ..services.pgrouting import route_between


def build_feature(profile_name, res):
    return {
        "type": "Feature",
        "geometry": res["geometry"],
        "segments": res["segments"],
        "properties": {
            "profile": profile_name,
            "total_length": res["total_length"],
            "total_cost": res["total_cost"],
            "algo": res["algo"],
            "start_vid": res["start_vid"],
            "end_vid": res["end_vid"],
        },
    }


def compute_route(origin, destination, params=None):
    o_lat, o_lon = origin.lat, origin.lon
    d_lat, d_lon = destination.lat, destination.lon

    profiles = [
        ("baseline", "shortest", None),      
    ]
    
    if params is not None:
        profiles.append(("accessible", "weighted", params))

    features = []

    for profile_name, algo, route_params in profiles:
        with cursor() as cur:
            res = route_between(cur, o_lon, o_lat, d_lon, d_lat, algo, route_params)

        features.append(build_feature(profile_name, res))

    return jsonify({"type": "FeatureCollection", "features": features})
