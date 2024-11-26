"use client";

import {
  BarChart,
  Database,
  LineChart,
  PieChart,
  Workflow,
  Microscope,
  Layers,
  Lightbulb,
  ArrowRight,
  Brain,
  Presentation,
  Search,
  Settings,
  ArrowUpRight,
  TrendingUp
} from "lucide-react";
import Script from "next/script";
import { ServiceDetailLayout } from "@/components/service-detail-layout";
import { PricingTable } from "@/components/pricing-table";
import { OptimizedImage } from "@/components/optimized-image";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { ServiceFinder } from "@/components/service-finder";
import { SuccessStoriesCarousel } from "@/components/success-stories-carousel";
import { generateServiceStructuredData } from "@/lib/structured-data";

const dataAnalyticsPricing = [
  {
    name: "Basic Analytics",
    price: 999,
    description: "Essential data analytics for small businesses",
    features: [
      "Data collection & cleaning",
      "Basic visualizations",
      "Monthly reports",
      "Email support"
    ]
  },
  {
    name: "Professional",
    price: 2499,
    description: "Advanced analytics for growing businesses",
    features: [
      "Everything in Basic",
      "Custom dashboards",
      "Predictive analytics",
      "API integration",
      "Priority support"
    ]
  },
  {
    name: "Enterprise",
    price: null,
    description: "Full-scale analytics for large organizations",
    features: [
      "Everything in Professional",
      "Custom solutions",
      "On-premise deployment",
      "24/7 support",
      "Dedicated team"
    ]
  }
];

const caseStudy = {
  title: "Enterprise Data Analytics Transformation",
  client: "Fortune 500 Financial Services Company",
  description: "Transformed legacy data systems into a modern, real-time analytics platform that drives business decisions and customer insights.",
  image: "/images/case-studies/data-analytics-transformation.jpg",
  challenge: "The client was struggling with fragmented data sources, slow reporting cycles, and inability to derive real-time insights from their vast customer data. Their legacy systems were unable to handle the volume and velocity of modern data requirements.",
  solution: "We implemented a comprehensive data analytics solution that unified their data sources, established real-time processing capabilities, and created intuitive dashboards for business intelligence.",
  results: [
    "Reduced reporting time from days to minutes",
    "Achieved 99.9% data accuracy",
    "Increased customer insights by 300%",
    "Enabled real-time decision making"
  ],
  implementation: [
    {
      title: "Data Source Integration",
      description: "Unified 12 disparate data sources into a centralized data lake using Azure Data Factory and Databricks",
      icon: Database
    },
    {
      title: "Real-time Processing Pipeline",
      description: "Implemented Apache Kafka and Stream Analytics for real-time data processing and event streaming",
      icon: Workflow
    },
    {
      title: "Analytics Dashboard Development",
      description: "Created interactive Power BI dashboards with drill-down capabilities and custom visualizations",
      icon: BarChart
    },
    {
      title: "Machine Learning Models",
      description: "Deployed predictive models for customer behavior analysis and risk assessment",
      icon: Brain
    },
    {
      title: "Data Governance Framework",
      description: "Established data quality checks, security protocols, and compliance monitoring",
      icon: Settings
    }
  ],
  testimonial: {
    quote: "Gray Ghost Data transformed our analytics capabilities beyond our expectations. We now have instant access to insights that drive real business value.",
    author: "Sarah Johnson",
    role: "Chief Data Officer",
    image: "/images/testimonials/sarah-johnson.jpg"
  },
  technologies: [
    "Azure Data Factory",
    "Apache Kafka",
    "Databricks",
    "Power BI",
    "Python",
    "TensorFlow",
    "Azure Stream Analytics"
  ],
  metrics: [
    {
      label: "Data Processing Time",
      value: "Real-time"
    },
    {
      label: "Data Sources Integrated",
      value: "12+"
    },
    {
      label: "Accuracy Rate",
      value: "99.9%"
    },
    {
      label: "ROI Increase",
      value: "245%"
    }
  ],
  service: "data-analytics"
};

const testimonials = [
  {
    quote: "Gray Ghost Data transformed our analytics capabilities beyond our expectations. We now have instant access to insights that drive real business value.",
    author: "Sarah Johnson",
    role: "Chief Data Officer",
    company: "Manufacturing Company",
    image: "/images/testimonials/sarah-johnson.jpg"
  },
  {
    quote: "Their expertise in data analytics and AI has been instrumental in helping us make data-driven decisions and drive business growth.",
    author: "Johnson Jackson",
    role: "CEO",
    company: "Tech Startup",
    image: "/images/testimonials/john-doe.jpg"
  }
];

export default function DataAnalyticsPage() {
  const structuredData = generateServiceStructuredData({
    name: "Data Analytics Solutions",
    description: "Professional data analytics services including data visualization, predictive analytics, and business intelligence solutions.",
    provider: "Gray Ghost Data",
    areaServed: "Global",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/services/data-analytics`,
  });

  return (
    <>
      <Script
        id="data-analytics-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="relative">
        <OptimizedImage
          src="/images/services/data-analytic-hero.jpg"
          alt="Data Analytics Solutions - Interactive dashboards and real-time data visualization"
          width={1920}
          height={1080}
          className="w-full h-[300px] md:h-[400px] object-cover"
          priority
          onError={(e) => {
            const imgElement = e.target as HTMLImageElement;
            imgElement.src = '/images/placeholder-hero.jpg';
            imgElement.alt = 'Data Analytics Solutions';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40 backdrop-blur-[2px]" />
      </div>
      <ServiceDetailLayout
        title="Data Analytics"
        description="Transform your data into actionable insights."
        iconName="chart-line"
        features={[
          "Data Analysis",
          "Business Intelligence",
          "Predictive Analytics",
          "Data Visualization",
          "Machine Learning",
          "Big Data",
        ]}
        benefits={[
          "Better decisions",
          "Increased efficiency",
          "Cost reduction",
          "Growth insights",
          "Competitive edge",
          "ROI optimization",
        ]}
        process={[
          {
            title: "Collection",
            description: "Gather and organize data",
            iconName: "database"
          },
          {
            title: "Analysis",
            description: "Process and analyze data",
            iconName: "chart-line"
          },
          {
            title: "Visualization",
            description: "Create insightful visualizations",
            iconName: "chart-bar"
          },
          {
            title: "Action",
            description: "Implement data-driven decisions",
            iconName: "lightbulb"
          }
        ]}
        technologies={[
          "Python",
          "R",
          "TensorFlow",
          "Power BI",
          "Tableau",
          "Apache Spark",
          "SQL",
          "Big Data"
        ]}
        faqs={[
          {
            question: "What types of data can you analyze?",
            answer: "We can analyze structured and unstructured data from various sources including databases, IoT devices, social media, and more."
          },
          {
            question: "How do you ensure data quality?",
            answer: "We employ robust data validation, cleaning, and enrichment processes to ensure high data quality and reliability."
          },
          {
            question: "What industries do you serve?",
            answer: "We serve various industries including healthcare, finance, retail, manufacturing, and technology."
          }
        ]}
        caseStudies={[
          {
            title: "Retail Analytics Transformation",
            client: "Major Retail Chain",
            industry: "Retail",
            description: "Implemented predictive analytics for inventory management and customer behavior analysis.",
            results: [
              "30% reduction in inventory costs",
              "25% increase in customer retention",
              "40% improvement in demand forecasting accuracy",
              "15% increase in sales through personalized marketing"
            ]
          }
        ]}
      />
      <section className="py-20 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
          <PricingTable plans={dataAnalyticsPricing} />
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Your Perfect Solution</h2>
            <p className="text-lg text-muted-foreground">
              Answer a few questions to get personalized service recommendations tailored to your needs.
            </p>
          </div>
          <ServiceFinder />
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-lg text-muted-foreground">
              See how our data analytics solutions have transformed businesses across industries.
            </p>
          </div>
          <SuccessStoriesCarousel />
        </div>
      </section>
    </>
  );
}
