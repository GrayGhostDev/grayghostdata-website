import { Metadata } from "next";
import { CaseStudyCard } from "@/components/case-study-card";

export const metadata: Metadata = {
  title: "Case Studies | Gray Ghost Data",
  description: "Explore our successful projects and client success stories across various industries.",
};

const caseStudies = [
  {
    title: "Financial Services Security Transformation",
    description: "Complete security overhaul for a regional bank with 50+ branches.",
    industry: "Financial Services",
    challenge:
      "The bank faced increasing cyber threats and compliance requirements, with outdated security infrastructure and manual processes creating vulnerabilities.",
    solution:
      "Implemented comprehensive security monitoring, automated threat detection, and compliance reporting system while modernizing the entire security infrastructure.",
    results: [
      "Achieved 100% compliance with banking regulations",
      "Reduced security incidents by 75%",
      "Automated 90% of security monitoring tasks",
      "Cut incident response time by 60%",
      "Zero security breaches in 18 months",
    ],
    technologies: [
      "Splunk",
      "CrowdStrike",
      "Palo Alto Networks",
      "Azure Security Center",
      "HashiCorp Vault",
    ],
    imageUrl: "/case-studies/financial-security.jpg",
  },
  {
    title: "Healthcare Data Analytics Platform",
    description: "Custom analytics solution for a network of hospitals and clinics.",
    industry: "Healthcare",
    challenge:
      "The healthcare network struggled with disparate data sources, inefficient reporting, and inability to derive actionable insights from patient and operational data.",
    solution:
      "Developed a unified healthcare analytics platform with real-time dashboards, predictive analytics, and automated reporting while ensuring HIPAA compliance.",
    results: [
      "45% reduction in patient wait times",
      "30% improvement in resource utilization",
      "Saved $2M annually through optimized operations",
      "Real-time visibility across 200+ metrics",
      "100% HIPAA compliance maintained",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "Power BI",
      "Azure",
      "PostgreSQL",
    ],
    imageUrl: "/case-studies/healthcare-analytics.jpg",
  },
  {
    title: "Supply Chain Blockchain Implementation",
    description: "End-to-end blockchain solution for global logistics company.",
    industry: "Logistics",
    challenge:
      "Lack of transparency and traceability in the supply chain led to inefficiencies, delays, and difficulty in verifying product authenticity.",
    solution:
      "Implemented a blockchain-based supply chain tracking system with smart contracts for automated compliance and real-time visibility.",
    results: [
      "100% traceability of products",
      "60% reduction in documentation time",
      "90% faster product verification",
      "Eliminated counterfeit products",
      "Improved supplier trust score by 85%",
    ],
    technologies: [
      "Ethereum",
      "Solidity",
      "Web3.js",
      "React",
      "Node.js",
    ],
    imageUrl: "/case-studies/blockchain-logistics.jpg",
  },
  {
    title: "Manufacturing AI Implementation",
    description: "AI-powered predictive maintenance system for manufacturing plants.",
    industry: "Manufacturing",
    challenge:
      "Frequent equipment failures led to costly downtime, while manual maintenance scheduling was inefficient and often too late to prevent issues.",
    solution:
      "Developed an AI-based predictive maintenance system using IoT sensors and machine learning to predict equipment failures before they occur.",
    results: [
      "85% accuracy in failure prediction",
      "50% reduction in maintenance costs",
      "30% decrease in equipment downtime",
      "ROI achieved within 6 months",
      "Extended equipment lifespan by 40%",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "AWS IoT",
      "Docker",
      "Kubernetes",
    ],
    imageUrl: "/case-studies/manufacturing-ai.jpg",
  },
  {
    title: "Cloud Security Modernization",
    description: "Cloud security transformation for a SaaS provider.",
    industry: "Technology",
    challenge:
      "Rapid cloud expansion created security vulnerabilities, while lack of automated security controls made it difficult to maintain compliance and security posture.",
    solution:
      "Implemented comprehensive cloud security controls with automated compliance monitoring, security scanning, and incident response.",
    results: [
      "100% cloud asset visibility achieved",
      "90% reduction in security findings",
      "Automated compliance reporting",
      "24/7 security monitoring",
      "Zero security incidents post-implementation",
    ],
    technologies: [
      "AWS Security Hub",
      "Azure Sentinel",
      "Terraform",
      "Docker",
      "Kubernetes",
    ],
    imageUrl: "/case-studies/cloud-security.jpg",
  },
  {
    title: "Custom Enterprise Platform",
    description: "Modern enterprise platform for business process automation.",
    industry: "Enterprise",
    challenge:
      "Legacy systems and manual processes were causing inefficiencies, data silos, and inability to scale operations effectively.",
    solution:
      "Developed a custom enterprise platform with automated workflows, integrated data management, and real-time analytics.",
    results: [
      "90% improvement in process efficiency",
      "50% reduction in operational costs",
      "Eliminated data silos",
      "Improved user satisfaction by 85%",
      "Scalable to 10x current workload",
    ],
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Elasticsearch",
    ],
    imageUrl: "/case-studies/enterprise-platform.jpg",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text">
            Case Studies
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore our successful projects and discover how we help organizations
            solve complex challenges and achieve their goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.title} {...study} />
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us to discuss how we can help transform your business with our
            expertise in cybersecurity, data analytics, and custom development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
            >
              Schedule a Consultation
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8"
            >
              View Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
