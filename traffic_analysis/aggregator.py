def analyze_traffic(vehicle_data):
    total = sum(vehicle_data.values())

    if total < 20:
        density = "LOW"
    elif total < 50:
        density = "MEDIUM"
    else:
        density = "HIGH"

    return {
        "total": total,
        "density": density
    }