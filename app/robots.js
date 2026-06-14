import { siteConfig } from '@/data/site';

const siteUrl = siteConfig.siteUrl.replace(/\/$/, '');

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl
  };
}
