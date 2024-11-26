"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, ChevronDown, ChevronUp, ArrowRight, Info } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface Feature {
  name: string;
  description: string;
  included: boolean;
}

interface ServiceTier {
  name: string;
  price: string;
  description: string;
  features: Feature[];
  popular?: boolean;
  callToAction: string;
}

const services: ServiceTier[] = [
  {
    name: 'Basic Security',
    price: '$499',
    description: 'Essential security features for small businesses',
    callToAction: 'Start Basic',
    features: [
      {
        name: 'Basic threat monitoring',
        description: '24/5 monitoring of common security threats',
        included: true,
      },
      {
        name: 'Standard encryption',
        description: 'Industry-standard AES-256 encryption',
        included: true,
      },
      {
        name: 'Email support',
        description: 'Response within 24 hours',
        included: true,
      },
      {
        name: 'Weekly reports',
        description: 'Detailed security status reports',
        included: true,
      },
      {
        name: 'Up to 10 users',
        description: 'Suitable for small teams',
        included: true,
      },
      {
        name: '100GB storage',
        description: 'Secure cloud storage',
        included: true,
      }
    ]
  },
  {
    name: 'Advanced Security',
    price: '$999',
    description: 'Comprehensive security for growing organizations',
    popular: true,
    callToAction: 'Get Advanced',
    features: [
      {
        name: '24/7 threat monitoring',
        description: 'Round-the-clock security monitoring',
        included: true,
      },
      {
        name: 'Advanced encryption',
        description: 'Post-quantum cryptography ready',
        included: true,
      },
      {
        name: 'Priority support',
        description: 'Response within 4 hours',
        included: true,
      },
      {
        name: 'Daily reports',
        description: 'Automated daily security briefings',
        included: true,
      },
      {
        name: 'Up to 50 users',
        description: 'Perfect for medium-sized teams',
        included: true,
      },
      {
        name: '500GB storage',
        description: 'Enhanced secure storage capacity',
        included: true,
      }
    ]
  },
  {
    name: 'Enterprise Security',
    price: 'Custom',
    description: 'Tailored security solutions for large enterprises',
    callToAction: 'Contact Sales',
    features: [
      {
        name: 'Real-time threat monitoring',
        description: 'AI-powered instant threat detection',
        included: true,
      },
      {
        name: 'Quantum-safe encryption',
        description: 'Future-proof encryption protocols',
        included: true,
      },
      {
        name: 'Dedicated support team',
        description: 'Personal security consultants',
        included: true,
      },
      {
        name: 'Real-time reporting',
        description: 'Live security dashboards',
        included: true,
      },
      {
        name: 'Unlimited users',
        description: 'Scale without limits',
        included: true,
      },
      {
        name: 'Unlimited storage',
        description: 'Unlimited secure storage',
        included: true,
      }
    ]
  }
];

export function ServiceComparison() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [expandedFeatures, setExpandedFeatures] = useState<boolean>(false);

  const toggleFeatures = () => {
    setExpandedFeatures(!expandedFeatures);
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Choose Your Security Plan</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Select the security package that best fits your organization's needs.
          All plans include our core security features with different levels of support and capabilities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <AnimatePresence mode="wait">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <Card 
                className={cn(
                  "h-full transition-all duration-200",
                  selectedPlan === service.name && "ring-2 ring-primary",
                  service.popular && "scale-105"
                )}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <Badge className="bg-primary">Most Popular</Badge>
                  </div>
                )}
                
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {service.name}
                  </CardTitle>
                  <CardDescription className="space-y-2">
                    <div className="flex items-baseline justify-center space-x-2">
                      <span className="text-3xl font-bold">{service.price}</span>
                      {service.price !== 'Custom' && <span className="text-muted-foreground">/month</span>}
                    </div>
                    <p>{service.description}</p>
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <motion.ul 
                    className="space-y-4"
                    animate={{ height: expandedFeatures ? 'auto' : '300px' }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.1) + (featureIndex * 0.05) }}
                        className="flex items-start space-x-2"
                      >
                        <div className="mt-1">
                          {feature.included ? (
                            <Check className="h-4 w-4 text-green-500" />
                          ) : (
                            <X className="h-4 w-4 text-red-500" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium">{feature.name}</span>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <Info className="h-4 w-4 text-muted-foreground" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>{feature.description}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </motion.ul>
                </CardContent>

                <CardFooter className="flex flex-col space-y-4">
                  <Button 
                    className="w-full"
                    variant={service.popular ? "default" : "outline"}
                    onClick={() => setSelectedPlan(service.name)}
                  >
                    {service.callToAction}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex justify-center">
        <Button
          variant="ghost"
          onClick={toggleFeatures}
          className="text-muted-foreground"
        >
          {expandedFeatures ? (
            <>
              Show Less
              <ChevronUp className="ml-2 h-4 w-4" />
            </>
          ) : (
            <>
              Show All Features
              <ChevronDown className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}