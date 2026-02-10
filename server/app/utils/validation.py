from pydantic import BaseModel, Field, ValidationError, ConfigDict, field_validator
from typing import Optional
from uuid import UUID

class LatLon(BaseModel):
    lat: float = Field(ge=-90, le=90)
    lon: float = Field(ge=-180, le=180)

class Metadata(BaseModel):
    client_id: Optional[str] = Field(None, alias="clientId")
    profile_id: Optional[int] = Field(None, alias="profileId")

    model_config = ConfigDict(
        populate_by_name=True 
    )

class RouteRequest(BaseModel):
    origin: LatLon
    destination: LatLon
    params: dict | None = None
    metadata: Metadata 
    
def parse_route_request(payload: dict) -> RouteRequest:
    try:
        return RouteRequest(**payload)
    except ValidationError as ve:
        raise ValueError(ve.errors())



class Issue(BaseModel):
    id: int
    label: str

class Contact(BaseModel):
    email: Optional[str] = None
    firstname: Optional[str] = Field(None, alias="firstName")
    lastname: Optional[str] = Field(None, alias="lastName")

    model_config = ConfigDict(
        populate_by_name=True 
    )

class ReportRequest(BaseModel):
    client_id: Optional[str] = Field(None, alias="clientId")
    issue: Issue
    geolocation: LatLon
    comment: Optional[str] = ""
    contact: Optional[Contact] = None

def parse_report_request(payload: dict) -> ReportRequest:
    try:
        return ReportRequest(**payload)
    except ValidationError as ve:
        raise ValueError(ve.errors())
    


class GPSRequest(BaseModel):
    call_id: str = Field(alias="callId")
    path: list[tuple[float, float]]
    model_config = ConfigDict(populate_by_name=True)

    @field_validator('path')
    @classmethod
    def check_path_length(cls, v):
        if len(v) < 2:
            raise ValueError('Path must contain at least 2 coordinate points to form a line.')
        return v

def parse_gps_request(payload: dict) -> GPSRequest:
    try:
        return GPSRequest(**payload)
    except ValidationError as ve:
        raise ValueError(ve.errors())
    

class JourneyTelemetryRequest(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    call_id: UUID = Field(alias="callId")
    status: Optional[str] = None  # 'started' or 'completed'
    path: Optional[list[tuple[float, float]]] = None
    rating: Optional[int] = Field(None, ge=1, le=5)

    @field_validator('path')
    @classmethod
    def check_path_length(cls, v):
        if v is not None and len(v) < 2:
            raise ValueError('Path must contain at least 2 points to form a line.')
        return v

def parse_telemetry_request(payload: dict) -> JourneyTelemetryRequest:
    try:
        return JourneyTelemetryRequest(**payload)
    except ValidationError as ve:
        # Returns a clean list of errors
        raise ValueError(ve.errors())