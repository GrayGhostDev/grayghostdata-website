"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Calculator,
  DollarSign,
  TrendingUp,
  Shield,
  Clock,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  LineChart
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ROIMetrics {
  implementationCost: number;
  annualCost: number;
  riskReduction: number;
  productivityGain: number;
  timeframe: number;
}

interface ROIResults {
  totalCost: number;
  totalBenefit: number;
  netBenefit: number;
  roi: number;
  paybackPeriod: number;
}

const calculateROI = (metrics: ROIMetrics): ROIResults => {
  const totalCost = metrics.implementationCost + (metrics.annualCost * metrics.timeframe);
  
  // Calculate risk reduction benefit
  const averageBreachCost = 3800000; // Average cost of a data breach
  const riskReductionBenefit = (averageBreachCost * (metrics.riskReduction / 100)) * metrics.timeframe;
  
  // Calculate productivity benefit
  const averageEmployeeCost = 75000; // Average annual employee cost
  const employeeCount = 100; // Assumed number of employees
  const productivityBenefit = (averageEmployeeCost * employeeCount * (metrics.productivityGain / 100)) * metrics.timeframe;
  
  const totalBenefit = riskReductionBenefit + productivityBenefit;
  const netBenefit = totalBenefit - totalCost;
  const roi = (netBenefit / totalCost) * 100;
  const paybackPeriod = totalCost / (totalBenefit / metrics.timeframe);

  return {
    totalCost,
    totalBenefit,
    netBenefit,
    roi,
    paybackPeriod
  };
};

export function ROICalculator() {
  const [metrics, setMetrics] = useState<ROIMetrics>({
    implementationCost: 100000,
    annualCost: 25000,
    riskReduction: 60,
    productivityGain: 15,
    timeframe: 3
  });

  const [results, setResults] = useState<ROIResults | null>(null);
  const [showAdvanced, setShowAdvanced] = useState(false);

  useEffect(() => {
    setResults(calculateROI(metrics));
  }, [metrics]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Security ROI Calculator</h2>
        <p className="text-muted-foreground">
          Calculate the return on investment for security implementations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Input Parameters</CardTitle>
            <CardDescription>Adjust the values to calculate ROI</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label>Implementation Cost</Label>
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-4 h-4 text-muted-foreground" />
                  <Input
                    type="number"
                    value={metrics.implementationCost}
                    onChange={(e) => setMetrics(prev => ({
                      ...prev,
                      implementationCost: Number(e.target.value)
                    }))}
                  />
                </div>
              </div>

              <div>
                <Label>Annual Maintenance Cost</Label>
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-4 h-4 text-muted-foreground" />
                  <Input
                    type="number"
                    value={metrics.annualCost}
                    onChange={(e) => setMetrics(prev => ({
                      ...prev,
                      annualCost: Number(e.target.value)
                    }))}
                  />
                </div>
              </div>

              <div>
                <Label>Risk Reduction (%)</Label>
                <div className="space-y-2">
                  <Slider
                    value={[metrics.riskReduction]}
                    min={0}
                    max={100}
                    step={1}
                    onValueChange={([value]) => setMetrics(prev => ({
                      ...prev,
                      riskReduction: value
                    }))}
                  />
                  <div className="text-sm text-muted-foreground">
                    {metrics.riskReduction}% reduction in security risks
                  </div>
                </div>
              </div>

              <div>
                <Label>Productivity Gain (%)</Label>
                <div className="space-y-2">
                  <Slider
                    value={[metrics.productivityGain]}
                    min={0}
                    max={50}
                    step={1}
                    onValueChange={([value]) => setMetrics(prev => ({
                      ...prev,
                      productivityGain: value
                    }))}
                  />
                  <div className="text-sm text-muted-foreground">
                    {metrics.productivityGain}% improvement in productivity
                  </div>
                </div>
              </div>

              <div>
                <Label>Timeframe (Years)</Label>
                <Select
                  value={metrics.timeframe.toString()}
                  onValueChange={(value) => setMetrics(prev => ({
                    ...prev,
                    timeframe: Number(value)
                  }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Year</SelectItem>
                    <SelectItem value="2">2 Years</SelectItem>
                    <SelectItem value="3">3 Years</SelectItem>
                    <SelectItem value="5">5 Years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {results && (
            <>
              <Card>
                <CardHeader>
                  <CardTitle>ROI Summary</CardTitle>
                  <CardDescription>Key financial metrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-muted-foreground">Total Cost</Label>
                      <div className="text-2xl font-bold text-red-500">
                        {formatCurrency(results.totalCost)}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-muted-foreground">Total Benefit</Label>
                      <div className="text-2xl font-bold text-green-500">
                        {formatCurrency(results.totalBenefit)}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-muted-foreground">Net Benefit</Label>
                    <div className="text-3xl font-bold text-primary">
                      {formatCurrency(results.netBenefit)}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-muted-foreground">ROI</Label>
                      <div className="text-2xl font-bold">
                        {results.roi.toFixed(1)}%
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-muted-foreground">Payback Period</Label>
                      <div className="text-2xl font-bold">
                        {results.paybackPeriod.toFixed(1)} years
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Investment Analysis</CardTitle>
                  <CardDescription>Detailed breakdown of costs and benefits</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Implementation Cost</span>
                      <span className="font-medium">{formatCurrency(metrics.implementationCost)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Annual Maintenance</span>
                      <span className="font-medium">{formatCurrency(metrics.annualCost)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Risk Reduction Impact</span>
                      <span className="font-medium text-green-500">
                        {formatCurrency(results.totalBenefit * (metrics.riskReduction / 100))}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Productivity Impact</span>
                      <span className="font-medium text-green-500">
                        {formatCurrency(results.totalBenefit * (metrics.productivityGain / 100))}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </div>
    </div>
  );
}