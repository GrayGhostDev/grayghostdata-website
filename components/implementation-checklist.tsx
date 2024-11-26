"use client";

import { type ReactElement } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ImplementationStep {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface ImplementationChecklistProps {
  steps: ImplementationStep[];
}

export function ImplementationChecklist({ steps }: ImplementationChecklistProps) {
  return (
    <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
      <CardHeader>
        <CardTitle className="cyber-dots">Implementation Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start space-x-4 p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-primary/20"
            >
              <div className="flex-shrink-0">
                <div className="p-2 rounded-full bg-primary/10">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
