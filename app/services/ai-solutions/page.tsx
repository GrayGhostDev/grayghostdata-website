"use client";

import { Brain, Cpu, Database, LineChart, Network } from "lucide-react";
import { ServiceDetailLayout } from "@/components/service-detail-layout";
import { ServiceFinder } from "@/components/service-finder";
import { SuccessStoriesCarousel } from "@/components/success-stories-carousel";
import { generateServiceStructuredData } from "@/components/seo/structured-data";
import { OptimizedImage } from "@/components/optimized-image";
import Script from "next/script";

export default function AISolutionsPage() {
  const structuredData = generateServiceStructuredData({
    name: "AI Solutions",
    description: "Advanced artificial intelligence solutions to transform your business operations and drive innovation.",
    provider: "Gray Ghost Data",
    areaServed: "Global",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/services/ai-solutions`,
  });

  return (
    <>
      <Script
        id="ai-solutions-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="relative">
        <OptimizedImage
          src="/images/services/ai-solutions-hero.jpg"
          alt="AI Solutions"
          width={1920}
          height={1080}
          className="w-full h-[300px] md:h-[400px] object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40" />
      </div>
      <ServiceDetailLayout
        title="AI Solutions"
        description="Harness the power of artificial intelligence to transform your business. Our AI solutions help organizations automate processes, gain insights, and drive innovation."
        iconName="brain"
        serviceType="ai-and-ml"
        features={[
          "Machine Learning Models",
          "Natural Language Processing",
          "Computer Vision",
          "Predictive Analytics",
          "Deep Learning",
          "AI Model Training",
          "Data Pipeline Automation",
          "AI Integration",
          "Model Optimization",
        ]}
        benefits={[
          "Enhanced efficiency",
          "Data-driven insights",
          "Process automation",
          "Improved accuracy",
          "Scalable solutions",
          "Competitive advantage",
        ]}
        process={[
          {
            title: "Machine Learning",
            description: "Custom ML models for predictive analytics and pattern recognition.",
            iconName: "brain",
          },
          {
            title: "Process Automation",
            description: "AI-powered automation for business processes and workflows.",
            iconName: "cpu",
          },
          {
            title: "Data Analysis",
            description: "Advanced data analysis using AI and machine learning.",
            iconName: "database",
          },
          {
            title: "Predictive Analytics",
            description: "AI-driven predictions for business intelligence.",
            iconName: "line-chart",
          },
          {
            title: "Neural Networks",
            description: "Deep learning solutions for complex problems.",
            iconName: "network",
          },
        ]}
      >
        <ServiceFinder
          title="Explore Our AI Solutions"
          description="Discover how our AI solutions can help your organization leverage cutting-edge technology for business success."
        />
        <SuccessStoriesCarousel category="technology" />
      </ServiceDetailLayout>
    </>
  );
}
