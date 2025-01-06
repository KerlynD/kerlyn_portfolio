'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import FloatingTechIcons from '../FloatingTechIcons';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = textRef.current?.children;
      if (!elements) return;

      gsap.set(elements, { opacity: 0, y: 50 }); // Set initial state

      gsap.to(elements, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          end: "bottom center",
          toggleActions: "play none none reverse",
          markers: false
        },
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        clearProps: "all" // Ensure animation completes properly
      });
    });

    return () => ctx.revert(); // Clean up
  }, []);

  return (
    <section id="about" ref={sectionRef} className="min-h-screen flex items-top justify-center py-20 relative">
      <FloatingTechIcons />
      <div className="container mx-auto px-4 relative z-10">
        <div ref={textRef} className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-12">About Me</h2>
          <div className="space-y-8 text-xl text-white-100">
            <p className="leading-relaxed">
              I'm Kerlyn Difo, a <b>data engineer</b>, software enthusiast and current <b>Queens College Senior</b>, passionate about leveraging data to solve complex problems.
            </p>
            <p className="leading-relaxed">
              With a strong foundation in <b>data science</b>, and <b>software engineering</b> I've honed my expertise through hands-on experiences, 
              including a part-time role as a <b>Data Engineer at Columbia University Irving Medical Center</b> and impactful projects that bridge technical 
              innovation with real-world applications. My professional journey has been shaped by a commitment to precision and scalability. 
            </p>
            <p className="leading-relaxed">
              Major leadership roles like being a <b>LifeSci NYC Technical Campus Ambassador</b>, <b>Journalist for the Queens College Code for All Club</b>, and contributions to <b>hackathon-winning projects </b>
              are a testament to my dedication to innovation and community engagement!
            </p>
            <p className="leading-relaxed">
              My goal is to continue driving innovation in data engineering and software while building systems that make data actionable, reliable, and accessible!
            </p>
            <p className="leading-relaxed">
              <i>I specialize in:</i>
            </p>
            <ul className="list-disc list-inside space-y-4 ml-6 text-xl">
              <li>Backend Development: <b>Python</b>, <b>TypeScript</b>, Node.js, Java, C++</li>
              <li>Data Engineering: <b>PostgreSQL</b>, <b>SQL</b>, MongoDB</li>
              <li>Data Visualization: <b>R</b>, <b>Jupyter Notebook</b>, Tableau</li>
              <li>Containerization: Docker</li>
              <li>Cloud Computing: AWS</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 