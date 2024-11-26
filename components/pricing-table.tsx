"use client";

import { type ReactElement } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, type LucideIcon } from "lucide-react";

interface PricingFeature {
  text: string;
  highlight: boolean;
}

interface PricingPlan {
  name: string;
  description: string;
  icon: LucideIcon;
  price: string;
  popular?: boolean;
  features: PricingFeature[];
  cta: string;
}

interface PricingTableProps {
  plans: PricingPlan[];
}

export function PricingTable({ plans }: PricingTableProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {plans.map((plan, index) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <Card className={`relative ${plan.popular ? "border-primary" : ""}`}>
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  {plan.icon && <plan.icon className="w-6 h-6 text-primary" />}
                </div>
                {plan.popular && (
                  <div className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
              </div>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div className="mt-4">
                <div className="text-3xl font-bold">
                  ${plan.price}
                  <span className="text-sm font-normal text-muted-foreground">
                    /month
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature.text}
                    className={`flex items-center ${
                      feature.highlight ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    <CheckCircle className="w-5 h-5 mr-2 text-primary" />
                    {feature.text}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                variant={plan.popular ? "default" : "outline"}
                className="w-full"
              >
                {plan.cta}
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
