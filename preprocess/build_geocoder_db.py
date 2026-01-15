OSM_FILE = {"file":"data/pois_osm.csv", "sep":";"}
STREET_FILE = {"file":"data/COMUNE_MONZA_Numerazione_Civica_Comunale_4326.csv", "sep":","}

import pandas as pd
import re

def parse_house_number(hn):
    """
    Returns (numeric_part:int, suffix:str) for safe sorting.
    """
    hn = str(hn).strip()

    # extract leading digits
    match = re.match(r"^(\d+)(.*)$", hn)
    if match:
        num = int(match.group(1))
        suffix = match.group(2).strip().upper()
        return num

    # fallback
    # return 999999, hn.upper()


def add_coordinates_column(df):
    df["coordinates"] = df.apply(
        lambda row: {"lat": row["lat"], "lng": row["lon"]}, axis=1) ###  note lon lng
    return df.drop(columns=["lat", "lon"])


def mod_pois(df):
    pois = df[df["type"] == "poi"].copy()

    # nested metadata
    pois["metadata"] = pois.apply(
        lambda r: {
            "category": r["category"],
            "subcategory": r["subcategory"],
        },
        axis=1,
    )

    # drop original columns
    pois = pois.drop(columns=["category", "subcategory", "number"])

    return pois


def mod_addresses(df):
    addr = df[df["type"] == "addr"].copy()

    # Ensure numeric sorting
    # addr["number"] = addr["number"].astype(int)

    grouped = []

    for name, group in addr.groupby("name"):
        group = group.sort_values(by="number", key=lambda col: col.map(parse_house_number))

        # list of house addresses
        house_addr = group.apply(
            lambda r: {
                "number": r["number"],
                "coordinates": r["coordinates"]
            },
            axis=1
        ).tolist()

        # pick the middle coordinate
        mid_idx = len(group) // 2
        mid_row = group.iloc[mid_idx]
        mid_coordinates = mid_row["coordinates"]

        grouped.append({
            "type": "addr",
            "name": name,
            "coordinates": mid_coordinates,
            "house_addr": house_addr
        })

    return pd.DataFrame(grouped)


def transform(df):
    pois = mod_pois(df)
    adrs = mod_addresses(df)

    # merge back into a single dataframe
    final_df = pd.concat([pois, adrs], ignore_index=True)

    return final_df


def main() :

    print("Loading POIs")
    pois = pd.read_csv(OSM_FILE["file"], sep=OSM_FILE["sep"], encoding="utf-8")
    pois["type"] = "poi"

    print("Loading Addresses")
    addresses = pd.read_csv(STREET_FILE["file"], sep=STREET_FILE["sep"], encoding="utf-8")
    addresses["type"] ="addr"

    print("Joining datasets")
    joined = pd.concat([pois, addresses], ignore_index=True)
    joined.drop(["id", "source"], axis=1, inplace=True)

    joined = add_coordinates_column(joined)

    joined = transform(joined)

    joined.reset_index(drop=True, inplace=True)
    joined.insert(0, "id", joined.index + 1)

    print("Saving geocoder DB")
    joined.to_json("geocoder_db.json", orient="records", indent=2, force_ascii=False)

    print("DONE ✅")
    print(f"{len(joined)} POIs saved.")

if __name__ == "__main__":
    main()

