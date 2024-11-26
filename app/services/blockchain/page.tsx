import { ServiceDetailLayout } from "@/components/service-detail-layout";
import { Binary, Code, Server, Database, Network } from "lucide-react";

export default function BlockchainPage() {
  return (
    <ServiceDetailLayout
      title="Blockchain Solutions"
      description="Build secure and scalable blockchain applications for your business needs."
      iconName="network-wired"
      serviceType="software-development"
      features={[
        "Smart Contract Development",
        "DeFi Solutions",
        "Tokenization",
        "Blockchain Security",
        "NFT Development",
        "Chain Integration",
      ]}
      benefits={[
        "Enhanced security",
        "Increased transparency",
        "Improved efficiency",
        "Cost reduction",
        "Trust automation",
        "Global reach",
      ]}
      process={[
        {
          title: "Analysis",
          description: "Assess blockchain requirements",
          iconName: "binary"
        },
        {
          title: "Development",
          description: "Build blockchain solutions",
          iconName: "code"
        },
        {
          title: "Integration",
          description: "Connect with existing systems",
          iconName: "network-wired"
        },
        {
          title: "Deployment",
          description: "Launch and monitor solution",
          iconName: "server"
        }
      ]}
      technologies={[
        "Ethereum",
        "Hyperledger",
        "Solidity",
        "Web3.js",
        "IPFS",
        "Truffle",
        "Hardhat",
        "OpenZeppelin"
      ]}
      faqs={[
        {
          question: "Which blockchain platforms do you support?",
          answer: "We support major blockchain platforms including Ethereum, Hyperledger, and custom private blockchains."
        },
        {
          question: "How secure are blockchain solutions?",
          answer: "Blockchain technology provides inherent security through cryptography, decentralization, and immutability."
        },
        {
          question: "Can blockchain integrate with existing systems?",
          answer: "Yes, we can integrate blockchain solutions with your existing systems through APIs and custom connectors."
        }
      ]}
      caseStudies={[
        {
          title: "Supply Chain Transformation",
          client: "Global Manufacturing Company",
          industry: "Manufacturing",
          description: "Implemented blockchain-based supply chain tracking and verification system.",
          results: [
            "100% product traceability",
            "30% reduction in verification time",
            "50% decrease in fraud incidents",
            "Improved supplier compliance"
          ]
        }
      ]}
    />
  );
}
