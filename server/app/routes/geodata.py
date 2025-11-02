from flask import Blueprint
from ..controllers.geodata_controller import get_network_bbox
from ..controllers.geodata_controller import get_network
geodata_bp = Blueprint("geodata", __name__)

@geodata_bp.get("/bbox")
def bbox():
    return get_network_bbox()

@geodata_bp.get("/network")
def network():
    return get_network()
