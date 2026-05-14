from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Job Market Intelligence API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/health")
async def health():
    return {"status": "ok"}

@app.get("/api/skills")
async def get_skills(
    location: str = Query("all"),
    experience: str = Query("all"),
    limit: int = Query(20)
):
    mock_skills = [
        {"name": "React", "count": 3240, "salary": 98, "trend": 8.5},
        {"name": "Python", "count": 2891, "salary": 102, "trend": 7.2},
        {"name": "JavaScript", "count": 2654, "salary": 95, "trend": 5.1},
        {"name": "AWS", "count": 2340, "salary": 105, "trend": 9.3},
        {"name": "TypeScript", "count": 2108, "salary": 101, "trend": 12.4},
        {"name": "Node.js", "count": 1987, "salary": 99, "trend": 6.8},
        {"name": "Docker", "count": 1845, "salary": 103, "trend": 11.2},
        {"name": "PostgreSQL", "count": 1654, "salary": 98, "trend": 4.5},
        {"name": "Kubernetes", "count": 1432, "salary": 108, "trend": 14.7},
        {"name": "FastAPI", "count": 987, "salary": 104, "trend": 18.9},
    ]
    return mock_skills[:limit]

@app.get("/api/salary-trends")
async def get_salary_trends():
    trends = {
        "React": [85, 90, 94, 98, 99, 98],
        "Python": [92, 95, 99, 102, 104, 102],
        "AWS": [98, 101, 103, 105, 107, 105],
        "TypeScript": [90, 93, 97, 101, 103, 101],
    }
    return trends

@app.get("/api/skill-combinations")
async def get_skill_combinations():
    combinations = [
        {"pair": "React + Node.js", "frequency": 1240, "salary": 102},
        {"pair": "Python + AWS", "frequency": 1120, "salary": 108},
        {"pair": "Vue + Django", "frequency": 654, "salary": 99},
        {"pair": "TypeScript + Next.js", "frequency": 892, "salary": 105},
        {"pair": "Docker + Kubernetes", "frequency": 756, "salary": 110},
    ]
    return combinations

@app.get("/api/metrics")
async def get_metrics():
    return {
        "total_postings": 12458,
        "unique_skills": 847,
        "avg_salary": 94000,
        "growth_rate": 12.5
    }

@app.get("/api/trending-skills")
async def get_trending_skills():
    trending = [
        {"skill": "AI/ML", "growth": 45},
        {"skill": "Kubernetes", "growth": 30},
        {"skill": "GraphQL", "growth": 25},
        {"skill": "FastAPI", "growth": 35},
    ]
    return trending

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
