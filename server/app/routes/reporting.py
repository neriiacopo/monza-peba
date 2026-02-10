from flask import Blueprint, request
from ..errors import BadRequest
from ..utils.validation import parse_report_request
from ..controllers.reporting_controller import create_report

reporting_bp = Blueprint("reporting", __name__)

@reporting_bp.post("/report")
def report():
    payload = request.get_json(silent=True) or {}
    try:
        req = parse_report_request(payload)
    except ValueError as e:
        raise BadRequest(str(e))

    return create_report(req)
