import Script from 'next/script';

interface StructuredDataProps {
  type: string;
  data: Record<string, any>;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  return (
    <Script
      id={`structured-data-${type.toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          ...data,
        }),
      }}
    />
  );
}
