import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://grayghostdata.com';

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/services',
    '/blog',
    '/contact',
    '/resources',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Service pages
  const servicePages = [
    'cybersecurity',
    'data-analytics',
    'cloud-solutions',
    'compliance',
  ].map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Blog posts - In a real app, you would fetch these from your CMS or database
  const blogPosts = [
    {
      slug: 'future-of-quantum-safe-cryptography',
      lastModified: '2024-03-15',
    },
    {
      slug: 'ai-powered-threat-detection',
      lastModified: '2024-03-10',
    },
    {
      slug: 'blockchain-in-asset-tokenization',
      lastModified: '2024-03-05',
    },
  ].map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.lastModified),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...blogPosts];
}
