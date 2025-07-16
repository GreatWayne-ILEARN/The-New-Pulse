import Image from 'next/image';
import Link from 'next/link';
import { Story } from '@/types/story.d';
// import BookmarkButton from '../ui/BookmarkButton';
// import { useBookmarks } from '@/hooks/useBookmarks';

const StoryCard = ({ story }: { story: Story }) => {
//   const { isBookmarked, toggleBookmarkStatus } = useBookmarks();

  return (
    <div className="story-card border rounded-lg overflow-hidden bg-white shadow-md">
      <div className="relative h-48">
        {story.banner_image && (
          <Image 
            src={story.banner_image} 
            alt={story.title} 
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        {/* <BookmarkButton 
          isBookmarked={isBookmarked(story.id)} 
          onClick={() => toggleBookmarkStatus(story.id)}
          className="absolute top-2 right-2 z-10 bg-white/80 hover:bg-white"
        /> */}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
            {story.category?.name || 'General'}
          </span>
          <span className="text-gray-500 text-xs">
            {new Date(story.published_at).toLocaleDateString()}
          </span>
        </div>
        
        <Link href={`/stories/${story.id}`}>
          <h3 className="text-lg font-bold mb-2 hover:text-blue-600 transition-colors line-clamp-2">
            {story.title}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm line-clamp-3 mb-3">{story.excerpt}</p>
        
        <div className="flex items-center text-xs text-gray-500">
          <span>By {story.author || 'Staff Writer'}</span>
          <span className="mx-2">•</span>
          <span>{story.read_time || '3 min'} read</span>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;