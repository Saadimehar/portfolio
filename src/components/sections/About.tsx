"use client";

import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation(0.2);
  
  // Mini feature items for the left card
  const miniFeatures = [
    {
      id: 1,
      label: "Innovation",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      id: 2,
      label: "Excellence",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      label: "Passion",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      gradient: "from-pink-500 to-red-500",
    },
    {
      id: 4,
      label: "Learning",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17.25m20-11.002c5.5 0 10 4.745 10 11.007M15 6.75h.008v.008H15V6.75z" />
        </svg>
      ),
      gradient: "from-purple-500 to-indigo-500",
    },
  ];

  // Feature cards data
  const features = [
    {
      id: 1,
      title: "Clean Code",
      description: "Writing maintainable, readable, and efficient code that follows best practices and design patterns.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      gradient: "from-blue-500 to-purple-600",
      shadowColor: "hover:shadow-blue-500/50",
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Crafting beautiful, intuitive interfaces that provide seamless user experiences and delight users.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.5a2 2 0 00-1 .25m-15 0a2 2 0 002 2h2.5a2 2 0 001-.25" />
        </svg>
      ),
      gradient: "from-purple-500 to-pink-600",
      shadowColor: "hover:shadow-purple-500/50",
    },
    {
      id: 3,
      title: "Performance",
      description: "Optimizing applications for speed and responsiveness, ensuring fast load times and smooth interactions.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: "from-cyan-500 to-blue-600",
      shadowColor: "hover:shadow-cyan-500/50",
    },
    {
      id: 4,
      title: "Collaboration",
      description: "Working effectively with teams, communicating clearly, and contributing positively to shared goals.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 8.646 4 4 0 010-8.646M9 9H3v4h6V9zm12 0h-6v4h6V9z" />
        </svg>
      ),
      gradient: "from-indigo-500 to-purple-600",
      shadowColor: "hover:shadow-indigo-500/50",
    },
  ];

  return (
    <section ref={aboutRef} className="min-h-screen py-[20px] sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background transition-colors duration-300">
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-accent/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-secondary/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className={`text-center mb-8 sm:mb-16 py-[20px] ${aboutVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-[clamp(2rem,6vw,3.5rem)] font-bold mb-4">
            <span className="bg-linear-to-r from-accent via-purple-500 to-secondary bg-clip-text text-transparent">
              About
            </span>
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed text-center">
            Passionate developer dedicated to creating exceptional digital experiences through code and design
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-start">
          {/* Left Column - Story Card */}
          <div className={`${aboutVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: "0.08s" }}>
            {/* Glassmorphism Card */}
            <div className="relative group">
              {/* Gradient border effect */}
              <div className="absolute -inset-0.5 bg-linear-to-br from-accent/20 to-secondary/20 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500" />

              {/* Main card content */}
              <div className="relative bg-linear-to-br from-background/40 to-background/20 backdrop-blur-xl border border-white/10 rounded-3xl p-5 sm:p-8 lg:p-10">
                {/* Decorative accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-accent/20 to-transparent rounded-full blur-2xl -mr-16 -mt-16" />

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold mb-3 sm:mb-4 bg-linear-to-r from-accent to-secondary bg-clip-text text-transparent text-center">
                    About Me
                  </h3>

                  <div className="space-y-3 sm:space-y-4 text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed text-justify">
                    <p>
                      I'm a passionate Software Engineering student specializing in full-stack web development. My journey in tech started with a curiosity to build things and solve problems through code.
                    </p>
                    <p>
                      With expertise in the MERN stack, I've developed a keen eye for both aesthetics and functionality. I believe that great software is the intersection of beautiful design and robust engineering.
                    </p>
                    <p>
                      Whether I'm crafting responsive frontends, building scalable backends, or designing intuitive user interfaces, I bring dedication and creativity to every project. I'm always eager to learn new technologies and collaborate with talented teams.
                    </p>
                  </div>

                  {/* Mini Features Grid */}
                  <div className="grid grid-cols-4 gap-2 mt-5 sm:mt-8 mb-4 sm:mb-6">
                    {miniFeatures.map((mini, index) => (
                      <div
                        key={mini.id}
                        className={`group relative rounded-lg p-3 bg-linear-to-br from-white/5 to-white/0 border border-white/10 hover:border-accent/30 transition-all duration-300 hover:bg-linear-to-br hover:from-white/10 hover:to-white/5 cursor-pointer animate-bounce-in ${aboutVisible ? 'animate-bounce-in' : 'opacity-0'}`}
                        style={{ animationDelay: `${0.4 + index * 0.08}s` }}
                      >
                        {/* Glow effect */}
                        <div className={`absolute inset-0 bg-linear-to-br ${mini.gradient} rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur` } />

                        {/* Icon container */}
                        <div className="relative flex flex-col items-center gap-1.5">
                          <div className={`p-2 rounded-lg bg-linear-to-br ${mini.gradient} text-white group-hover:shadow-lg group-hover:shadow-accent/30 transition-all duration-300 group-hover:scale-110`}>
                            {mini.icon}
                          </div>
                          <span className="text-xs font-semibold text-white group-hover:text-accent transition-colors duration-300 text-center leading-tight">
                            {mini.label}
                          </span>
                        </div>

                        {/* Subtle bottom accent line */}
                        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-linear-to-r ${mini.gradient} rounded-full group-hover:w-6 transition-all duration-300`} />
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="mt-6 sm:mt-8 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base bg-linear-to-r from-accent to-secondary text-background font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105 mx-auto block animate-slide-up animate-stagger-5">
                    Let's Connect
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 animate-fade-in" style={{ animationDelay: "0.15s" }}>
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`group h-full ${aboutVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${0.2 + index * 0.08}s` }}
              >
                {/* Feature Card */}
                <div className="relative h-full overflow-hidden rounded-2xl bg-linear-to-br from-background/60 to-background/30 backdrop-blur-lg border border-white/10 p-4 sm:p-6 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 transform hover:-translate-y-1 group hover:bg-linear-to-br hover:from-background/70 hover:to-background/40">
                  {/* Animated gradient background on hover */}
                  <div className={`absolute inset-0 bg-linear-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  {/* Glow effect */}
                  <div className={`absolute -inset-2 bg-linear-to-br ${feature.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`} />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center">
                    {/* Icon container */}
                    <div className={`p-3 rounded-xl bg-linear-to-br ${feature.gradient} text-white mb-4 group-hover:shadow-lg ${feature.shadowColor} transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6 flex items-center justify-center animate-fade-in`} style={{ animationDelay: `${0.28 + index * 0.08}s` }}>
                      {feature.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-[clamp(1rem,3vw,1.25rem)] font-bold text-foreground mb-2 group-hover:bg-linear-to-r group-hover:from-accent group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 text-center">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[clamp(0.75rem,2vw,0.875rem)] text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300 text-center leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Animated line on hover */}
                    <div className="h-1 w-0 bg-linear-to-r from-accent to-secondary mt-4 group-hover:w-12 transition-all duration-500 rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-24 h-px bg-linear-to-r from-transparent via-accent/50 to-transparent" />

        {/* My Journey Timeline */}
        <div className="mt-32 mb-16">
          <h3 className={`text-3xl sm:text-4xl font-bold mb-16 text-center bg-linear-to-r from-accent to-secondary bg-clip-text text-transparent ${aboutVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            My Journey
          </h3>

          {/* Horizontal Journey Container */}
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Row 1: 2023 Button + Started Journey Box */}
            <div className={`flex flex-col md:flex-row gap-6 items-center ${aboutVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: "0.4s" }}>
              {/* Year Button */}
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-linear-to-r from-blue-500 to-cyan-500 text-background font-bold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 shrink-0 w-full md:w-auto">
                2023
              </button>
              
              {/* Content Box */}
              <div className="relative group overflow-hidden rounded-2xl bg-linear-to-br from-background/60 to-background/30 backdrop-blur-lg border border-white/10 p-6 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 grow w-full">
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-foreground mb-2">Started Journey</h4>
                  <p className="text-muted-foreground leading-relaxed text-justify group-hover:text-foreground/90 transition-colors duration-300 text-sm">
                    Began my tech journey with curiosity and passion, exploring web development fundamentals and building my foundation in programming with dedication.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2: First Major Project Box + 2024 Button */}
            <div className={`flex flex-col md:flex-row-reverse gap-6 items-center ${aboutVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: "0.48s" }}>
              {/* Year Button */}
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-linear-to-r from-purple-500 to-pink-600 text-background font-bold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 shrink-0 w-full md:w-auto">
                2024
              </button>
              
              {/* Content Box */}
              <div className="relative group overflow-hidden rounded-2xl bg-linear-to-br from-background/60 to-background/30 backdrop-blur-lg border border-white/10 p-6 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 grow w-full">
                <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-foreground mb-2">First Project</h4>
                  <p className="text-muted-foreground leading-relaxed text-justify group-hover:text-foreground/90 transition-colors duration-300 text-sm">
                    Completed my first full-stack project, combining frontend and backend skills to create an application that solved real-world problems.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 3: 2025 Button + Internship & Projects Box */}
            <div className={`flex flex-col md:flex-row gap-6 items-center ${aboutVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: "0.56s" }}>
              {/* Year Button */}
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 text-background font-bold text-lg hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105 shrink-0 w-full md:w-auto">
                2025
              </button>
              
              {/* Content Box */}
              <div className="relative group overflow-hidden rounded-2xl bg-linear-to-br from-background/60 to-background/30 backdrop-blur-lg border border-white/10 p-6 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/20 grow w-full">
                <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-foreground mb-2">Internship & Working on Projects</h4>
                  <p className="text-muted-foreground leading-relaxed text-justify group-hover:text-foreground/90 transition-colors duration-300 text-sm">
                    Secured an internship opportunity while continuing to work on multiple innovative projects, gaining professional experience and industry insights.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 4: Current Journey Box + 2026 Button */}
            <div className="flex flex-col md:flex-row-reverse gap-6 items-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
              {/* Year Button - Active/Pulsing */}
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-linear-to-r from-green-500 to-emerald-600 text-background font-bold text-lg hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 shrink-0 w-full md:w-auto animate-pulse">
                2026
              </button>
              
              {/* Content Box */}
              <div className="relative group overflow-hidden rounded-2xl bg-linear-to-br from-background/60 to-background/30 backdrop-blur-lg border border-white/10 p-6 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20 grow w-full">
                <div className="absolute inset-0 bg-linear-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-foreground mb-2">Current Journey</h4>
                  <p className="text-muted-foreground leading-relaxed text-justify group-hover:text-foreground/90 transition-colors duration-300 text-sm">
                    Continuing to grow and take on new challenges in tech, expanding my skills, and delivering impactful solutions that make a difference.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default About;
