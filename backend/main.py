from fastapi import FastAPI
from backend.api.routes import traffic, signals

app = FastAPI(title="Smart Traffic System")

app.include_router(traffic.router, prefix="/traffic")
app.include_router(signals.router, prefix="/signals")


@app.get("/")
def root():
    return {"message": "Smart Traffic System Running"}