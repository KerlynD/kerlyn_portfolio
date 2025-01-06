'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface Icon {
  src: string;
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  size: number;
}

const initialIcons: Icon[] = [
  { src: '/tech_icons/python.svg', x: 20, y: 20, speedX: -0.5, speedY: -0.7, size: 60 },
  { src: '/tech_icons/typescript.svg', x: 60, y: 40, speedX: -0.8, speedY: -0.9, size: 50 },
  { src: '/tech_icons/postgresql.svg', x: 40, y: 60, speedX: -0.9, speedY: -0.8, size: 55 },
  { src: '/tech_icons/apachenifi.svg', x: 80, y: 30, speedX: -0.7, speedY: -0.8, size: 45 },
  { src: '/tech_icons/mongodb.svg', x: 30, y: 70, speedX: -0.8, speedY: -0.9, size: 50 },
  { src: '/tech_icons/docker.svg', x: 70, y: 50, speedX: -0.9, speedY: -0.7, size: 45 },
  { src: '/tech_icons/anycubic.svg', x: 50, y: 80, speedX: -0.7, speedY: -0.8, size: 55 },
  { src: '/tech_icons/anaconda.svg', x: 90, y: 25, speedX: -0.8, speedY: -0.9, size: 50 },
];

export default function FloatingTechIcons() {
  const [isClient, setIsClient] = useState(false);
  const iconsRef = useRef<Icon[]>(initialIcons);
  const [positions, setPositions] = useState<{x: number, y: number}[]>(
    initialIcons.map(icon => ({ x: icon.x, y: icon.y }))
  );
  const animationFrameRef = useRef<number>();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);

    const animate = () => {
      setPositions(prevPositions => {
        return iconsRef.current.map((icon, index) => {
          let { x, y } = prevPositions[index];

          // Update positions
          x += icon.speedX * 0.2; // Reduced speed multiplier for smoother movement
          y += icon.speedY * 0.2;

          // Get container dimensions
          const container = containerRef.current;
          if (!container) return { x, y };

          const containerWidth = container.clientWidth;
          const containerHeight = container.clientHeight;

          // Convert percentage to actual pixels for boundary checking
          const iconX = (x / 100) * containerWidth;
          const iconY = (y / 100) * containerHeight;

          // Bounce off container boundaries
          if (iconX <= 0 || iconX >= containerWidth - icon.size) {
            icon.speedX *= -1;
            x = iconX <= 0 ? 0 : ((containerWidth - icon.size) / containerWidth) * 100;
          }
          if (iconY <= 0 || iconY >= containerHeight - icon.size) {
            icon.speedY *= -1;
            y = iconY <= 0 ? 0 : ((containerHeight - icon.size) / containerHeight) * 100;
          }

          return { x, y };
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  if (!isClient) return null;

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {iconsRef.current.map((icon, index) => (
        <div
          key={index}
          className="absolute"
          style={{ 
            width: icon.size,
            height: icon.size,
            left: `${positions[index].x}%`,
            top: `${positions[index].y}%`,
            opacity: 0.5,
            willChange: 'transform',
            transition: 'transform 0.1s linear'
          }}
        >
          <Image
            src={icon.src}
            alt="Tech Icon"
            width={icon.size}
            height={icon.size}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      ))}
    </div>
  );
}