"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Database, Code, Brain, Blocks, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSearchParams, useRouter } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface ServiceArea {
  id: string;
  title: string;
  icon: any;
  questions: Array<{
    id: string;
    type: 'text' | 'textarea' | 'radio' | 'checkbox' | 'number';
    question: string;
    options?: string[];
    required?: boolean;
  }>;
}

const serviceAreas: ServiceArea[] = [
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Solutions',
    icon: Shield,
    questions: [
      {
        id: 'current_security',
        type: 'radio',
        question: 'What is your current security infrastructure?',
        options: [
          'Basic firewall and antivirus',
          'Enterprise security suite',
          'Custom security solution',
          'No formal security measures'
        ],
        required: true
      },
      {
        id: 'compliance',
        type: 'checkbox',
        question: 'Which compliance standards do you need to meet?',
        options: ['GDPR', 'HIPAA', 'PCI DSS', 'SOC 2', 'ISO 27001'],
      },
      {
        id: 'incidents',
        type: 'number',
        question: 'How many security incidents have you experienced in the past year?',
        required: true
      },
      {
        id: 'concerns',
        type: 'textarea',
        question: 'What are your primary security concerns?',
        required: true
      }
    ]
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics & Profiling',
    icon: Database,
    questions: [
      {
        id: 'data_volume',
        type: 'radio',
        question: 'What is your monthly data processing volume?',
        options: [
          'Less than 1TB',
          '1-10TB',
          '10-100TB',
          'More than 100TB'
        ],
        required: true
      },
      {
        id: 'data_sources',
        type: 'checkbox',
        question: 'What types of data sources do you need to analyze?',
        options: [
          'Customer data',
          'Transaction logs',
          'IoT sensors',
          'Social media',
          'Website analytics'
        ]
      },
      {
        id: 'real_time',
        type: 'radio',
        question: 'Do you need real-time analytics capabilities?',
        options: ['Yes', 'No', 'Not sure'],
        required: true
      }
    ]
  },
  {
    id: 'software-dev',
    title: 'Custom Software Development',
    icon: Code,
    questions: [
      {
        id: 'project_type',
        type: 'radio',
        question: 'What type of software project do you need?',
        options: [
          'Web Application',
          'Mobile App',
          'Enterprise Software',
          'API/Integration',
          'Legacy System Modernization'
        ],
        required: true
      },
      {
        id: 'features',
        type: 'checkbox',
        question: 'Which features are essential for your project?',
        options: [
          'User Authentication',
          'Payment Processing',
          'Real-time Updates',
          'Data Analytics',
          'API Integration',
          'Mobile Support'
        ]
      },
      {
        id: 'timeline',
        type: 'radio',
        question: 'What is your expected timeline?',
        options: [
          '1-3 months',
          '3-6 months',
          '6-12 months',
          'More than 12 months'
        ],
        required: true
      },
      {
        id: 'requirements',
        type: 'textarea',
        question: 'Please describe your project requirements:',
        required: true
      }
    ]
  },
  {
    id: 'blockchain',
    title: 'RWA Tokenization',
    icon: Blocks,
    questions: [
      {
        id: 'asset_type',
        type: 'radio',
        question: 'What type of assets do you want to tokenize?',
        options: [
          'Real Estate',
          'Financial Instruments',
          'Physical Assets',
          'Intellectual Property'
        ],
        required: true
      },
      {
        id: 'blockchain_features',
        type: 'checkbox',
        question: 'Which blockchain features are important to you?',
        options: [
          'Smart Contracts',
          'Cross-chain Compatibility',
          'High Transaction Speed',
          'Low Transaction Costs',
          'Regulatory Compliance'
        ]
      },
      {
        id: 'token_volume',
        type: 'number',
        question: 'Estimated number of tokens to be issued:',
        required: true
      }
    ]
  }
];

export default function GetStartedPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam && serviceAreas.some(s => s.id === serviceParam)) {
      setSelectedService(serviceParam);
    }
  }, [searchParams]);

  const currentService = serviceAreas.find(s => s.id === selectedService);
  const currentQuestion = currentService?.questions[currentQuestionIndex];

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setAnswers({});
    setCurrentQuestionIndex(0);
  };

  const handleAnswer = (value: any) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion?.id ?? '']: value
    }));
  };

  const handleNext = () => {
    if (currentService && currentQuestionIndex < currentService.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    // Here you would typically send the answers to your backend
    console.log('Submitted answers:', answers);
    // For now, just show a success message
    alert('Thank you! We will contact you shortly.');
    router.push('/');
  };

  return (
    <div className="min-h-screen pt-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 neon-text">Get Started</h1>
          <p className="text-xl text-muted-foreground">
            Tell us about your needs and we'll create a custom solution for you
          </p>
        </motion.div>

        <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
          <CardContent className="pt-6">
            {!selectedService ? (
              <div className="space-y-6">
                <CardTitle className="mb-4">Select a Service Area</CardTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {serviceAreas.map((service, index) => (
                    <motion.button
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleServiceSelect(service.id)}
                      className="p-4 rounded-lg border border-primary/20 hover:border-primary transition-colors text-left"
                    >
                      <service.icon className="h-6 w-6 mb-2 text-primary" />
                      <h3 className="font-medium">{service.title}</h3>
                    </motion.button>
                  ))}
                </div>
              </div>
            ) : currentService && currentQuestion ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-8">
                  <Button
                    variant="ghost"
                    onClick={() => setSelectedService(null)}
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Services
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    Question {currentQuestionIndex + 1} of {currentService.questions.length}
                  </span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">{currentQuestion.question}</h3>

                  {currentQuestion.type === 'text' && (
                    <Input
                      value={answers[currentQuestion.id] || ''}
                      onChange={(e) => handleAnswer(e.target.value)}
                      required={currentQuestion.required}
                    />
                  )}

                  {currentQuestion.type === 'textarea' && (
                    <Textarea
                      value={answers[currentQuestion.id] || ''}
                      onChange={(e) => handleAnswer(e.target.value)}
                      required={currentQuestion.required}
                    />
                  )}

                  {currentQuestion.type === 'radio' && currentQuestion.options && (
                    <RadioGroup
                      value={answers[currentQuestion.id] || ''}
                      onValueChange={handleAnswer}
                    >
                      {currentQuestion.options.map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <RadioGroupItem value={option} id={option} />
                          <Label htmlFor={option}>{option}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  )}

                  {currentQuestion.type === 'checkbox' && currentQuestion.options && (
                    <div className="space-y-2">
                      {currentQuestion.options.map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <Checkbox
                            id={option}
                            checked={
                              (answers[currentQuestion.id] || []).includes(option)
                            }
                            onCheckedChange={(checked) => {
                              const currentAnswers = answers[currentQuestion.id] || [];
                              handleAnswer(
                                checked
                                  ? [...currentAnswers, option]
                                  : currentAnswers.filter((a: string) => a !== option)
                              );
                            }}
                          />
                          <Label htmlFor={option}>{option}</Label>
                        </div>
                      ))}
                    </div>
                  )}

                  {currentQuestion.type === 'number' && (
                    <Input
                      type="number"
                      value={answers[currentQuestion.id] || ''}
                      onChange={(e) => handleAnswer(Number(e.target.value))}
                      required={currentQuestion.required}
                    />
                  )}
                </div>

                <div className="flex justify-between pt-6">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentQuestionIndex === 0}
                  >
                    Previous
                  </Button>
                  {currentQuestionIndex === currentService.questions.length - 1 ? (
                    <Button onClick={handleSubmit}>Submit</Button>
                  ) : (
                    <Button onClick={handleNext}>
                      Next
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            ) : null}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}