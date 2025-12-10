import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

// Featured articles for Chat Store Optimization
const featuredArticles = [
  {
    id: 1,
    title: 'ASO in 2025: The Complete App Store Optimization Guide',
    excerpt: 'Master app store optimization with proven strategies that drive organic downloads and improve your app\'s visibility.',
    category: 'ASO',
    author: 'Michael Park',
    date: 'Dec 5, 2024',
    readTime: '12 min read',
    image: '/articles/aso-guide-2025.png',
    slug: '/articles/aso-complete-guide-2025'
  },
  {
    id: 2,
    title: 'GEO Strategy: How AI Search is Changing Discovery',
    excerpt: 'Learn how generative engine optimization is reshaping how apps and products are discovered in AI-powered search results.',
    category: 'GEO',
    author: 'Jennifer Walsh',
    date: 'Dec 3, 2024',
    readTime: '9 min read',
    image: '/articles/geo-ai-search.png',
    slug: '/articles/geo-strategy-ai-search-discovery'
  },
  {
    id: 3,
    title: 'Keyword Research for Apps: Finding High-Intent Search Terms',
    excerpt: 'Discover the best tools and techniques for finding keywords that drive qualified users to your app listing.',
    category: 'Keywords',
    author: 'Daniel Roberts',
    date: 'Nov 28, 2024',
    readTime: '8 min read',
    image: '/articles/keyword-research.png',
    slug: '/articles/keyword-research-apps-guide'
  },
  {
    id: 4,
    title: 'A/B Testing App Store Listings: What Actually Moves the Needle',
    excerpt: 'Learn which elements of your app store listing to test first and how to measure the true impact on conversion rates.',
    category: 'Conversion',
    author: 'Lisa Anderson',
    date: 'Nov 25, 2024',
    readTime: '7 min read',
    image: '/articles/ab-testing-apps.png',
    slug: '/articles/ab-testing-app-store-listings'
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