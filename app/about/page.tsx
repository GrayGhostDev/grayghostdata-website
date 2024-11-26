"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Brain,
  Zap,
  Award,
  TrendingUp,
  Lock,
  Database,
  Cloud,
  LineChart,
  Server,
  Network,
  ShieldCheck,
  Check,
  ArrowRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { SuccessStoriesCarousel } from "@/components/success-stories-carousel";
import { ServiceFinder } from "@/components/service-finder";
import { StructuredData } from "@/components/seo/structured-data-component";

const stats = [
  {
    label: "Success Rate",
    value: "99.9%",
    icon: TrendingUp,
    description: "Project completion success rate",
  },
  {
    label: "Data Protected",
    value: "500TB+",
    icon: Shield,
    description: "Client data under our protection",
  },
  {
    label: "Threats Blocked",
    value: "1M+",
    icon: ShieldCheck,
    description: "Security threats prevented annually",
  },
  {
    label: "Client Satisfaction",
    value: "98%",
    icon: Award,
    description: "Average client satisfaction score",
  },
];

const services = [
  {
    title: "Cybersecurity",
    description: "Enterprise-grade security solutions with 24/7 monitoring and threat detection.",
    icon: Lock,
    features: ["Threat Detection & Response", "Security Assessments", "Compliance Management"],
  },
  {
    title: "Data Analytics",
    description: "Transform raw data into actionable insights using advanced analytics.",
    icon: Database,
    features: ["Predictive Analytics", "Business Intelligence", "Data Visualization"],
  },
  {
    title: "Cloud Security",
    description: "Secure cloud infrastructure and migration services.",
    icon: Cloud,
    features: ["Cloud Security Posture", "Zero Trust Architecture", "Cloud Compliance"],
  },
  {
    title: "Security Operations",
    description: "24/7 security monitoring and incident response.",
    icon: ShieldCheck,
    features: ["SOC as a Service", "Incident Response", "Threat Hunting"],
  },
];

const technologies = [
  {
    category: "Security",
    items: ["Palo Alto Networks", "CrowdStrike", "Splunk", "Carbon Black"],
    icon: Shield,
  },
  {
    category: "Cloud",
    items: ["AWS", "Azure", "Google Cloud", "CloudFlare"],
    icon: Cloud,
  },
  {
    category: "Data",
    items: ["Snowflake", "Databricks", "MongoDB", "PostgreSQL"],
    icon: Database,
  },
  {
    category: "Infrastructure",
    items: ["Kubernetes", "Docker", "Terraform", "Ansible"],
    icon: Server,
  },
];

const industries = [
  {
    name: "Financial Services",
    description: "Securing financial data and transactions with advanced cybersecurity measures.",
    icon: Shield,
  },
  {
    name: "Healthcare",
    description: "HIPAA-compliant solutions for protecting sensitive patient data.",
    icon: ShieldCheck,
  },
  {
    name: "Technology",
    description: "Cutting-edge security solutions for tech companies and startups.",
    icon: Network,
  },
  {
    name: "Government",
    description: "Compliance-focused security solutions for government agencies.",
    icon: Lock,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutPage() {
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
              Securing Your Digital Future
            </h1>
            <p className="text-xl text-muted-foreground">
              Gray Ghost Data delivers enterprise-grade cybersecurity and advanced 
              data analytics solutions to protect and optimize your digital assets.
            </p>
          </motion.div>

          {/* Structured Data */}
          <StructuredData
            type="Organization"
            data={{
              "@type": "Organization",
              name: "Gray Ghost Data",
              url: "https://grayghostdata.com",
              logo: "https://grayghostdata.com/images/logo.png",
              description: "Gray Ghost Data provides expert cybersecurity, data analytics, and cloud solutions for businesses.",
              sameAs: [
                "https://twitter.com/grayghostdata",
                "https://linkedin.com/company/grayghostdata",
                "https://github.com/grayghostdata"
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Tech Street",
                addressLocality: "San Francisco",
                addressRegion: "CA",
                postalCode: "94105",
                addressCountry: "US"
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-415-555-0123",
                contactType: "customer service"
              }
            }}
          />

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  {stat.icon && <stat.icon className="w-6 h-6 text-primary" aria-hidden="true" />}
                </div>
                <div className="text-3xl font-bold mb-2" aria-label={`${stat.value} ${stat.label}`}>{stat.value}</div>
                <div className="text-sm font-medium mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background/50" aria-labelledby="services-heading">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 id="services-heading" className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text">
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to your security and data needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  {service.icon && <service.icon className="w-6 h-6 text-primary" aria-hidden="true" />}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <Check className="w-4 h-4 mr-2 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized solutions for diverse industry needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-primary/20"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <industry.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                <p className="text-muted-foreground">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-24 bg-background/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text">
              Our Technology Stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Best-in-class technologies powering our solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-lg bg-background/50 backdrop-blur-sm border border-primary/20"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <tech.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{tech.category}</h3>
                <ul className="space-y-2">
                  {tech.items.map((item) => (
                    <li key={item} className="text-muted-foreground text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background/50 backdrop-blur-sm border-y border-primary/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text">
              Ready to Secure Your Digital Assets?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can help protect and optimize your business with our comprehensive security and data solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <a href="/contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/services">Explore Services</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
