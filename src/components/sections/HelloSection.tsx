'use client';

import React from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function HelloSection() {
  const circleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (circleRef.current && textRef.current) {
      gsap.to(circleRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
      });

      gsap.from(textRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    }
  }, []);

  return (
    <section id="hello" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4">
        <div className="relative">
          <div ref={circleRef} className="absolute w-[300px] h-[300px] border-2 border-white rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute inset-2 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-500">
              {/* Add your profile image here */}
            </div>
          </div>
          <div ref={textRef} className="text-center mt-[350px]">
            <h1 className="text-5xl font-bold mb-4">Hello, I'm [Your Name]</h1>
            <p className="text-xl text-gray-300">Full Stack Developer & Creative Coder</p>
          </div>
        </div>
      </div>
    </section>
  );
} 