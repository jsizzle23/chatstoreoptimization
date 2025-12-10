import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock } from 'lucide-react';
import { Article } from '@/lib/types';

interface FeaturedArticleProps {
  article: Article;
}

const FeaturedArticle = ({ article }: FeaturedArticleProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative h-64 md:h-auto">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
        
        <CardContent className="p-6 md:p-8 flex flex-col justify-center">
          <Badge className="w-fit mb-4">{article.category}</Badge>
          
          <h3 className="text-2xl md:text-3xl font-bold font-serif mb-4">
            {article.title}
          </h3>
          
          <p className="text-muted-foreground mb-6">
            {article.excerpt}
          </p>
          
          <div className="flex items-center text-sm text-muted-foreground mb-6">
            <span>{article.date}</span>
            <span className="mx-2">•</span>
            <span className="flex items-center">
              <Clock className="mr-1 h-3 w-3" />
              {article.readTime}
            </span>
            <span className="mx-2">•</span>
            <span>By {article.author}</span>
          </div>
          
          <Button asChild className="w-fit">
            <Link href={article.slug}>
              Read article
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </div>
    </Card>
  );
};

export default FeaturedArticle;