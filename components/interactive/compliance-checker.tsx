"use client";

import { useState } from 'react';
import { Shield, CheckCircle, AlertTriangle, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

interface ComplianceRequirement {
  id: string;
  standard: string;
  requirement: string;
  description: string;
  status: 'compliant' | 'non-compliant' | 'partial' | 'not-assessed';
  priority: 'high' | 'medium' | 'low';
  dueDate?: string;
  notes?: string;
}

interface ComplianceFramework {
  id: string;
  name: string;
  description: string;
  requirements: ComplianceRequirement[];
  progress: number;
}

const frameworks: ComplianceFramework[] = [
  {
    id: 'gdpr',
    name: 'GDPR',
    description: 'General Data Protection Regulation compliance requirements',
    progress: 75,
    requirements: [
      {
        id: 'gdpr-1',
        standard: 'GDPR',
        requirement: 'Data Protection Officer',
        description: 'Appoint a Data Protection Officer (DPO)',
        status: 'compliant',
        priority: 'high',
        notes: 'DPO appointed and registered with authorities'
      },
      {
        id: 'gdpr-2',
        standard: 'GDPR',
        requirement: 'Data Processing Register',
        description: 'Maintain a record of data processing activities',
        status: 'partial',
        priority: 'high',
        notes: 'Register created, needs regular updates'
      }
    ]
  },
  {
    id: 'hipaa',
    name: 'HIPAA',
    description: 'Health Insurance Portability and Accountability Act requirements',
    progress: 85,
    requirements: [
      {
        id: 'hipaa-1',
        standard: 'HIPAA',
        requirement: 'Access Controls',
        description: 'Implement technical policies and procedures for electronic information systems',
        status: 'compliant',
        priority: 'high',
        notes: 'Access control system implemented and monitored'
      },
      {
        id: 'hipaa-2',
        standard: 'HIPAA',
        requirement: 'Audit Controls',
        description: 'Implement hardware, software, and/or procedural mechanisms',
        status: 'partial',
        priority: 'medium',
        notes: 'Audit mechanisms in place, enhancement needed'
      }
    ]
  },
  {
    id: 'iso27001',
    name: 'ISO 27001',
    description: 'Information Security Management System standard',
    progress: 60,
    requirements: [
      {
        id: 'iso-1',
        standard: 'ISO 27001',
        requirement: 'Information Security Policy',
        description: 'Develop and maintain information security policy',
        status: 'compliant',
        priority: 'high',
        notes: 'Policy documented and reviewed annually'
      },
      {
        id: 'iso-2',
        standard: 'ISO 27001',
        requirement: 'Risk Assessment',
        description: 'Conduct regular risk assessments',
        status: 'non-compliant',
        priority: 'high',
        notes: 'Risk assessment process needs implementation'
      }
    ]
  }
];

export function ComplianceChecker() {
  const [selectedFramework, setSelectedFramework] = useState<string>(frameworks[0].id);
  const [searchTerm, setSearchTerm] = useState('');

  const currentFramework = frameworks.find(f => f.id === selectedFramework);

  const getStatusColor = (status: ComplianceRequirement['status']) => {
    switch (status) {
      case 'compliant':
        return 'bg-green-500';
      case 'non-compliant':
        return 'bg-red-500';
      case 'partial':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: ComplianceRequirement['status']) => {
    switch (status) {
      case 'compliant':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'non-compliant':
        return <X className="w-4 h-4 text-red-500" />;
      case 'partial':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      default:
        return <Shield className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Compliance Checker</h2>
          <p className="text-muted-foreground">
            Monitor and manage compliance across multiple frameworks
          </p>
        </div>
        <Button variant="outline">Generate Report</Button>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Frameworks</CardTitle>
              <CardDescription>Select compliance framework</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {frameworks.map(framework => (
                <Button
                  key={framework.id}
                  variant={selectedFramework === framework.id ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setSelectedFramework(framework.id)}
                >
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>{framework.name}</span>
                  </div>
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="col-span-9">
          {currentFramework && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{currentFramework.name}</CardTitle>
                      <CardDescription>{currentFramework.description}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{currentFramework.progress}%</div>
                      <div className="text-sm text-muted-foreground">Compliance Rate</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Progress value={currentFramework.progress} className="h-2" />
                </CardContent>
              </Card>

              <div className="space-y-4">
                {currentFramework.requirements.map(req => (
                  <Card key={req.id}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <div className="space-y-1">
                        <CardTitle className="text-lg">{req.requirement}</CardTitle>
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(req.status)}
                          <Badge variant="secondary">{req.priority} priority</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">
                        {req.description}
                      </p>
                      {req.notes && (
                        <p className="text-sm border-l-2 border-muted pl-2">
                          {req.notes}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}