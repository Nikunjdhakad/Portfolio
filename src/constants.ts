
import { Project, Experience, Skill } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    title: "Fashion Search Engine",
    description: "An AI-integrated search engine for fashion, providing intelligent recommendations and visual search capabilities.",
    techStack: ["Node.js", "React.js", "AI/ML"],
    link: "https://desifit.onrender.com/",
  },
  {
    title: "Comming Soon",
    description: "Working on this",
    techStack: [""],
   
  },
];

export const EXPERIENCES: Experience[] = [
  {
    title: "Cyber Security with Emerging Technologies",
    role: "Organizer",
    description: "Orchestrated a major technical talk focusing on the impact of emerging technologies on modern security landscapes.",
  },
  {
    title: "QueryQuest: Journey into SQL and Databases",
    role: "Lead Organizer",
    description: "Conducted a hands-on workshop covering relational database design, SQL optimization, and data security.",
  },
];

export const SKILLS: Skill[] = [
  { name: "React.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Java", category: "Languages" },
  { name: "Mongo DB", category: "Databases" },
  { name: "SQL", category: "Databases" },
  { name: "System Architecture", category: "Design" },
];
