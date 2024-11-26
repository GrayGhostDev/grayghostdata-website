"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  Server,
  Database,
  Network,
  Lock,
  User,
  FileText,
  ArrowRight,
  Loader2
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

interface AuditStep {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  progress: number;
  result?: {
    severity: 'low' | 'medium' | 'high' | 'critical';
    findings: string[];
    recommendations: string[];
  };
}

interface AuditCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  steps: AuditStep[];
}

const initialCategories: AuditCategory[] = [
  {
    id: 'network',
    name: 'Network Security',
    icon: Network,
    steps: [
      {
        id: 'port-scan',
        title: 'Port Scanning',
        description: 'Scanning for open ports and vulnerable services',
        status: 'pending',
        progress: 0
      },
      {
        id: 'firewall-check',
        title: 'Firewall Configuration',
        description: 'Analyzing firewall rules and settings',
        status: 'pending',
        progress: 0
      }
    ]
  },
  {
    id: 'system',
    name: 'System Security',
    icon: Server,
    steps: [
      {
        id: 'patch-audit',
        title: 'Patch Management',
        description: 'Checking system patches and updates',
        status: 'pending',
        progress: 0
      },
      {
        id: 'config-review',
        title: 'Configuration Review',
        description: 'Analyzing system configurations',
        status: 'pending',
        progress: 0
      }
    ]
  },
  {
    id: 'data',
    name: 'Data Security',
    icon: Database,
    steps: [
      {
        id: 'encryption-check',
        title: 'Encryption Audit',
        description: 'Verifying data encryption practices',
        status: 'pending',
        progress: 0
      },
      {
        id: 'access-control',
        title: 'Access Control Review',
        description: 'Evaluating data access controls',
        status: 'pending',
        progress: 0
      }
    ]
  }
];

const findings = {
  network: {
    'port-scan': {
      severity: 'high',
      findings: [
        'Open SSH port (22) exposed to public',
        'Unnecessary ports open (e.g., 8080, 3306)',
        'Vulnerable service versions detected'
      ],
      recommendations: [
        'Restrict SSH access to VPN only',
        'Close unnecessary ports',
        'Update service versions'
      ]
    },
    'firewall-check': {
      severity: 'medium',
      findings: [
        'Overly permissive inbound rules',
        'Missing egress filtering',
        'Default allow rules present'
      ],
      recommendations: [
        'Implement strict inbound rules',
        'Configure egress filtering',
        'Change to default deny policy'
      ]
    }
  },
  system: {
    'patch-audit': {
      severity: 'critical',
      findings: [
        'Critical OS patches missing',
        'Outdated software versions',
        'Known vulnerabilities present'
      ],
      recommendations: [
        'Apply missing security patches',
        'Upgrade software versions',
        'Implement regular patch management'
      ]
    },
    'config-review': {
      severity: 'medium',
      findings: [
        'Default credentials unchanged',
        'Unnecessary services running',
        'Weak password policies'
      ],
      recommendations: [
        'Change default credentials',
        'Disable unnecessary services',
        'Strengthen password policies'
      ]
    }
  },
  data: {
    'encryption-check': {
      severity: 'high',
      findings: [
        'Unencrypted data storage',
        'Weak encryption algorithms',
        'Missing encryption in transit'
      ],
      recommendations: [
        'Implement encryption at rest',
        'Update encryption algorithms',
        'Enable TLS for data in transit'
      ]
    },
    'access-control': {
      severity: 'medium',
      findings: [
        'Excessive user permissions',
        'Missing access logs',
        'Inadequate role separation'
      ],
      recommendations: [
        'Implement least privilege',
        'Enable comprehensive logging',
        'Define clear role boundaries'
      ]
    }
  }
};

export function AuditSimulator() {
  const [categories, setCategories] = useState<AuditCategory[]>(initialCategories);
  const [isAuditing, setIsAuditing] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<string>(categories[0].id);
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);

  const startAudit = () => {
    setIsAuditing(true);
    setCompletedSteps([]);
    setCategories(initialCategories);

    categories.forEach((category) => {
      category.steps.forEach((step, stepIndex) => {
        simulateStep(category.id, step.id, stepIndex);
      });
    });
  };

  const simulateStep = (categoryId: string, stepId: string, delay: number) => {
    setTimeout(() => {
      setCategories(prev => prev.map(category => {
        if (category.id === categoryId) {
          return {
            ...category,
            steps: category.steps.map(step => {
              if (step.id === stepId) {
                return { ...step, status: 'running' };
              }
              return step;
            })
          };
        }
        return category;
      }));

      // Simulate progress updates
      const interval = setInterval(() => {
        setCategories(prev => prev.map(category => {
          if (category.id === categoryId) {
            return {
              ...category,
              steps: category.steps.map(step => {
                if (step.id === stepId && step.status === 'running') {
                  const newProgress = step.progress + 10;
                  if (newProgress >= 100) {
                    clearInterval(interval);
                    return {
                      ...step,
                      progress: 100,
                      status: 'completed',
                      result: findings[category.id as keyof typeof findings][step.id as keyof typeof findings[keyof typeof findings]]
                    };
                  }
                  return { ...step, progress: newProgress };
                }
                return step;
              })
            };
          }
          return category;
        }));
      }, 500);

    }, delay * 3000);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'text-red-500';
      case 'high':
        return 'text-orange-500';
      case 'medium':
        return 'text-yellow-500';
      case 'low':
        return 'text-green-500';
      default:
        return 'text-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'failed':
        return <XCircle className="w-4 h-4 text-red-500" />;
      case 'running':
        return <Loader2 className="w-4 h-4 animate-spin" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Security Audit Simulator</h2>
          <p className="text-muted-foreground">
            Simulate a comprehensive security audit of your systems
          </p>
        </div>
        <Button
          onClick={startAudit}
          disabled={isAuditing}
        >
          {isAuditing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Auditing...
            </>
          ) : (
            <>
              <Shield className="mr-2 h-4 w-4" />
              Start Audit
            </>
          )}
        </Button>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Categories</CardTitle>
              <CardDescription>Select audit category</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {categories.map(category => {
                const Icon = category.icon;
                return (
                  <Button
                    key={category.id}
                    variant={currentCategory === category.id ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setCurrentCategory(category.id)}
                  >
                    <div className="flex items-center space-x-2">
                      <Icon className="w-4 h-4" />
                      <span>{category.name}</span>
                    </div>
                  </Button>
                );
              })}
            </CardContent>
          </Card>
        </div>

        <div className="col-span-9">
          <Card>
            <CardHeader>
              <CardTitle>
                {categories.find(c => c.id === currentCategory)?.name} Audit Steps
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {categories
                .find(c => c.id === currentCategory)
                ?.steps.map(step => (
                  <div key={step.id} className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(step.status)}
                          <span className="font-medium">{step.title}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                      <Progress
                        value={step.progress}
                        className="w-[200px]"
                      />
                    </div>

                    {step.result && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="pl-6 border-l-2 border-muted"
                      >
                        <div className="space-y-4">
                          <div>
                            <Badge
                              variant="outline"
                              className={getSeverityColor(step.result.severity)}
                            >
                              {step.result.severity} severity
                            </Badge>
                          </div>

                          <div>
                            <h4 className="font-medium mb-2">Findings:</h4>
                            <ul className="space-y-1">
                              {step.result.findings.map((finding, index) => (
                                <li
                                  key={index}
                                  className="text-sm text-muted-foreground flex items-center space-x-2"
                                >
                                  <AlertTriangle className="w-4 h-4 text-yellow-500" />
                                  <span>{finding}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-medium mb-2">Recommendations:</h4>
                            <ul className="space-y-1">
                              {step.result.recommendations.map((rec, index) => (
                                <li
                                  key={index}
                                  className="text-sm text-muted-foreground flex items-center space-x-2"
                                >
                                  <ArrowRight className="w-4 h-4" />
                                  <span>{rec}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}