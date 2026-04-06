"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects as allProjects } from "@/data/projects";

type ProjectCategory = "all" | "uiux" | "fullstack" | "frontend" | "software";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const categories: { id: ProjectCategory; label: string; icon: string }[] = [
    { id: "all", label: "All Projects", icon: "🎯" },
    { id: "uiux", label: "UI/UX Design", icon: "🎨" },
    { id: "fullstack", label: "Web Development", icon: "🌐" },
    { id: "software", label: "Software", icon: "⚙️" },
  ];

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "all"
      ? allProjects.filter((p) => p.featured)
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background transition-colors duration-300">
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-accent/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-secondary/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-linear-to-r from-accent via-purple-500 to-secondary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed text-justify">
            Explore my diverse portfolio of projects spanning UI/UX design, full-stack web development, and software solutions. Each project demonstrates my commitment to creating exceptional digital experiences and solving real-world problems.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? "bg-linear-to-r from-accent to-secondary text-white shadow-lg shadow-accent/50"
                  : "bg-background/40 border border-white/10 text-foreground hover:border-accent/30 hover:bg-background/60"
              }`}
            >
              <span>{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group h-full animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {/* Project Card */}
              <div className="relative h-full overflow-hidden rounded-2xl bg-linear-to-br from-background/60 to-background/30 backdrop-blur-lg border border-white/10 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 transform hover:-translate-y-1">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-linear-to-br from-accent/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Image Container */}
                <div className="relative h-60 w-full overflow-hidden bg-background/30">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 flex flex-col h-full">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:bg-linear-to-r group-hover:from-accent group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors duration-300 mb-4 grow leading-relaxed text-justify">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-semibold rounded-full bg-accent/10 text-accent border border-accent/20 group-hover:border-accent/50 group-hover:bg-accent/20 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-white/10">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 bg-linear-to-r from-accent to-secondary text-white text-center font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105 text-sm"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 border border-accent/30 text-accent text-center font-semibold rounded-lg hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 text-sm"
                      >
                        GitHub
                      </a>
                    )}
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
