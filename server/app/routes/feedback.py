from flask import Blueprint, request, jsonify

from app.services.telemetry import log_usage_input
from ..errors import BadRequest
from ..utils.validation import parse_gps_request
from ..services.telemetry import log_journey
from ..utils.validation import parse_telemetry_request
from ..services.telemetry import update_journey_telemetry

feedback_bp = Blueprint("feedback", __name__)


# OLD ONLY GPS ENDPOINT
@feedback_bp.post("/gps", )
def gps():
    payload = request.get_json(silent=True) or {}

    print(payload)

    try:
        req = parse_gps_request(payload)
     
        log_journey(req.call_id, req.path)

        return jsonify({"status": "success", "message": "Journey trace recorded"}), 201
    except ValueError as e:
        return jsonify({"error": "Invalid GPS data", "details": str(e)}), 400



@feedback_bp.post("/telemetry")
def update_telemetry():
    payload = request.get_json(silent=True) or {}

    try:
        req = parse_telemetry_request(payload)
        
        update_journey_telemetry(
            call_id=req.call_id,
            status=req.status,
            path_coords=req.path,
            rating=req.rating,
        )
        
        return jsonify({"status": "success", "message": "Telemetry updated"}), 200
    except ValueError as e:
        return jsonify({"error": "Validation failed", "details": str(e)}), 400
    except Exception as e:
        # For debugging database issues
        print(f"Telemetry Error: {e}")
        return jsonify({"error": "Internal server error"}), 500