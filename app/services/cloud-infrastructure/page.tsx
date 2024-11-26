"use client";

import {
  Cloud,
  Server,
  Shield,
  Network,
  Settings,
  Monitor,
  Lock,
  RefreshCw,
  Database,
  Cpu,
  HardDrive,
  LineChart,
  GitMerge,
  Code2,
} from "lucide-react";
import { ServiceDetailLayout } from "@/components/service-detail-layout";
import { PricingSection } from "@/components/pricing-section";
import { ServiceFinder } from "@/components/service-finder";
import { SuccessStoriesCarousel } from "@/components/success-stories-carousel";

const cloudInfrastructurePricing = [
  {
    name: "Cloud Essentials",
    priceMonthly: "2,999",
    priceAnnual: "29,990",
    savings: "6,000",
    description: "Essential cloud infrastructure management for growing businesses",
    features: [
      {
        text: "Cloud Architecture Design",
        tooltip: "Custom cloud architecture tailored to your needs",
        highlight: true
      },
      {
        text: "Infrastructure Monitoring",
        tooltip: "24/7 monitoring of cloud resources",
        highlight: true
      },
      {
        text: "Basic Security Setup",
        tooltip: "Essential security configurations and best practices",
        highlight: true
      },
      {
        text: "Cost Optimization",
        tooltip: "Basic cost management and optimization",
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
    icon: Cloud
  },
  {
    name: "Cloud Professional",
    priceMonthly: "5,999",
    priceAnnual: "59,990",
    savings: "12,000",
    description: "Advanced cloud management with enhanced security and automation",
    features: [
      {
        text: "Multi-Cloud Strategy",
        tooltip: "Unified management across multiple cloud providers",
        highlight: true
      },
      {
        text: "Advanced Security",
        tooltip: "Enhanced security with threat detection",
        highlight: true
      },
      {
        text: "Auto-Scaling",
        tooltip: "Automated resource scaling based on demand",
        highlight: true
      },
      {
        text: "Performance Optimization",
        tooltip: "Advanced performance tuning and optimization",
        highlight: true
      },
      {
        text: "Disaster Recovery",
        tooltip: "Comprehensive disaster recovery planning",
        highlight: false
      },
      {
        text: "24/7 Support",
        tooltip: "Round-the-clock technical support",
        highlight: false
      }
    ],
    popular: true,
    cta: "Start Free Trial",
    icon: Server
  },
  {
    name: "Enterprise Cloud",
    priceMonthly: "Custom",
    priceAnnual: "Custom",
    description: "Enterprise-grade cloud solutions with full customization",
    features: [
      {
        text: "Custom Architecture",
        tooltip: "Fully customized cloud architecture",
        highlight: true
      },
      {
        text: "Enterprise Security",
        tooltip: "Advanced security with AI-powered threat detection",
        highlight: true
      },
      {
        text: "Global Infrastructure",
        tooltip: "Worldwide infrastructure deployment",
        highlight: true
      },
      {
        text: "Dedicated Team",
        tooltip: "Dedicated cloud engineering team",
        highlight: true
      },
      {
        text: "Custom Integration",
        tooltip: "Integration with existing systems",
        highlight: false
      },
      {
        text: "Priority Support",
        tooltip: "Dedicated support team with SLA",
        highlight: false
      }
    ],
    popular: false,
    cta: "Contact Sales",
    icon: Network
  }
];

export default function CloudInfrastructurePage() {
  return (
    <>
      <ServiceDetailLayout
        title="Cloud Infrastructure"
        description="Build scalable and secure cloud solutions for your enterprise."
        iconName="cloud"
        features={[
          "Cloud Migration",
          "Infrastructure as Code",
          "Serverless Architecture",
          "Container Orchestration",
          "Cloud Security",
          "Cost Optimization",
        ]}
        benefits={[
          "Improved scalability",
          "Enhanced security",
          "Cost efficiency",
          "Global reach",
          "High availability",
          "Disaster recovery",
        ]}
        process={[
          {
            title: "Assessment",
            description: "Evaluate infrastructure requirements",
            iconName: "server"
          },
          {
            title: "Architecture",
            description: "Design scalable cloud solutions",
            iconName: "network-wired"
          },
          {
            title: "Development",
            description: "Implement cloud infrastructure",
            iconName: "code"
          },
          {
            title: "Optimization",
            description: "Monitor and optimize performance",
            iconName: "cog"
          }
        ]}
        technologies={[
          "AWS",
          "Azure",
          "Google Cloud",
          "Kubernetes",
          "Docker",
          "Terraform",
          "Ansible",
          "Jenkins",
          "Prometheus",
          "Grafana",
        ]}
        faqs={[
          {
            question: "Which cloud providers do you work with?",
            answer: "We work with major cloud providers including AWS, Azure, and Google Cloud, and can help you choose the best option for your needs.",
          },
          {
            question: "How do you ensure cloud security?",
            answer: "We implement security best practices, including encryption, access controls, monitoring, and compliance measures.",
          },
          {
            question: "Can you help with cloud migration?",
            answer: "Yes, we provide end-to-end cloud migration services, from planning to execution, with minimal disruption to your operations.",
          },
          {
            question: "How do you optimize cloud costs?",
            answer: "We implement cost monitoring, resource optimization, and automated scaling to ensure efficient use of cloud resources.",
          },
        ]}
        caseStudies={[
          {
            title: "E-commerce Cloud Migration",
            description: "Migrated large e-commerce platform to cloud infrastructure.",
            industry: "Retail",
            results: [
              "40% reduction in infrastructure costs",
              "99.99% uptime achieved",
              "3x improvement in scalability",
              "Zero downtime during migration",
            ],
          },
          {
            title: "DevOps Transformation",
            description: "Implemented modern DevOps practices and cloud infrastructure.",
            industry: "Technology",
            results: [
              "80% faster deployment time",
              "50% reduction in incidents",
              "Automated CI/CD pipeline",
              "Improved developer productivity",
            ],
          },
        ]}
      />

      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Your Perfect Solution</h2>
            <p className="text-lg text-muted-foreground">
              Answer a few questions to get personalized cloud infrastructure recommendations tailored to your needs.
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
              See how our cloud infrastructure solutions have transformed businesses across industries.
            </p>
          </div>
          <SuccessStoriesCarousel />
        </div>
      </section>

      <PricingSection plans={cloudInfrastructurePricing} />
    </>
  );
}
