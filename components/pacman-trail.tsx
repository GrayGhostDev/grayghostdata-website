"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface PacmanTrailProps {
  color?: string;
}

export function PacmanTrail({ color = "hsl(var(--primary))" }: PacmanTrailProps) {
  const [dots, setDots] = useState<Array<{ x: number; y: number; id: string }>>([]);
  const [pacmanPos, setPacmanPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newX = e.clientX;
      const newY = e.clientY;

      setPacmanPos({ x: newX, y: newY });

      setDots(prev => {
        const newDot = { 
          x: newX, 
          y: newY, 
          id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}` 
        };
        const newDots = [newDot, ...prev.slice(0, 19)];
        return newDots;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {dots.map((dot, i) => (
          <motion.div
            key={dot.id}
            className="absolute rounded-full"
            style={{
              backgroundColor: color,
              left: dot.x,
              top: dot.y,
            }}
            initial={{ scale: 1, opacity: 0.8, width: "8px", height: "8px" }}
            animate={{ 
              scale: 0.1,
              opacity: 0,
              width: "2px",
              height: "2px"
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut"
            }}
          />
        ))}
      </AnimatePresence>
      <motion.div
        className="absolute"
        style={{
          backgroundColor: color,
          left: pacmanPos.x,
          top: pacmanPos.y,
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          marginLeft: "-6px",
          marginTop: "-6px"
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 45, 0]
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}