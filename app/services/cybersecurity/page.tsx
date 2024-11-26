import { ServiceDetailLayout } from "@/components/service-detail-layout";
import { Shield, Lock, Eye, Bell, FileCheck } from "lucide-react";

export default function CybersecurityPage() {
  return (
    <ServiceDetailLayout
      title="Cybersecurity"
      description="Protect your digital assets with our comprehensive security solutions."
      iconName="shield"
      serviceType="cybersecurity"
      features={[
        "Security Assessment",
        "Penetration Testing",
        "Incident Response",
        "Security Training",
        "Compliance",
        "Risk Management",
      ]}
      benefits={[
        "Enhanced security",
        "Risk mitigation",
        "Compliance",
        "Peace of mind",
        "Cost savings",
        "Expert support",
      ]}
      process={[
        {
          title: "Assessment",
          description: "Evaluate security posture",
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
          title: "Response",
          description: "Incident response and remediation",
          iconName: "cog"
        }
      ]}
      technologies={[
        "Next-Gen Firewalls",
        "SIEM Solutions",
        "EDR/XDR",
        "Zero Trust Architecture",
        "Cloud Security",
        "AI-Powered Threat Detection"
      ]}
      faqs={[
        {
          question: "What makes your cybersecurity services unique?",
          answer: "Our approach combines cutting-edge technology with expert human analysis, providing comprehensive protection that adapts to emerging threats."
        },
        {
          question: "How do you handle incident response?",
          answer: "We maintain a 24/7 incident response team and follow a structured approach: detection, containment, eradication, and recovery."
        },
        {
          question: "What compliance standards do you support?",
          answer: "We support major compliance frameworks including GDPR, HIPAA, PCI DSS, SOC 2, and ISO 27001."
        }
      ]}
      caseStudies={[
        {
          title: "Financial Institution Security Transformation",
          client: "Major Regional Bank",
          industry: "Financial Services",
          description: "Implemented comprehensive security infrastructure upgrade and established 24/7 monitoring.",
          results: [
            "90% reduction in security incidents",
            "100% compliance with banking regulations",
            "50% faster threat detection and response",
            "Zero data breaches since implementation"
          ]
        }
      ]}
    />
  );
}
