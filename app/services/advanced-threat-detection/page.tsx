"use client";

import { Shield, Lock, Search, AlertTriangle, FileSearch } from "lucide-react";
import { ServiceDetailLayout } from "@/components/service-detail-layout";
import { ServiceFinder } from "@/components/service-finder";
import { SuccessStoriesCarousel } from "@/components/success-stories-carousel";
import { generateServiceStructuredData } from "@/components/seo/structured-data";
import { OptimizedImage } from "@/components/optimized-image";
import Script from "next/script";

export default function AdvancedThreatDetectionPage() {
  const structuredData = generateServiceStructuredData({
    name: "Advanced Threat Detection",
    description: "Cutting-edge threat detection and prevention services to protect your organization from sophisticated cyber threats.",
    provider: "Gray Ghost Data",
    areaServed: "Global",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/services/advanced-threat-detection`,
  });

  return (
    <>
      <Script
        id="advanced-threat-detection-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="relative">
        <OptimizedImage
          src="/images/services/advanced-threat-detection-hero.jpg"
          alt="Advanced Threat Detection Solutions"
          width={1920}
          height={1080}
          className="w-full h-[300px] md:h-[400px] object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40" />
      </div>
      <ServiceDetailLayout
        title="Advanced Threat Detection"
        description="Stay ahead of cyber threats with our advanced threat detection solutions. We help organizations identify and respond to security threats in real-time."
        iconName="shield"
        serviceType="cybersecurity"
        features={[
          "Real-time Threat Monitoring",
          "AI-powered Detection",
          "Behavioral Analysis",
          "Network Security",
          "Endpoint Protection",
          "Zero-day Threat Detection",
          "Malware Analysis",
          "Threat Intelligence",
          "Incident Response Integration",
        ]}
        benefits={[
          "Proactive threat prevention",
          "Reduced security risks",
          "Early threat detection",
          "Minimized data breaches",
          "Enhanced security posture",
          "24/7 protection",
        ]}
        process={[
          {
            title: "Financial Services",
            description: "Protecting sensitive financial data and transactions from sophisticated cyber threats.",
            iconName: "shield",
          },
          {
            title: "Healthcare",
            description: "Safeguarding patient data and medical systems from ransomware and data breaches.",
            iconName: "lock",
          },
          {
            title: "Enterprise Security",
            description: "Comprehensive threat detection for large-scale corporate networks.",
            iconName: "search",
          },
          {
            title: "Critical Infrastructure",
            description: "Protecting vital systems from state-sponsored attacks and advanced persistent threats.",
            iconName: "alert-triangle",
          },
          {
            title: "Data Centers",
            description: "Monitoring and protecting cloud infrastructure and data storage facilities.",
            iconName: "file-search",
          },
        ]}
      >
        <div>
          <section className="py-20 bg-slate-50">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Find Your Perfect Solution</h2>
                <p className="text-lg text-muted-foreground">
                  Discover how our advanced threat detection services can protect your organization from evolving cyber threats.
                </p>
              </div>
              <ServiceFinder 
                title="Explore Our AI Solutions"
                description="Discover how our advanced threat detection services can help your organization stay ahead of cyber threats."
              />
            </div>
          </section>

          <section className="py-20">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Client Success Stories</h2>
                <p className="text-lg text-muted-foreground">
                  See how our advanced threat detection solutions have strengthened security for organizations worldwide.
                </p>
              </div>
              <SuccessStoriesCarousel category="cybersecurity" />
            </div>
          </section>
        </div>
      </ServiceDetailLayout>
    </>
  );
}
