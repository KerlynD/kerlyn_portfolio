'use client';

import React, { Suspense, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Dynamically import Three.js components
const ThreeScene = dynamic(() => import('./ThreeScene'), { ssr: false });

const experiences = [
  {
    title: "Senior Developer",
    company: "Tech Company",
    period: "2020 - Present",
    description: "Led development of multiple web applications using React and Node.js"
  },
  {
    title: "Full Stack Developer",
    company: "Digital Agency",
    period: "2018 - 2020",
    description: "Built responsive web applications and REST APIs"
  }
];

export default function ExperienceSection() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardsRef.current) {
      gsap.from(cardsRef.current.children, {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top center+=100",
          end: "bottom center",
          toggleActions: "play none none reverse"
        },
        x: -100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });
    }
  }, []);

  return (
    <section id="experience" className="min-h-screen relative">
      <div className="absolute inset-0 w-full h-full">
        <Suspense fallback={<div className="w-full h-full bg-black" />}>
          <ThreeScene />
        </Suspense>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div ref={cardsRef} className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-purple-300 mb-2">{exp.company}</p>
              <p className="text-sm text-gray-400 mb-4">{exp.period}</p>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 