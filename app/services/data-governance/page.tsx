"use client";

import {
  Database,
  Shield,
  FileText,
  Settings,
  Lock,
  FileCheck,
  Eye,
  Search,
  Network,
  Workflow,
  Layers,
  Scale,
  Users
} from "lucide-react";
import { ServiceDetailLayout } from "@/components/service-detail-layout";
import { ServiceFinder } from "@/components/service-finder";
import { SuccessStoriesCarousel } from "@/components/success-stories-carousel";
import { PricingSection } from "@/components/pricing-section";
import { Metadata } from "next";

const dataGovernancePricing = [
  {
    name: "Governance Essentials",
    priceMonthly: "3,499",
    priceAnnual: "34,990",
    savings: "7,000",
    description: "Essential data governance for small to medium organizations",
    features: [
      {
        text: "Data Quality Assessment",
        tooltip: "Comprehensive evaluation of data quality",
        highlight: true
      },
      {
        text: "Basic Policy Framework",
        tooltip: "Essential data governance policies and procedures",
        highlight: true
      },
      {
        text: "Compliance Monitoring",
        tooltip: "Basic compliance monitoring and reporting",
        highlight: true
      },
      {
        text: "Data Catalog",
        tooltip: "Basic data cataloging and documentation",
        highlight: false
      },
      {
        text: "Email Support",
        tooltip: "Business hours email support",
        highlight: false
      }
    ],
    popular: false,
    cta: "Get Started",
    icon: Database
  },
  {
    name: "Governance Pro",
    priceMonthly: "6,999",
    priceAnnual: "69,990",
    savings: "14,000",
    description: "Advanced data governance with automation and enhanced compliance",
    features: [
      {
        text: "Advanced Data Management",
        tooltip: "Comprehensive data lifecycle management",
        highlight: true
      },
      {
        text: "Automated Compliance",
        tooltip: "Automated compliance monitoring and reporting",
        highlight: true
      },
      {
        text: "Data Quality Automation",
        tooltip: "Automated data quality monitoring and improvement",
        highlight: true
      },
      {
        text: "Policy Enforcement",
        tooltip: "Automated policy enforcement and monitoring",
        highlight: true
      },
      {
        text: "Advanced Reporting",
        tooltip: "Detailed governance and compliance reporting",
        highlight: false
      },
      {
        text: "Priority Support",
        tooltip: "24/7 technical support",
        highlight: false
      }
    ],
    popular: true,
    cta: "Start Free Trial",
    icon: Shield
  },
  {
    name: "Enterprise Governance",
    priceMonthly: "Custom",
    priceAnnual: "Custom",
    description: "Enterprise-grade data governance with full customization",
    features: [
      {
        text: "Custom Framework",
        tooltip: "Customized governance framework",
        highlight: true
      },
      {
        text: "Enterprise Integration",
        tooltip: "Full integration with enterprise systems",
        highlight: true
      },
      {
        text: "Advanced Analytics",
        tooltip: "AI-powered governance analytics",
        highlight: true
      },
      {
        text: "Dedicated Support",
        tooltip: "Dedicated governance team",
        highlight: true
      },
      {
        text: "Custom Workflows",
        tooltip: "Custom governance workflows",
        highlight: false
      },
      {
        text: "Executive Reporting",
        tooltip: "Executive-level governance reporting",
        highlight: false
      }
    ],
    popular: false,
    cta: "Contact Sales",
    icon: Users
  }
];

export default function DataGovernancePage() {
  return (
    <>
      <ServiceDetailLayout
        title="Data Governance"
        description="Establish robust data governance frameworks to ensure data quality, security, and compliance. Our expert team helps organizations implement effective data management practices and policies."
        icon={Database}
        serviceType="data-analytics"
        features={[
          "Data Policy Development",
          "Data Quality Management",
          "Metadata Management",
          "Data Security & Privacy",
          "Compliance Management",
          "Data Lifecycle Management",
          "Master Data Management",
          "Data Catalog Implementation",
          "Data Stewardship",
        ]}
        benefits={[
          "Improved data quality",
          "Enhanced compliance",
          "Better decision making",
          "Reduced risks",
          "Increased efficiency",
          "Data standardization",
        ]}
        process={[
          {
            title: "Assessment",
            description: "Evaluate current data governance practices",
            iconName: "search"
          },
          {
            title: "Documentation",
            description: "Create comprehensive data policies",
            iconName: "file-text"
          },
          {
            title: "Implementation",
            description: "Deploy governance frameworks",
            iconName: "cog"
          },
          {
            title: "Protection",
            description: "Ensure data security and compliance",
            iconName: "shield"
          }
        ]}
        technologies={[
          "Collibra",
          "Informatica",
          "Alation",
          "Azure Purview",
          "AWS Glue",
          "Talend",
          "Ataccama",
          "SAP MDG",
          "Precisely",
          "Profisee",
        ]}
        faqs={[
          {
            question: "What is data governance?",
            answer: "Data governance is a framework of policies, procedures, and controls that ensure data is managed effectively throughout its lifecycle.",
          },
          {
            question: "How do you ensure compliance?",
            answer: "We implement controls and monitoring systems to ensure compliance with regulations like GDPR, CCPA, and industry-specific requirements.",
          },
          {
            question: "Can you improve data quality?",
            answer: "Yes, we implement data quality frameworks and tools to ensure data accuracy, completeness, and consistency.",
          },
          {
            question: "What about data privacy?",
            answer: "We help organizations protect sensitive data through access controls, encryption, and privacy-preserving technologies.",
          },
        ]}
        caseStudies={[
          {
            title: "Enterprise Data Governance",
            description: "Implemented comprehensive data governance program.",
            industry: "Financial Services",
            results: [
              "90% data quality improvement",
              "GDPR compliance achieved",
              "50% faster data access",
              "Automated data lineage",
            ],
          },
          {
            title: "Healthcare Data Management",
            description: "Established data governance framework for healthcare provider.",
            industry: "Healthcare",
            results: [
              "HIPAA compliance verified",
              "Improved data accuracy",
              "Standardized data policies",
              "Enhanced data security",
            ],
          },
        ]}
      />

      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Your Perfect Solution</h2>
            <p className="text-lg text-muted-foreground">
              Answer a few questions to get personalized data governance recommendations tailored to your needs.
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
              See how our data governance solutions have helped organizations improve data quality and compliance.
            </p>
          </div>
          <SuccessStoriesCarousel />
        </div>
      </section>

      <PricingSection plans={dataGovernancePricing} />
    </>
  );
}
