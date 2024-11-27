import { NextResponse } from 'next/server';
 
export async function GET() {
  return new NextResponse(`# *
User-agent: *
Allow: /

# Host
Host: https://grayghostdata.com

# Sitemaps
Sitemap: https://grayghostdata.com/sitemap.xml`, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
