from flask import Blueprint, request
import uuid

from app.services.telemetry import log_usage_input
from ..errors import BadRequest
from ..utils.validation import parse_route_request
from ..controllers.routing_controller import compute_route

routing_bp = Blueprint("routing", __name__)

@routing_bp.post("/route_simple")
def route_simple():
    payload = request.get_json(silent=True) or {}
    try:
        req = parse_route_request(payload)
    except ValueError as e:
        raise BadRequest(str(e))
    return compute_route(req.origin, req.destination)


@routing_bp.post("/route")
def route():
    call_id = str(uuid.uuid4()) 
    payload = request.get_json(silent=True) or {}

    try:
        req = parse_route_request(payload)
    except ValueError as e:
        raise BadRequest(str(e))
    
    return compute_route(req.origin, req.destination, req.params, req.metadata, call_id)
