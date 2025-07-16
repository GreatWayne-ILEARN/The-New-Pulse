'use client'

import { useTopStories } from '@/lib/hooks/useStories';
import StoryCard from '@/components/stories/StoryCard';
// import StorySkeleton from '@/components/skeletons/StorySkeleton';

const TopStories = () => {
  const { data: topStories, isLoading, isError } = useTopStories();

  if (!Array.isArray(topStories)) {
  console.warn("❌ topStories is not an array:", topStories)
  return <div className="text-center py-12">Invalid data format</div>
}

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* <StorySkeleton className="h-96" /> */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* <StorySkeleton className="h-48" />
          <StorySkeleton className="h-48" /> */}
        </div>
      </div>
    );
  }

  if (isError) {
    return <div className="text-center py-12 text-red-500">Error loading top stories</div>;
  }

  if (!topStories || topStories.length === 0) {
    return <div className="text-center py-12">No top stories found</div>;
  }

  return (
    <section className="p-8 mb-12">
      <h2 className="text-2xl font-bold mb-6 pb-2">TOP STORIES</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          {topStories.slice(0, 1).map((story) => (
            <div key={story.id} className="border rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-96">
                {story.image && (
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{story.title}</h3>
                <p className="text-gray-700 mb-4">{story.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {new Date(story.published_at).toLocaleDateString()}
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {story.category_name?.name || 'General'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="space-y-6">
          {topStories.slice(1, 3).map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopStories;