from app import create_app
app = create_app()

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=False) # For local testing only

# Provide a WSGI-compatible alias some platforms expect (wsgi:application)
# This makes both `gunicorn wsgi:app` and `gunicorn wsgi:application` work.
application = app