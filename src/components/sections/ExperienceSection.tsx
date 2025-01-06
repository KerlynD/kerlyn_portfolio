'use client';

import React, { Suspense, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ThreeScene = dynamic(() => import('./ThreeScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
  ),
});

const experiences = [
  {
    title: "Data Engineer",
    company: "Columbia University Irving Medical Center",
    period: "June 2024 - Present",
    description: [
      "Launched a novel tool integrating large metadata from PubMed and dbGaP databases, improving data accessibility for research teams",
      "Utilized Web-Scraping, Clustering & Association Rule Mining to enhance data retrieval efficiency by 20%, supporting 15 researchers in genomics research.",
      "Designed and implemented an Extract-Transform-Load pipeline for the tool to organize and visualize metadata with pandas dataframes, using Tkinter, matplotlib & seaborn for user-friendly displays and visualizations.",
      "Improved data integration and analysis tools, increasing data processing capacity by 30%",
      "Applied Python, Jupyter, and Anaconda to create asynchronous solutions that optimized pipeline performance."
    ]
  },
  {
    title: "Data Analyst Intern",
    company: "Department of Health & Mental Hygiene", 
    period: "June 2022 - August 2022",
    description: [
      "Integrated real-time tracking algorithms for vaccine inventory and distribution, increasing resource allocation efficiency by 40%, adopted by over 12 health facilities.",
      "Enhanced the Covid-19 Vaccination Pediatric Support Program using SQL and Excel to refine vaccine distribution strategies.",
      "Analyzed substantial medical metadata to boost data accessibility for healthcare professionals by 31%."
    ]
  },
  {
    title: "Technical Campus Ambassador",
    company: "LifeSci NYC Internship Program",
    period: "September 2024 - Present", 
    description: [
      "Led mock technical and behavioral interviews for students aiming to strengthen their skills in the tech industry, ensuring they are well-prepared for real-world scenarios.",
      "Reviewed and provided actionable feedback on resumes and application materials, helping students craft compelling profiles that increase their chances of securing internships in life sciences and tech fields.",
      "Facilitated workshops on technical skills and resume building, delivering guidance on the essential skills and best practices students need to showcase in order to align with industry expectations."
    ]
  }
];

export default function ExperienceSection() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.children;
      if (!cards) return;

      gsap.set(cards, { opacity: 0, y: 50 });

      gsap.to(cards, {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top center+=100",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        clearProps: "all"
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="min-h-screen relative">
      <div className="absolute inset-0 w-full h-full">
        <Suspense fallback={
          <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
        }>
          <ThreeScene />
        </Suspense>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <h2 className="text-5xl font-bold mb-12 text-center">Experience</h2>
        <div ref={cardsRef} className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-8 transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-blue-600 mb-2">{exp.company}</p>
              <p className="text-sm text-gray mb-4">{exp.period}</p>
              <ul className="space-y-3">
                {exp.description.map((bullet, i) => (
                  <li key={i} className="text-black text-lg flex">
                    <span className="mr-2">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}