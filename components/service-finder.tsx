"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Database, Cloud, LineChart } from "lucide-react";

interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    score: {
      cybersecurity: number;
      dataAnalytics: number;
      cloudSecurity: number;
      securityOperations: number;
    };
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "What is your primary concern?",
    options: [
      {
        text: "Protecting sensitive data and systems",
        score: {
          cybersecurity: 3,
          dataAnalytics: 0,
          cloudSecurity: 2,
          securityOperations: 2,
        },
      },
      {
        text: "Understanding and utilizing data insights",
        score: {
          cybersecurity: 0,
          dataAnalytics: 3,
          cloudSecurity: 1,
          securityOperations: 0,
        },
      },
      {
        text: "Securing cloud infrastructure",
        score: {
          cybersecurity: 1,
          dataAnalytics: 0,
          cloudSecurity: 3,
          securityOperations: 1,
        },
      },
      {
        text: "24/7 security monitoring",
        score: {
          cybersecurity: 1,
          dataAnalytics: 0,
          cloudSecurity: 1,
          securityOperations: 3,
        },
      },
    ],
  },
  {
    id: 2,
    text: "What is your organization's size?",
    options: [
      {
        text: "Small (1-50 employees)",
        score: {
          cybersecurity: 2,
          dataAnalytics: 2,
          cloudSecurity: 3,
          securityOperations: 1,
        },
      },
      {
        text: "Medium (51-250 employees)",
        score: {
          cybersecurity: 2,
          dataAnalytics: 2,
          cloudSecurity: 2,
          securityOperations: 2,
        },
      },
      {
        text: "Large (251+ employees)",
        score: {
          cybersecurity: 3,
          dataAnalytics: 3,
          cloudSecurity: 2,
          securityOperations: 3,
        },
      },
    ],
  },
  {
    id: 3,
    text: "What is your current security maturity level?",
    options: [
      {
        text: "Basic/Starting Out",
        score: {
          cybersecurity: 3,
          dataAnalytics: 1,
          cloudSecurity: 2,
          securityOperations: 1,
        },
      },
      {
        text: "Intermediate",
        score: {
          cybersecurity: 2,
          dataAnalytics: 2,
          cloudSecurity: 2,
          securityOperations: 2,
        },
      },
      {
        text: "Advanced",
        score: {
          cybersecurity: 1,
          dataAnalytics: 3,
          cloudSecurity: 3,
          securityOperations: 3,
        },
      },
    ],
  },
];

const services = [
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets.",
    icon: Shield,
    link: "/services/cybersecurity",
  },
  {
    id: "dataAnalytics",
    title: "Data Analytics",
    description: "Transform your data into actionable insights.",
    icon: Database,
    link: "/services/data-analytics",
  },
  {
    id: "cloudSecurity",
    title: "Cloud Security",
    description: "Secure your cloud infrastructure and applications.",
    icon: Cloud,
    link: "/services/cloud-security",
  },
  {
    id: "securityOperations",
    title: "Security Operations",
    description: "24/7 monitoring and incident response.",
    icon: LineChart,
    link: "/services/security-operations",
  },
];

export function ServiceFinder() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({
    cybersecurity: 0,
    dataAnalytics: 0,
    cloudSecurity: 0,
    securityOperations: 0,
  });
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer: typeof questions[0]["options"][0]) => {
    const newScores = {
      cybersecurity: scores.cybersecurity + answer.score.cybersecurity,
      dataAnalytics: scores.dataAnalytics + answer.score.dataAnalytics,
      cloudSecurity: scores.cloudSecurity + answer.score.cloudSecurity,
      securityOperations: scores.securityOperations + answer.score.securityOperations,
    };
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScores({
      cybersecurity: 0,
      dataAnalytics: 0,
      cloudSecurity: 0,
      securityOperations: 0,
    });
    setShowResults(false);
  };

  const getRecommendedServices = () => {
    const sortedServices = Object.entries(scores)
      .sort(([, a], [, b]) => b - a)
      .map(([id]) => services.find((service) => service.id === id)!);

    return sortedServices;
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        {!showResults ? (
          <motion.div
            key="question"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">
                {questions[currentQuestion].text}
              </h2>
              <div className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {questions.length}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="p-6 h-auto text-left"
                  onClick={() => handleAnswer(option)}
                >
                  {option.text}
                </Button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Recommended Services</h2>
              <p className="text-muted-foreground mb-8">
                Based on your answers, here are our recommended services:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {getRecommendedServices().map((service, index) => (
                <Card
                  key={service.id}
                  className={`p-6 ${index === 0 ? "border-primary" : ""}`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {service.description}
                      </p>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="w-full"
                        onClick={() => window.location.href = service.link}
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button
                variant="outline"
                onClick={resetQuiz}
                className="mt-8"
              >
                Start Over
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
