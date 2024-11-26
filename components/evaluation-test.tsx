"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import type { ServiceEvaluation, EvaluationQuestion } from "@/lib/evaluation-tests";

interface EvaluationTestProps {
  evaluation: ServiceEvaluation;
  onComplete: (score: number) => void;
}

export function EvaluationTest({ evaluation, onComplete }: EvaluationTestProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(evaluation.questions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [assessmentLevel, setAssessmentLevel] = useState('');

  const currentQuestion = evaluation.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / evaluation.questions.length) * 100;

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = parseInt(value);
    setAnswers(newAnswers);
  };

  const handleNext = async () => {
    if (currentQuestionIndex < evaluation.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      const score = answers.reduce((acc, answer, index) => {
        return acc + (answer === evaluation.questions[index].correctAnswer ? 1 : 0);
      }, 0);

      setIsSubmitting(true);
      try {
        const response = await fetch('/api/evaluation', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            serviceType: evaluation.serviceType,
            score,
            totalQuestions: evaluation.questions.length,
            answers: answers.map((answer, index) => ({
              selected: evaluation.questions[index].options[answer],
              correct: answer === evaluation.questions[index].correctAnswer
            }))
          })
        });

        if (!response.ok) throw new Error('Failed to submit assessment');

        const data = await response.json();
        setRecommendations(data.recommendations);
        setAssessmentLevel(data.level);
        setShowResults(true);
        onComplete(score);

        toast({
          title: "Assessment Complete",
          description: "Your results have been processed successfully.",
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to process assessment results. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  if (showResults) {
    const score = answers.reduce((acc, answer, index) => {
      return acc + (answer === evaluation.questions[index].correctAnswer ? 1 : 0);
    }, 0);
    const percentage = (score / evaluation.questions.length) * 100;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Assessment Results</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted-foreground">Score</span>
              <span className="font-bold">{score}/{evaluation.questions.length}</span>
            </div>
            <Progress value={percentage} className="h-2" />
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Assessment Level: {assessmentLevel}</h3>
                <p className="text-muted-foreground">
                  {percentage >= 75
                    ? "Great job! Your organization shows strong readiness in this area."
                    : percentage >= 50
                    ? "Your organization has a good foundation but there's room for improvement."
                    : "Consider strengthening your capabilities in this area. We can help!"}
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Recommendations:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {recommendations.map((rec, index) => (
                    <li key={index} className="text-muted-foreground">{rec}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Card>

        <div className="space-y-4">
          {evaluation.questions.map((question, index) => (
            <Card key={question.id} className="p-6">
              <div className="space-y-4">
                <h3 className="font-medium">Question {index + 1}</h3>
                <p>{question.question}</p>
                <div className="pl-4 border-l-2 border-primary/20">
                  <p className="text-sm text-muted-foreground">Your answer:</p>
                  <p className={answers[index] === question.correctAnswer ? "text-green-500" : "text-red-500"}>
                    {question.options[answers[index]]}
                  </p>
                  {answers[index] !== question.correctAnswer && (
                    <>
                      <p className="text-sm text-muted-foreground mt-2">Correct answer:</p>
                      <p className="text-green-500">{question.options[question.correctAnswer]}</p>
                    </>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-2">{question.explanation}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            variant="outline"
            onClick={() => {
              setShowResults(false);
              setCurrentQuestionIndex(0);
              setAnswers(Array(evaluation.questions.length).fill(-1));
            }}
          >
            Take Assessment Again
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <Card className="p-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Question {currentQuestionIndex + 1} of {evaluation.questions.length}</h3>
              <Progress value={progress} className="w-24 h-2" />
            </div>
            <p className="text-lg">{currentQuestion.question}</p>
          </div>

          <RadioGroup
            value={answers[currentQuestionIndex]?.toString()}
            onValueChange={handleAnswer}
            className="space-y-3"
          >
            {currentQuestion.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} className="cursor-pointer">{option}</Label>
              </div>
            ))}
          </RadioGroup>

          <div className="flex justify-between pt-4">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={answers[currentQuestionIndex] === -1 || isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : currentQuestionIndex === evaluation.questions.length - 1 ? (
                <>
                  Complete
                  <CheckCircle2 className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
