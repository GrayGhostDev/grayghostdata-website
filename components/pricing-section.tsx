"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, HelpCircle, ArrowRight, Calendar, CreditCard, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";

interface Feature {
  text: string;
  tooltip: string;
  highlight: boolean;
}

interface PricingPlan {
  name: string;
  priceMonthly: string;
  priceAnnual: string;
  savings?: string;
  description: string;
  features: Feature[];
  popular: boolean;
  cta: string;
  icon: any;
}

interface PricingSectionProps {
  plans?: PricingPlan[];
}

const defaultPricingPlans: PricingPlan[] = [
  {
    name: "Security Assessment",
    priceMonthly: "2,500",
    priceAnnual: "25,000",
    savings: "5,000",
    description: "Comprehensive security evaluation for small to medium businesses",
    features: [
      {
        text: "Vulnerability Assessment",
        tooltip: "Thorough scan and analysis of system vulnerabilities",
        highlight: true
      },
      {
        text: "Security Architecture Review",
        tooltip: "Evaluation of your security infrastructure and recommendations",
        highlight: true
      },
      {
        text: "Compliance Gap Analysis",
        tooltip: "Review of compliance status with industry standards",
        highlight: false
      },
      {
        text: "Risk Assessment Report",
        tooltip: "Detailed report of security risks and mitigation strategies",
        highlight: false
      },
      {
        text: "Executive Summary",
        tooltip: "High-level overview of findings and recommendations",
        highlight: false
      }
    ],
    popular: false,
    cta: "Schedule Assessment",
    icon: Calendar
  },
  {
    name: "Managed Security",
    priceMonthly: "4,999",
    priceAnnual: "49,990",
    savings: "9,998",
    description: "Enterprise-grade security operations and threat management",
    features: [
      {
        text: "24/7 Security Operations Center",
        tooltip: "Round-the-clock monitoring and threat detection by security experts",
        highlight: true
      },
      {
        text: "Advanced Threat Detection",
        tooltip: "AI-powered threat detection and behavioral analysis",
        highlight: true
      },
      {
        text: "Incident Response & Recovery",
        tooltip: "Rapid incident response with detailed recovery procedures",
        highlight: true
      },
      {
        text: "Compliance Management",
        tooltip: "Continuous compliance monitoring and reporting",
        highlight: true
      },
      {
        text: "Security Awareness Training",
        tooltip: "Regular security training and phishing simulations",
        highlight: true
      },
      {
        text: "Vulnerability Management",
        tooltip: "Continuous vulnerability scanning and patch management",
        highlight: true
      },
      {
        text: "Cloud Security Monitoring",
        tooltip: "Multi-cloud security monitoring and configuration management",
        highlight: true
      },
      {
        text: "Executive Reporting",
        tooltip: "Monthly executive reports and security metrics",
        highlight: true
      }
    ],
    popular: true,
    cta: "Contact Sales",
    icon: Shield
  },
  {
    name: "Enterprise Security",
    priceMonthly: "Custom",
    priceAnnual: "Custom",
    description: "Tailored security solutions for large organizations",
    features: [
      {
        text: "Custom Security Architecture",
        tooltip: "Tailored security infrastructure design",
        highlight: true
      },
      {
        text: "Advanced Threat Protection",
        tooltip: "Enterprise-grade security measures and protocols",
        highlight: true
      },
      {
        text: "Dedicated Security Team",
        tooltip: "Assigned team of security experts",
        highlight: true
      },
      {
        text: "Custom Integration",
        tooltip: "Integration with existing security infrastructure",
        highlight: false
      },
      {
        text: "Compliance Management",
        tooltip: "Comprehensive compliance management and reporting",
        highlight: false
      },
      {
        text: "Priority Support",
        tooltip: "24/7 priority support and incident response",
        highlight: false
      }
    ],
    popular: false,
    cta: "Contact Sales",
    icon: CreditCard
  }
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

export function PricingSection({ plans = defaultPricingPlans }: PricingSectionProps) {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text">
            Pricing Plans
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the right plan for your needs
          </p>
          
          <div className="flex items-center justify-center mt-8 gap-4">
            <span className={`text-sm ${!isAnnual ? 'text-primary' : 'text-muted-foreground'}`}>Monthly</span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-primary"
            />
            <span className={`text-sm ${isAnnual ? 'text-primary' : 'text-muted-foreground'}`}>
              Annual
              <Badge variant="secondary" className="ml-2 bg-primary/10 text-primary">
                Save up to 20%
              </Badge>
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="relative"
            >
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full"
                >
                  Most Popular
                </motion.div>
              )}
              
              <Card className={`relative h-full flex flex-col ${
                plan.popular 
                  ? 'border-primary shadow-lg shadow-primary/10' 
                  : 'border-border hover:border-primary/40'
              } transition-all duration-300`}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <plan.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={isAnnual ? 'annual' : 'monthly'}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="mb-6"
                    >
                      <span className="text-4xl font-bold">
                        ${isAnnual ? plan.priceAnnual : plan.priceMonthly}
                      </span>
                      {plan.priceMonthly !== "Custom" && (
                        <span className="text-muted-foreground">
                          /{isAnnual ? 'year' : 'month'}
                        </span>
                      )}
                      {isAnnual && plan.savings && (
                        <div className="mt-2">
                          <Badge variant="secondary" className="bg-green-500/10 text-green-500">
                            Save ${plan.savings}/year
                          </Badge>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                  
                  <ul className="space-y-4">
                    {plan.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <Check className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                          feature.highlight ? 'text-primary' : 'text-muted-foreground'
                        }`} />
                        <span className={`text-sm ${
                          feature.highlight ? 'text-foreground' : 'text-muted-foreground'
                        }`}>
                          {feature.text}
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle className="inline-block w-4 h-4 ml-1 text-muted-foreground/50" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="w-[200px] text-sm">{feature.tooltip}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full group ${plan.popular ? '' : 'variant-outline'}`}
                    asChild
                  >
                    <a href={`/get-started?plan=${encodeURIComponent(plan.name.toLowerCase().replace(/\s+/g, '-'))}`} className="flex items-center justify-center">
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
