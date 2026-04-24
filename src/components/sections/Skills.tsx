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

// Responsive button sizes based on screen size
const BUTTON_SIZES = {
  mobile: { width: "w-7 h-7", icon: "text-xs" },
  tablet: { width: "w-12 h-12", icon: "text-xl" },
  desktop: { width: "w-14 h-14", icon: "text-2xl" },
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
  const [buttonSize, setButtonSize] = useState("desktop");
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  // Detect screen size for responsive button sizing
  useEffect(() => {
    const updateButtonSize = () => {
      if (window.innerWidth < 640) {
        setButtonSize("mobile");
      } else if (window.innerWidth < 1024) {
        setButtonSize("tablet");
      } else {
        setButtonSize("desktop");
      }
    };

    updateButtonSize();
    window.addEventListener("resize", updateButtonSize);
    return () => window.removeEventListener("resize", updateButtonSize);
  }, []);

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
    <section className="min-h-screen py-[20px] sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background transition-colors duration-300">
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-accent/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-secondary/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-[clamp(2rem,6vw,3.5rem)] font-bold mb-4">
            <span className="bg-linear-to-r from-accent via-purple-500 to-secondary bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed text-center">
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
          <div className="relative group flex items-center justify-center gap-0 sm:gap-0 lg:gap-0">
            {/* Left Arrow Button - Responsive & Beautiful Design */}
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`shrink-0 ${
                buttonSize === "mobile"
                  ? BUTTON_SIZES.mobile.width
                  : buttonSize === "tablet"
                  ? BUTTON_SIZES.tablet.width
                  : BUTTON_SIZES.desktop.width
              } rounded-xl lg:rounded-full overflow-hidden relative z-20 transition-all duration-500 transform hover:scale-110 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer group/arrow shadow-lg hover:shadow-xl`}
              aria-label="Scroll left"
              title={canScrollLeft ? "Scroll left" : "No more items"}
            >
              {/* Base Gradient Background - Dark Mode */}
              <div className="absolute inset-0 bg-linear-to-br from-accent to-secondary opacity-100 dark:opacity-100 transition-opacity duration-300" />
              
              {/* Light Mode Overlay */}
              <div className="absolute inset-0 bg-linear-to-br from-accent/80 to-secondary/80 opacity-0 light:opacity-100 transition-opacity duration-300" />
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-linear-to-r from-accent/40 via-secondary/40 to-accent/40 opacity-0 group-hover/arrow:opacity-100 transition-opacity duration-300 blur-sm" />
              
              {/* Enhanced Shine Effect on Hover */}
              <div className="absolute -inset-0.5 bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/arrow:opacity-100 transition-opacity duration-300 animate-pulse" style={{ animationDuration: "2s" }} />
              
              {/* Arrow Icon */}
              <div className={`relative w-full h-full flex items-center justify-center font-bold text-white transition-all duration-300 ${
                buttonSize === "mobile"
                  ? "text-xs"
                  : buttonSize === "tablet"
                  ? "text-xl"
                  : "text-2xl"
              }`}>
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
              <div className="flex flex-nowrap gap-6 sm:gap-7 lg:gap-8 pb-4 px-4 sm:px-6 lg:px-8">
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

            {/* Right Arrow Button - Responsive & Beautiful Design */}
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`shrink-0 ${
                buttonSize === "mobile"
                  ? BUTTON_SIZES.mobile.width
                  : buttonSize === "tablet"
                  ? BUTTON_SIZES.tablet.width
                  : BUTTON_SIZES.desktop.width
              } rounded-xl lg:rounded-full overflow-hidden relative z-20 transition-all duration-500 transform hover:scale-110 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer group/arrow shadow-lg hover:shadow-xl`}
              aria-label="Scroll right"
              title={canScrollRight ? "Scroll right" : "No more items"}
            >
              {/* Base Gradient Background - Dark Mode */}
              <div className="absolute inset-0 bg-linear-to-br from-secondary to-accent opacity-100 dark:opacity-100 transition-opacity duration-300" />
              
              {/* Light Mode Overlay */}
              <div className="absolute inset-0 bg-linear-to-br from-secondary/80 to-accent/80 opacity-0 light:opacity-100 transition-opacity duration-300" />
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-linear-to-r from-secondary/40 via-accent/40 to-secondary/40 opacity-0 group-hover/arrow:opacity-100 transition-opacity duration-300 blur-sm" />
              
              {/* Enhanced Shine Effect on Hover */}
              <div className="absolute -inset-0.5 bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/arrow:opacity-100 transition-opacity duration-300 animate-pulse" style={{ animationDuration: "2s" }} />
              
              {/* Arrow Icon */}
              <div className={`relative w-full h-full flex items-center justify-center font-bold text-white transition-all duration-300 ${
                buttonSize === "mobile"
                  ? "text-xs"
                  : buttonSize === "tablet"
                  ? "text-xl"
                  : "text-2xl"
              }`}>
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
      className="shrink-0 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-2xl backdrop-blur-lg border-2 transition-all duration-500 flex flex-col items-center justify-center cursor-pointer overflow-hidden ${
        isHovered
          ? "border-accent shadow-2xl shadow-accent/60 transform scale-105"
          : "border-white/10 dark:border-white/10 light:border-accent/20 shadow-lg dark:shadow-lg light:shadow-md"
      }`}>
        {/* Background - Responsive to light/dark mode */}
        <div className="absolute inset-0 bg-linear-to-br from-card to-background/80 dark:from-card dark:to-background/80 light:from-white/70 light:to-white/50 border border-white/5 dark:border-white/5 light:border-accent/10" />

        {/* Hover Gradient overlay */}
        <div className={`absolute inset-0 bg-linear-to-br from-accent/20 to-secondary/20 opacity-0 transition-opacity duration-500 ${
          isHovered ? "opacity-100" : ""
        }`} />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-1 sm:gap-2">
          {/* Icon */}
          <div className={`transition-all duration-500 ${
            isHovered ? "scale-140" : "scale-100"
          }`}>
            <span className={`${
              isHovered ? "text-accent" : ""
            } transition-colors duration-300 text-3xl sm:text-4xl lg:text-5xl`}>{iconMap[skill.icon] || "💻"}</span>
          </div>
          {/* Name */}
          <span className={`text-xs sm:text-sm font-bold text-center text-foreground dark:text-foreground light:text-foreground/90 transition-all duration-300 line-clamp-2 px-1 sm:px-2 ${
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

