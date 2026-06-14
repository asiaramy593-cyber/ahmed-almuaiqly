import { siteConfig } from '@/data/site';

const siteUrl = siteConfig.siteUrl.replace(/\/$/, '');

const routes = [
  { path: '', changeFrequency: 'weekly', priority: 1 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/services', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/articles', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/knowledge', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/collaboration', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/media', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/faq', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/request', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/downloads', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/en', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/en/about', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/en/services', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/en/articles', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/en/knowledge', changeFrequency: 'weekly', priority: 0.75 },
  { path: '/en/collaboration', changeFrequency: 'monthly', priority: 0.65 },
  { path: '/en/media', changeFrequency: 'monthly', priority: 0.65 },
  { path: '/en/faq', changeFrequency: 'monthly', priority: 0.65 },
  { path: '/en/contact', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/en/request', changeFrequency: 'monthly', priority: 0.65 },
  { path: '/en/downloads', changeFrequency: 'monthly', priority: 0.65 }
];

export default function sitemap() {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: route.path ? `${siteUrl}${route.path}` : `${siteUrl}/`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }));
}
