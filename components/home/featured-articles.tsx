import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

// Sample data (would come from CMS/API in a real app)
const featuredArticles = [
  {
    id: 1,
    title: 'How to Earn Passive Income Through Computational Resources',
    excerpt: 'Learn how to generate steady income by leveraging your computing power and contributing to distributed networks.',
    category: 'Money',
    author: 'Alex Chen',
    date: 'Apr 20, 2024',
    readTime: '8 min read',
    image: '/articles/computational-resources-hero.svg',
    slug: '/category/money/passive-income-computational-resources'
  },
  {
    id: 2,
    title: 'The Future of Artificial Intelligence in Everyday Life',
    excerpt: 'How AI is transforming our daily interactions and what this means for human creativity and work.',
    category: 'Technology',
    author: 'Alex Johnson',
    date: 'Jun 12, 2023',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: '/articles/future-of-ai-everyday-life'
  },
  {
    id: 3,
    title: 'Sustainable Design: Creating Products That Last',
    excerpt: 'Exploring the principles behind sustainable product design and the companies leading the change.',
    category: 'Design',
    author: 'Maya Rodriguez',
    date: 'May 28, 2023',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: '/articles/sustainable-design-products-that-last'
  },
  {
    id: 4,
    title: 'The Revival of Local Community Spaces',
    excerpt: 'How urban planning is shifting to prioritize community gathering spaces in the digital age.',
    category: 'Culture',
    author: 'Thomas Wright',
    date: 'Jun 5, 2023',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: '/articles/revival-local-community-spaces'
  }
];

const FeaturedArticles = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredArticles.map((article, index) => (
        <Link 
          key={article.id} 
          href={article.slug}
          className="group"
        >
          <Card className={cn(
            "h-full overflow-hidden transition-all hover:shadow-md",
            index === 0 && "md:col-span-2 md:row-span-2"
          )}>
            <div className="relative h-48 md:h-64 overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 z-10">
                <Badge variant="secondary" className="bg-primary/90 text-primary-foreground hover:bg-primary/90">
                  {article.category}
                </Badge>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <span>{article.date}</span>
                <span className="mx-2">•</span>
                <span className="flex items-center">
                  <Clock className="mr-1 h-3 w-3" />
                  {article.readTime}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-serif mb-3 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {article.excerpt}
              </p>
              <div className="text-sm font-medium">
                By {article.author}
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default FeaturedArticles;