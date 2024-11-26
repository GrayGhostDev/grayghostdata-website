import { Metadata } from 'next';

interface MetaTagsProps {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export function generateMetadata({
  title,
  description,
  image,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  section,
  tags,
}: MetaTagsProps): Metadata {
  const siteName = 'Gray Ghost Data';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://grayghostdata.com';
  const defaultImage = `${siteUrl}/images/og-image.jpg`;

  return {
    title: `${title} | ${siteName}`,
    description,
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: siteUrl,
      siteName,
      images: [
        {
          url: image || defaultImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type,
      ...(type === 'article' && {
        article: {
          publishedTime,
          modifiedTime,
          authors: author ? [author] : undefined,
          section,
          tags,
        },
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteName}`,
      description,
      images: [image || defaultImage],
      creator: '@grayghostdata',
    },
    alternates: {
      canonical: siteUrl,
    },
  };
}
