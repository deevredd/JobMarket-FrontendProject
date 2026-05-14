from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class SkillMetricBase(BaseModel):
    skill_name: str
    count: int
    avg_salary: float
    trend_percentage: float

class SkillMetricCreate(SkillMetricBase):
    pass

class SkillMetric(SkillMetricBase):
    id: int
    updated_at: datetime
    class Config:
        from_attributes = True

class JobPostingBase(BaseModel):
    title: str
    company: str
    location: str
    salary_min: Optional[float]
    salary_max: Optional[float]
    skills: str
    source: str
    job_type: str
    experience_level: str

class JobPostingCreate(JobPostingBase):
    pass

class JobPosting(JobPostingBase):
    id: int
    posted_date: datetime
    created_at: datetime
    class Config:
        from_attributes = True

class SkillCombinationBase(BaseModel):
    skill1: str
    skill2: str
    frequency: int
    avg_salary: float

class SkillCombination(SkillCombinationBase):
    id: int
    updated_at: datetime
    class Config:
        from_attributes = True

class MetricsResponse(BaseModel):
    total_postings: int
    unique_skills: int
    avg_salary: float
    growth_rate: float