import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Clock } from 'lucide-react';

// Sample data (would come from CMS/API in a real app)
const latestArticles = [
  {
    id: 1,
    title: 'The Psychology Behind Successful Habit Formation',
    excerpt: 'Why some habits stick while others fail, and how to design routines that last.',
    category: 'Health',
    author: 'Sarah Chen',
    date: 'Jun 15, 2023',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/3755761/pexels-photo-3755761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: '/articles/psychology-habit-formation'
  },
  {
    id: 2,
    title: 'Remote Work Revolution: Five Years Later',
    excerpt: 'Examining how remote work has transformed companies and employee expectations since 2020.',
    category: 'Business',
    author: 'David Wilson',
    date: 'Jun 10, 2023',
    readTime: '9 min read',
    image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: '/articles/remote-work-five-years-later'
  },
  {
    id: 3,
    title: 'The New Era of Space Exploration',
    excerpt: 'Private companies are changing our relationship with space. What does this mean for humanity?',
    category: 'Science',
    author: 'Michael Brown',
    date: 'Jun 8, 2023',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/41162/moon-landing-apollo-11-nasa-buzz-aldrin-41162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: '/articles/new-era-space-exploration'
  },
  {
    id: 4,
    title: 'Digital Minimalism: Finding Focus in a Distracted World',
    excerpt: 'Strategies for reclaiming your attention in an age of endless notifications and content.',
    category: 'Technology',
    author: 'Emma Davis',
    date: 'Jun 5, 2023',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: '/articles/digital-minimalism-finding-focus'
  }
];

const LatestArticles = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {latestArticles.map((article) => (
        <Link 
          key={article.id} 
          href={article.slug}
          className="group"
        >
          <Card className="flex flex-col md:flex-row h-full overflow-hidden transition-all hover:shadow-md">
            <div className="relative h-48 md:h-auto md:w-1/3 flex-shrink-0">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <CardContent className="p-6 md:w-2/3">
              <div className="mb-3">
                <Badge variant="outline" className="bg-muted">
                  {article.category}
                </Badge>
              </div>
              <h3 className="text-xl font-bold font-serif mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {article.title}
              </h3>
              <p className="text-muted-foreground mb-4 line-clamp-2">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between mt-auto text-sm">
                <span className="font-medium">By {article.author}</span>
                <div className="flex items-center text-muted-foreground">
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center">
                    <Clock className="mr-1 h-3 w-3" />
                    {article.readTime}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default LatestArticles;