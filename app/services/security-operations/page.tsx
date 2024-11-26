"use client";

import {
  Shield,
  Eye,
  AlertTriangle,
  Bell,
  Terminal,
  Activity,
  FileSearch,
  Lock,
} from "lucide-react";
import { ServiceDetailLayout } from "@/components/service-detail-layout";
import { ServiceFinder } from "@/components/service-finder";
import { SuccessStoriesCarousel } from "@/components/success-stories-carousel";

export default function SecurityOperationsPage() {
  return (
    <ServiceDetailLayout
      title="Security Operations"
      description="Comprehensive security operations services providing 24/7 monitoring, rapid incident response, and proactive threat detection to protect your organization from evolving cyber threats."
      icon={Shield}
      serviceType="cybersecurity"
      features={[
        "24/7 Security Monitoring",
        "Incident Response",
        "Threat Detection & Analysis",
        "Security Log Management",
        "SIEM Implementation",
        "Vulnerability Management",
        "Security Automation",
        "Threat Intelligence",
        "Compliance Monitoring",
      ]}
      benefits={[
        "Continuous security monitoring",
        "Rapid threat detection and response",
        "Reduced security incidents",
        "Improved compliance posture",
        "Enhanced security visibility",
        "Proactive threat prevention",
      ]}
      process={[
        {
          title: "Monitoring",
          description: "24/7 security monitoring and threat detection",
          iconName: "eye"
        },
        {
          title: "Detection",
          description: "Advanced threat detection and analysis",
          iconName: "exclamation-triangle"
        },
        {
          title: "Response",
          description: "Rapid incident response and mitigation",
          iconName: "bell"
        },
        {
          title: "Analysis",
          description: "Post-incident analysis and improvement",
          iconName: "chart-line"
        }
      ]}
      technologies={[
        "Splunk",
        "QRadar",
        "CrowdStrike",
        "Carbon Black",
        "Elastic Security",
        "Tenable",
        "Rapid7",
        "AlienVault",
        "Palo Alto",
        "Fortinet",
      ]}
      faqs={[
        {
          question: "What's included in 24/7 monitoring?",
          answer: "Our security operations team provides round-the-clock monitoring of your systems, networks, and applications, with immediate response to security incidents.",
        },
        {
          question: "How quickly do you respond to incidents?",
          answer: "We maintain a 15-minute response time for critical incidents, with defined SLAs for different severity levels.",
        },
        {
          question: "Do you provide threat intelligence?",
          answer: "Yes, we integrate multiple threat intelligence feeds and provide custom threat intelligence relevant to your industry and infrastructure.",
        },
        {
          question: "How do you handle compliance requirements?",
          answer: "We align our security operations with major compliance frameworks (HIPAA, PCI DSS, SOX, etc.) and provide detailed compliance reporting.",
        },
      ]}
      caseStudies={[
        {
          title: "Financial Services SOC Implementation",
          description: "Established 24/7 security operations center for a regional banking network.",
          industry: "Financial Services",
          results: [
            "90% faster threat detection",
            "100% compliance with regulations",
            "75% reduction in false positives",
            "Zero security breaches in 12 months",
          ],
        },
        {
          title: "Healthcare Security Operations",
          description: "Implemented comprehensive security monitoring for healthcare provider network.",
          industry: "Healthcare",
          results: [
            "24/7 HIPAA compliant monitoring",
            "50% reduction in security incidents",
            "15-minute response time achieved",
            "Automated threat response for common attacks",
          ],
        },
      ]}
    />
  );
}
