"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  LineChart,
  BarChart,
  PieChart,
  TrendingUp,
  ShieldCheck,
  Clock,
  Target,
} from "lucide-react";

interface MetricProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
}

function Metric({ icon, label, value, color }: MetricProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-center space-x-4 p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-primary/20"
    >
      <div className={`p-3 rounded-full ${color}`}>{icon}</div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </motion.div>
  );
}

interface CaseStudyInfographicProps {
  metrics: {
    label: string;
    value: string;
    icon: keyof typeof icons;
  }[];
}

const icons = {
  lineChart: <LineChart className="h-6 w-6" />,
  barChart: <BarChart className="h-6 w-6" />,
  pieChart: <PieChart className="h-6 w-6" />,
  trendingUp: <TrendingUp className="h-6 w-6" />,
  shieldCheck: <ShieldCheck className="h-6 w-6" />,
  clock: <Clock className="h-6 w-6" />,
  target: <Target className="h-6 w-6" />,
};

const colors = [
  "bg-blue-500/10 text-blue-500",
  "bg-green-500/10 text-green-500",
  "bg-purple-500/10 text-purple-500",
  "bg-orange-500/10 text-orange-500",
];

export function CaseStudyInfographic({ metrics }: CaseStudyInfographicProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={containerRef} className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => {
          const y = useTransform(
            scrollYProgress,
            [0, 0.5, 1],
            [50, 0, 0]
          );
          const opacity = useTransform(
            scrollYProgress,
            [0, 0.2, 1],
            [0, 1, 1]
          );

          return (
            <motion.div
              key={metric.label}
              style={{ y, opacity }}
              transition={{ delay: index * 0.1 }}
            >
              <Metric
                icon={icons[metric.icon]}
                label={metric.label}
                value={metric.value}
                color={colors[index % colors.length]}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
