"use client";

import { motion, useAnimation } from "framer-motion";
import { Shield, ArrowRight, Binary } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";

const BinaryRain = () => {
  const [streams, setStreams] = useState<Array<{ x: number; chars: string[] }>>([]);

  useEffect(() => {
    const generateStream = () => {
      const x = Math.random() * 100;
      const length = Math.floor(Math.random() * 20) + 10;
      const chars = Array.from({ length }, () => 
        Math.random() > 0.5 ? "1" : "0"
      );
      return { x, chars };
    };

    const initialStreams = Array.from({ length: 20 }, generateStream);
    setStreams(initialStreams);

    const interval = setInterval(() => {
      setStreams(prev => prev.map(stream => ({
        ...stream,
        chars: [...stream.chars.slice(1), Math.random() > 0.5 ? "1" : "0"]
      })));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none text-primary/20">
      {streams.map((stream, i) => (
        <div
          key={i}
          className="absolute text-xs font-mono"
          style={{ left: `${stream.x}%`, top: 0 }}
        >
          {stream.chars.map((char, j) => (
            <motion.div
              key={j}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: [0, 1, 0], y: 20 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: j * 0.1
              }}
            >
              {char}
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};

const GlowingOrb = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: [1, 1.2, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    });
  }, [controls]);

  return (
    <motion.div
      animate={controls}
      className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent"
    />
  );
};

const PacmanDots = () => {
  const dots = Array.from({ length: 20 }).map((_, i) => ({
    x: 20 + (i * 30),
    y: 200 + (Math.sin(i * 0.5) * 50)
  }));
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/30 rounded-full"
          initial={{ 
            x: pos.x,
            y: pos.y,
            opacity: 0.3
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.2, 1],
            x: [pos.x, pos.x + 20, pos.x],
            y: [pos.y, pos.y - 20, pos.y]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

const CircuitLines = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full">
        <pattern
          id="circuit-pattern"
          x="0"
          y="0"
          width="50"
          height="50"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M10 10h30v30h-30z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-primary/20"
          />
          <circle
            cx="10"
            cy="10"
            r="2"
            className="fill-primary/20"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
      </svg>
    </div>
  );
};

export function HeroSection() {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    });
  }, [controls]);

  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        className="max-w-4xl mx-auto text-center px-4 sm:px-6 relative z-10"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Secure Your Digital Future with Gray Ghost
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Enterprise-grade cybersecurity solutions and advanced data analytics 
          to protect and empower your business in the digital age.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link href="/get-started">
            <Button
              size="lg"
              className="group relative overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="relative z-10">Get Started</span>
              <motion.div
                className="absolute inset-0 bg-primary/20"
                initial={false}
                animate={{
                  scale: isHovered ? 1.5 : 1,
                  opacity: isHovered ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              />
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          
          <Link href="/evaluation/cybersecurity">
            <Button
              size="lg"
              className="group relative overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="relative z-10">Learn More</span>
              <motion.div
                className="absolute inset-0 bg-primary/20"
                initial={false}
                animate={{
                  scale: isHovered ? 1.5 : 1,
                  opacity: isHovered ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              />
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 pointer-events-none">
        <CircuitLines />
        <GlowingOrb />
        <PacmanDots />
      </div>
    </section>
  );
}