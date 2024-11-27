"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, Shield, Database, Cpu, Lock, Cloud, Code, ChevronRight, Users, TrendingUp } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const caseStudies = [
  {
    id: 'financial-security',
    title: "Enterprise Security Transformation",
    client: "Global Investment Bank",
    description: "Implemented quantum-resistant encryption and AI-powered threat detection",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
    icon: Shield,
    stats: {
      value: "99.9%",
      label: "Threat detection rate"
    },
    results: [
      "Prevented 150+ potential breaches",
      "Reduced false positives by 60%",
      "Achieved SOC 2 compliance",
      "$50B+ in daily transactions secured"
    ],
    testimonial: {
      quote: "Gray Ghost's solution transformed our security posture. We're now confident in our ability to detect and prevent sophisticated cyber threats.",
      author: "Sarah Chen",
      role: "CISO, Global Investment Bank"
    },
    technologies: ["AI/ML", "Quantum Cryptography", "Zero Trust Architecture"]
  },
  {
    id: 'healthcare-analytics',
    title: "Predictive Healthcare Analytics",
    client: "National Healthcare Network",
    description: "Built real-time patient care optimization platform using advanced analytics",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
    icon: Database,
    stats: {
      value: "45%",
      label: "Faster diagnoses"
    },
    results: [
      "1M+ patient records analyzed",
      "30% reduction in readmissions",
      "40% improvement in care outcomes",
      "$2M annual cost savings"
    ],
    testimonial: {
      quote: "The predictive analytics platform has revolutionized how we deliver patient care. We're seeing better outcomes and significant cost savings.",
      author: "Dr. Michael Roberts",
      role: "Chief Medical Officer"
    },
    technologies: ["Big Data Analytics", "Machine Learning", "HIPAA Compliance"]
  },
  {
    id: 'supply-chain',
    title: "Blockchain Supply Chain",
    client: "Global Logistics Corporation",
    description: "Developed blockchain-based asset tracking and verification system",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80",
    icon: Cpu,
    stats: {
      value: "$2M+",
      label: "Annual savings"
    },
    results: [
      "100% supply chain transparency",
      "Real-time asset tracking",
      "60% faster verification process",
      "Zero counterfeit incidents"
    ],
    testimonial: {
      quote: "The blockchain solution has given us unprecedented visibility into our supply chain. We've eliminated counterfeits and significantly reduced costs.",
      author: "James Wilson",
      role: "VP of Operations"
    },
    technologies: ["Blockchain", "IoT", "Smart Contracts"]
  },
  {
    id: 'fintech-security',
    title: "DeFi Platform Security",
    client: "Leading Cryptocurrency Exchange",
    description: "Implemented comprehensive security for $10B+ in digital assets",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80",
    icon: Lock,
    stats: {
      value: "100%",
      label: "Uptime maintained"
    },
    results: [
      "$10B+ in assets secured",
      "Zero security breaches",
      "50ms transaction latency",
      "1M+ daily transactions"
    ],
    testimonial: {
      quote: "Gray Ghost's security infrastructure has been crucial to our platform's success. Their expertise in DeFi security is unmatched.",
      author: "Alex Zhang",
      role: "CTO, Crypto Exchange"
    },
    technologies: ["Zero-Knowledge Proofs", "Multi-sig Security", "Hardware Security Modules"]
  },
  {
    id: 'cloud-transformation',
    title: "Cloud Security Modernization",
    client: "Enterprise SaaS Provider",
    description: "Modernized cloud infrastructure with zero-trust security architecture",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
    icon: Cloud,
    stats: {
      value: "99.99%",
      label: "Service availability"
    },
    results: [
      "75% reduction in security incidents",
      "Zero data breaches",
      "40% lower cloud costs",
      "5x faster deployments"
    ],
    testimonial: {
      quote: "The zero-trust implementation has dramatically improved our security posture while reducing operational costs.",
      author: "Lisa Martinez",
      role: "Head of Cloud Operations"
    },
    technologies: ["Zero Trust", "Cloud Security", "DevSecOps"]
  },
  {
    id: 'smart-city',
    title: "Smart City Security",
    client: "Metropolitan Government",
    description: "Secured IoT infrastructure for city-wide smart systems",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80",
    icon: Code,
    stats: {
      value: "1M+",
      label: "IoT devices secured"
    },
    results: [
      "100% IoT device visibility",
      "90% faster threat response",
      "30% energy savings",
      "Zero critical breaches"
    ],
    testimonial: {
      quote: "Gray Ghost's IoT security solution has been instrumental in making our smart city initiative a success.",
      author: "David Park",
      role: "Smart City Director"
    },
    technologies: ["IoT Security", "Edge Computing", "AI Analytics"]
  }
];

export function FeaturedCaseStudies() {
  const [activeStudy, setActiveStudy] = useState(caseStudies[0].id);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

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
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how we've helped leading organizations transform their digital security
            and data capabilities.
          </p>
        </motion.div>

        <Tabs
          defaultValue={caseStudies[0].id}
          className="w-full"
          onValueChange={setActiveStudy}
        >
          <TabsList className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-transparent h-auto p-0 mb-8">
            {caseStudies.map((study) => (
              <TabsTrigger
                key={study.id}
                value={study.id}
                className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary relative overflow-hidden group px-6 py-4"
              >
                <motion.div
                  className="absolute inset-0 bg-primary/5 -z-10"
                  initial={false}
                  animate={{
                    scale: activeStudy === study.id ? 1 : 0.95,
                    opacity: activeStudy === study.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                />
                <div className="flex items-center gap-3">
                  <study.icon className="h-5 w-5" />
                  <div className="text-left">
                    <p className="font-semibold">{study.title}</p>
                    <p className="text-sm text-muted-foreground">{study.client}</p>
                  </div>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {caseStudies.map((study) => (
            <TabsContent
              key={study.id}
              value={study.id}
              className="mt-0 focus-visible:outline-none focus-visible:ring-0"
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                <motion.div variants={itemVariants} className="relative h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={study.id === caseStudies[0].id}
                    className="object-cover"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <div className="flex items-center gap-2 mb-4">
                      {study.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-background/20 text-primary-foreground">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-6">
                      <div>
                        <p className="text-3xl font-bold text-primary">{study.stats.value}</p>
                        <p className="text-sm text-primary-foreground/80">{study.stats.label}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                    <p className="text-muted-foreground">{study.description}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      Key Results
                    </h4>
                    <ul className="space-y-3">
                      {study.results.map((result, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-2 text-muted-foreground"
                        >
                          <ChevronRight className="h-4 w-4 text-primary" />
                          {result}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-primary/5 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      Client Testimonial
                    </h4>
                    <blockquote className="text-muted-foreground">
                      "{study.testimonial.quote}"
                      <footer className="mt-2">
                        <p className="font-semibold text-foreground">{study.testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{study.testimonial.role}</p>
                      </footer>
                    </blockquote>
                  </div>

                  <Button
                    onClick={() => router.push(`/case-studies/${study.id}`)}
                    className="w-full sm:w-auto"
                  >
                    View Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}