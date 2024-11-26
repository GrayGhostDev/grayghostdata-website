"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { EvaluationTest } from "@/components/evaluation-test";
import { evaluationTests } from "@/lib/evaluation-tests";
import { useService } from "@/components/service-provider";
import { ArrowRight, Shield, Database, Cloud, Binary, Brain, Code, Briefcase } from "lucide-react";

const serviceIcons = {
  'cybersecurity': Shield,
  'cloud': Cloud,
  'ai-and-ml': Brain,
  'data-analytics': Database,
  'software-development': Code,
  'consulting': Briefcase
} as const;

export function ServiceEvaluation() {
  const { serviceType } = useService();
  const [showTest, setShowTest] = useState(false);
  const [testScore, setTestScore] = useState<number | null>(null);

  const evaluation = evaluationTests.find(test => test.id === serviceType);
  const ServiceIcon = serviceIcons[serviceType as keyof typeof serviceIcons] || Shield;

  if (!evaluation) {
    return null;
  }

  const handleComplete = (score: number) => {
    setTestScore(score);
    // You can add analytics or other functionality here
  };

  if (showTest) {
    return (
      <div className="mt-8">
        <EvaluationTest
          evaluation={evaluation}
          onComplete={handleComplete}
        />
      </div>
    );
  }

  return (
    <Card className="p-6 mt-8">
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-primary/10 rounded-lg">
          <ServiceIcon className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">{evaluation.title}</h3>
          <p className="text-muted-foreground mb-4">{evaluation.description}</p>
          <Button onClick={() => setShowTest(true)}>
            Start Evaluation <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
