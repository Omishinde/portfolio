import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Contact Form API
export const submitContactForm = async (data) => {
  try {
    const response = await api.post('/contact', data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Error sending message' };
  }
};

// Get portfolio data
export const getPortfolioData = async () => {
  try {
    const response = await api.get('/portfolio');
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Error fetching data' };
  }
};

export default api;
