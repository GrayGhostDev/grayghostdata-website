"use client";

import { type ReactElement } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Shield, Database, Code, Brain, Blocks, Lock, Zap, Cloud, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ImplementationChecklist } from "@/components/implementation-checklist";
import { OptimizedImage } from "@/components/ui/optimized-image";

const iconMap = {
  Shield,
  Database,
  Code,
  Brain,
  Blocks,
  Lock,
  Zap,
  Cloud,
  Server
};

interface CaseStudyContentProps {
  study: {
    title: string;
    client: string;
    description: string;
    image: string;
    challenge: string;
    solution: string;
    results: string[];
    implementation: Array<{
      title: string;
      description: string;
      icon: keyof typeof iconMap;
    }>;
    testimonial?: {
      quote: string;
      author: string;
      role: string;
      company: string;
    };
    technologies: string[];
    metrics: Array<{
      label: string;
      value: string;
      trend?: "up" | "down";
    }>;
    service: string;
  };
}

export function CaseStudyContent({ study }: CaseStudyContentProps) {
  const router = useRouter();

  return (
    <div className="min-h-screen pt-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button
          variant="ghost"
          className="mb-8"
          onClick={() => router.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h1 className="text-4xl font-bold mb-4">{study.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{study.description}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {study.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {study.metrics.map((metric) => (
              <Card key={metric.label} className="bg-background/50 backdrop-blur-sm border-primary/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm text-muted-foreground">
                    {metric.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">{metric.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle>Challenge</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{study.challenge}</p>
            </CardContent>
          </Card>

          <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle>Solution</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{study.solution}</p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Implementation Process</h2>
          <ImplementationChecklist steps={study.implementation.map(step => ({...step, icon: iconMap[step.icon]}))} />
        </div>

        {study.testimonial && (
          <div className="mb-16">
            <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-1">
                    <blockquote className="text-lg font-medium mb-4">
                      "{study.testimonial.quote}"
                    </blockquote>
                    <div>
                      <div className="font-semibold">{study.testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">
                        {study.testimonial.role}, {study.testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <div className="text-center">
          <Link href={`/services/${study.service}`}>
            <Button>
              View All {study.service.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")} Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}