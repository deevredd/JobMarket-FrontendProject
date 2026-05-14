import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_health():
    response = client.get("/api/health")
    assert response.status_code == 200
    assert response.json()["status"] == "ok"

def test_get_skills():
    response = client.get("/api/skills")
    assert response.status_code == 200
    assert isinstance(response.json(), list)
    assert len(response.json()) > 0

def test_get_metrics():
    response = client.get("/api/metrics")
    assert response.status_code == 200
    data = response.json()
    assert "total_postings" in data
    assert "unique_skills" in data

def test_get_salary_trends():
    response = client.get("/api/salary-trends")
    assert response.status_code == 200
    assert isinstance(response.json(), dict)

def test_get_skill_combinations():
    response = client.get("/api/skill-combinations")
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_get_trending_skills():
    response = client.get("/api/trending-skills")
    assert response.status_code == 200
    assert isinstance(response.json(), list)