"use client";

import { AlertTriangle, Clock, Shield, FileSearch, Network } from "lucide-react";
import { ServiceDetailLayout } from "@/components/service-detail-layout";
import { ServiceFinder } from "@/components/service-finder";
import { SuccessStoriesCarousel } from "@/components/success-stories-carousel";
import { generateServiceStructuredData } from "@/components/seo/structured-data";
import { OptimizedImage } from "@/components/optimized-image";
import Script from "next/script";

export default function IncidentResponsePage() {
  const structuredData = generateServiceStructuredData({
    name: "Incident Response",
    description: "Professional incident response services to help organizations quickly recover from security incidents and cyber attacks.",
    provider: "Gray Ghost Data",
    areaServed: "Global",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/services/incident-response`,
  });

  return (
    <>
      <Script
        id="incident-response-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="relative">
        <OptimizedImage
          src="/images/services/incident-response-hero.jpg"
          alt="Incident Response Services"
          width={1920}
          height={1080}
          className="w-full h-[300px] md:h-[400px] object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40" />
      </div>
      <ServiceDetailLayout
        title="Incident Response"
        description="Rapid and effective incident response services to minimize the impact of security breaches and restore normal operations quickly."
        iconName="shield-alert"
        serviceType="incident-response"
        features={[
          "24/7 Emergency Response",
          "Threat Containment",
          "Digital Forensics",
          "Malware Analysis",
          "System Recovery",
          "Root Cause Analysis",
          "Evidence Collection",
          "Incident Documentation",
          "Post-Incident Review",
        ]}
        benefits={[
          "Rapid incident containment",
          "Minimized downtime",
          "Data recovery",
          "Legal compliance",
          "Improved security",
          "Future prevention",
        ]}
        process={[
          {
            title: "Data Breach Response",
            description: "Rapid containment and investigation of data breaches to minimize impact.",
            iconName: "alert-triangle",
          },
          {
            title: "Ransomware Recovery",
            description: "Swift response to ransomware attacks with minimal data loss.",
            iconName: "clock",
          },
          {
            title: "Corporate Security",
            description: "Comprehensive incident response for enterprise environments.",
            iconName: "shield",
          },
          {
            title: "Forensic Investigation",
            description: "Detailed analysis and documentation of security incidents.",
            iconName: "file-search",
          },
          {
            title: "Network Security",
            description: "Response to network-based attacks and intrusions.",
            iconName: "network",
          },
        ]}
      >
        <ServiceFinder
          title="Learn About Our Incident Response Services"
          description="Discover how our incident response team can help protect your organization and respond to security incidents."
        />
        <SuccessStoriesCarousel category="cybersecurity" />
      </ServiceDetailLayout>
    </>
  );
}
