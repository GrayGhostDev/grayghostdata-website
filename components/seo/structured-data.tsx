import { BlogPosting, WithContext } from 'schema-dts';

interface BlogPostStructuredDataProps {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  authorUrl?: string;
  publisherName: string;
  publisherLogo: string;
  url: string;
}

export function generateBlogPostStructuredData({
  title,
  description,
  image,
  datePublished,
  dateModified,
  authorName,
  authorUrl,
  publisherName,
  publisherLogo,
  url,
}: BlogPostStructuredDataProps): WithContext<BlogPosting> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    image: image,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: authorName,
      url: authorUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: publisherName,
      logo: {
        '@type': 'ImageObject',
        url: publisherLogo,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}

interface OrganizationStructuredDataProps {
  name: string;
  logo: string;
  url: string;
  sameAs?: string[];
}

export function generateOrganizationStructuredData({
  name,
  logo,
  url,
  sameAs,
}: OrganizationStructuredDataProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: name,
    logo: logo,
    url: url,
    sameAs: sameAs,
  };
}

interface ServiceStructuredDataProps {
  name: string;
  description: string;
  provider: string;
  areaServed?: string;
  url: string;
}

export function generateServiceStructuredData({
  name,
  description,
  provider,
  areaServed,
  url,
}: ServiceStructuredDataProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: name,
    description: description,
    provider: {
      '@type': 'Organization',
      name: provider,
    },
    areaServed: areaServed,
    url: url,
  };
}
