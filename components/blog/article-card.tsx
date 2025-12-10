import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { Clock, Heart, Eye } from 'lucide-react';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { type Article } from '@/types/blog';
import { cn } from '@/lib/utils';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
  className?: string;
}

export function ArticleCard({ article, featured = false, className }: ArticleCardProps) {
  return (
    <article className={cn(
      'group relative overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg',
      featured ? 'col-span-2 row-span-2' : '',
      className
    )}>
      <Link href={`/articles/${article.slug}`} className="block">
        <div className={cn(
          'relative overflow-hidden',
          featured ? 'aspect-[2/1]' : 'aspect-[3/2]'
        )}>
          <OptimizedImage
            src={article.featuredImage}
            alt={article.title}
            fill
            className="transition-transform group-hover:scale-105"
            sizes={featured ? '(max-width: 768px) 100vw, 66vw' : undefined}
          />
        </div>
        
        <div className="p-4 sm:p-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{formatDistanceToNow(new Date(article.publishedAt))} ago</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {article.readingTime} min read
            </span>
          </div>
          
          <h3 className={cn(
            'mt-2 font-serif font-bold tracking-tight',
            featured ? 'text-2xl' : 'text-xl'
          )}>
            {article.title}
          </h3>
          
          <p className="mt-2 line-clamp-2 text-muted-foreground">
            {article.excerpt}
          </p>
          
          <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              {article.views}
            </span>
            <span className="flex items-center gap-1">
              <Heart className="h-4 w-4" />
              {article.likes}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
} 