"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Database, Cpu, Lock, Cloud, Code } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const categories = [
  {
    id: "cybersecurity",
    title: "Cybersecurity Solutions",
    icon: Shield,
    description: "Advanced security implementations for enterprise clients",
    projects: [
      {
        title: "Financial Sector Security",
        client: "Global Investment Bank",
        description: "Quantum-resistant encryption system for international transactions",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
        results: ["$50B+ protected daily", "Zero breaches", "99.99% uptime"]
      },
      {
        title: "Healthcare Data Protection",
        client: "Regional Medical Center",
        description: "HIPAA-compliant security infrastructure with real-time monitoring",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
        results: ["100% HIPAA compliance", "45% faster access", "Zero data leaks"]
      },
      {
        title: "Government Infrastructure Security",
        client: "Federal Agency",
        description: "Zero-trust architecture implementation for critical systems",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
        results: ["30% threat reduction", "100% system visibility", "24/7 monitoring"]
      }
    ]
  },
  {
    id: "data-analytics",
    title: "Data Analytics & AI",
    icon: Database,
    description: "Transforming raw data into actionable intelligence",
    projects: [
      {
        title: "Predictive Healthcare Analytics",
        client: "National Health Network",
        description: "AI-powered patient care optimization platform",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
        results: ["45% faster diagnoses", "30% cost reduction", "1M+ patients analyzed"]
      },
      {
        title: "Retail Analytics Engine",
        client: "Global Retail Chain",
        description: "Real-time inventory and customer behavior analysis",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
        results: ["40% inventory optimization", "25% sales increase", "Real-time insights"]
      },
      {
        title: "Financial Market Analysis",
        client: "Investment Firm",
        description: "ML-powered market prediction and risk assessment",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80",
        results: ["85% prediction accuracy", "50% faster analysis", "$2B+ managed"]
      }
    ]
  },
  {
    id: "blockchain",
    title: "Blockchain Solutions",
    icon: Cpu,
    description: "Secure and transparent distributed systems",
    projects: [
      {
        title: "Supply Chain Tracking",
        client: "Global Logistics Corp",
        description: "Blockchain-based asset tracking system",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80",
        results: ["100% transparency", "$2M savings/year", "Real-time tracking"]
      },
      {
        title: "Digital Asset Platform",
        client: "Cryptocurrency Exchange",
        description: "Secure trading and custody solution",
        image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80",
        results: ["$10B+ assets secured", "1M+ daily trades", "Zero breaches"]
      },
      {
        title: "Smart Contract System",
        client: "Legal Tech Company",
        description: "Automated contract execution platform",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80",
        results: ["90% faster execution", "100% compliance", "50% cost reduction"]
      }
    ]
  },
  {
    id: "cloud-security",
    title: "Cloud Security",
    icon: Cloud,
    description: "Secure cloud infrastructure and operations",
    projects: [
      {
        title: "Cloud Migration Security",
        client: "Enterprise SaaS Provider",
        description: "Zero-trust cloud security implementation",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
        results: ["75% incident reduction", "40% cost savings", "99.99% uptime"]
      },
      {
        title: "Multi-Cloud Security",
        client: "Tech Conglomerate",
        description: "Unified security across cloud providers",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80",
        results: ["100% visibility", "60% faster response", "Unified control"]
      },
      {
        title: "Serverless Security",
        client: "FinTech Startup",
        description: "Security for serverless architecture",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
        results: ["Zero vulnerabilities", "30% cost reduction", "Automated security"]
      }
    ]
  },
  {
    id: "iot-security",
    title: "IoT Security",
    icon: Lock,
    description: "Securing connected devices and networks",
    projects: [
      {
        title: "Smart City Security",
        client: "Metropolitan Government",
        description: "IoT infrastructure security system",
        image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80",
        results: ["1M+ devices secured", "90% faster response", "30% energy savings"]
      },
      {
        title: "Industrial IoT Security",
        client: "Manufacturing Giant",
        description: "Security for industrial control systems",
        image: "https://images.unsplash.com/photo-1565515267706-59e0f9d07b48?auto=format&fit=crop&q=80",
        results: ["Zero downtime", "100% visibility", "Predictive maintenance"]
      },
      {
        title: "Healthcare IoT",
        client: "Medical Device Manufacturer",
        description: "Security for medical IoT devices",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
        results: ["FDA compliance", "Real-time monitoring", "Zero compromises"]
      }
    ]
  },
  {
    id: "custom-development",
    title: "Custom Development",
    icon: Code,
    description: "Tailored software solutions",
    projects: [
      {
        title: "Trading Platform",
        client: "Investment Bank",
        description: "High-frequency trading system",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80",
        results: ["Microsecond latency", "1M+ trades/day", "99.999% uptime"]
      },
      {
        title: "Healthcare Platform",
        client: "Telehealth Provider",
        description: "Secure telehealth platform",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
        results: ["HIPAA compliant", "50K+ daily users", "Zero downtime"]
      },
      {
        title: "AI Analytics Dashboard",
        client: "Data Analytics Firm",
        description: "Real-time analytics platform",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
        results: ["Real-time insights", "5TB+ daily processing", "Custom ML models"]
      }
    ]
  }
];

export default function PortfolioPage() {
  const router = useRouter();

  const handleViewDetails = (id: string) => {
    router.push(`/case-studies/${id}`);
  };

  return (
    <div className="min-h-screen pt-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 neon-text">Our Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing our most impactful digital transformation projects across industries
          </p>
        </motion.div>

        <div className="space-y-24">
          {categories.map((category, categoryIndex) => (
            <motion.section
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="space-y-8"
            >
              <div className="flex items-center space-x-4">
                <category.icon className="h-8 w-8 text-primary" />
                <div>
                  <h2 className="text-2xl font-bold cyber-dots">{category.title}</h2>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {category.projects.map((project, projectIndex) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (categoryIndex * 0.1) + (projectIndex * 0.1) }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="h-full bg-background/50 backdrop-blur-sm border-primary/20 hover:neon-border transition-all duration-300">
                      <div className="aspect-video relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <div className="text-sm text-primary mb-2">{project.client}</div>
                        <CardTitle className="cyber-dots">{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {project.results.map((result, i) => (
                            <motion.div
                              key={result}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: (categoryIndex * 0.1) + (projectIndex * 0.1) + (i * 0.1) }}
                              className="flex items-center space-x-2"
                            >
                              <span className="w-2 h-2 bg-primary rounded-full" />
                              <span className="text-sm text-muted-foreground">{result}</span>
                            </motion.div>
                          ))}
                        </div>
                        <Button 
                          className="w-full mt-6 neon-border bg-primary/10 hover:bg-primary/20 group"
                          onClick={() => handleViewDetails(category.id)}
                        >
                          {category.id === 'cybersecurity' && "Explore Security Solutions"}
                          {category.id === 'data-analytics' && "View Analytics Insights"}
                          {category.id === 'blockchain' && "Discover Blockchain Impact"}
                          {category.id === 'cloud-security' && "See Cloud Security Details"}
                          {category.id === 'iot-security' && "Learn IoT Security Success"}
                          {category.id === 'custom-development' && "View Development Case"}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}