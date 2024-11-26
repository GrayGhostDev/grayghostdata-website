"use client";

import { motion } from "framer-motion";

interface LogoProps {
  size?: number;
}

export function Logo({ size = 32 }: LogoProps) {
  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(45deg, hsl(var(--primary)) 0%, transparent 100%)",
            "linear-gradient(180deg, hsl(var(--primary)) 0%, transparent 100%)",
            "linear-gradient(225deg, hsl(var(--primary)) 0%, transparent 100%)",
            "linear-gradient(270deg, hsl(var(--primary)) 0%, transparent 100%)",
            "linear-gradient(315deg, hsl(var(--primary)) 0%, transparent 100%)",
            "linear-gradient(360deg, hsl(var(--primary)) 0%, transparent 100%)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          filter: "blur(8px)",
          opacity: 0.5,
        }}
      />
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10"
      >
        <motion.path
          d="M50 10C27.909 10 10 27.909 10 50s17.909 40 40 40 40-17.909 40-40S72.091 10 50 10z"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="text-primary"
        />
        <motion.path
          d="M35 40c0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15v20c0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15V40z"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5,
          }}
          className="text-primary"
        />
        <motion.circle
          cx="50"
          cy="35"
          r="5"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 0] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
          className="text-primary"
        />
      </svg>
    </motion.div>
  );
}