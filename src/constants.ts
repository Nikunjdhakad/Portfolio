
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
    title: "Smart India Hackathon (SIH)",
    role: "Team Lead",
    description: "Participated in Smart India Hackathon, collaborating in a team to design and develop a real-world solution within a limited timeframe. Worked on problem analysis, solution design, and rapid development under pressure.",
  },
  {
    title: "QueryQuest: Journey into SQL and Databases",
    role: "Lead Organizer",
    description: "Conducted a hands-on workshop covering relational database design, SQL optimization, and data security.",
  },
];

export const SKILLS: Skill[] = [
  { name: "HTML, CSS, JS", category: "Frontend" },
  { name: "React.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Vite", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "Git & GitHub", category: "Tools" },
  { name: "Render", category: "Deployment" },
];
