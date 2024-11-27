"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icon, type IconName } from '@/components/ui/icon';

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: IconName;
  features: string[];
  technologies: string[];
  learnMoreHref: string;
  index: number;
}

export function ServiceCard({
  title,
  description,
  iconName,
  features,
  technologies,
  learnMoreHref,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full bg-background/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
        <CardHeader>
          <motion.div 
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Icon 
              name={iconName}
              className="w-6 h-6 text-primary"
            />
          </motion.div>
          <CardTitle className="text-2xl bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text">
            {title}
          </CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-2">Key Features</h4>
            <ul className="space-y-2">
              {features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index * 0.1) + (i * 0.05) }}
                  className="flex items-center text-sm text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index * 0.1) + (i * 0.05) }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge 
                    variant="secondary" 
                    className="bg-primary/5 hover:bg-primary/10 transition-colors"
                  >
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full group">
            <a href={learnMoreHref} className="flex items-center justify-center">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
