"use client";

import {
  Code,
  GitBranch,
  Terminal,
  Settings,
  Cpu,
  Layers,
  Workflow,
  Rocket,
} from "lucide-react";
import { ServiceDetailLayout } from "@/components/service-detail-layout";

export default function CustomDevelopmentPage() {
  return (
    <ServiceDetailLayout
      title="Custom Development"
      description="Build secure and scalable applications tailored to your business needs."
      iconName="code"
      serviceType="software-development"
      features={[
        "Web Application Development",
        "Mobile App Development",
        "Enterprise Software Solutions",
        "API Development & Integration",
        "Cloud-Native Applications",
        "DevOps Implementation",
        "Legacy System Modernization",
        "Security-First Development",
        "Performance Optimization",
      ]}
      benefits={[
        "Tailored to your exact needs",
        "Scalable architecture",
        "Modern technology stack",
        "Secure by design",
        "Efficient development process",
        "Long-term maintainability",
      ]}
      process={[
        {
          title: "Version Control",
          description: "We use Git for efficient code management and collaboration",
          iconName: "code"
        },
        {
          title: "Development",
          description: "Writing clean, maintainable code following best practices",
          iconName: "terminal"
        },
        {
          title: "Testing",
          description: "Comprehensive testing to ensure quality and reliability",
          iconName: "cog"
        },
        {
          title: "Deployment",
          description: "Smooth deployment and continuous integration",
          iconName: "rocket"
        }
      ]}
      technologies={[
        "React",
        "Node.js",
        "Python",
        "TypeScript",
        "Docker",
        "Kubernetes",
        "AWS",
        "Azure",
        "PostgreSQL",
        "MongoDB",
      ]}
      faqs={[
        {
          question: "What's your development process?",
          answer: "We follow an agile development methodology with regular sprints, continuous integration, and frequent client communication.",
        },
        {
          question: "How do you ensure code quality?",
          answer: "We maintain high code quality through code reviews, automated testing, continuous integration, and adherence to industry best practices.",
        },
        {
          question: "Do you provide ongoing support?",
          answer: "Yes, we offer comprehensive support and maintenance services to ensure your application continues to perform optimally.",
        },
        {
          question: "What about security?",
          answer: "Security is built into our development process from the start, with regular security audits and adherence to security best practices.",
        },
      ]}
      caseStudies={[
        {
          title: "Enterprise Platform Modernization",
          description: "Modernized legacy enterprise platform for a financial services company.",
          industry: "Financial Services",
          results: [
            "90% improvement in performance",
            "50% reduction in maintenance costs",
            "Improved user satisfaction by 85%",
            "Zero security incidents post-launch",
          ],
        },
        {
          title: "Custom Healthcare Platform",
          description: "Developed custom healthcare management platform for a medical group.",
          industry: "Healthcare",
          results: [
            "Streamlined patient management",
            "Reduced administrative time by 60%",
            "HIPAA compliant implementation",
            "Integrated with existing systems",
          ],
        },
        {
          title: "Enterprise Digital Transformation Platform",
          client: "Leading Insurance Provider",
          description: "Developed a custom digital platform that revolutionized claims processing and customer service operations.",
          image: "/images/case-studies/custom-development.jpg",
          challenge: "The insurance provider was struggling with outdated legacy systems, manual claims processing, and poor customer experience. They needed a modern, scalable solution to handle their growing business.",
          solution: "We developed a custom cloud-native platform that automated claims processing, enhanced customer experience, and provided real-time analytics for business operations.",
          results: [
            "Claims processing time reduced by 75%",
            "Customer satisfaction increased by 60%",
            "Operating costs reduced by 40%",
            "Zero downtime deployment achieved"
          ],
          implementation: [
            {
              title: "Microservices Architecture",
              description: "Designed and implemented scalable microservices using .NET Core and Docker containers orchestrated with Kubernetes"
            },
            {
              title: "Event-Driven Processing",
              description: "Built event-driven architecture using Azure Service Bus and Event Grid for real-time claims processing"
            },
            {
              title: "Customer Portal Development",
              description: "Created responsive web portal using React and Next.js with real-time status updates and document upload"
            },
            {
              title: "Mobile App Integration",
              description: "Developed native mobile apps for iOS and Android using React Native with offline capabilities"
            },
            {
              title: "DevOps Pipeline Implementation",
              description: "Established CI/CD pipeline using Azure DevOps with automated testing and zero-downtime deployments"
            }
          ],
          testimonial: {
            quote: "The custom platform has revolutionized our business operations. We're processing claims faster than ever with unprecedented accuracy.",
            author: "Jennifer Lee",
            role: "Director of Digital Transformation",
            image: "/images/testimonials/jennifer-lee.jpg"
          },
          technologies: [
            ".NET Core",
            "React",
            "Next.js",
            "Docker",
            "Kubernetes",
            "Azure DevOps",
            "React Native"
          ],
          metrics: [
            {
              label: "Processing Speed",
              value: "75% ↑"
            },
            {
              label: "Customer Satisfaction",
              value: "60% ↑"
            },
            {
              label: "Cost Reduction",
              value: "40% ↓"
            },
            {
              label: "System Uptime",
              value: "99.99%"
            }
          ],
          service: "custom-development"
        },
      ]}
    />
  );
}
