"use client";

import {
  Shield,
  Search,
  FileSearch,
  AlertTriangle,
  Lock,
  CheckCircle,
  FileText,
  Eye,
} from "lucide-react";
import { ServiceDetailLayout } from "@/components/service-detail-layout";
import { ServiceFinder } from "@/components/service-finder";
import { SuccessStoriesCarousel } from "@/components/success-stories-carousel";

export default function CybersecurityAssessmentPage() {
  return (
    <>
      <ServiceDetailLayout
        title="Cybersecurity Assessment"
        description="Comprehensive security assessments to identify vulnerabilities, evaluate risks, and strengthen your organization's security posture. Our expert team provides actionable recommendations to protect your assets and maintain compliance."
        iconName="shield"
        serviceType="cybersecurity"
        features={[
          "Vulnerability Assessment",
          "Penetration Testing",
          "Security Architecture Review",
          "Compliance Audits",
          "Risk Assessment",
          "Security Controls Testing",
          "Third-party Risk Assessment",
          "Cloud Security Assessment",
          "Application Security Testing",
        ]}
        benefits={[
          "Identify security vulnerabilities",
          "Reduce security risks",
          "Ensure compliance",
          "Protect sensitive data",
          "Enhance security posture",
          "Prevent security breaches",
        ]}
        process={[
          {
            title: "Discovery",
            description: "Initial security assessment and scope definition",
            iconName: "search"
          },
          {
            title: "Analysis",
            description: "In-depth security analysis and testing",
            iconName: "file-search"
          },
          {
            title: "Identification",
            description: "Vulnerability identification and risk assessment",
            iconName: "exclamation-triangle"
          },
          {
            title: "Reporting",
            description: "Detailed findings and recommendations",
            iconName: "file-text"
          }
        ]}
        technologies={[
          "Nessus",
          "Metasploit",
          "Burp Suite",
          "Wireshark",
          "Nmap",
          "OWASP ZAP",
          "Qualys",
          "Acunetix",
          "Tenable.io",
          "OpenVAS",
        ]}
        faqs={[
          {
            question: "What types of assessments do you offer?",
            answer: "We offer comprehensive security assessments including vulnerability scanning, penetration testing, compliance audits, and risk assessments.",
          },
          {
            question: "How often should we conduct security assessments?",
            answer: "We recommend quarterly vulnerability assessments and annual penetration testing, with additional assessments after major system changes.",
          },
          {
            question: "What deliverables can we expect?",
            answer: "You'll receive detailed reports including executive summaries, technical findings, risk ratings, and actionable remediation recommendations.",
          },
          {
            question: "How do you ensure confidentiality?",
            answer: "We follow strict security protocols and sign NDAs to protect your sensitive information throughout the assessment process.",
          },
        ]}
        caseStudies={[
          {
            title: "Financial Services Security",
            description: "Conducted comprehensive security assessment for a financial institution.",
            industry: "Finance",
            results: [
              "Identified 15 critical vulnerabilities",
              "100% compliance achievement",
              "Zero security breaches post-remediation",
              "50% reduction in risk exposure",
            ],
          },
          {
            title: "Healthcare Security Audit",
            description: "Performed security and compliance assessment for healthcare provider.",
            industry: "Healthcare",
            results: [
              "HIPAA compliance verified",
              "30+ security gaps identified",
              "90-day remediation plan",
              "Achieved security certification",
            ],
          },
        ]}
      />

      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Your Perfect Solution</h2>
            <p className="text-lg text-muted-foreground">
              Discover how our cybersecurity assessment services can help protect your organization from threats.
            </p>
          </div>
          <ServiceFinder 
            title="Explore Our Security Assessment Solutions"
            description="Find the perfect cybersecurity assessment solution to evaluate and strengthen your security posture."
          />
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-lg text-muted-foreground">
              See how our cybersecurity assessments have helped organizations strengthen their security posture.
            </p>
          </div>
          <SuccessStoriesCarousel />
        </div>
      </section>
    </>
  );
}
