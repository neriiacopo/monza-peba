from flask import jsonify
from ..dao.pg import cursor
from ..services.pgrouting import route_between

def compute_route(origin, destination, params=None):
    o_lat, o_lon = origin.lat, origin.lon
    d_lat, d_lon = destination.lat, destination.lon

    features = []


    # empty params route for comparison
    with cursor() as cur:
        res = route_between(cur, o_lon, o_lat, d_lon, d_lat)
        
    feature = {
    "type": "Feature",
    "geometry": res["geometry"],
    "properties": {
        "profile": "shortest",
        "total_length": res["total_length"],
        "total_cost": res["total_cost"],
        "algo": res["algo"],
        "start_vid": res["start_vid"],
        "end_vid": res["end_vid"],
        },
    }
    features.append(feature)

    if params is not None:
        with cursor() as cur:
            res = route_between(cur, o_lon, o_lat, d_lon, d_lat, params)

        feature = {
            "type": "Feature",
            "geometry": res["geometry"],
            "properties": {
                "profile": "accessible",
                "total_length": res["total_length"],
                "total_cost": res["total_cost"],
                "algo": res["algo"],
                "start_vid": res["start_vid"],
                "end_vid": res["end_vid"],
            },
        }
        features.append(feature)


    return jsonify({"type": "FeatureCollection", "features": features})