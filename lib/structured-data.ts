interface ServiceStructuredData {
  name: string;
  description: string;
  provider: string;
  areaServed: string;
  url: string;
}

export function generateServiceStructuredData({
  name,
  description,
  provider,
  areaServed,
  url,
}: ServiceStructuredData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": provider
    },
    "areaServed": areaServed,
    "url": url
  };
}
