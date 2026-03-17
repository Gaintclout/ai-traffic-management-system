from fastapi import APIRouter
from backend.services.signal_service import get_signal_status

router = APIRouter()

@router.get("/")
def signal():
    return get_signal_status()