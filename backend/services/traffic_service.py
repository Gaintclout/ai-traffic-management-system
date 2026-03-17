from ai_engine.detection.vehicle_detector import detect_vehicles
from traffic_analysis.aggregator import analyze_traffic

def process_traffic():
    vehicles = detect_vehicles()
    analysis = analyze_traffic(vehicles)

    return {
        "vehicles": vehicles,
        "analysis": analysis
    }