# API Documentation

**Base URL:** http://localhost:8000 (dev) | https://api.yourdomain.com (prod)

## Endpoints

### Health Check
\`\`\`
GET /api/health
\`\`\`
Response: \`{ "status": "ok" }\`

### Get Skills
\`\`\`
GET /api/skills?location=all&experience=all&limit=20
\`\`\`
Query Parameters:
- location: all, us, remote, eu
- experience: all, entry, mid, senior
- limit: 1-100

Response:
\`\`\`json
[
  {
    "name": "React",
    "count": 3240,
    "salary": 98,
    "trend": 8.5
  }
]
\`\`\`

### Get Metrics
\`\`\`
GET /api/metrics
\`\`\`
Response:
\`\`\`json
{
  "total_postings": 12458,
  "unique_skills": 847,
  "avg_salary": 94000,
  "growth_rate": 12.5
}
\`\`\`

### Get Salary Trends
\`\`\`
GET /api/salary-trends
\`\`\`

### Get Skill Combinations
\`\`\`
GET /api/skill-combinations
\`\`\`

### Get Trending Skills
\`\`\`
GET /api/trending-skills
\`\`\`

## Error Responses

400 Bad Request:
\`\`\`json
{ "detail": "Invalid parameters" }
\`\`\`

404 Not Found:
\`\`\`json
{ "detail": "Resource not found" }
\`\`\`

500 Internal Server Error:
\`\`\`json
{ "detail": "Internal server error" }
\`\`\`

## Rate Limiting
- 100 requests/minute per IP
- Returns 429 if exceeded