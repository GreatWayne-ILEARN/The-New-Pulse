import axios from 'axios';

const API_BASE_URL = 'https://api.agcnewsnet.com/api/general';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchCategories = () => api.get('/categories');
export const fetchTopStories = () => api.get('/top-stories');
export const fetchEditorsPicks = (params: { page: number; per_page: number }) => 
  api.get('/editor-picks', { params });
export const fetchFeaturedStories = (params: { page: number; per_page: number }) => 
  api.get('/stories/featured-stories', { params });
export const fetchStoryById = (storyId: string) => 
  api.get(`/stories/${storyId}`);
export const fetchCategoryStories = (
  categoryId: string, 
  params: { page: number; per_page: number }
) => api.get(`/categories/${categoryId}/stories`, { params });