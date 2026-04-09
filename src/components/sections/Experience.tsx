"use client";

import React, { useState } from "react";
import { experiences } from "@/data/experience";

type ExperienceType = "all" | "work" | "education";

const Experience = () => {
  const [activeType, setActiveType] = useState<ExperienceType>("all");

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
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background transition-colors duration-300">
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-linear-to-br from-accent/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-linear-to-tl from-secondary/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-linear-to-r from-accent via-purple-500 to-secondary bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed text-justify">
            A comprehensive overview of my professional journey and educational background. Each role has shaped my skills and contributed to my growth as a developer.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {experienceTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveType(type.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeType === type.id
                  ? "bg-linear-to-r from-accent to-secondary text-white shadow-lg shadow-accent/50"
                  : "bg-background/40 border border-white/10 text-foreground hover:border-accent/30 hover:bg-background/60"
              }`}
            >
              <span>{type.icon}</span>
              {type.label}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {/* Timeline line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-linear-to-b from-accent via-secondary to-accent/30 rounded-full" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {filteredExperiences.map((experience, index) => (
              <div
                key={experience.id}
                className="animate-fade-in"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-linear-to-r from-accent to-secondary border-4 border-background shadow-lg shadow-accent/50 z-20" />

                  {/* Card Container */}
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                    {/* Card */}
                    <div className="group relative p-6 rounded-2xl bg-linear-to-br from-background/60 to-background/30 backdrop-blur-lg border border-white/10 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20">
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-linear-to-br from-accent/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Role & Company */}
                        <div className="mb-3">
                          <h3 className="text-2xl font-bold bg-linear-to-r from-accent to-secondary bg-clip-text text-transparent group-hover:from-accent group-hover:to-purple-400 transition-all duration-300">
                            {experience.role}
                          </h3>
                          <p className="text-lg font-semibold text-foreground/80 mt-1">
                            {experience.company}
                          </p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1 justify-start">
                            <span>📍</span>
                            {experience.location}
                          </p>
                        </div>

                        {/* Date Range */}
                        <div className="flex items-center gap-2 mb-4 text-sm font-medium text-accent/80">
                          <span>📅</span>
                          <span>
                            {experience.startDate} - {experience.endDate}
                          </span>
                        </div>

                        {/* Type Badge */}
                        <div className="mb-4">
                          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-accent/10 text-accent border border-accent/20 group-hover:border-accent/50 group-hover:bg-accent/20 transition-all duration-300">
                            {experience.type === "work" ? "💼 Work" : "🎓 Education"}
                          </span>
                        </div>

                        {/* Description Points */}
                        <ul className="space-y-2 mb-4">
                          {experience.description.map((point, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300 flex items-start gap-2"
                            >
                              <span className="text-accent mt-0.5 flex-shrink-0">•</span>
                              <span className={index % 2 === 0 ? "text-right" : "text-left"}>{point}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
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
