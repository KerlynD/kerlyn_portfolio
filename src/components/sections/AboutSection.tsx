'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current && textRef.current) {
      gsap.from(textRef.current.children, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
    }
  }, []);

  return (
    <section id="about" ref={sectionRef} className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div ref={textRef} className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <div className="space-y-6 text-lg text-gray-300">
            <p>
              I'm a passionate developer with a love for creating beautiful, interactive, and user-friendly web experiences.
              My journey in web development started [Your Story Here], and since then, I've been constantly learning and
              growing in this ever-evolving field.
            </p>
            <p>
              I specialize in:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Frontend Development (React, Next.js, TypeScript)</li>
              <li>Backend Development (Node.js, Python)</li>
              <li>Interactive Animations (GSAP, Three.js)</li>
              <li>Responsive Design & UI/UX</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 