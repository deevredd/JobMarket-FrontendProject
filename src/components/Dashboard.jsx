import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Dashboard.css';

const mockSkills = [
  { name: 'React', count: 3240, salary: 98 },
  { name: 'Python', count: 2891, salary: 102 },
  { name: 'JavaScript', count: 2654, salary: 95 },
  { name: 'AWS', count: 2340, salary: 105 },
  { name: 'TypeScript', count: 2108, salary: 101 },
];

const trendData = [
  { day: 'Day 1', 'AI/ML': 45, 'Kubernetes': 30, 'GraphQL': 25, 'FastAPI': 35 },
  { day: 'Day 5', 'AI/ML': 52, 'Kubernetes': 38, 'GraphQL': 28, 'FastAPI': 42 },
  { day: 'Day 10', 'AI/ML': 68, 'Kubernetes': 45, 'GraphQL': 35, 'FastAPI': 55 },
  { day: 'Day 15', 'AI/ML': 82, 'Kubernetes': 58, 'GraphQL': 42, 'FastAPI': 68 },
  { day: 'Day 20', 'AI/ML': 95, 'Kubernetes': 72, 'GraphQL': 50, 'FastAPI': 82 },
  { day: 'Day 30', 'AI/ML': 120, 'Kubernetes': 88, 'GraphQL': 62, 'FastAPI': 105 },
];

const skillCombinations = [
  { pair: 'React + Node', frequency: 1240, salary: 102, demand: 88 },
  { pair: 'Python + AWS', frequency: 1120, salary: 108, demand: 82 },
  { pair: 'TypeScript + Next.js', frequency: 892, salary: 105, demand: 71 },
  { pair: 'Docker + Kubernetes', frequency: 756, salary: 110, demand: 64 },
  { pair: 'Vue + Django', frequency: 654, salary: 99, demand: 57 },
];

const combinationColors = ['#4A9EFF', '#4ADE80', '#FFB84D', '#A78BFA', '#FF6B6B'];

function SkillCombinationTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;

  const data = payload[0].payload;

  return (
    <div className="chart-tooltip">
      <div className="tooltip-title">{data.pair}</div>
      <div>Frequency: {data.frequency.toLocaleString()}</div>
      <div>Salary: ${data.salary}K</div>
    </div>
  );
}

function CombinationBubble(props) {
  const { cx, cy, payload } = props;
  const radius = Math.max(15, Math.min(34, payload.frequency / 38));

  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={radius}
        fill={payload.color}
        fillOpacity={0.26}
        stroke={payload.color}
        strokeWidth={2}
      />
      <text x={cx} y={cy - 3} textAnchor="middle" fill="#f3f3f3" fontSize={11} fontWeight={700}>
        {payload.frequency}
      </text>
      <text x={cx} y={cy + 12} textAnchor="middle" fill="#a0a0a0" fontSize={9}>
        ${payload.salary}K
      </text>
    </g>
  );
}

const combinationChartData = skillCombinations.map((item, index) => ({
  ...item,
  index: index + 1,
  color: combinationColors[index % combinationColors.length],
}));

export default function Dashboard() {
  const [filters, setFilters] = useState({
    location: 'all',
    experience: 'all',
    jobType: 'all',
    dateRange: '2026-05-01'
  });

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="dashboard">
      <div className="header">
        <h1><span className="brand-mark" aria-hidden="true" />Job Market Intelligence</h1>
        <div className="filters">
          <div className="filter-group">
            <label>Location</label>
            <select value={filters.location} onChange={(e) => handleFilterChange('location', e.target.value)}>
              <option value="all">All</option>
              <option value="us">US</option>
              <option value="remote">Remote</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Experience</label>
            <select value={filters.experience} onChange={(e) => handleFilterChange('experience', e.target.value)}>
              <option value="all">All</option>
              <option value="entry">Entry Level</option>
              <option value="mid">Mid Level</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Job Type</label>
            <select value={filters.jobType} onChange={(e) => handleFilterChange('jobType', e.target.value)}>
              <option value="all">All</option>
              <option value="fulltime">Full-time</option>
              <option value="contract">Contract</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Date Range</label>
            <input type="date" value={filters.dateRange} onChange={(e) => handleFilterChange('dateRange', e.target.value)} />
          </div>
        </div>
      </div>

      <div className="metrics">
        <div className="metric-card">
          <div className="metric-label">Total Postings</div>
          <div className="metric-value">12,458</div>
        </div>
        <div className="metric-card">
          <div className="metric-label">Unique Skills</div>
          <div className="metric-value">847</div>
        </div>
        <div className="metric-card">
          <div className="metric-label">Avg Salary</div>
          <div className="metric-value">$94K</div>
        </div>
        <div className="metric-card">
          <div className="metric-label">Skills Growth</div>
          <div className="metric-value" style={{ color: '#4ADE80' }}>+12%</div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <h3>Top 10 Most Wanted Skills</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {mockSkills.map((skill, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', color: '#e0e0e0' }}>{skill.name}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '120px', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}>
                    <div style={{ width: `${(skill.count / 3240) * 100}%`, height: '100%', background: '#4A9EFF', borderRadius: '2px' }}></div>
                  </div>
                  <span style={{ fontSize: '13px', color: '#FFB84D', minWidth: '50px', textAlign: 'right' }}>{skill.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="chart-card">
          <h3>Salary by Top Skills</h3>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={mockSkills} margin={{ top: 10, right: 20, bottom: 10, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,180,77,0.1)" />
              <XAxis dataKey="name" tick={{ fill: '#a0a0a0', fontSize: 12 }} />
              <YAxis tick={{ fill: '#a0a0a0', fontSize: 12 }} />
              <Tooltip contentStyle={{ background: 'rgba(22,22,27,0.9)', border: '1px solid rgba(255,180,77,0.2)' }} formatter={(v) => `$${v}K`} />
              <Bar dataKey="salary" fill="#FFB84D" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Skill Combinations</h3>
          <ResponsiveContainer width="100%" height={240}>
            <ScatterChart margin={{ top: 12, right: 20, bottom: 36, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,180,77,0.1)" />
              <XAxis
                dataKey="index"
                type="number"
                domain={[0.5, skillCombinations.length + 0.5]}
                tick={false}
                axisLine={{ stroke: 'rgba(255,255,255,0.22)' }}
              />
              <YAxis
                dataKey="demand"
                type="number"
                domain={[45, 95]}
                tick={{ fill: '#a0a0a0', fontSize: 12 }}
                tickFormatter={(v) => `${v}%`}
                axisLine={{ stroke: 'rgba(255,255,255,0.22)' }}
              />
              <ZAxis dataKey="frequency" range={[220, 1800]} />
              <Tooltip cursor={{ stroke: 'rgba(255,180,77,0.25)', strokeDasharray: '3 3' }} content={<SkillCombinationTooltip />} />
              <Scatter data={combinationChartData} shape={<CombinationBubble />} />
            </ScatterChart>
          </ResponsiveContainer>
          <div className="combination-list">
            {combinationChartData.slice(0, 3).map((item) => (
              <span key={item.pair}>
                <span style={{ background: item.color }} />
                {item.pair}
              </span>
            ))}
          </div>
        </div>

        <div className="chart-card">
          <h3>Skills Trending (Last 30 Days)</h3>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={trendData} margin={{ top: 10, right: 20, bottom: 10, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,180,77,0.1)" />
              <XAxis dataKey="day" tick={{ fill: '#a0a0a0', fontSize: 12 }} />
              <YAxis tick={{ fill: '#a0a0a0', fontSize: 12 }} />
              <Tooltip contentStyle={{ background: 'rgba(22,22,27,0.9)', border: '1px solid rgba(255,180,77,0.2)' }} />
              <Legend wrapperStyle={{ paddingTop: '1rem' }} />
              <Line type="monotone" dataKey="AI/ML" stroke="#FF6B6B" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="Kubernetes" stroke="#4ADE80" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="GraphQL" stroke="#FFB84D" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="FastAPI" stroke="#A78BFA" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

