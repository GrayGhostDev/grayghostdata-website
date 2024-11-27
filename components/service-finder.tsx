"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Database, Cloud, LineChart } from "lucide-react";

interface ServiceFinderProps {
  title: string;
  description: string;
}

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

export function ServiceFinder({ title, description }: ServiceFinderProps) {
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
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>

      <AnimatePresence mode="wait">
        {!showResults ? (
          <motion.div
            key="question"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                {questions[currentQuestion].text}
              </h3>
              <div className="grid gap-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="justify-start h-auto py-4 px-6 text-left"
                    onClick={() => handleAnswer(option)}
                  >
                    {option.text}
                  </Button>
                ))}
              </div>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Card className="p-8">
              {(() => {
                const sortedServices = getRecommendedServices();
                const service = sortedServices[0];
                return (
                  <>
                    <div className="mx-auto w-16 h-16 mb-6 text-primary">
                      <service.icon className="w-full h-full" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-8">
                      {service.description}
                    </p>
                    <Button asChild>
                      <a href={service.link}>Learn More</a>
                    </Button>
                  </>
                );
              })()}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="text-center">
        <Button
          variant="outline"
          onClick={resetQuiz}
          className="mt-8"
        >
          Start Over
        </Button>
      </div>
    </div>
  );
}
