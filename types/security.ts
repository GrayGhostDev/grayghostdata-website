export interface SecurityPolicy {
  id: string;
  policyName: string;
  description: string;
  category: string;
  status: 'Active' | 'Inactive' | 'Draft' | 'Archived';
  lastUpdated: string;
  priority: 'High' | 'Medium' | 'Low';
  compliance: string[];
  controls: string[];
}

export interface SecurityMetric {
  id: string;
  label: string;
  value: number;
  trend: 'up' | 'down' | 'stable';
  status: 'good' | 'warning' | 'critical';
  icon: React.ElementType;
  format?: 'percentage' | 'number' | 'time';
  description: string;
}

export interface SecurityEvent {
  id: string;
  type: 'warning' | 'success' | 'info' | 'error';
  message: string;
  timestamp: string;
  details?: string;
  source?: string;
}

export interface SecurityRecommendation {
  id: string;
  title: string;
  priority: 'high' | 'medium' | 'low';
  description: string;
  impact: string;
  implemented: boolean;
}
