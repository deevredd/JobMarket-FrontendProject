from sqlalchemy import Column, Integer, String, Float, DateTime, Text
from sqlalchemy.sql import func
from database import Base

class JobPosting(Base):
    __tablename__ = "job_postings"
    id = Column(Integer, primary_key=True)
    title = Column(String(255))
    company = Column(String(255))
    location = Column(String(255))
    salary_min = Column(Float, nullable=True)
    salary_max = Column(Float, nullable=True)
    skills = Column(Text)
    source = Column(String(100))
    job_type = Column(String(100))
    experience_level = Column(String(100))
    posted_date = Column(DateTime, server_default=func.now())
    created_at = Column(DateTime, server_default=func.now())

class SkillMetric(Base):
    __tablename__ = "skill_metrics"
    id = Column(Integer, primary_key=True)
    skill_name = Column(String(255), unique=True)
    count = Column(Integer)
    avg_salary = Column(Float)
    trend_percentage = Column(Float)
    updated_at = Column(DateTime, server_default=func.now(), onupdate=func.now())

class SkillCombination(Base):
    __tablename__ = "skill_combinations"
    id = Column(Integer, primary_key=True)
    skill1 = Column(String(255))
    skill2 = Column(String(255))
    frequency = Column(Integer)
    avg_salary = Column(Float)
    updated_at = Column(DateTime, server_default=func.now(), onupdate=func.now())