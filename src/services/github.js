
// src/services/github.js
import axios from 'axios';

const GITHUB_API_BASE = 'https://api.github.com';
const token = import.meta.env.VITE_GITHUB_TOKEN;

const client = axios.create({
  baseURL: GITHUB_API_BASE,
  headers: token ? { Authorization: `Bearer ${token}` } : {},
});

// Search users by query
export async function searchUsers(query, page = 1, perPage = 10) {
  const params = { q: query, page, per_page: perPage };
  const { data } = await client.get('/search/users', { params });
  return data; // { total_count, incomplete_results, items: [...] }
}

// Get single user details
export async function getUser(username) {
  const { data } = await client.get(`/users/${username}`);
  return data;
}
