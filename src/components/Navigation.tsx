'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const navItems = [
  { id: 'hello', label: 'Hello' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hello');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white-900/50 backdrop-blur-lg py-4' : 'py-6'
    }`}>
      <div className="container mx-auto px-4">
        <ul className="flex justify-center space-x-10">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
                onSetActive={() => setActiveSection(item.id)}
                className={`cursor-pointer text-2xl font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-black'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
} 