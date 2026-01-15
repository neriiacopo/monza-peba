CITY = "Monza"
COUNTRY = "Italy"
ADMIN_LEVEL = 8

NOMINATIM_KEYS = [
    "amenity", "shop", "tourism",
    "leisure", "sport", "office",
    "historic", "craft", "healthcare", "education"
]

OVERPASS_URL = "https://overpass-api.de/api/interpreter"
# OVERPASS_URL = "https://overpass.kumi.systems/api/interpreter"
# OVERPASS_URL = "https://overpass.nchc.org.tw/api/interpreter"



import requests
from shapely.geometry import Point, Polygon, MultiPolygon
import pandas as pd
import time

def build_overpass_query():
    key_filters = "\n".join(
        f'nwr["{k}"]["name"](area.city);' for k in NOMINATIM_KEYS
    )

    return f"""
    [out:json][timeout:9999];
    area["name"="{CITY}"]["admin_level"="{ADMIN_LEVEL}"]->.city;
    (
      {key_filters}
    );
    out body geom;
    """

def query_overpass(retries=5):
    url = OVERPASS_URL
    query = build_overpass_query()

    for i in range(retries):
        try:
            print(f"Attempt {i+1} — waiting for Overpass...")
            r = requests.post(url, data=query, timeout=1200)
            r.raise_for_status()
            return r.json()["elements"]
        except Exception as e:
            print("⚠️ Timeout or server reset. Retrying in 30 seconds...")
            time.sleep(30)

    raise RuntimeError("Overpass failed after retries.")


def get_centroid(el):
    # Node
    if el["type"] == "node":
        return Point(el["lon"], el["lat"]), "osm_node"

    # Way or relation
    coords = [(p["lon"], p["lat"]) for p in el.get("geometry", [])]

    if len(coords) < 3:
        return None, None

    poly = Polygon(coords)
    return poly.centroid, f"osm_{el['type']}"

def get_category(tags):
    for k in NOMINATIM_KEYS:
        if k in tags:
            return k, tags[k]
    return None, None

def normalize(elements):
    records = []

    for el in elements:
        tags = el.get("tags", {})
        name = tags.get("name")
        wheelchair = tags.get("wheelchair")

        if not name:
            continue

        category, sub = get_category(tags)
        if not category:
            continue

        geom, source = get_centroid(el)
        if geom is None:
            continue

        records.append({
            "id": f"osm:{el['type']}_{el['id']}",
            "name": name.strip(),
            "lat": geom.y,
            "lon": geom.x,
            "category": category,
            "subcategory": sub,
            "wheelchair": wheelchair,
            "source": source
        })

    return records

def deduplicate(records):
    priority = {"osm_node": 0, "osm_way": 1, "osm_relation": 2}
    clean = {}

    for r in records:
        key = r["name"].lower()

        if key not in clean:
            clean[key] = r
            continue

        if priority[r["source"]] < priority[clean[key]["source"]]:
            clean[key] = r

    return list(clean.values())


def main():
    print("Downloading OSM data…")
    elements = query_overpass()

    print("Normalizing POIs…")
    records = normalize(elements)

    print("Deduplicating…")
    clean = deduplicate(records)

    df = pd.DataFrame(clean)

    df.to_csv("data/pois_osm.csv", index=False, sep=";", encoding="utf-8")
    df.to_json("data/pois_osm.json", orient="records", indent=2, force_ascii=False)

    print("DONE ✅")
    print(f"{len(df)} POIs saved.")


if __name__ == "__main__":
    main()

