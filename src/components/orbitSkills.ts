export type OrbitSkill = {
  label: string;
  description: string;
  x: number;
  y: number;
  depth: number;
  color: string;
};

// Labels deliberately match the requested artwork, including its spellings.
export const ORBIT_SKILLS: OrbitSkill[] = [
  { label: "Frontend systems", description: "Responsive, accessible interfaces built from reusable components.", x: 28, y: 7, depth: 15, color: "#ff9a72" },
  { label: "React", description: "Component-driven web applications with clear state and data flows.", x: 73, y: 10, depth: 30, color: "#61dafb" },
  { label: "tawilndcss", description: "Utility-first styling for consistent, responsive interfaces.", x: 85, y: 25, depth: -10, color: "#00d4aa" },
  { label: "next js", description: "React experiences with routing, rendering, and performance in mind.", x: 79, y: 41, depth: 20, color: "#f0f0f5" },
  { label: "pyhton", description: "Automation, reporting, and practical data-processing tools.", x: 85, y: 59, depth: -15, color: "#f5b942" },
  { label: "farmer motion", description: "Smooth interface transitions and thoughtful micro-interactions.", x: 76, y: 76, depth: 25, color: "#a78bfa" },
  { label: "SEO", description: "Search-friendly structure, metadata, and performance fundamentals.", x: 53, y: 84, depth: -5, color: "#ff9a72" },
  { label: "CMS", description: "Manageable content workflows for everyday publishing.", x: 30, y: 82, depth: 20, color: "#00d4aa" },
  { label: "WordPress", description: "Flexible websites and content-management experiences.", x: 17, y: 69, depth: -10, color: "#7ee2a0" },
  { label: "CMS platforms", description: "Content platforms tailored to business and editorial needs.", x: 23, y: 54, depth: 10, color: "#00d4aa" },
  { label: "UI / UX", description: "Clear user journeys, usable layouts, and intuitive interactions.", x: 12, y: 40, depth: 25, color: "#ff9a72" },
  { label: "PHP", description: "Server-side business logic, APIs, and database-backed applications.", x: 16, y: 24, depth: -5, color: "#f5b942" },
  { label: "Figma", description: "Wireframes, prototypes, and visual systems for digital products.", x: 46, y: 27, depth: 10, color: "#a78bfa" },
  { label: "Visual problem solving", description: "Turning complex ideas into purposeful, clear visual communication.", x: 50, y: 95, depth: 25, color: "#ff9a72" },
];
