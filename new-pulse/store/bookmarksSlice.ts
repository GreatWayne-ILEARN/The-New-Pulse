import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookmarksState {
  storyIds: string[];
}

const loadBookmarks = (): string[] => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('bookmarks');
    return saved ? JSON.parse(saved) : [];
  }
  return [];
};

const initialState: BookmarksState = {
  storyIds: loadBookmarks(),
};

export const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    toggleBookmark: (state, action: PayloadAction<string>) => {
      const index = state.storyIds.indexOf(action.payload);
      if (index >= 0) {
        state.storyIds.splice(index, 1);
      } else {
        state.storyIds.push(action.payload);
      }
      if (typeof window !== 'undefined') {
        localStorage.setItem('bookmarks', JSON.stringify(state.storyIds));
      }
    },
  },
});

export const { toggleBookmark } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;