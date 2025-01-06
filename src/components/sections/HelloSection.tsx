'use client';

import React from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';

export default function HelloSection() {
  const circleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const rotatingBorderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Rotating border effect
      gsap.to(rotatingBorderRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
      });

      // Text fade in
      gsap.fromTo(textRef.current, 
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          clearProps: "all"
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="hello" className="min-h-screen flex items-center justify-center relative py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="relative w-[500px] h-[500px] flex-shrink-0">
            {/* Rotating gradient border */}
            <div 
              ref={rotatingBorderRef}
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, transparent, #274060 50%, transparent 80%)',
                transform: 'rotate(0deg)'
              }}
            />
            
            {/* Static image container with gap */}
            <div className="absolute inset-[20px] rounded-full overflow-hidden border-2 border-grey z-10 bg-[#1a1f2e]">
              <div className="relative w-full h-full">
                <Image
                  src="/profile.jpeg"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          
          <div ref={textRef} className="flex-1 pl-16 max-w-2xl">
            <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#223142] to-[#223142]">
              Hello, I'm Kerlyn Difo
            </h1>
            <p className="text-2xl text-gray-300 mb-6">Data Engineer & Full Stack Developer</p>
            
            {/* Social Links */}
            <div className="flex gap-6 items-center">
              <Link 
                href="https://github.com/kerlynd" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-[#223142] transition-colors"
              >
                <div className="w-6 h-6">
                  <Image
                    src="/social/github.svg"
                    alt="GitHub"
                    width={25}
                    height={25}
                  />
                </div>
                <span>GitHub</span>
              </Link>
              
              <Link 
                href="https://www.linkedin.com/in/kerlyn-difo-81059b23b/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-[#223142] transition-colors"
              >
                <div className="w-6 h-6">
                  <Image
                    src="/social/linkedin.svg"
                    alt="LinkedIn"
                    width={25}
                    height={25}
                  />
                </div>
                <span>LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 