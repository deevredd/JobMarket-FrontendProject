\`\`\`
job-market-dashboard/
├── frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx
│   │   └── Dashboard.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   └── api.js
├── backend/
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   ├── requirements.txt
│   └── tests/
├── .github/
│   └── workflows/
│       └── workflow.yml
├── .gitignore
├── .env.example
├── package.json
└── README.md
\`\`\`

## Directory Descriptions

### Frontend
- public/ — Static HTML file
- src/components/ — Reusable React components
- src/ — Main app code
- package.json — NPM dependencies

### backend/
- main.py — FastAPI server & routes
- models.py — SQLAlchemy database models
- schemas.py — Pydantic validation
- database.py — DB configuration
- tests/ — API tests

### Automation
- .github/workflows/ — CI checks
