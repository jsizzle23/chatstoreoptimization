import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Technology',
    description: 'Exploring the latest innovations and digital transformation',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    count: 42,
    slug: '/category/technology'
  },
  {
    id: 2,
    name: 'Culture',
    description: 'Insights on society, arts, and human experiences',
    image: 'https://images.pexels.com/photos/3965557/pexels-photo-3965557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    count: 36,
    slug: '/category/culture'
  },
  {
    id: 3,
    name: 'Business',
    description: 'Strategies, leadership, and the future of work',
    image: 'https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    count: 28,
    slug: '/category/business'
  },
  {
    id: 4,
    name: 'Science',
    description: 'Discoveries and advances reshaping our understanding',
    image: 'https://images.pexels.com/photos/3735709/pexels-photo-3735709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    count: 24,
    slug: '/category/science'
  }
];

const CategoryHighlights = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <Link 
          key={category.id} 
          href={category.slug}
          className="group"
        >
          <Card className="h-full overflow-hidden transition-all hover:shadow-md border-transparent hover:border-border">
            <div className="relative h-40 overflow-hidden">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
                <p className="text-white/80 text-sm">{category.count} articles</p>
              </div>
            </div>
            <CardContent className="p-4">
              <p className="text-muted-foreground text-sm mb-3">
                {category.description}
              </p>
              <div className="flex items-center text-sm text-primary font-medium group-hover:underline">
                Explore
                <ArrowRight className="ml-1 h-3 w-3" />
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default CategoryHighlights;