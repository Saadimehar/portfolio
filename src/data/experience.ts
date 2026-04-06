import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Company Name",
    location: "Rawalpindi, Pakistan",
    startDate: "Jan 2024",
    endDate: "Present",
    description: [
      "Built and maintained web applications using Next.js and Node.js",
      "Designed UI components in Figma and implemented them in React",
      "Improved page load performance by 40% through code splitting",
    ],
    tags: ["Next.js", "Node.js", "Figma", "MongoDB"],
    type: "work",
  },
  {
    id: 2,
    role: "Bachelor of Computer Science",
    company: "Your University",
    location: "Rawalpindi, Pakistan",
    startDate: "Sep 2021",
    endDate: "Present",
    description: [
      "Specializing in Software Engineering and Human-Computer Interaction",
      "Final year project: [Your FYP title]",
    ],
    tags: ["Software Engineering", "HCI", "Data Structures"],
    type: "education",
  },
];