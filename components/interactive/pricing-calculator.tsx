"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Users, Database, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';

interface PricingInputs {
  users: number;
  dataStorage: number;
  securityLevel: number;
  addons: string[];
}

export function PricingCalculator() {
  const [inputs, setInputs] = useState<PricingInputs>({
    users: 10,
    dataStorage: 100,
    securityLevel: 1,
    addons: []
  });

  const calculatePrice = () => {
    const basePrice = 499;
    const userPrice = inputs.users * 10;
    const storagePrice = (inputs.dataStorage / 100) * 50;
    const securityPrice = inputs.securityLevel * 299;
    const addonsPrice = inputs.addons.length * 99;

    return basePrice + userPrice + storagePrice + securityPrice + addonsPrice;
  };

  return (
    <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <DollarSign className="h-5 w-5 text-primary" />
          <span>Solution Cost Calculator</span>
        </CardTitle>
        <CardDescription>
          Calculate the cost of your custom security solution
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium mb-2 block">
                Number of Users
              </Label>
              <div className="flex items-center space-x-4">
                <Users className="h-4 w-4 text-muted-foreground" />
                <Input
                  type="number"
                  value={inputs.users}
                  onChange={(e) => setInputs(prev => ({
                    ...prev,
                    users: Number(e.target.value)
                  }))}
                  min={1}
                  className="w-32"
                />
                <span className="text-sm text-muted-foreground">
                  ${inputs.users * 10}/month
                </span>
              </div>
            </div>

            <div>
              <Label className="text-sm font-medium mb-2 block">
                Data Storage (GB)
              </Label>
              <div className="flex items-center space-x-4">
                <Database className="h-4 w-4 text-muted-foreground" />
                <Input
                  type="number"
                  value={inputs.dataStorage}
                  onChange={(e) => setInputs(prev => ({
                    ...prev,
                    dataStorage: Number(e.target.value)
                  }))}
                  min={100}
                  step={100}
                  className="w-32"
                />
                <span className="text-sm text-muted-foreground">
                  ${(inputs.dataStorage / 100) * 50}/month
                </span>
              </div>
            </div>

            <div>
              <Label className="text-sm font-medium mb-2 block">
                Security Level
              </Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-4">
                  <Shield className="h-4 w-4 text-muted-foreground" />
                  <Slider
                    value={[inputs.securityLevel]}
                    onValueChange={(value) => setInputs(prev => ({
                      ...prev,
                      securityLevel: value[0]
                    }))}
                    max={3}
                    step={1}
                    className="w-[200px]"
                  />
                  <span className="text-sm text-muted-foreground">
                    ${inputs.securityLevel * 299}/month
                  </span>
                </div>
                <div className="text-sm text-muted-foreground">
                  Level {inputs.securityLevel}: {
                    inputs.securityLevel === 1 ? 'Basic' :
                    inputs.securityLevel === 2 ? 'Advanced' :
                    'Enterprise'
                  }
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="font-medium">Estimated Monthly Cost</span>
              <span className="text-2xl font-bold">
                ${calculatePrice().toFixed(2)}
              </span>
            </div>
            <Button className="w-full">
              Get Detailed Quote
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}