"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Users, Globe, Award } from "lucide-react";

const stats = [
  {
    icon: Shield,
    value: "99.99%",
    label: "Security Uptime",
    description: "Maintaining continuous protection",
  },
  {
    icon: Users,
    value: "500+",
    label: "Enterprise Clients",
    description: "Trusted by industry leaders",
  },
  {
    icon: Globe,
    value: "24/7",
    label: "Global Coverage",
    description: "Round-the-clock monitoring",
  },
  {
    icon: Award,
    value: "50+",
    label: "Industry Awards",
    description: "Recognition for excellence",
  },
];

const CountingNumber = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  let numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  if (isNaN(numericValue)) numericValue = 100;

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? {
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: "easeOut",
          },
        } : { opacity: 0 }}
      >
        {value}
      </motion.span>
    </motion.span>
  );
};

export function StatsSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <section className="py-20 bg-primary/5">
      <div ref={containerRef} className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-primary/5 rounded-lg transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative p-6 text-center">
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                    <CountingNumber value={stat.value} />
                  </div>
                  <div className="text-lg font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
