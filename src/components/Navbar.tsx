'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useScrollspy } from '@/hooks/useScrollspy';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Track active section
  const activeSection = useScrollspy(['home', 'about', 'projects', 'skills', 'experience', 'contact'], 100);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    {name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center group cursor-pointer">
            <div className="w-10 h-10 bg-linear-to-br from-accent to-secondary rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-background font-bold text-lg">S</span>
            </div>
            <span className="ml-2 text-xl font-bold bg-linear-to-r from-accent to-secondary bg-clip-text text-transparent">
              Saad Web
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = mounted && activeSection === link.href.slice(1); // Remove '#' from href
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 font-medium rounded-lg transition-all duration-300 relative group cursor-pointer ${
                    isActive
                      ? 'text-background bg-linear-to-r from-accent to-secondary shadow-lg shadow-accent/50'
                      : 'text-foreground hover:bg-accent hover:text-background'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-accent to-secondary transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </a>
              );
            })}
          </div>

          {/* Right icons group */}
          <div className="hidden md:flex items-center gap-4">
            {/* CTA Button */}
            <a
              href="#contact"
              className="px-6 py-2.5 bg-linear-to-r from-accent to-secondary text-background font-medium rounded-lg hover:shadow-lg hover:shadow-accent/50 transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              Get In Touch
            </a>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground transition-all duration-300 flex items-center justify-center cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-slate-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-3 rounded-lg bg-muted hover:bg-muted/80 text-foreground transition-all duration-300 cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-slate-700" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-muted transition-colors cursor-pointer"
            >
              {isOpen ? (
                <X size={24} className="text-accent" />
              ) : (
                <Menu size={24} className="text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-border pt-4 bg-background">
            {navLinks.map((link) => {
              const isActive = mounted && activeSection === link.href.slice(1); // Remove '#' from href
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`block px-4 py-2 font-medium rounded-lg transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'text-background bg-linear-to-r from-accent to-secondary shadow-lg shadow-accent/50'
                      : 'text-foreground hover:bg-accent hover:text-background'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              );
            })}
            <a
              href="#contact"
              className="block px-4 py-2 bg-linear-to-r from-accent to-secondary text-background font-medium rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 text-center cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Get In Touch
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
