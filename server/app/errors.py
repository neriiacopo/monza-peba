from flask import jsonify

class BadRequest(Exception):
    status_code = 400
    def __init__(self, message="Bad request"): self.message = message

class NotFound(Exception):
    status_code = 404
    def __init__(self, message="Not found"): self.message = message

def register_error_handlers(app):
    @app.errorhandler(BadRequest)
    def _bad_request(e):
        return jsonify({"error": e.message}), e.status_code

    @app.errorhandler(NotFound)
    def _not_found(e):
        return jsonify({"error": e.message}), e.status_code

    @app.errorhandler(Exception)
    def _any(e):
        # Hide internal errors in prod; log e in real life
        return jsonify({"error": str(e)}), 500
