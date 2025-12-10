import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';
import { Article } from '@/lib/types';

interface RelatedArticlesProps {
  articles: Array<Omit<Article, 'content'>>;
}

const RelatedArticles = ({ articles }: RelatedArticlesProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {articles.map((article) => (
        <Link 
          key={article.id} 
          href={article.slug}
          className="group"
        >
          <Card className="h-full overflow-hidden transition-all hover:shadow-md">
            <div className="relative h-48 overflow-hidden">
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
              <h3 className="text-xl font-bold font-serif mb-3 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-3">
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

export default RelatedArticles;