"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, AlertTriangle, Globe, Activity, Maximize2, Minimize2, PauseCircle, PlayCircle, X, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface Location {
  name: string;
  coords: [number, number];
}

interface Attack {
  id: string;
  from: Location;
  to: Location;
  type: string;
  severity: 'low' | 'medium' | 'high';
  timestamp: Date;
}

const locations: Location[] = [
  { name: 'New York', coords: [-74.006, 40.7128] },
  { name: 'London', coords: [-0.1276, 51.5074] },
  { name: 'Tokyo', coords: [139.6917, 35.6895] },
  { name: 'Sydney', coords: [151.2093, -33.8688] },
  { name: 'Singapore', coords: [103.8198, 1.3521] },
  { name: 'San Francisco', coords: [-122.4194, 37.7749] },
  { name: 'Berlin', coords: [13.4050, 52.5200] },
  { name: 'Mumbai', coords: [72.8777, 19.0760] },
  { name: 'São Paulo', coords: [-46.6333, -23.5505] },
  { name: 'Dubai', coords: [55.2708, 25.2048] },
];

const attackTypes = [
  { name: 'SQL Injection', description: 'Malicious SQL code injection attempt' },
  { name: 'DDoS', description: 'Distributed Denial of Service attack' },
  { name: 'Ransomware', description: 'Ransomware encryption attempt' },
  { name: 'Phishing', description: 'Sophisticated phishing campaign' },
  { name: 'Zero-day', description: 'Unknown vulnerability exploitation' },
  { name: 'Brute Force', description: 'Password brute force attempt' },
  { name: 'XSS', description: 'Cross-site scripting attack' },
  { name: 'Data Breach', description: 'Unauthorized data access attempt' }
];

export function ThreatMap() {
  const [attacks, setAttacks] = useState<Attack[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedAttack, setSelectedAttack] = useState<Attack | null>(null);
  const [stats, setStats] = useState({
    total: 0,
    high: 0,
    medium: 0,
    low: 0
  });
  const mapRef = useRef<HTMLDivElement>(null);

  const generateRandomAttack = (): Attack => {
    const fromLocation = locations[Math.floor(Math.random() * locations.length)];
    let toLocation;
    do {
      toLocation = locations[Math.floor(Math.random() * locations.length)];
    } while (toLocation === fromLocation);
    
    const attackType = attackTypes[Math.floor(Math.random() * attackTypes.length)];
    const severities: Array<'low' | 'medium' | 'high'> = ['low', 'medium', 'high'];
    
    return {
      id: Math.random().toString(36).substr(2, 9),
      from: fromLocation,
      to: toLocation,
      type: attackType.name,
      severity: severities[Math.floor(Math.random() * severities.length)],
      timestamp: new Date()
    };
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (!isPaused) {
      interval = setInterval(() => {
        const newAttack = generateRandomAttack();
        setAttacks(prev => {
          const newAttacks = [...prev, newAttack];
          if (newAttacks.length > 15) {
            newAttacks.shift();
          }
          return newAttacks;
        });
        setStats(prev => ({
          total: prev.total + 1,
          high: prev.high + (newAttack.severity === 'high' ? 1 : 0),
          medium: prev.medium + (newAttack.severity === 'medium' ? 1 : 0),
          low: prev.low + (newAttack.severity === 'low' ? 1 : 0)
        }));
      }, 2000);
    }

    return () => clearInterval(interval);
  }, [isPaused]);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'hsl(var(--destructive))';
      case 'medium':
        return 'hsl(var(--warning))';
      default:
        return 'hsl(var(--primary))';
    }
  };

  const coordsToPosition = (coords: [number, number]): [number, number] => {
    const [lon, lat] = coords;
    const x = (lon + 180) / 360;
    const y = (lat + 90) / 180;
    return [x * 100, y * 100];
  };

  return (
    <div 
      className={cn(
        "relative bg-background/50 backdrop-blur-sm border border-primary/20 rounded-lg overflow-hidden transition-all duration-300",
        isExpanded ? "fixed inset-4 z-50" : "w-full aspect-[2/1]"
      )}
    >
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      {/* World Map SVG */}
      <div className="absolute inset-0 opacity-20">
        <svg viewBox="0 0 1000 500" className="w-full h-full">
          <path
            d="M150,50 L850,50 L850,450 L150,450 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          {/* Add more detailed world map paths here */}
        </svg>
      </div>

      {/* Location Markers */}
      <div className="absolute inset-0">
        {locations.map((location) => {
          const [x, y] = coordsToPosition(location.coords);
          return (
            <TooltipProvider key={location.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    className="absolute w-2 h-2 bg-primary rounded-full transform -translate-x-1 -translate-y-1"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{location.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>

      {/* Attack Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <AnimatePresence>
          {attacks.map((attack) => {
            const [fromX, fromY] = coordsToPosition(attack.from.coords);
            const [toX, toY] = coordsToPosition(attack.to.coords);
            return (
              <motion.g
                key={attack.id}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <motion.line
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2 }}
                  x1={`${fromX}%`}
                  y1={`${fromY}%`}
                  x2={`${toX}%`}
                  y2={`${toY}%`}
                  stroke={getSeverityColor(attack.severity)}
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <motion.circle
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  cx={`${toX}%`}
                  cy={`${toY}%`}
                  r="4"
                  fill={getSeverityColor(attack.severity)}
                  onClick={() => setSelectedAttack(attack)}
                  className="cursor-pointer"
                />
              </motion.g>
            );
          })}
        </AnimatePresence>
      </svg>

      {/* Controls */}
      <div className="absolute top-4 left-4 flex items-center space-x-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsPaused(!isPaused)}
        >
          {isPaused ? (
            <PlayCircle className="h-4 w-4" />
          ) : (
            <PauseCircle className="h-4 w-4" />
          )}
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <Minimize2 className="h-4 w-4" />
          ) : (
            <Maximize2 className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Stats Panel */}
      <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm border border-primary/20 rounded-lg p-4">
        <h3 className="text-sm font-bold mb-2 flex items-center">
          <Shield className="h-4 w-4 mr-2 text-primary" />
          Threat Statistics
        </h3>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>Total Attacks:</div>
          <div className="font-bold">{stats.total}</div>
          <div>High Severity:</div>
          <div className="font-bold text-destructive">{stats.high}</div>
          <div>Medium Severity:</div>
          <div className="font-bold text-warning">{stats.medium}</div>
          <div>Low Severity:</div>
          <div className="font-bold text-primary">{stats.low}</div>
        </div>
      </div>

      {/* Recent Attacks List */}
      <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-sm border border-primary/20 rounded-lg p-4">
        <h3 className="text-sm font-bold mb-2 flex items-center">
          <Activity className="h-4 w-4 mr-2 text-primary" />
          Recent Attacks
        </h3>
        <div className="space-y-2">
          <AnimatePresence>
            {attacks.slice(-5).map((attack) => (
              <motion.div
                key={attack.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex items-center justify-between text-xs"
              >
                <div className="flex items-center space-x-2">
                  <AlertTriangle
                    className={cn(
                      "h-3 w-3",
                      attack.severity === 'high' && "text-destructive",
                      attack.severity === 'medium' && "text-warning",
                      attack.severity === 'low' && "text-primary"
                    )}
                  />
                  <span>{attack.type}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-xs">
                    {attack.from.name} → {attack.to.name}
                  </Badge>
                  <span className="text-muted-foreground">
                    {attack.timestamp.toLocaleTimeString()}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Attack Details Modal */}
      <AnimatePresence>
        {selectedAttack && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute inset-x-4 bottom-4 p-4 bg-background/95 backdrop-blur-sm border border-primary/20 rounded-lg shadow-lg"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold">Attack Details</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedAttack(null)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-muted-foreground">Type:</div>
              <div>{selectedAttack.type}</div>
              <div className="text-muted-foreground">From:</div>
              <div>{selectedAttack.from.name}</div>
              <div className="text-muted-foreground">To:</div>
              <div>{selectedAttack.to.name}</div>
              <div className="text-muted-foreground">Severity:</div>
              <div className={cn(
                selectedAttack.severity === 'high' && "text-destructive",
                selectedAttack.severity === 'medium' && "text-warning",
                selectedAttack.severity === 'low' && "text-primary"
              )}>
                {selectedAttack.severity.toUpperCase()}
              </div>
              <div className="text-muted-foreground">Time:</div>
              <div>{selectedAttack.timestamp.toLocaleString()}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}