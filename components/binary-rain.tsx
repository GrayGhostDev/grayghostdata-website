"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Stream {
  x: number;
  y: number;
  speed: number;
  chars: string[];
  opacity: number;
}

export function BinaryRain() {
  const [streams, setStreams] = useState<Stream[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0) return;

    const chars = "01";
    const streamCount = Math.floor(dimensions.width / 20);

    const generateStream = (index: number): Stream => ({
      x: (index * 20) + Math.random() * 10,
      y: Math.random() * dimensions.height,
      speed: 1 + Math.random() * 2,
      chars: Array.from(
        { length: 15 + Math.floor(Math.random() * 15) },
        () => chars[Math.floor(Math.random() * chars.length)]
      ),
      opacity: 0.1 + Math.random() * 0.3
    });

    const initialStreams = Array.from(
      { length: streamCount },
      (_, i) => generateStream(i)
    );

    setStreams(initialStreams);

    const interval = setInterval(() => {
      setStreams(prevStreams => 
        prevStreams.map(stream => {
          const newY = stream.y + stream.speed;
          
          if (newY > dimensions.height) {
            return generateStream(Math.floor(stream.x / 20));
          }

          return {
            ...stream,
            y: newY,
            chars: [
              chars[Math.floor(Math.random() * chars.length)],
              ...stream.chars.slice(0, -1)
            ]
          };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, [dimensions]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {streams.map((stream, i) => (
        <div
          key={i}
          className="absolute text-xs font-mono"
          style={{
            left: `${stream.x}px`,
            top: `${stream.y}px`,
            transform: 'translateZ(0)',
            willChange: 'transform',
          }}
        >
          {stream.chars.map((char, j) => (
            <motion.div
              key={`${i}-${j}`}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: j === 0 ? 1 : stream.opacity / (j + 1),
                color: j === 0 ? "rgb(34, 197, 94)" : "rgba(34, 197, 94, 0.3)"
              }}
              transition={{ duration: 0.1 }}
              style={{
                textShadow: j === 0 ? '0 0 8px rgb(34, 197, 94)' : 'none'
              }}
            >
              {char}
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
}