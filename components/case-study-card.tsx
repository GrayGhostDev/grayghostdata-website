"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CaseStudyCardProps {
  title: string;
  description: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  imageUrl?: string;
  className?: string;
}

export function CaseStudyCard({
  title,
  description,
  industry,
  challenge,
  solution,
  results,
  technologies,
  imageUrl,
  className,
}: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className={cn("overflow-hidden", className)}>
        {imageUrl && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <Badge variant="outline" className="text-sm">
              {industry}
            </Badge>
          </div>
          <CardTitle className="text-2xl mb-2">{title}</CardTitle>
          <CardDescription className="text-lg">{description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-2 text-lg">The Challenge</h4>
            <p className="text-muted-foreground">{challenge}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-lg">Our Solution</h4>
            <p className="text-muted-foreground">{solution}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-lg">Key Results</h4>
            <ul className="space-y-2">
              {results.map((result, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span className="text-muted-foreground">{result}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-lg">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
