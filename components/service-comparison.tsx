"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckCircle, XCircle } from "lucide-react";

interface ServiceFeature {
  name: string;
  dataAnalytics: boolean;
  cloudInfrastructure: boolean;
  dataGovernance: boolean;
  description: string;
}

const features: ServiceFeature[] = [
  {
    name: "Data Quality Management",
    dataAnalytics: true,
    cloudInfrastructure: false,
    dataGovernance: true,
    description: "Ensure data accuracy, completeness, and consistency"
  },
  {
    name: "Cloud Infrastructure",
    dataAnalytics: false,
    cloudInfrastructure: true,
    dataGovernance: false,
    description: "Scalable and secure cloud infrastructure solutions"
  },
  {
    name: "Compliance Monitoring",
    dataAnalytics: false,
    cloudInfrastructure: true,
    dataGovernance: true,
    description: "Monitor and ensure regulatory compliance"
  },
  {
    name: "Advanced Analytics",
    dataAnalytics: true,
    cloudInfrastructure: false,
    dataGovernance: false,
    description: "Advanced data analysis and insights"
  },
  {
    name: "Security Management",
    dataAnalytics: false,
    cloudInfrastructure: true,
    dataGovernance: true,
    description: "Comprehensive security and access control"
  }
];

export function ServiceComparison() {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  return (
    <div className="w-full p-4 space-y-4">
      <h3 className="text-2xl font-bold text-center mb-8">Service Comparison</h3>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Feature</TableHead>
              <TableHead>Data Analytics</TableHead>
              <TableHead>Cloud Infrastructure</TableHead>
              <TableHead>Data Governance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {features.map((feature) => (
              <TableRow
                key={feature.name}
                className="cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => setSelectedFeature(feature.name)}
              >
                <TableCell className="font-medium">{feature.name}</TableCell>
                <TableCell>
                  {feature.dataAnalytics ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500" />
                  )}
                </TableCell>
                <TableCell>
                  {feature.cloudInfrastructure ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500" />
                  )}
                </TableCell>
                <TableCell>
                  {feature.dataGovernance ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500" />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {selectedFeature && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-muted rounded-lg"
        >
          <p className="text-sm">
            {features.find((f) => f.name === selectedFeature)?.description}
          </p>
        </motion.div>
      )}
    </div>
  );
}
