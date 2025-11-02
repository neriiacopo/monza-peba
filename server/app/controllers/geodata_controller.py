from flask import jsonify, current_app
from ..dao.pg import cursor
from ..services.geodata import table_bbox

def get_network_bbox():
    table = current_app.config["EDGES_TABLE"]  # e.g., "network"
    with cursor() as cur:
        minx, miny, maxx, maxy, envelope_geojson, count = table_bbox(cur, table)
    return jsonify({
        "bbox": [[float(miny), float(minx)], [float(maxy), float(maxx)]],
    })


def get_network():
    table = current_app.config["EDGES_TABLE"]  # e.g., "network"
    with cursor() as cur:
        minx, miny, maxx, maxy, envelope_geojson, count = table_bbox(cur, table)
    return jsonify({
        # "table": table,
        # "count": int(count),
        # "bbox": [[float(miny), float(minx)], [float(maxy), float(maxx)]],
        "feature": {
            "type": "Feature",
            "geometry": __import__("json").loads(envelope_geojson),
            "properties": {
                "table": table,
                "count": int(count)
            }
        }
    })
