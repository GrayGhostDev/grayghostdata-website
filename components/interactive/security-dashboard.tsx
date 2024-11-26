"use client";

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield, AlertTriangle, CheckCircle, Activity, Lock, Users, Zap,
  Server, FileCheck, Bug, ArrowUp, ArrowDown, Globe, LineChart,
  Bell, X, ExternalLink, RefreshCw, Terminal
} from 'lucide-react';
import {
  Card, CardContent, CardHeader, CardTitle, CardDescription
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

// Import interactive components
import { AuditSimulator } from './audit-simulator';
import { ComplianceChecker } from './compliance-checker';
import { PricingCalculator } from './pricing-calculator';
import { ROICalculator } from './roi-calculator';
import { SecurityAssessment } from './security-assessment';
import { ServiceComparison } from './service-comparison';
import { TerminalConsole } from './terminal-console';
import { ThreatMap } from './threat-map';
import { ThreatMonitor } from './threat-monitor';
import { VulnerabilityScanner } from './vulnerability-scanner';

interface SecurityMetric {
  id: string;
  label: string;
  value: number;
  trend: 'up' | 'down' | 'stable';
  status: 'good' | 'warning' | 'critical';
  icon: React.ElementType;
  format?: 'percentage' | 'number' | 'time';
  description: string;
}

interface SecurityEvent {
  id: string;
  type: 'warning' | 'success' | 'info' | 'error';
  message: string;
  timestamp: string;
  details?: string;
  source?: string;
}

interface SecurityRecommendation {
  id: string;
  title: string;
  priority: 'high' | 'medium' | 'low';
  description: string;
  impact: string;
  implemented: boolean;
}

interface DashboardState {
  metrics: SecurityMetric[];
  events: SecurityEvent[];
  recommendations: SecurityRecommendation[];
  lastUpdated: Date;
  activeService: string | null;
}

const initialMetrics: SecurityMetric[] = [
  {
    id: 'security-score',
    label: 'Security Score',
    value: 92,
    trend: 'up',
    status: 'good',
    icon: Shield,
    format: 'percentage',
    description: 'Overall security posture',
  },
  {
    id: 'threat-detection',
    label: 'Threat Detection Rate',
    value: 99.9,
    trend: 'stable',
    status: 'good',
    icon: AlertTriangle,
    format: 'percentage',
    description: 'Successful threat identifications',
  },
  {
    id: 'response-time',
    label: 'Avg Response Time',
    value: 1.5,
    trend: 'down',
    status: 'good',
    icon: Zap,
    format: 'time',
    description: 'Average incident response time',
  },
  {
    id: 'uptime',
    label: 'System Uptime',
    value: 99.99,
    trend: 'stable',
    status: 'good',
    icon: Server,
    format: 'percentage',
    description: 'System availability',
  },
  {
    id: 'vulnerabilities',
    label: 'Active Vulnerabilities',
    value: 3,
    trend: 'down',
    status: 'warning',
    icon: Bug,
    format: 'number',
    description: 'Known security vulnerabilities',
  },
  {
    id: 'compliance',
    label: 'Compliance Score',
    value: 98,
    trend: 'up',
    status: 'good',
    icon: FileCheck,
    format: 'percentage',
    description: 'Regulatory compliance status',
  },
  {
    id: 'data-encrypted',
    label: 'Data Encrypted',
    value: 100,
    trend: 'stable',
    status: 'good',
    icon: Lock,
    format: 'percentage',
    description: 'Data encryption coverage',
  },
  {
    id: 'active-users',
    label: 'Active Users',
    value: 245,
    trend: 'up',
    status: 'good',
    icon: Users,
    format: 'number',
    description: 'Currently active system users',
  },
];

const initialEvents: SecurityEvent[] = [
  {
    id: '1',
    type: 'warning',
    message: 'Unusual login attempt detected',
    timestamp: '2 mins ago',
    source: 'Authentication System',
    details: 'Multiple failed login attempts from IP 192.168.1.100',
  },
  {
    id: '2',
    type: 'success',
    message: 'Security patch successfully applied',
    timestamp: '15 mins ago',
    source: 'System Updates',
    details: 'Critical security patch KB123456 applied to all systems',
  },
  {
    id: '3',
    type: 'info',
    message: 'Scheduled security scan completed',
    timestamp: '1 hour ago',
    source: 'Security Scanner',
    details: 'Full system scan completed with no critical findings',
  },
  {
    id: '4',
    type: 'error',
    message: 'Failed backup detected',
    timestamp: '2 hours ago',
    source: 'Backup System',
    details: 'Incremental backup failed due to insufficient storage',
  },
];

const initialRecommendations: SecurityRecommendation[] = [
  {
    id: 'rec-1',
    title: 'Enable Multi-Factor Authentication',
    priority: 'high',
    description: 'Implement MFA across all critical systems and user accounts',
    impact: 'Reduces unauthorized access risks by 99%',
    implemented: false
  },
  {
    id: 'rec-2',
    title: 'Update Firewall Rules',
    priority: 'medium',
    description: 'Review and optimize firewall configurations',
    impact: 'Strengthens network security perimeter',
    implemented: false
  },
  {
    id: 'rec-3',
    title: 'Regular Security Training',
    priority: 'high',
    description: 'Conduct monthly security awareness training for all employees',
    impact: 'Reduces human-error related incidents by 60%',
    implemented: false
  }
];

export function SecurityDashboard() {
  const [dashboardState, setDashboardState] = useState<DashboardState>({
    metrics: initialMetrics,
    events: initialEvents,
    recommendations: initialRecommendations,
    lastUpdated: new Date(),
    activeService: null
  });

  const [activeTab, setActiveTab] = useState('overview');
  const [isSimulating, setIsSimulating] = useState(false);

  // Simulate real-time updates
  useEffect(() => {
    if (!isSimulating) return;

    const interval = setInterval(() => {
      setDashboardState(prev => {
        // Simulate metric changes
        const updatedMetrics: SecurityMetric[] = prev.metrics.map(metric => ({
          ...metric,
          value: Math.random() > 0.5 ? metric.value + Math.random() * 10 : metric.value - Math.random() * 10,
          trend: Math.random() > 0.7 ? 'up' : Math.random() > 0.3 ? 'stable' : 'down' as const,
        }));

        // Simulate new security events
        const newEvent: SecurityEvent | null = Math.random() > 0.7 ? {
          id: `evt-${Date.now()}`,
          type: Math.random() > 0.5 ? 'warning' as const : 'info' as const,
          message: `Detected unusual activity from ${Math.random().toString(36).substring(7)}`,
          timestamp: new Date().toISOString(),
          source: 'Real-time Monitor'
        } : null;

        const newState: DashboardState = {
          ...prev,
          metrics: updatedMetrics,
          events: newEvent ? [newEvent, ...prev.events.slice(0, 9)] : prev.events,
          lastUpdated: new Date()
        };
        return newState;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isSimulating]);

  const handleExport = () => {
    const exportData = {
      metrics: dashboardState.metrics,
      events: dashboardState.events,
      recommendations: dashboardState.recommendations,
      generatedAt: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `security-report-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const toggleRecommendation = (id: string) => {
    setDashboardState(prev => ({
      ...prev,
      recommendations: prev.recommendations.map(rec =>
        rec.id === id ? { ...rec, implemented: !rec.implemented } : rec
      )
    }));
  };

  const eventsByType = useMemo(() => {
    return dashboardState.events.reduce((acc, event) => {
      acc[event.type] = (acc[event.type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }, [dashboardState.events]);

  const formatValue = (metric: SecurityMetric) => {
    switch (metric.format) {
      case 'percentage':
        return `${metric.value.toFixed(1)}%`;
      case 'time':
        return `${metric.value}s`;
      default:
        return metric.value.toFixed(0);
    }
  };

  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return <ArrowUp className="h-4 w-4 text-green-500" />;
      case 'down':
        return <ArrowDown className="h-4 w-4 text-red-500" />;
      default:
        return <Activity className="h-4 w-4 text-blue-500" />;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Security Dashboard</h2>
        <div className="flex space-x-2">
          <Button
            variant={isSimulating ? "destructive" : "default"}
            onClick={() => setIsSimulating(!isSimulating)}
            className="flex items-center space-x-2"
          >
            {isSimulating ? (
              <>
                <X className="w-4 h-4" />
                <span>Stop Simulation</span>
              </>
            ) : (
              <>
                <RefreshCw className="w-4 h-4" />
                <span>Start Real-time Simulation</span>
              </>
            )}
          </Button>
          <Button
            variant="outline"
            onClick={handleExport}
            className="flex items-center space-x-2"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Export Report</span>
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="threats">Threats</TabsTrigger>
          <TabsTrigger value="vulnerabilities">Vulnerabilities</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
          <TabsTrigger value="policies">Policies</TabsTrigger>
          <TabsTrigger value="assets">Assets</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {dashboardState.metrics.map(metric => (
              <Card key={metric.id}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {metric.label}
                  </CardTitle>
                  <metric.icon className={cn(
                    "h-4 w-4",
                    metric.status === 'good' && "text-green-500",
                    metric.status === 'warning' && "text-yellow-500",
                    metric.status === 'critical' && "text-red-500"
                  )} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {formatValue(metric)}
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    {getTrendIcon(metric.trend)}
                    <span>{metric.description}</span>
                  </div>
                  <Progress
                    value={metric.value}
                    className="mt-2"
                    indicatorClassName={cn(
                      metric.status === 'good' && "bg-green-500",
                      metric.status === 'warning' && "bg-yellow-500",
                      metric.status === 'critical' && "bg-red-500"
                    )}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="threats">
          <ThreatMonitor />
        </TabsContent>

        <TabsContent value="vulnerabilities">
          <VulnerabilityScanner />
        </TabsContent>

        <TabsContent value="compliance">
          <ComplianceChecker />
        </TabsContent>

        <TabsContent value="policies">
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Security Policies</CardTitle>
                <CardDescription>
                  Manage and enforce security policies across your organization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Policy management component coming soon...
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="assets">
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Asset Management</CardTitle>
                <CardDescription>
                  Track and manage security assets and resources
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Asset management component coming soon...
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reports">
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Security Reports</CardTitle>
                <CardDescription>
                  Generate and view detailed security reports
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Reporting component coming soon...
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="settings">
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>
                  Configure security dashboard preferences and notifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Settings component coming soon...
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Service Modal */}
      <Dialog open={!!dashboardState.activeService} onOpenChange={() => setDashboardState(prev => ({ ...prev, activeService: null }))}>
        <DialogContent className="max-w-4xl h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {dashboardState.activeService === 'audit' && 'Security Audit Simulator'}
              {dashboardState.activeService === 'compliance' && 'Compliance Checker'}
              {dashboardState.activeService === 'pricing' && 'Pricing Calculator'}
              {dashboardState.activeService === 'roi' && 'ROI Calculator'}
              {dashboardState.activeService === 'assessment' && 'Security Assessment'}
              {dashboardState.activeService === 'comparison' && 'Service Comparison'}
              {dashboardState.activeService === 'terminal' && 'Terminal Console'}
              {dashboardState.activeService === 'threat-map' && 'Threat Map'}
            </DialogTitle>
          </DialogHeader>
          
          {dashboardState.activeService === 'audit' && <AuditSimulator />}
          {dashboardState.activeService === 'compliance' && <ComplianceChecker />}
          {dashboardState.activeService === 'pricing' && <PricingCalculator />}
          {dashboardState.activeService === 'roi' && <ROICalculator />}
          {dashboardState.activeService === 'assessment' && <SecurityAssessment />}
          {dashboardState.activeService === 'comparison' && <ServiceComparison />}
          {dashboardState.activeService === 'terminal' && <TerminalConsole />}
          {dashboardState.activeService === 'threat-map' && <ThreatMap />}
        </DialogContent>
      </Dialog>
    </div>
  );
}