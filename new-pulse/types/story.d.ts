// Define the Category type
export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  created_at?: string;
  updated_at?: string;
}

// Define the Story type
export interface Story {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  banner_image: string | null;
  featured_image?: string | null;
  author: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  category: Category;
  tags?: string[];
  read_time?: number;
  views?: number;
  is_featured?: boolean;
  is_editor_pick?: boolean;
  is_top_story?: boolean;
}

// Define the API response structure for paginated lists
export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    per_page: number;
    to: number;
    total: number;
  };
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
}

// Define the API response structure for single entities
export interface SingleResponse<T> {
  data: T;
}

// Define the structure for API error responses
export interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
}

// Define the structure for Redux state
export interface BookmarksState {
  storyIds: string[];
}

// Define the structure for Redux actions
export interface ToggleBookmarkAction {
  type: 'TOGGLE_BOOKMARK';
  payload: string;
}  