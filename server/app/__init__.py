from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

from .config import Config
from .extensions import init_extensions
from .routes.health import health_bp
from .routes.routing import routing_bp
from .routes.geodata import geodata_bp
from .errors import register_error_handlers


def create_app() -> Flask:
    app = Flask(__name__)
    app.config.from_object(Config)

    # Enable CORS for all routes and origins
    CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)

    init_extensions(app)

    # Register blueprints
    app.register_blueprint(health_bp, url_prefix="/")
    app.register_blueprint(routing_bp, url_prefix="/")
    app.register_blueprint(geodata_bp, url_prefix="/")

    register_error_handlers(app)

    # Add CORS headers to every response (handles OPTIONS preflight)
    @app.after_request
    def add_cors_headers(response):
        response.headers["Access-Control-Allow-Origin"] = "*"
        response.headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization"
        response.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS"
        return response

    return app
