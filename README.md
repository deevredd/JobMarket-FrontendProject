# Job Market Intelligence Dashboard

A full-stack data analytics platform showcasing job market trends, salary insights, and in-demand skills.

## Features
- **Interactive Dashboard** — React frontend with Recharts visualizations
- **Real-time Analytics** — Filter by location, experience, job type
- **Skill Intelligence** — Top skills, salary trends, skill combinations
- **Responsive Design** — Mobile-friendly dark theme
- **Local-first API** — FastAPI endpoints that run without external services

## Tech Stack
- **Frontend:** React 18, Recharts, Axios
- **Backend:** FastAPI, SQLAlchemy, SQLite
- **Automation:** GitHub Actions

## Quick Start

**Frontend:**
\`\`\`bash
npm install
npm start
\`\`\`

**Backend:**
\`\`\`bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
\`\`\`

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Health check |
| `/api/skills` | GET | Top skills by demand |
| `/api/metrics` | GET | Market metrics |
| `/api/salary-trends` | GET | Salary evolution |
| `/api/skill-combinations` | GET | Popular skill pairs |
| `/api/trending-skills` | GET | Trending skills |

## Deployment

**Frontend (Vercel):**
- Connect GitHub repo
- Set `REACT_APP_API_URL` to production backend
- Auto-deploys on push

**Backend (Railway/Render):**
- Connect GitHub repo
- Optionally set `DATABASE_URL` for a managed database
- Auto-deploys on push

## License
MIT
