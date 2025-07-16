import { AppDispatch } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBookmark } from '@/store/bookmarksSlice';

export const useBookmarks = () => {
  const dispatch = useDispatch<AppDispatch>();
  const bookmarkedIds = useSelector((state: any) => state.bookmarks.storyIds);
  
  const isBookmarked = (storyId: string) => bookmarkedIds.includes(storyId);
  
  const toggleBookmarkStatus = (storyId: string) => {
    dispatch(toggleBookmark(storyId));
  };

  return { bookmarkedIds, isBookmarked, toggleBookmarkStatus };
};