from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

from .config import Config
from .extensions import init_extensions
from .routes.health import health_bp
from .routes.routing import routing_bp
from .routes.geodata import geodata_bp
from .routes.reporting import reporting_bp
from .routes.feedback import feedback_bp
from .errors import register_error_handlers


def create_app() -> Flask:
    app = Flask(__name__)
    app.config.from_object(Config)

    cors_origins = app.config.get("CORS_ORIGINS", "*")
    cors_supports_credentials = app.config.get("CORS_SUPPORTS_CREDENTIALS", False)

    # If user provided a comma-separated list in env, convert to list
    if isinstance(cors_origins, str) and "," in cors_origins:
        origins = [o.strip() for o in cors_origins.split(",") if o.strip()]
    else:
        origins = cors_origins

    CORS(app, resources={r"/*": {"origins": origins}}, supports_credentials=cors_supports_credentials)

    init_extensions(app)

    # Register blueprints
    app.register_blueprint(health_bp, url_prefix="/")
    app.register_blueprint(routing_bp, url_prefix="/")
    app.register_blueprint(geodata_bp, url_prefix="/")
    app.register_blueprint(reporting_bp, url_prefix="/")
    app.register_blueprint(feedback_bp, url_prefix="/")

    register_error_handlers(app)

    return app
