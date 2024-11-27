"use client";

import { GitMerge, Coins, Lock, BarChart3, Network } from "lucide-react";
import { ServiceDetailLayout } from "@/components/service-detail-layout";
import { ServiceFinder } from "@/components/service-finder";
import { SuccessStoriesCarousel } from "@/components/success-stories-carousel";
import { generateServiceStructuredData } from "@/components/seo/structured-data";
import { OptimizedImage } from "@/components/optimized-image";
import Script from "next/script";

export default function RWATokenizationPage() {
  const structuredData = generateServiceStructuredData({
    name: "RWA Tokenization",
    description: "Professional real-world asset tokenization services to help organizations leverage blockchain technology for asset management.",
    provider: "Gray Ghost Data",
    areaServed: "Global",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/services/rwa-tokenization`,
  });

  return (
    <>
      <Script
        id="rwa-tokenization-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="relative">
        <OptimizedImage
          src="/images/services/rwa-tokenization-hero.jpg"
          alt="RWA Tokenization Solutions"
          width={1920}
          height={1080}
          className="w-full h-[300px] md:h-[400px] object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40" />
      </div>
      <ServiceDetailLayout
        title="RWA Tokenization"
        description="Transform your real-world assets into digital tokens. Our tokenization solutions help organizations unlock new value and liquidity from their assets."
        iconName="git-merge"
        serviceType="software-development"
        features={[
          "Asset Digitization",
          "Smart Contract Development",
          "Token Standards Compliance",
          "Security Token Creation",
          "Regulatory Compliance",
          "Asset Management",
          "Token Distribution",
          "Market Integration",
          "Custody Solutions",
        ]}
        benefits={[
          "Enhanced liquidity",
          "Global accessibility",
          "Reduced costs",
          "Automated compliance",
          "Improved transparency",
          "Fractional ownership",
        ]}
        process={[
          {
            title: "Real Estate Tokenization",
            description: "Tokenize real estate assets for fractional ownership and improved liquidity.",
            iconName: "git-merge",
          },
          {
            title: "Asset Management",
            description: "Digital asset management solutions for traditional assets.",
            iconName: "coins",
          },
          {
            title: "Security Tokens",
            description: "Compliant security token creation and management.",
            iconName: "lock",
          },
          {
            title: "Market Integration",
            description: "Integration with digital asset markets and exchanges.",
            iconName: "bar-chart-3",
          },
          {
            title: "Token Distribution",
            description: "Secure and compliant token distribution systems.",
            iconName: "network",
          },
        ]}
      >
        <ServiceFinder
          title="Explore Our RWA Tokenization Solutions"
          description="Learn how our tokenization services can help your organization leverage blockchain technology for asset management."
        />
        <SuccessStoriesCarousel category="blockchain" />
      </ServiceDetailLayout>
    </>
  );
}
