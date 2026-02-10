from flask import jsonify
from ..dao.pg import reporting_cursor

def create_report(req):
    contact = req.contact  

    sql = """
    INSERT INTO public.issues
      (client_id, issue_id, issue_label, geom, comment,
    contact_email, contact_firstname, contact_lastname)
    VALUES
      (%s, %s, %s,
       ST_SetSRID(ST_MakePoint(%s, %s), 4326),
       %s, %s, %s, %s)
    RETURNING id::text AS id, created_at::text AS created_at;
    """

    params = (
        req.client_id,
        req.issue.id,
        req.issue.label,
        req.geolocation.lon,
        req.geolocation.lat,
        req.comment,
        getattr(contact, "email", None),
        getattr(contact, "firstname", None),
        getattr(contact, "lastname", None),
    )

    with reporting_cursor() as cur:
        cur.execute(sql, params)
        row = cur.fetchone()

    if not row:
        return jsonify({"error": "insert_failed"}), 500

    report_id, created_at = row

    return jsonify({"id": report_id, "created_at": created_at}), 201
