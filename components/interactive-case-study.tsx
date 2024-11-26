"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, LineChart } from "lucide-react";

interface CaseStudy {
  title: string;
  description: string;
  results: string[];
  industry: string;
}

interface InteractiveCaseStudyProps {
  caseStudies: CaseStudy[];
}

export function InteractiveCaseStudy({ caseStudies }: InteractiveCaseStudyProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = caseStudies.length - 1;
      if (nextIndex >= caseStudies.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const currentStudy = caseStudies[currentIndex];

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => paginate(-1)}
          className="z-10"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <h3 className="text-2xl font-bold text-center">Case Studies</h3>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => paginate(1)}
          className="z-10"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      <div className="overflow-hidden relative h-[500px]">
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
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute w-full"
          >
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>{currentStudy.title}</span>
                  <span className="text-sm text-muted-foreground">
                    {currentStudy.industry}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">{currentStudy.description}</p>
                <div className="space-y-4">
                  <h4 className="font-semibold flex items-center gap-2">
                    <LineChart className="h-5 w-5" />
                    Key Results
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentStudy.results.map((result, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 bg-muted rounded-lg"
                      >
                        {result}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-4 gap-2">
        {caseStudies.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            className={`w-2 h-2 rounded-full p-0 ${
              index === currentIndex ? "bg-primary" : "bg-muted"
            }`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}
