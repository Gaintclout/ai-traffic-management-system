from fastapi import FastAPI
from backend.api.routes import traffic, signal

app = FastAPI(title="Smart Traffic System")

app.include_router(traffic.router, prefix="/traffic")
app.include_router(signal.router, prefix="/signals")


@app.get("/")
def root():
    return {"message": "Smart Traffic System Running"}