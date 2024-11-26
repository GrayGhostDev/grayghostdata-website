import { Metadata } from 'next';

interface GenerateMetadataProps {
  title: string;
  description: string;
  path: string;
  openGraph?: {
    images?: string[];
    type?: "website" | "article";
  };
}

export function generateMetadata({
  title,
  description,
  path,
  openGraph,
}: GenerateMetadataProps): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://grayghostdata.com';
  const url = `${siteUrl}${path}`;
  const images = openGraph?.images || ['/images/services/og-placeholder.svg'];

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Gray Ghost Data',
      locale: 'en_US',
      type: openGraph?.type || 'website' as const,
      images: images.map((src) => ({
        url: src.startsWith('http') ? src : `${siteUrl}${src}`,
        width: 1200,
        height: 630,
        alt: title,
      })),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: images,
      creator: '@GrayGhostData',
      site: '@GrayGhostData',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
    keywords: [
      'data analytics',
      'business intelligence',
      'data governance',
      'cloud security',
      'cybersecurity',
      'machine learning',
      'blockchain',
      'data consulting',
      'professional services',
    ],
  };
}
