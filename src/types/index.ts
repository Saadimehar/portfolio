export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  category: "fullstack" | "frontend" | "uiux" | "software" | "all";
  github?: string;
  live?: string;
  featured: boolean;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string[];
  tags: string[];
  type: "work" | "education";
}

export interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "design" | "tools" | "languages" | "additional";
  level?: "expert" | "advanced" | "intermediate";
}