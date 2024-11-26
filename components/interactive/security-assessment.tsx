"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, ChevronRight, Shield, AlertTriangle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface Question {
  id: string;
  text: string;
  category: string;
  options: string[];
  weight: number;
}

const questions: Question[] = [
  {
    id: 'auth',
    text: 'What authentication methods do you currently employ?',
    category: 'Authentication',
    options: [
      'Password only',
      'Two-factor authentication (2FA)',
      'Multi-factor authentication (MFA)',
      'Biometric authentication'
    ],
    weight: 15
  },
  {
    id: 'encryption',
    text: 'What level of data encryption do you use?',
    category: 'Data Security',
    options: [
      'No encryption',
      'Basic encryption (AES-128)',
      'Strong encryption (AES-256)',
      'End-to-end encryption'
    ],
    weight: 20
  },
  {
    id: 'backup',
    text: 'How frequently do you backup critical data?',
    category: 'Data Recovery',
    options: [
      'No regular backups',
      'Monthly backups',
      'Weekly backups',
      'Daily automated backups'
    ],
    weight: 10
  },
  {
    id: 'monitoring',
    text: 'What security monitoring capabilities do you have?',
    category: 'Monitoring',
    options: [
      'No monitoring',
      'Basic logging',
      'SIEM solution',
      '24/7 SOC monitoring'
    ],
    weight: 25
  },
  {
    id: 'incident',
    text: 'Do you have an incident response plan?',
    category: 'Incident Response',
    options: [
      'No plan',
      'Basic guidelines',
      'Documented procedures',
      'Tested and updated plan'
    ],
    weight: 30
  }
];

export function SecurityAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: string, answerIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let totalScore = 0;
    let maxScore = 0;

    questions.forEach(question => {
      const answerIndex = answers[question.id] ?? 0;
      totalScore += (answerIndex / 3) * question.weight;
      maxScore += question.weight;
    });

    return (totalScore / maxScore) * 100;
  };

  const getRecommendations = () => {
    const score = calculateScore();
    if (score < 40) {
      return [
        'Implement multi-factor authentication immediately',
        'Establish basic security monitoring',
        'Create incident response procedures',
        'Deploy data encryption solutions'
      ];
    } else if (score < 70) {
      return [
        'Upgrade to enterprise-grade security solutions',
        'Enhance monitoring capabilities',
        'Regular security training for staff',
        'Implement advanced threat detection'
      ];
    } else {
      return [
        'Consider zero-trust architecture',
        'Implement AI-powered threat detection',
        'Regular penetration testing',
        'Advanced security automation'
      ];
    }
  };

  return (
    <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Brain className="h-5 w-5 text-primary" />
          <span>AI Security Assessment</span>
        </CardTitle>
        <CardDescription>
          Evaluate your current security posture with our AI-powered assessment
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!showResults ? (
          <div className="space-y-6">
            <div className="mb-8">
              <Progress value={(currentQuestion / questions.length) * 100} />
              <p className="text-sm text-muted-foreground mt-2">
                Question {currentQuestion + 1} of {questions.length}
              </p>
            </div>

            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <div className="mb-6">
                <span className="text-sm text-primary mb-2 block">
                  {questions[currentQuestion].category}
                </span>
                <h3 className="text-lg font-medium">
                  {questions[currentQuestion].text}
                </h3>
              </div>

              <div className="grid gap-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="justify-start h-auto py-4 px-6 text-left"
                    onClick={() => handleAnswer(questions[currentQuestion].id, index)}
                  >
                    <ChevronRight className="h-4 w-4 mr-2 text-primary" />
                    {option}
                  </Button>
                ))}
              </div>
            </motion.div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="text-center">
              <div className="inline-block p-4 rounded-full bg-primary/10 mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Assessment Complete</h3>
              <p className="text-muted-foreground">
                Your security score: {calculateScore().toFixed(1)}%
              </p>
            </div>

            <div className="grid gap-4">
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <h4 className="font-medium mb-2 flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-2 text-primary" />
                  Recommended Actions
                </h4>
                <ul className="space-y-2">
                  {getRecommendations().map((rec, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                      {rec}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            <Button
              className="w-full"
              onClick={() => {
                setCurrentQuestion(0);
                setAnswers({});
                setShowResults(false);
              }}
            >
              Start New Assessment
            </Button>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
}