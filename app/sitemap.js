import { siteConfig } from '@/data/site';

export default function sitemap() {
  const routes = [
    '', '/about', '/services', '/articles', '/knowledge', '/collaboration', '/media', '/faq', '/contact', '/request', '/downloads',
    '/en', '/en/about', '/en/services', '/en/articles', '/en/knowledge', '/en/collaboration', '/en/media', '/en/faq', '/en/contact', '/en/request', '/en/downloads'
  ];

  return routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8
  }));
}
