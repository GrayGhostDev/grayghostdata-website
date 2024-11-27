"use client";

import { LineChart, Database, Search, Settings, ArrowUpRight } from "lucide-react";
import { ServiceDetailLayout } from "@/components/service-detail-layout";
import { ServiceFinder } from "@/components/service-finder";
import { SuccessStoriesCarousel } from "@/components/success-stories-carousel";
import { generateServiceStructuredData } from "@/components/seo/structured-data";
import { OptimizedImage } from "@/components/ui/optimized-image";
import Script from "next/script";

export default function BusinessIntelligencePage() {
  const structuredData = generateServiceStructuredData({
    name: "Business Intelligence Solutions",
    description: "Professional business intelligence services including data visualization, KPI monitoring, and automated reporting solutions.",
    provider: "Gray Ghost Data",
    areaServed: "Global",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/services/business-intelligence`,
  });

  const caseStudy = {
    title: "Enterprise BI Platform Modernization",
    client: "Global Manufacturing Corporation",
    description: "Transformed legacy reporting systems into a modern, self-service business intelligence platform driving operational excellence.",
    image: "/images/case-studies/business-intelligence.jpg",
    challenge: "The manufacturer was struggling with siloed data, manual reporting processes, and lack of real-time insights into their global operations. Decision-making was slow and often based on outdated information.",
    solution: "We implemented a modern BI platform that unified data sources, automated reporting, and provided self-service analytics capabilities to business users.",
    results: [
      "90% reduction in report generation time",
      "100% data accuracy achieved",
      "24/7 real-time operational insights",
      "$2.5M annual cost savings"
    ],
    implementation: [
      {
        title: "Data Warehouse Modernization",
        description: "Migrated legacy data warehouse to Azure Synapse Analytics with automated ETL pipelines and data quality checks"
      },
      {
        title: "Self-Service Analytics Platform",
        description: "Deployed Power BI Premium with custom data models and semantic layer for business user empowerment"
      },
      {
        title: "Automated Report Distribution",
        description: "Implemented automated report generation and distribution system with role-based access control"
      },
      {
        title: "Real-time Operational Dashboards",
        description: "Created live operational dashboards with IoT sensor integration and predictive maintenance alerts"
      },
      {
        title: "Advanced Analytics Integration",
        description: "Integrated R and Python analytics models for demand forecasting and inventory optimization"
      }
    ],
    testimonial: {
      quote: "The BI platform has transformed how we make decisions. We now have instant access to insights that drive real operational improvements.",
      author: "David Martinez",
      role: "VP of Operations",
      image: "/images/testimonials/david-martinez.jpg"
    },
    technologies: [
      "Azure Synapse Analytics",
      "Power BI Premium",
      "Azure Data Factory",
      "R",
      "Python",
      "SQL Server",
      "Azure IoT Hub"
    ],
    metrics: [
      {
        label: "Report Generation",
        value: "Instant"
      },
      {
        label: "Data Sources",
        value: "25+"
      },
      {
        label: "User Adoption",
        value: "95%"
      },
      {
        label: "Cost Savings",
        value: "$2.5M"
      }
    ],
    service: "business-intelligence"
  };

  return (
    <>
      <Script
        id="business-intelligence-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="relative">
        <OptimizedImage
          src="/images/services/business-intelligence-hero.jpg"
          alt="Business Intelligence Solutions"
          width={1920}
          height={1080}
          className="w-full h-[300px] md:h-[400px] object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40" />
      </div>
      <ServiceDetailLayout
        title="Business Intelligence"
        description="Transform your data into actionable insights with our comprehensive business intelligence solutions."
        iconName="line-chart"
        serviceType="data-analytics"
        features={[
          "Data Visualization",
          "Custom Dashboards",
          "Real-time Analytics",
          "KPI Tracking",
          "Report Automation",
          "Data Integration",
          "Predictive Analytics",
          "Performance Metrics",
          "Data Warehousing",
        ]}
        benefits={[
          "Better decision making",
          "Improved efficiency",
          "Cost reduction",
          "Revenue growth",
          "Competitive advantage",
          "Operational insights",
        ]}
        process={[
          {
            title: "Data Assessment",
            description: "Evaluating your data sources and requirements.",
            iconName: "database",
          },
          {
            title: "Solution Design",
            description: "Designing custom BI architecture.",
            iconName: "network-wired",
          },
          {
            title: "Implementation",
            description: "Building and integrating BI solutions.",
            iconName: "cog",
          },
          {
            title: "Optimization",
            description: "Continuous improvement and refinement.",
            iconName: "chart-line",
          },
        ]}
      >
        <div>
          <section className="py-20 bg-slate-50">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Find Your Perfect Solution</h2>
                <p className="text-lg text-muted-foreground">
                  Discover how our business intelligence solutions can transform your decision-making process.
                </p>
              </div>
              <ServiceFinder 
                title="Explore Our BI Solutions"
                description="Find the perfect business intelligence solution for your organization."
              />
            </div>
          </section>

          <section className="py-20">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Client Success Stories</h2>
                <p className="text-lg text-muted-foreground">
                  See how our business intelligence solutions have transformed organizations worldwide.
                </p>
              </div>
              <SuccessStoriesCarousel category="analytics" />
            </div>
          </section>
        </div>
      </ServiceDetailLayout>
    </>
  );
}
