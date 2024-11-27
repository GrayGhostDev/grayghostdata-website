"use client";

import React from 'react';
import {
  Shield,
  Database,
  Brain,
  Network,
  Lock,
  Cloud,
  LineChart,
  Code,
  GitMerge,
  ShieldAlert,
  Search,
} from "lucide-react";

export type IconName =
  | 'shield'
  | 'database'
  | 'brain'
  | 'network'
  | 'lock'
  | 'cloud'
  | 'line-chart'
  | 'code'
  | 'git-merge'
  | 'shield-alert'
  | 'search';

interface IconProps {
  name: IconName;
  className?: string;
}

const iconMap: Record<IconName, React.ComponentType<any>> = {
  shield: Shield,
  database: Database,
  brain: Brain,
  network: Network,
  lock: Lock,
  cloud: Cloud,
  'line-chart': LineChart,
  code: Code,
  'git-merge': GitMerge,
  'shield-alert': ShieldAlert,
  search: Search,
};

export function Icon({ name, className }: IconProps) {
  const IconComponent = iconMap[name];
  if (!IconComponent) {
    console.error(`Icon '${name}' not found in iconMap`);
    return null;
  }
  return <IconComponent className={className} />;
}
