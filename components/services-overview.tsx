"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { 
  Shield, Database, Code, Lock, Cloud, HeartPulse,
  Search, AlertTriangle, FileCheck, BookOpen,
  Network, Fingerprint, Brain, BarChart3, 
  Workflow, Blocks, Key, Coins
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Shield,
    title: "Advanced Threat Detection",
    description: "AI-powered security monitoring and threat hunting",
    features: [
      "Zero-day threat prevention",
      "Behavioral analytics",
      "Machine learning detection",
      "Real-time monitoring"
    ],
    category: "Security"
  },
  {
    icon: AlertTriangle,
    title: "Incident Response",
    description: "24/7 emergency response and recovery services",
    features: [
      "Breach investigation",
      "Malware analysis",
      "System recovery",
      "Post-incident analysis"
    ],
    category: "Security"
  },
  {
    icon: Search,
    title: "Security Assessments",
    description: "Comprehensive security auditing and testing",
    features: [
      "Penetration testing",
      "Vulnerability scanning",
      "Risk assessment",
      "Security architecture review"
    ],
    category: "Assessment"
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Advanced data analysis and visualization",
    features: [
      "Predictive analytics",
      "Business intelligence",
      "Data visualization",
      "Custom reporting"
    ],
    category: "Analytics"
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Custom AI and machine learning solutions",
    features: [
      "Model development",
      "Algorithm optimization",
      "Neural networks",
      "Deep learning"
    ],
    category: "AI"
  },
  {
    icon: Blocks,
    title: "RWA Tokenization",
    description: "Secure asset tokenization solutions",
    features: [
      "Smart contracts",
      "Token standards",
      "Asset verification",
      "Blockchain integration"
    ],
    category: "Blockchain"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <Card className="h-full group hover:shadow-lg hover:shadow-primary/5 transition-shadow duration-300">
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <div className="p-2 bg-primary/5 rounded-lg group-hover:bg-primary/10 transition-colors">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
              {service.category}
            </Badge>
          </div>
          <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
            {service.title}
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            {service.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {service.features.map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: (index * 0.1) + (i * 0.1) }}
                className="flex items-center text-sm text-muted-foreground"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-primary/50 mr-2" />
                {feature}
              </motion.li>
            ))}
          </ul>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: (index * 0.1) + 0.4 }}
            className="mt-4"
          >
            <Button variant="ghost" className="w-full group-hover:bg-primary/5">
              Learn More
              <motion.div
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                →
              </motion.div>
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export function ServicesOverview() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/50">
      <div ref={containerRef} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive cybersecurity and data solutions to protect and 
            empower your business in the digital age.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}