from decision_engine.decision_core import make_decision
from ai_engine.detection.emergency_detector import detect_emergency
from ai_engine.detection.vehicle_detector import detect_vehicles
from traffic_analysis.aggregator import analyze_traffic

def get_signal_status():

    vehicles = detect_vehicles()
    emergency = detect_emergency()

    analysis = analyze_traffic(vehicles)

    state = make_decision(analysis["density"], emergency)

    return {
        "vehicles": vehicles,
        "density": analysis["density"],
        "signal": state,
        "emergency": emergency
    }