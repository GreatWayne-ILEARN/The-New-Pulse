import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { 
  fetchTopStories, 
  fetchEditorsPicks, 
  fetchFeaturedStories, 
  fetchCategoryStories,
  fetchStoryById 
} from '../api';
import { Story } from '@/types/story.d';

export const useTopStories = () => {
  return useQuery({
    queryKey: ['topStories'],
    queryFn: async () => {
      const res = await fetchTopStories();
      console.log("✅ API raw response:", res);        // <- full Axios response
      console.log("✅ API data:", res.data?.data);            // <- first level .data
      console.log("✅ API data.data.data:", res.data?.data); // <- second level .data
      return res.data.data.data; // Assuming this is the array
    },
  });
};

export const useEditorsPicks = () => {
  return useInfiniteQuery({
    queryKey: ['editorsPicks'],
    queryFn: ({ pageParam = 1 }) => 
      fetchEditorsPicks({ page: pageParam, per_page: 15 }).then(res => res.data),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
  });
};

export const useCategoryStories = (categoryId: string) => {
  return useInfiniteQuery({
    queryKey: ['categoryStories', categoryId],
    queryFn: ({ pageParam = 1 }) => 
      fetchCategoryStories(categoryId, { page: pageParam, per_page: 15 }).then(res => res.data),
    enabled: !!categoryId,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
  });
};

export const useStory = (storyId: string) => {
  return useQuery({
    queryKey: ['story', storyId],
    queryFn: () => fetchStoryById(storyId).then(res => res.data),
    enabled: !!storyId,
  });
};
