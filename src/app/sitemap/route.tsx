// app/sitemap/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const pages = [
    { url: '/', lastModified: '2024-01-01' },
    { url: '/about', lastModified: '2024-01-05' },
    { url: '/contact', lastModified: '2024-01-10' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages.map(page => `
      <url>
        <loc>${process.env.NEXT_PUBLIC_SITE_URL}${page.url}</loc>
        <lastmod>${page.lastModified}</lastmod>
      </url>
    `).join('')}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
