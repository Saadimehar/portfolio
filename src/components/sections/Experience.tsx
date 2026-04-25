"use client";

import React, { useState } from "react";
import { experiences } from "@/data/experience";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type ExperienceType = "all" | "work" | "education";

const Experience = () => {
  const [activeType, setActiveType] = useState<ExperienceType>("all");
  const { ref: experienceRef, isVisible: experienceVisible } = useScrollAnimation(0.2);

  const experienceTypes: { id: ExperienceType; label: string; icon: string }[] = [
    { id: "all", label: "All", icon: "📋" },
    { id: "work", label: "Work Experience", icon: "💼" },
    { id: "education", label: "Education", icon: "🎓" },
  ];

  // Filter experiences based on active type
  const filteredExperiences =
    activeType === "all"
      ? experiences
      : experiences.filter((exp) => exp.type === activeType);

  return (
    <section ref={experienceRef} className="min-h-screen py-[20px] sm:py-20 px-3 sm:px-6 lg:px-8 relative overflow-hidden bg-background transition-colors duration-300">
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-linear-to-br from-accent/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-linear-to-tl from-secondary/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Title */}
        <div className={`text-center mb-12 sm:mb-16 ${experienceVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-[clamp(1.875rem,6vw,3.5rem)] font-bold mb-3 sm:mb-4">
            <span className="bg-linear-to-r from-accent via-purple-500 to-secondary bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of my professional journey and educational background. Each role has shaped my skills and contributed to my growth as a developer.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 ${experienceVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: "0.1s" }}>
          {experienceTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveType(type.id)}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 flex items-center gap-2 cursor-pointer whitespace-nowrap ${
                activeType === type.id
                  ? "bg-linear-to-r from-accent to-secondary text-white shadow-lg shadow-accent/50"
                  : "bg-background/40 border border-white/10 text-foreground hover:border-accent/30 hover:bg-background/60"
              }`}
            >
              <span>{type.icon}</span>
              <span className="hidden xs:inline">{type.label}</span>
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className={`relative ${experienceVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.2s" }}>
          {/* Timeline line - visible on lg screens only */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-linear-to-b from-accent via-secondary to-accent/30 rounded-full" />

          {/* Experience Cards */}
          <div className="space-y-8 sm:space-y-12">
            {filteredExperiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`${experienceVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${0.25 + index * 0.1}s` }}
              >
                <div className={`flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  {/* Timeline dot - visible on lg screens only */}
                  <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-linear-to-r from-accent to-secondary border-4 border-background shadow-lg shadow-accent/50 z-20" />

                  {/* Card Container */}
                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12 lg:text-left"}`}>
                    {/* Card */}
                    <div className="group relative p-4 sm:p-6 rounded-2xl bg-linear-to-br from-background/60 to-background/30 backdrop-blur-lg border border-white/10 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20">
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-linear-to-br from-accent/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Role & Company */}
                        <div className="mb-3">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold bg-linear-to-r from-accent to-secondary bg-clip-text text-transparent group-hover:from-accent group-hover:to-purple-400 transition-all duration-300">
                            {experience.role}
                          </h3>
                          <p className="text-base sm:text-lg font-semibold text-foreground/80 mt-1">
                            {experience.company}
                          </p>
                          <p className={`text-xs sm:text-sm text-muted-foreground flex items-center gap-1 mt-1 ${index % 2 === 0 ? "lg:justify-end" : "lg:justify-start justify-start"}`}>
                            <span>📍</span>
                            {experience.location}
                          </p>
                        </div>

                        {/* Date Range */}
                        <div className={`flex items-center gap-2 mb-4 text-xs sm:text-sm font-medium text-accent/80 ${index % 2 === 0 ? "lg:justify-end" : "lg:justify-start justify-start"}`}>
                          <span>📅</span>
                          <span>
                            {experience.startDate} - {experience.endDate}
                          </span>
                        </div>

                        {/* Type Badge */}
                        <div className={`mb-4 flex ${index % 2 === 0 ? "lg:justify-end" : "lg:justify-start justify-start"}`}>
                          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-accent/10 text-accent border border-accent/20 group-hover:border-accent/50 group-hover:bg-accent/20 transition-all duration-300">
                            {experience.type === "work" ? "💼 Work" : "🎓 Education"}
                          </span>
                        </div>

                        {/* Description Points */}
                        <ul className="space-y-2 mb-4">
                          {experience.description.map((point, idx) => (
                            <li
                              key={idx}
                              className={`text-xs sm:text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300 flex items-start gap-2 ${index % 2 === 0 ? "lg:flex-row-reverse lg:text-right" : "lg:flex-row lg:text-left"}`}
                            >
                              <span className={`text-accent mt-0.5 flex-shrink-0 ${index % 2 === 0 ? "lg:ml-2" : "lg:mr-0"}`}>•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tags */}
                        <div className={`flex flex-wrap gap-2 pt-4 border-t border-white/10 ${index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"}`}>
                          {experience.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 text-xs font-semibold rounded-full bg-secondary/10 text-secondary border border-secondary/20 group-hover:border-secondary/50 group-hover:bg-secondary/20 transition-all duration-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* No experiences message */}
        {filteredExperiences.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No experiences found in this category.</p>
          </div>
        )}

        {/* Bottom decorative line */}
        <div className="mt-24 h-px bg-linear-to-r from-transparent via-accent/50 to-transparent" />
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

export default Experience;
