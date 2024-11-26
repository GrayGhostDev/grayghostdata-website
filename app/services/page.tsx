"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Database,
  Brain,
  Network,
  Lock,
  Cloud,
  LineChart,
  Code,
} from "lucide-react";
import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Cybersecurity Assessment",
    description: "Comprehensive evaluation of your security infrastructure to identify vulnerabilities and strengthen your defenses.",
    iconName: "shield",
    features: [
      "Penetration Testing",
      "Vulnerability Assessment",
      "Security Architecture Review",
      "Compliance Audit",
      "Risk Assessment",
      "Security Training",
    ],
    technologies: [
      "Nessus",
      "Metasploit",
      "Wireshark",
      "Burp Suite",
      "OWASP ZAP",
    ],
    learnMoreHref: "/services/cybersecurity-assessment",
  },
  {
    title: "Data Analytics Solutions",
    description: "Transform your raw data into actionable insights with our advanced analytics solutions.",
    iconName: "database",
    features: [
      "Business Intelligence",
      "Predictive Analytics",
      "Data Visualization",
      "ETL Pipeline Development",
      "Custom Dashboards",
      "Reporting Automation",
    ],
    technologies: [
      "Python",
      "R",
      "Tableau",
      "Power BI",
      "Apache Spark",
    ],
    learnMoreHref: "/services/data-analytics",
  },
  {
    title: "AI & Machine Learning",
    description: "Leverage the power of artificial intelligence to automate processes and gain competitive advantages.",
    iconName: "brain",
    features: [
      "Custom ML Models",
      "Natural Language Processing",
      "Computer Vision",
      "Anomaly Detection",
      "Predictive Maintenance",
      "AI Strategy",
    ],
    technologies: [
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "OpenCV",
      "NLTK",
    ],
    learnMoreHref: "/services/ai-machine-learning",
  },
  {
    title: "Blockchain Solutions",
    description: "Build secure and scalable blockchain applications for your business needs.",
    iconName: "network",
    features: [
      "Smart Contract Development",
      "DeFi Solutions",
      "Tokenization",
      "Blockchain Security",
      "NFT Development",
      "Chain Integration",
    ],
    technologies: [
      "Ethereum",
      "Solidity",
      "Web3.js",
      "Truffle",
      "OpenZeppelin",
    ],
    learnMoreHref: "/services/blockchain",
  },
  {
    title: "Security Operations",
    description: "24/7 monitoring and response to protect your organization from cyber threats.",
    iconName: "lock",
    features: [
      "Security Monitoring",
      "Incident Response",
      "Threat Hunting",
      "Log Analysis",
      "SIEM Management",
      "Security Automation",
    ],
    technologies: [
      "Splunk",
      "ELK Stack",
      "QRadar",
      "CrowdStrike",
      "Carbon Black",
    ],
    learnMoreHref: "/services/security-operations",
  },
  {
    title: "Cloud Security",
    description: "Secure your cloud infrastructure and applications with our comprehensive cloud security solutions.",
    iconName: "cloud",
    features: [
      "Cloud Security Assessment",
      "Identity Management",
      "Data Protection",
      "Compliance",
      "DevSecOps",
      "Cloud WAF",
    ],
    technologies: [
      "AWS Security Hub",
      "Azure Sentinel",
      "GCP Security",
      "CloudTrail",
      "GuardDuty",
    ],
    learnMoreHref: "/services/cloud-security",
  },
  {
    title: "Business Intelligence",
    description: "Make data-driven decisions with our comprehensive business intelligence solutions.",
    iconName: "chart-line",
    features: [
      "Data Warehousing",
      "Dashboard Development",
      "KPI Tracking",
      "Report Automation",
      "Data Integration",
      "Analytics Training",
    ],
    technologies: [
      "Power BI",
      "Tableau",
      "Looker",
      "Snowflake",
      "Redshift",
    ],
    learnMoreHref: "/services/business-intelligence",
  },
  {
    title: "Custom Development",
    description: "Build secure and scalable applications tailored to your business needs.",
    iconName: "code",
    features: [
      "Web Applications",
      "Mobile Apps",
      "API Development",
      "System Integration",
      "Legacy Modernization",
      "DevOps",
    ],
    technologies: [
      "React",
      "Node.js",
      "Python",
      "AWS",
      "Docker",
    ],
    learnMoreHref: "/services/custom-development",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive cybersecurity and data analytics solutions to protect
              and empower your business.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today to discuss how we can help secure and optimize your
              business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">Contact Us</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/case-studies">View Case Studies</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}