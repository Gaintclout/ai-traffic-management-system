from fastapi import APIRouter
from backend.services.traffic_service import process_traffic

router = APIRouter()

@router.get("/analyze")
def analyze():
    data = process_traffic()
    return data