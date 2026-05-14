# Deployment Guide

## Frontend - Vercel

1. Push code to GitHub
2. Go to vercel.com → Import project
3. Configure:
   - Framework: Create React App
   - Build: npm run build
4. Add env variable:
   - REACT_APP_API_URL = your-backend-url
5. Deploy (auto on push)

## Backend - Railway

1. Go to railway.app
2. New Project → Deploy from GitHub
3. Set environment variables if needed:
   - DATABASE_URL = optional managed database URL
4. Deploy

## Database

The app defaults to local SQLite for development, so no database service is required. For production, create a managed database with your host and set `DATABASE_URL` in the backend environment.

## CI/CD - GitHub Actions

Auto runs on push:
- Tests
- Builds
- Deploys

## Monitoring

- Vercel Analytics (frontend)
- Railway Logs (backend)
- Database backups enabled when using a managed production database
- Uptime monitoring

## Security Checklist

- [x] HTTPS everywhere
- [x] CORS configured
- [x] Rate limiting
- [x] Input validation
- [x] Environment secrets
- [x] SSL certificate
