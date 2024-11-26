"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface NavigationDotsProps {
  items: Array<{ href: string }>;
  currentPath: string;
}

export function NavigationDots({ items, currentPath }: NavigationDotsProps) {
  const [positions, setPositions] = useState<Array<{ x: number; y: number }>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const currentIndex = items.findIndex(item => item.href === currentPath);
    setActiveIndex(currentIndex >= 0 ? currentIndex : 0);
  }, [currentPath, items]);

  useEffect(() => {
    const calculatePositions = () => {
      const spacing = 20;
      return items.map((_, index) => ({
        x: index * spacing,
        y: 0
      }));
    };

    setPositions(calculatePositions());
  }, [items]);

  return (
    <div className="relative h-2">
      {positions.map((pos, index) => (
        <motion.div
          key={index}
          className={`nav-dot ${index === activeIndex ? 'active' : ''}`}
          initial={{ x: pos.x, y: pos.y, opacity: 0 }}
          animate={{ 
            x: pos.x, 
            y: pos.y, 
            opacity: 1,
            scale: index === activeIndex ? 1.2 : 1
          }}
          transition={{ duration: 0.3 }}
        />
      ))}
      <motion.div
        className="nav-trail"
        style={{
          position: 'absolute',
          left: positions[0]?.x ?? 0,
          top: '50%',
          transform: 'translateY(-50%)',
          height: '2px',
          width: activeIndex * 20
        }}
      />
    </div>
  );
}