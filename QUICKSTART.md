# QUICK START GUIDE

## Local Development

### Frontend
\`\`\`bash
npm install
npm start
\`\`\`

### Backend (separate terminal)
\`\`\`bash
cd backend
pip install -r requirements.txt
python -m uvicorn main:app --reload
\`\`\`

## Test API
\`\`\`bash
curl http://localhost:8000/api/health
curl http://localhost:8000/api/skills
curl http://localhost:8000/api/metrics
\`\`\`

## Common Issues

**Port 3000 in use:**
\`\`\`bash
npm start -- --port 3001
\`\`\`

**Port 8000 in use:**
\`\`\`bash
uvicorn main:app --port 8001
\`\`\`

**DB Connection error:**
- Delete `backend/job_market.db` and restart the backend if local data gets corrupted.
- If you set `DATABASE_URL`, make sure it points to a reachable database.

## Next Steps
1. Connect live data scraper
2. Add authentication (JWT)
3. Deploy to Vercel & Railway
4. Add unit tests
5. Set up monitoring
