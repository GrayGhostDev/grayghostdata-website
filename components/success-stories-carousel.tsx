"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";

interface SuccessStory {
  id: number;
  title: string;
  description: string;
  clientName: string;
  clientRole: string;
  companyName: string;
  image: string;
  logo: string;
  industry: string;
  caseStudyLink: string;
  results: {
    metric: string;
    value: string;
  }[];
}

const successStories: SuccessStory[] = [
  {
    id: 1,
    title: "Enterprise Security Transformation",
    description: "Implemented comprehensive security measures resulting in zero breaches and 99.9% uptime.",
    clientName: "Sarah Johnson",
    clientRole: "CTO",
    companyName: "TechCorp Solutions",
    image: "/images/success-stories/techcorp.jpg",
    logo: "/images/success-stories/techcorp-logo.png",
    industry: "Technology",
    caseStudyLink: "/case-studies/cybersecurity",
    results: [
      { metric: "Security Incidents", value: "-85%" },
      { metric: "Response Time", value: "-60%" },
      { metric: "Cost Savings", value: "$2M+" },
    ],
  },
  // Add more success stories here
];

export function SuccessStoriesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % successStories.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const navigate = (newDirection: number) => {
    setIsAutoPlaying(false);
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return (prev + 1) % successStories.length;
      }
      return prev === 0 ? successStories.length - 1 : prev - 1;
    });
  };

  const story = successStories[currentIndex];

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-background/50 backdrop-blur-sm rounded-lg border border-primary/20">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="relative h-12 w-48">
                  <OptimizedImage
                    src={story.logo}
                    alt={story.companyName}
                    width={192}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{story.title}</h3>
                  <p className="text-sm text-muted-foreground">{story.industry}</p>
                </div>
              </div>
              <p className="text-lg">{story.description}</p>
              <div className="grid grid-cols-3 gap-4">
                {story.results.map((result, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      {result.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {result.metric}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <OptimizedImage
                    src={story.image}
                    alt={story.clientName}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold">{story.clientName}</div>
                  <div className="text-sm text-muted-foreground">
                    {story.clientRole}, {story.companyName}
                  </div>
                </div>
              </div>
              <Button
                variant="default"
                className="w-full"
                asChild
              >
                <a href={story.caseStudyLink}>View Full Case Study</a>
              </Button>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <OptimizedImage
                src={story.image}
                alt={`${story.companyName} success story`}
                width={960}
                height={540}
                className="object-cover"
                priority={currentIndex === 0}
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2"
        onClick={() => navigate(-1)}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2"
        onClick={() => navigate(1)}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {successStories.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-primary" : "bg-primary/20"
            }`}
            onClick={() => {
              setIsAutoPlaying(false);
              setCurrentIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}
