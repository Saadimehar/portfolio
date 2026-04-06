import { Skill } from "@/types";

export const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "react", category: "frontend", level: "expert" },
  { name: "Next.js", icon: "nextjs", category: "frontend", level: "expert" },
  { name: "TypeScript", icon: "typescript", category: "frontend", level: "advanced" },
  { name: "Tailwind CSS", icon: "tailwind", category: "frontend", level: "expert" },
  // Backend
  { name: "Node.js", icon: "nodejs", category: "backend", level: "advanced" },
  { name: "Express", icon: "express", category: "backend", level: "advanced" },
  { name: "MongoDB", icon: "mongodb", category: "backend", level: "intermediate" },
  { name: "PostgreSQL", icon: "postgresql", category: "backend", level: "intermediate" },
  // Design
  { name: "Figma", icon: "figma", category: "design", level: "expert" },
  { name: "Adobe XD", icon: "adobexd", category: "design", level: "advanced" },
  // Tools
  { name: "Git", icon: "git", category: "tools", level: "advanced" },
  { name: "Docker", icon: "docker", category: "tools", level: "intermediate" },
  { name: "VS Code", icon: "vscode", category: "tools", level: "expert" },
  { name: "Vercel", icon: "vercel", category: "tools", level: "advanced" },
];