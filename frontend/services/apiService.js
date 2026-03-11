// services/apiService.js
// Future backend API integration layer
// Currently a placeholder — controllers use mock data

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

/**
 * Generic fetch wrapper
 */
async function apiFetch(endpoint, options = {}) {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

// Future API methods — uncomment when backend is ready

// export const getServices = () => apiFetch('/services');
// export const getProjects = (category) => apiFetch(`/projects${category ? `?category=${category}` : ''}`);
// export const getTestimonials = () => apiFetch('/testimonials');
// export const submitContactForm = (data) => apiFetch('/contact', { method: 'POST', body: JSON.stringify(data) });

export default apiFetch;
