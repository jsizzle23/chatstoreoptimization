import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://makemoneysavetime.com'
  
  // Add your main routes here
  const routes = [
    '',
    '/about',
    '/articles',
    '/contact',
    '/category/money',
    '/category/time',
    '/category/productivity',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Add dynamic routes here (e.g., articles)
  // You'll need to implement getArticles() to fetch your articles
  // const articles = await getArticles()
  // const articleRoutes = articles.map((article) => ({
  //   url: `${baseUrl}/articles/${article.slug}`,
  //   lastModified: article.updatedAt,
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.6,
  // }))

  return [...routes]
} 