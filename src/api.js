import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

export const skillsAPI = {
  getSkills: (limit = 20) => api.get(`/api/skills?limit=${limit}`),
  getSalaryTrends: () => api.get('/api/salary-trends'),
  getSkillCombinations: () => api.get('/api/skill-combinations'),
  getTrendingSkills: () => api.get('/api/trending-skills'),
  getMetrics: () => api.get('/api/metrics'),
};

export const apiCall = async (endpoint, method = 'GET', data = null) => {
  try {
    const config = { method, url: endpoint };
    if (data) config.data = data;
    const response = await api(config);
    return { success: true, data: response.data };
  } catch (error) {
    console.error(`API Error: ${error.message}`);
    return { success: false, error: error.message };
  }
};

export default api;