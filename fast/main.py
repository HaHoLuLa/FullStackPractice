from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # 허용할 출처 목록
    allow_credentials=True,
    allow_methods=["*"],  # 허용할 HTTP 메서드 목록
    allow_headers=["*"],  # 허용할 헤더 목록
)

class Model(BaseModel):
  name: str
  phone: int

@app.get("/")
def hello():
  return FileResponse('./index.html')

@app.get("/data")
def data():
  return {"data": "data"}

@app.post("/send")
def input(data: Model):
  print(data)
  return "sucess"