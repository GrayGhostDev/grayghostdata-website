"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  RefreshCw
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ThreatEvent {
  id: string;
  timestamp: Date;
  type: 'malware' | 'intrusion' | 'anomaly' | 'policy_violation';
  severity: 'critical' | 'high' | 'medium' | 'low';
  source: string;
  description: string;
  status: 'active' | 'investigating' | 'resolved';
}

interface ThreatStats {
  activeThreats: number;
  resolvedToday: number;
  averageResolutionTime: number;
  criticalCount: number;
  threatLevel: number;
}

const generateMockThreatEvents = (): ThreatEvent[] => {
  const types = ['malware', 'intrusion', 'anomaly', 'policy_violation'];
  const severities = ['critical', 'high', 'medium', 'low'];
  const sources = ['Network', 'Endpoint', 'Cloud', 'Email'];
  const statuses = ['active', 'investigating', 'resolved'];

  return Array.from({ length: 10 }, (_, i) => ({
    id: `threat-${i}`,
    timestamp: new Date(Date.now() - Math.random() * 86400000),
    type: types[Math.floor(Math.random() * types.length)] as ThreatEvent['type'],
    severity: severities[Math.floor(Math.random() * severities.length)] as ThreatEvent['severity'],
    source: sources[Math.floor(Math.random() * sources.length)],
    description: `Potential ${types[Math.floor(Math.random() * types.length)]} detected from ${sources[Math.floor(Math.random() * sources.length)]}`,
    status: statuses[Math.floor(Math.random() * statuses.length)] as ThreatEvent['status']
  }));
};

const calculateThreatStats = (events: ThreatEvent[]): ThreatStats => {
  const activeThreats = events.filter(e => e.status === 'active').length;
  const resolvedToday = events.filter(e => 
    e.status === 'resolved' && 
    e.timestamp.getTime() > Date.now() - 86400000
  ).length;
  
  const criticalCount = events.filter(e => e.severity === 'critical').length;
  
  // Calculate threat level (0-100) based on active threats and their severity
  const threatLevel = Math.min(100, Math.round(
    (activeThreats * 10) + (criticalCount * 20)
  ));

  return {
    activeThreats,
    resolvedToday,
    averageResolutionTime: Math.round(Math.random() * 120), // Mock average resolution time in minutes
    criticalCount,
    threatLevel
  };
};

export function ThreatMonitor() {
  const [events, setEvents] = useState<ThreatEvent[]>([]);
  const [stats, setStats] = useState<ThreatStats | null>(null);
  const [filter, setFilter] = useState<'all' | 'active' | 'resolved'>('all');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshData = () => {
    setIsRefreshing(true);
    const newEvents = generateMockThreatEvents();
    setEvents(newEvents);
    setStats(calculateThreatStats(newEvents));
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  useEffect(() => {
    refreshData();
    const interval = setInterval(refreshData, 30000);
    return () => clearInterval(interval);
  }, []);

  const getSeverityColor = (severity: ThreatEvent['severity']) => {
    switch (severity) {
      case 'critical': return 'text-red-500';
      case 'high': return 'text-orange-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  const getStatusIcon = (status: ThreatEvent['status']) => {
    switch (status) {
      case 'active': return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'investigating': return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'resolved': return <CheckCircle className="h-4 w-4 text-green-500" />;
    }
  };

  const filteredEvents = events.filter(event => {
    if (filter === 'active') return event.status === 'active';
    if (filter === 'resolved') return event.status === 'resolved';
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Threat Monitor</h2>
          <p className="text-muted-foreground">Real-time security threat monitoring and analysis</p>
        </div>
        <Button
          onClick={refreshData}
          variant="outline"
          className={isRefreshing ? 'animate-spin' : ''}
        >
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh
        </Button>
      </div>

      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Threats</p>
                  <h3 className="text-2xl font-bold">{stats.activeThreats}</h3>
                </div>
                <AlertTriangle className={`h-8 w-8 ${stats.activeThreats > 0 ? 'text-red-500' : 'text-green-500'}`} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Resolved Today</p>
                  <h3 className="text-2xl font-bold">{stats.resolvedToday}</h3>
                </div>
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg. Resolution Time</p>
                  <h3 className="text-2xl font-bold">{stats.averageResolutionTime}m</h3>
                </div>
                <Clock className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Threat Level</p>
                  <h3 className="text-2xl font-bold">{stats.threatLevel}%</h3>
                </div>
                <Activity className="h-8 w-8 text-orange-500" />
              </div>
              <Progress value={stats.threatLevel} className="mt-3" />
            </CardContent>
          </Card>
        </div>
      )}

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Recent Events</CardTitle>
            <Select value={filter} onValueChange={(value: any) => setFilter(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Events</SelectItem>
                <SelectItem value="active">Active Threats</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <AnimatePresence>
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex items-center justify-between p-4 rounded-lg border"
                >
                  <div className="flex items-center space-x-4">
                    {getStatusIcon(event.status)}
                    <div>
                      <p className="font-medium">{event.description}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="outline">{event.source}</Badge>
                        <span className="text-sm text-muted-foreground">
                          {event.timestamp.toLocaleTimeString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Badge className={getSeverityColor(event.severity)}>
                    {event.severity}
                  </Badge>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
