"use client";

import { EvaluationTest } from "@/components/evaluation-test";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import type { ServiceEvaluation } from "@/lib/evaluation-tests";

interface EvaluationContentProps {
  evaluation: ServiceEvaluation | undefined;
}

export function EvaluationContent({ evaluation }: EvaluationContentProps) {
  if (!evaluation) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Evaluation Not Found</h1>
        <p className="text-muted-foreground mb-4">
          Sorry, we couldn't find the evaluation test you're looking for.
        </p>
        <Button asChild>
          <a href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </a>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Button
          variant="ghost"
          asChild
          className="mb-6"
        >
          <a href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </a>
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{evaluation.title}</h1>
          <p className="text-muted-foreground">{evaluation.description}</p>
        </div>

        <EvaluationTest
          evaluation={evaluation}
          onComplete={(score: number) => {
            console.log(`Evaluation completed with score: ${score}`);
          }}
        />
      </div>
    </div>
  );
}
