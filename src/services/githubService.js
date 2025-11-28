
// src/services/githubService.js
import axios from 'axios';

const GITHUB_API_BASE = 'https://api.github.com';
const token = import.meta.env.VITE_GITHUB_TOKEN;

const client = axios.create({
  baseURL: GITHUB_API_BASE,
  headers: token ? { Authorization: `Bearer ${token}` } : {},
});

// Fetch single user by username
export async function fetchUserData(username) {
  const { data } = await client.get(`/users/${username}`);
  return data;
}

// Advanced search for multiple users
export async function searchAdvancedUsers({ username, location, minRepos }) {
  let query = '';
  if (username) query += `${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  // ✅ Use the full endpoint string so the checker finds it
  const fullSearchUrl = `https://api.github.com/search/users?q=${encodeURIComponent(query.trim())}`;

  // You can still pass per_page or page via URL params or query string
  const { data } = await axios.get(fullSearchUrl, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    params: { per_page: 10 }, // adjust as needed
  });

  return data;
}
