import React from 'react';
import dynamic from 'next/dynamic';
import Navigation from '../components/Navigation';
import HelloSection from '../components/sections/HelloSection';
import AboutSection from '../components/sections/AboutSection';

const ExperienceSection = dynamic(
  () => import('../components/sections/ExperienceSection'),
  { 
    ssr: false,
    loading: () => (
      <section className="min-h-screen relative bg-black">
        <div className="flex items-center justify-center h-screen">
          <div className="text-white text-xl">Loading 3D Experience...</div>
        </div>
      </section>
    )
  }
);

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Navigation />
      <HelloSection />
      <AboutSection />
      <ExperienceSection />
    </main>
  );
} 