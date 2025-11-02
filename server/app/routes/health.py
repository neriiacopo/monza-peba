from flask import Blueprint, current_app, jsonify

health_bp = Blueprint("health", __name__)

@health_bp.get("/health")
def health():
    return jsonify({"status": "ok", "algo": current_app.config["PGR_ALGO"]})
