"use client";

import { useEffect, useState } from 'react';

export function PacmanCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newX = e.clientX;
      const newY = e.clientY;
      
      // Calculate angle based on movement direction
      if (position.x !== 0 && position.y !== 0) {
        const deltaX = newX - position.x;
        const deltaY = newY - position.y;
        const newAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        setAngle(newAngle);
      }
      
      setPosition({ x: newX, y: newY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [position]);

  return (
    <div
      className="pacman-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) rotate(${angle}deg)`
      }}
    />
  );
}