import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://myphamchinhhang.vercel.app/',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8
    }
  ];
}
