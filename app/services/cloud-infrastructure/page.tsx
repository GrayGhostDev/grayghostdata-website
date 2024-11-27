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
        description="Build and maintain scalable, secure, and efficient cloud infrastructure for your business."
        iconName="cloud"
        serviceType="cloud"
        features={[
          "Cloud Migration",
          "Infrastructure as Code",
          "Containerization",
          "Microservices",
          "Auto Scaling",
          "Load Balancing",
          "Disaster Recovery",
          "Monitoring & Logging",
          "Cost Optimization",
        ]}
        benefits={[
          "Improved scalability",
          "Enhanced reliability",
          "Cost efficiency",
          "Better performance",
          "Global reach",
          "Faster deployment",
        ]}
        process={[
          {
            title: "Assessment",
            description: "Evaluating current infrastructure and requirements.",
            iconName: "search",
          },
          {
            title: "Architecture",
            description: "Designing scalable cloud architecture.",
            iconName: "network-wired",
          },
          {
            title: "Migration",
            description: "Seamless transition to cloud infrastructure.",
            iconName: "cloud",
          },
          {
            title: "Optimization",
            description: "Continuous monitoring and improvement.",
            iconName: "cog",
          },
        ]}
      >
        <div>
          <section className="py-20 bg-slate-50">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Find Your Perfect Solution</h2>
                <p className="text-lg text-muted-foreground">
                  Discover how our cloud infrastructure solutions can transform your business operations.
                </p>
              </div>
              <ServiceFinder 
                title="Explore Our Cloud Solutions"
                description="Find the perfect cloud infrastructure solution for your organization."
              />
            </div>
          </section>

          <section className="py-20">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Client Success Stories</h2>
                <p className="text-lg text-muted-foreground">
                  See how our cloud infrastructure solutions have transformed businesses worldwide.
                </p>
              </div>
              <SuccessStoriesCarousel category="cloud" />
            </div>
          </section>
        </div>
      </ServiceDetailLayout>

      <PricingSection plans={cloudInfrastructurePricing} />
    </>
  );
}
