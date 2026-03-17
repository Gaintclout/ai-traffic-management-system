import random

def detect_vehicles():
    return {
        "cars": random.randint(10, 50),
        "bikes": random.randint(5, 30),
        "trucks": random.randint(1, 10)
    }