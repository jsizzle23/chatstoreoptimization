import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://chatstoreoptimization.com'

  // Add your main routes here
  const routes = [
    '',
    '/about',
    '/articles',
    '/contact',
    '/how-we-optimize',
    '/privacy',
    '/category/aso',
    '/category/seo',
    '/category/geo',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return [...routes]
} 