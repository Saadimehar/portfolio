"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects as allProjects } from "@/data/projects";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type ProjectCategory = "all" | "uiux" | "fullstack" | "frontend" | "software";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation(0.2);

  const categories: { id: ProjectCategory; label: string; icon: string }[] = [
    { id: "all", label: "All Projects", icon: "🎯" },
    { id: "uiux", label: "UI/UX Design", icon: "🎨" },
    { id: "fullstack", label: "Web Development", icon: "🌐" },
    { id: "frontend", label: "Frontend", icon: "🎭" },
    { id: "software", label: "Other", icon: "⚙️" },
  ];

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "all"
      ? allProjects.filter((p) => p.featured)
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <section ref={projectsRef} className="min-h-screen py-[20px] sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background transition-colors duration-300">
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-accent/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-secondary/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className={`text-center mb-16 ${projectsVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-[clamp(2rem,6vw,3.5rem)] font-bold mb-4">
            <span className="bg-linear-to-r from-accent via-purple-500 to-secondary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed text-center">
            Explore my diverse portfolio of projects spanning UI/UX design, full-stack web development, and software solutions. Each project demonstrates my commitment to creating exceptional digital experiences and solving real-world problems.
          </p>
        </div>

        {/* Category Tabs */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 ${projectsVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: "0.08s" }}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeCategory === category.id
                  ? "bg-linear-to-r from-accent to-secondary text-background shadow-lg shadow-accent/50"
                  : "bg-background/40 border border-white/10 text-foreground hover:border-accent/30 hover:bg-background/60"
              }`}
            >
              <span>{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${projectsVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: "0.15s" }}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group h-full ${projectsVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.25 + index * 0.08}s` }}
            >
              {/* Project Card */}
              <div className="relative h-full overflow-hidden rounded-2xl bg-card backdrop-blur-xl border border-border transition-all duration-500 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/30 transform hover:-translate-y-2">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-linear-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Image Container with Overlay Buttons */}
                <div className="relative h-72 w-full overflow-hidden bg-muted group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />

                  {/* Action Buttons - Appear on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                    {/* Website/Live Link Button */}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-linear-to-br from-accent to-purple-600 text-background font-bold rounded-xl flex items-center gap-2 hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm cursor-pointer"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span className="text-sm font-semibold">Website</span>
                      </a>
                    )}

                    {/* GitHub Link Button */}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-background/80 border-2 border-foreground dark:border-white text-foreground dark:text-white font-bold rounded-xl flex items-center gap-2 hover:border-accent hover:bg-accent/20 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm cursor-pointer"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.184.092-.923.35-1.544.636-1.9-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.917.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.194 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-semibold">Code</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="relative z-10 p-6 flex flex-col h-full">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider bg-linear-to-r from-accent to-secondary bg-clip-text text-transparent">
                      {project.category === "uiux" && "UI/UX Design"}
                      {project.category === "fullstack" && "Full Stack"}
                      {project.category === "frontend" && "Frontend"}
                      {project.category === "software" && "Other"}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-accent group-hover:to-secondary group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 group-hover:text-foreground/80 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Tools/Languages Display - Button Style Boxes */}
                  <div className="mb-6 space-y-3">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <div
                          key={tag}
                          className="px-4 py-2 bg-linear-to-r from-accent/20 to-secondary/20 border border-accent/40 rounded-xl text-xs font-bold text-accent group-hover:from-accent/30 group-hover:to-secondary/30 group-hover:border-accent/60 transition-all duration-300 flex items-center gap-2"
                        >
                          {/* Icon based on tool type */}
                          {(tag.includes("React") || tag.includes("Next") || tag.includes("Vue")) && (
                            <span className="text-sm">⚛️</span>
                          )}
                          {(tag.includes("Node") || tag.includes("Express") || tag.includes("Python")) && (
                            <span className="text-sm">🔧</span>
                          )}
                          {(tag.includes("MongoDB") || tag.includes("SQL") || tag.includes("Firebase")) && (
                            <span className="text-sm">🗄️</span>
                          )}
                          {(tag.includes("Design") || tag.includes("UI") || tag.includes("Figma")) && (
                            <span className="text-sm">🎨</span>
                          )}
                          {(tag.includes("TypeScript") || tag.includes("JavaScript")) && (
                            <span className="text-sm">📝</span>
                          )}
                          {(tag.includes("Tailwind") || tag.includes("CSS") || tag.includes("SCSS")) && (
                            <span className="text-sm">🎭</span>
                          )}
                          {(tag.includes("Socket") || tag.includes("REST") || tag.includes("API")) && (
                            <span className="text-sm">🔗</span>
                          )}
                          {(tag.includes("Docker") || tag.includes("AWS") || tag.includes("DevOps")) && (
                            <span className="text-sm">☁️</span>
                          )}
                          {!(tag.includes("React") || tag.includes("Next") || tag.includes("Vue") || 
                            tag.includes("Node") || tag.includes("Express") || tag.includes("Python") ||
                            tag.includes("MongoDB") || tag.includes("SQL") || tag.includes("Firebase") ||
                            tag.includes("Design") || tag.includes("UI") || tag.includes("Figma") ||
                            tag.includes("TypeScript") || tag.includes("JavaScript") ||
                            tag.includes("Tailwind") || tag.includes("CSS") || tag.includes("SCSS") ||
                            tag.includes("Socket") || tag.includes("REST") || tag.includes("API") ||
                            tag.includes("Docker") || tag.includes("AWS") || tag.includes("DevOps")) && (
                            <span className="text-sm">💻</span>
                          )}
                          <span>{tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* View Project Button - Bottom */}
                  <div className="mt-auto pt-5 border-t border-border/50 group-hover:border-accent/30 transition-colors duration-300">
                    <button
                      onClick={() => {
                        if (project.live) {
                          window.open(project.live, "_blank");
                        } else if (project.github) {
                          window.open(project.github, "_blank");
                        }
                      }}
                      className="w-full px-4 py-3 bg-linear-to-r from-accent/10 to-secondary/10 border-2 border-accent/30 text-accent font-bold rounded-xl hover:from-accent/20 hover:to-secondary/20 hover:border-accent/60 transition-all duration-300 group/btn flex items-center justify-between hover:gap-3"
                    >
                      <span className="flex-1 text-center text-sm">View Project</span>
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No projects found in this category. Coming soon!
            </p>
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

export default Projects;
