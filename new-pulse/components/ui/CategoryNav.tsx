import { useQuery } from '@tanstack/react-query';
import { fetchCategories } from '@/lib/api';
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from 'react';

const CategoryNav = ({ onSelectCategory }: { 
  onSelectCategory: (categoryId: string) => void 
}) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { data, isLoading, error } = useQuery({
    queryKey: ['categories'],
    queryFn: () => fetchCategories().then(res => res.data),
  });

  const handleSelect = (categoryId: string) => {
    setSelectedId(categoryId);
    onSelectCategory(categoryId);
  };

  if (isLoading) return <div className="flex space-x-4">Loading categories...</div>;
  if (error) return <div>Error loading categories</div>;

  return (
    <div className="flex overflow-x-auto py-4 space-x-4 hide-scrollbar">
      {data?.map((category: { id: Key | null | undefined; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
        <button
          key={category.id}
          onClick={() => handleSelect(category.id ? category.id.toString() : '')}
          className={`px-4 py-2 rounded-full whitespace-nowrap ${
            selectedId === category.id
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryNav;