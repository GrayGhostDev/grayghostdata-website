"use client";

import { Search, Shield, FileSearch, Lock, Settings } from "lucide-react";
import { ServiceDetailLayout } from "@/components/service-detail-layout";
import { ServiceFinder } from "@/components/service-finder";
import { SuccessStoriesCarousel } from "@/components/success-stories-carousel";
import { generateServiceStructuredData } from "@/components/seo/structured-data";
import { OptimizedImage } from "@/components/optimized-image";
import Script from "next/script";

export default function SecurityAssessmentsPage() {
  const structuredData = generateServiceStructuredData({
    name: "Security Assessments",
    description: "Comprehensive security assessment services to identify vulnerabilities and strengthen your organization's security posture.",
    provider: "Gray Ghost Data",
    areaServed: "Global",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/services/security-assessments`,
  });

  return (
    <>
      <Script
        id="security-assessments-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="relative">
        <OptimizedImage
          src="/images/services/security-assessments-hero.jpg"
          alt="Security Assessment Services"
          width={1920}
          height={1080}
          className="w-full h-[300px] md:h-[400px] object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40" />
      </div>
      <ServiceDetailLayout
        title="Security Assessments"
        description="Comprehensive security assessments to identify vulnerabilities and strengthen your organization's security posture."
        iconName="search"
        serviceType="security-assessments"
        features={[
          "Vulnerability Scanning",
          "Penetration Testing",
          "Risk Assessment",
          "Compliance Audits",
          "Security Architecture Review",
          "Code Security Analysis",
          "Cloud Security Assessment",
          "Network Security Testing",
          "Social Engineering Tests",
        ]}
        benefits={[
          "Proactive risk mitigation",
          "Regulatory compliance",
          "Enhanced security",
          "Detailed reporting",
          "Expert recommendations",
          "Continuous improvement",
        ]}
        process={[
          {
            title: "Vulnerability Assessment",
            description: "Comprehensive scanning and analysis of security vulnerabilities.",
            iconName: "search",
          },
          {
            title: "Compliance Auditing",
            description: "Assessment of security controls against regulatory requirements.",
            iconName: "shield",
          },
          {
            title: "Security Testing",
            description: "Thorough testing of security controls and defensive measures.",
            iconName: "file-search",
          },
          {
            title: "Access Control Review",
            description: "Evaluation of identity and access management systems.",
            iconName: "lock",
          },
          {
            title: "Security Architecture",
            description: "Assessment of security design and implementation.",
            iconName: "settings",
          },
        ]}
      >
        <ServiceFinder
          title="Explore Our Security Assessment Services"
          description="Learn how our security assessment services can help identify and address vulnerabilities in your organization."
        />
        <SuccessStoriesCarousel category="cybersecurity" />
      </ServiceDetailLayout>
    </>
  );
}
