from pydantic import BaseModel, Field, ValidationError

class LatLon(BaseModel):
    lat: float = Field(ge=-90, le=90)
    lon: float = Field(ge=-180, le=180)

class RouteRequest(BaseModel):
    origin: LatLon
    destination: LatLon
    params: dict | None = None
    

def parse_route_request(payload: dict) -> RouteRequest:
    try:
        return RouteRequest(**payload)
    except ValidationError as ve:
        raise ValueError(ve.errors())
