"use client";

import { motion } from "framer-motion";
import { TerminalConsole } from "@/components/interactive/terminal-console";
import { ThreatMap } from "@/components/interactive/threat-map";
import { ROICalculator } from "@/components/interactive/roi-calculator";
import { SecurityAssessment } from "@/components/interactive/security-assessment";
import { SecurityDashboard } from "@/components/interactive/security-dashboard";
import { ServiceComparison } from "@/components/interactive/service-comparison";

export default function ToolsPage() {
  return (
    <div className="min-h-screen pt-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 neon-text">Interactive Security Tools</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our suite of cybersecurity and analytics tools
          </p>
        </motion.div>

        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-bold mb-8 cyber-dots">Security Dashboard</h2>
            <SecurityDashboard />
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-8 cyber-dots">Live Threat Monitor</h2>
            <ThreatMap />
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-8 cyber-dots">Service Comparison</h2>
            <ServiceComparison />
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-8 cyber-dots">Security Assessment</h2>
            <SecurityAssessment />
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-8 cyber-dots">Security ROI Calculator</h2>
            <ROICalculator />
          </section>

          <TerminalConsole />
        </div>
      </div>
    </div>
  );
}