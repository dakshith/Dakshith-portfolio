export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  categories: string[];
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
}

export interface Testimonial {
  id: number;
  content: string;
  name: string;
  position: string;
  company: string;
  avatar: string;
}

export interface SkillCategory {
  id: number;
  title: string;
  icon: string;
  skills: string[];
  color: string;
  darkColor: string;
}

export interface ExperienceItem {
  id: number;
  position: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
  colorClass: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
