"use client";

import {
  Cloud,
  Shield,
  Lock,
  Settings,
  Search,
  AlertTriangle,
  Eye,
  Network,
  Database,
  Server,
  Bell,
} from "lucide-react";
import { ServiceDetailLayout } from "@/components/service-detail-layout";
import { ServiceFinder } from "@/components/service-finder";
import { SuccessStoriesCarousel } from "@/components/success-stories-carousel";
import { generateServiceStructuredData } from "@/components/seo/structured-data";
import { OptimizedImage } from "@/components/ui/optimized-image";
import Script from "next/script";

export default function CloudSecurityPage() {
  const structuredData = generateServiceStructuredData({
    name: "Cloud Security Solutions",
    description: "Professional cloud security services including infrastructure protection, compliance management, and security monitoring.",
    provider: "Gray Ghost Data",
    areaServed: "Global",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/services/cloud-security`,
  });

  return (
    <>
      <Script
        id="cloud-security-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="relative">
        <OptimizedImage
          src="/images/services/cloud-security-hero.jpg"
          alt="Cloud Security Solutions"
          width={1920}
          height={1080}
          className="w-full h-[300px] md:h-[400px] object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40" />
      </div>
      <ServiceDetailLayout
        title="Cloud Security"
        description="Secure your cloud infrastructure and applications with our comprehensive solutions."
        iconName="shield"
        serviceType="cybersecurity"
        features={[
          "Cloud Security Assessment",
          "Identity Management",
          "Data Protection",
          "Compliance",
          "DevSecOps",
          "Cloud WAF",
        ]}
        benefits={[
          "Enhanced security",
          "Regulatory compliance",
          "Data protection",
          "Risk mitigation",
          "Cost efficiency",
          "Business continuity",
        ]}
        process={[
          {
            title: "Assessment",
            description: "Evaluate cloud security posture",
            iconName: "eye"
          },
          {
            title: "Implementation",
            description: "Deploy security controls",
            iconName: "shield"
          },
          {
            title: "Monitoring",
            description: "Continuous security monitoring",
            iconName: "bell"
          },
          {
            title: "Optimization",
            description: "Enhance security measures",
            iconName: "cog"
          }
        ]}
        technologies={[
          "AWS Security Hub",
          "Azure Security Center",
          "GCP Security Command",
          "Cloud HSM",
          "IAM Solutions",
          "CASB",
          "CSPM Tools",
        ]}
        faqs={[
          {
            question: "How do you handle multi-cloud security?",
            answer: "We provide unified security management across all major cloud providers with centralized monitoring and controls.",
          },
          {
            question: "What compliance standards do you support?",
            answer: "We support major cloud compliance frameworks including SOC 2, ISO 27001, HIPAA, and PCI DSS.",
          },
          {
            question: "How do you ensure data protection?",
            answer: "We implement encryption, access controls, and regular security assessments to protect your cloud data.",
          },
        ]}
        caseStudies={[
          {
            title: "Enterprise Cloud Security Implementation",
            client: "Global Technology Company",
            industry: "Technology",
            description: "Implemented comprehensive cloud security framework across multi-cloud environment.",
            results: [
              "100% compliance achievement",
              "60% reduction in security incidents",
              "40% improvement in threat detection",
              "Zero data breaches post-implementation",
            ],
          },
        ]}
      />

      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Your Perfect Solution</h2>
            <p className="text-lg text-muted-foreground">
              Answer a few questions to get personalized cloud security recommendations tailored to your needs.
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
              See how our cloud security solutions have helped organizations enhance their security posture.
            </p>
          </div>
          <SuccessStoriesCarousel />
        </div>
      </section>
    </>
  );
}
