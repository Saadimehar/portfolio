"use client";

import React, { useState, useEffect } from "react";
import { skills } from "@/data/skills";

type SkillCategory = "all" | "frontend" | "backend" | "design" | "tools" | "languages" | "additional";

// Icon mapping with emojis
const iconMap: { [key: string]: string } = {
  react: "⚛️",
  nextjs: "▲",
  typescript: "🔷",
  tailwind: "🎨",
  nodejs: "🟢",
  express: "⚙️",
  mongodb: "🍃",
  postgresql: "🐘",
  figma: "🎭",
  adobexd: "🎯",
  git: "🔀",
  docker: "🐳",
  vscode: "💻",
  vercel: "▲",
  cpp: "🔧",
  html: "📝",
  css: "🎨",
  javascript: "⚡",
  wordpress: "📝",
  webflow: "🌐",
  seo: "🔍",
  leadership: "👑",
  communication: "💬",
  teamwork: "🤝",
};

const skillCategories: { id: SkillCategory; label: string; icon: string }[] = [
  { id: "all", label: "All Skills", icon: "🎯" },
  { id: "languages", label: "Languages", icon: "💻" },
  { id: "frontend", label: "Frontend", icon: "🎨" },
  { id: "backend", label: "Backend", icon: "⚙️" },
  { id: "design", label: "Design", icon: "🎭" },
  { id: "tools", label: "Tools", icon: "🛠️" },
  { id: "additional", label: "Soft Skills", icon: "⭐" },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("all");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  // Filter skills based on active category
  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  // Update scroll state after DOM is ready
  useEffect(() => {
    const updateScrollState = () => {
      const container = scrollContainerRef.current;
      if (!container) return;
      
      const hasHorizontalScroll = container.scrollWidth > container.clientWidth;
      setCanScrollRight(hasHorizontalScroll);
    };

    // Run immediately and after a small delay for the DOM to fully render
    updateScrollState();
    const timer = setTimeout(updateScrollState, 100);
    
    // Also run on window resize in case the layout changes
    window.addEventListener("resize", updateScrollState);
    
    return () => {
      window.removeEventListener("resize", updateScrollState);
      clearTimeout(timer);
    };
  }, [filteredSkills]);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 300;
    const newPosition = direction === "left" 
      ? Math.max(0, scrollPosition - scrollAmount)
      : Math.min(container.scrollWidth - container.clientWidth, scrollPosition + scrollAmount);
    
    container.scrollTo({ left: newPosition, behavior: "smooth" });
    setScrollPosition(newPosition);
  };

  const canScrollLeft = scrollPosition > 0;
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const newPosition = container.scrollLeft;
    setScrollPosition(newPosition);
    
    // Update canScrollRight when scrolling
    const hasMoreToScroll = newPosition < container.scrollWidth - container.clientWidth;
    setCanScrollRight(hasMoreToScroll);
  };

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
              Skills & Expertise
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed text-justify">
            A comprehensive overview of my technical skills and soft skills. Click the categories below to filter and view my expertise across different domains.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
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

        {/* Horizontal Scrolling Skills with Arrow Buttons */}
        <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {/* Skills Container with Arrows */}
          <div className="relative group flex items-center justify-center gap-4">
            {/* Left Arrow Button - Beautiful Design */}
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden relative z-20 transition-all duration-500 transform hover:scale-110 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer group/arrow"
              aria-label="Scroll left"
            >
              {/* Arrow Button Background - Dark Mode */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 dark:from-slate-800 dark:to-slate-950 border border-slate-600 dark:border-slate-700" />
              
              {/* Arrow Button Background - Light Mode */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 border border-slate-400 dark:hidden" />
              
              {/* Hover Effect Glow */}
              <div className="absolute inset-0 bg-linear-to-r from-accent/0 via-accent/20 to-secondary/0 opacity-0 group-hover/arrow:opacity-100 transition-opacity duration-300" />
              
              {/* Arrow Icon */}
              <div className="relative w-full h-full flex items-center justify-center text-2xl font-bold text-slate-950 dark:text-slate-950 group-hover/arrow:text-accent transition-colors duration-300">
                ←
              </div>
            </button>

            {/* Scrollable Container */}
            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-hide scroll-smooth flex-1 min-w-0"
              onScroll={handleScroll}
            >
              {/* Gradient overlays on sides */}
              <div className="hidden" />
              <div className="hidden" />

              {/* Skills Grid - Horizontal Scrolling */}
              <div className="flex flex-nowrap gap-8 pb-4 px-8">
                {filteredSkills.map((skill, idx) => (
                  <SkillBox key={`skill-${skill.name}-${idx}`} skill={skill} />
                ))}
              </div>

              {/* Custom styles for scrollbar */}
              <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
                .scrollbar-hide {
                  -ms-overflow-style: none;
                  scrollbar-width: none;
                }
              `}</style>
            </div>

            {/* Right Arrow Button - Beautiful Design */}
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden relative z-20 transition-all duration-500 transform hover:scale-110 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer group/arrow"
              aria-label="Scroll right"
            >
              {/* Arrow Button Background - Dark Mode */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 dark:from-slate-800 dark:to-slate-950 border border-slate-600 dark:border-slate-700" />
              
              {/* Arrow Button Background - Light Mode */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 border border-slate-400 dark:hidden" />
              
              {/* Hover Effect Glow */}
              <div className="absolute inset-0 bg-linear-to-r from-secondary/0 via-secondary/20 to-accent/0 opacity-0 group-hover/arrow:opacity-100 transition-opacity duration-300" />
              
              {/* Arrow Icon */}
              <div className="relative w-full h-full flex items-center justify-center text-2xl font-bold text-slate-950 dark:text-slate-950 group-hover/arrow:text-accent transition-colors duration-300">
                →
              </div>
            </button>
          </div>
        </div>

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

// Small Square Skill Box Component (for manual scrolling)
interface SkillBoxProps {
  skill: (typeof skills)[0];
}

const SkillBox: React.FC<SkillBoxProps> = ({ skill }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex-shrink-0 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative w-32 h-32 rounded-2xl backdrop-blur-lg border-2 transition-all duration-500 flex flex-col items-center justify-center cursor-pointer overflow-hidden ${
        isHovered
          ? "border-accent shadow-2xl shadow-accent/60 transform scale-105"
          : "border-white/10 shadow-lg"
      }`}>
        {/* Black Background */}
        <div className="absolute inset-0 light:bg-white/60 dark:bg-black border border-white/5" />

        {/* Hover Gradient overlay */}
        <div className={`absolute inset-0 bg-linear-to-br from-accent/20 to-secondary/20 opacity-0 transition-opacity duration-500 ${
          isHovered ? "opacity-100" : ""
        }`} />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-2">
          {/* Icon */}
          <div className={`transition-all duration-500 ${
            isHovered ? "scale-140 text-accent" : "text-4xl"
          }`}>
            <span className="text-5xl">{iconMap[skill.icon] || "💻"}</span>
          </div>
          {/* Name */}
          <span className={`text-sm font-bold text-center text-foreground transition-all duration-300 line-clamp-2 px-2 ${
            isHovered ? "text-accent" : ""
          }`}>
            {skill.name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;

