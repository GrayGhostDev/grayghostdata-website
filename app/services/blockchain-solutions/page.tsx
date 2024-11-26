"use client";

import { GitMerge, Database, Search, Settings, Code } from "lucide-react";
import { ServiceDetailLayout } from "@/components/service-detail-layout";
import { ServiceFinder } from "@/components/service-finder";
import { SuccessStoriesCarousel } from "@/components/success-stories-carousel";
import { generateServiceStructuredData } from "@/components/seo/structured-data";
import { OptimizedImage } from "@/components/optimized-image";
import Script from "next/script";

export default function BlockchainSolutionsPage() {
  const structuredData = generateServiceStructuredData({
    name: "Blockchain Solutions",
    description: "Professional blockchain services including smart contract development, DApp creation, and blockchain integration solutions.",
    provider: "Gray Ghost Data",
    areaServed: "Global",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/services/blockchain-solutions`,
  });

  return (
    <>
      <Script
        id="blockchain-solutions-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="relative">
        <OptimizedImage
          src="/images/services/blockchain-hero.jpg"
          alt="Blockchain Solutions"
          width={1920}
          height={1080}
          className="w-full h-[300px] md:h-[400px] object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40" />
      </div>
      <ServiceDetailLayout
        title="Blockchain Solutions"
        description="Transform your business with innovative blockchain solutions. Our expert team helps organizations implement secure and scalable blockchain technology."
        icon={GitMerge}
        serviceType="software-development"
        features={[
          "Smart Contract Development",
          "DApp Development",
          "Blockchain Integration",
          "Token Development",
          "NFT Solutions",
          "Private Blockchains",
          "Consensus Mechanisms",
          "Security Audits",
          "Performance Optimization",
        ]}
        benefits={[
          "Enhanced security",
          "Improved transparency",
          "Automated processes",
          "Reduced costs",
          "Increased efficiency",
          "Scalable solutions",
        ]}
        process={[
          {
            title: "Requirements Analysis",
            description: "Understanding your blockchain needs and use cases",
            iconName: "search"
          },
          {
            title: "Architecture Design",
            description: "Designing scalable blockchain solutions",
            iconName: "database"
          },
          {
            title: "Development",
            description: "Implementing secure smart contracts",
            iconName: "code"
          },
          {
            title: "Testing & Deployment",
            description: "Rigorous testing and secure deployment",
            iconName: "cog"
          }
        ]}
        technologies={[
          "Ethereum",
          "Solana",
          "Hyperledger",
          "Polygon",
          "Web3.js",
          "Solidity",
          "Rust",
          "Truffle",
          "Hardhat",
          "OpenZeppelin",
        ]}
        faqs={[
          {
            question: "Which blockchain platforms do you support?",
            answer: "We work with major platforms including Ethereum, Solana, Hyperledger, and can recommend the best solution for your needs.",
          },
          {
            question: "How do you ensure security?",
            answer: "We conduct thorough security audits, implement best practices, and use proven security patterns in our blockchain solutions.",
          },
          {
            question: "Can you integrate with existing systems?",
            answer: "Yes, we specialize in integrating blockchain solutions with existing enterprise systems and databases.",
          },
          {
            question: "What about scalability?",
            answer: "We design blockchain solutions with scalability in mind, using layer-2 solutions and optimized architectures.",
          },
        ]}
        caseStudies={[
          {
            title: "Supply Chain Tracking",
            description: "Implemented blockchain-based supply chain solution.",
            industry: "Logistics",
            results: [
              "100% traceability",
              "50% reduced disputes",
              "Real-time tracking",
              "Automated compliance",
            ],
          },
          {
            title: "Digital Asset Platform",
            description: "Built secure platform for digital asset management.",
            industry: "Finance",
            results: [
              "Zero security incidents",
              "Automated trading",
              "Regulatory compliance",
              "Scalable architecture",
            ],
          },
        ]}
      />

      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Your Perfect Solution</h2>
            <p className="text-lg text-muted-foreground">
              Answer a few questions to get personalized blockchain recommendations tailored to your needs.
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
              See how our blockchain solutions have transformed organizations across industries.
            </p>
          </div>
          <SuccessStoriesCarousel />
        </div>
      </section>
    </>
  );
}
