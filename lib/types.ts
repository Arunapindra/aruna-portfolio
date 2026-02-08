export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  highlights: string[];
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
  technologies: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  validUntil?: string;
  credentialId?: string;
  badgeColor: string;
}

export interface Education {
  degree: string;
  year: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  summary: string;
  resumeFile: string;
  navItems: NavItem[];
  socialLinks: SocialLink[];
  skillCategories: SkillCategory[];
  projects: Project[];
  experience: Experience[];
  certifications: Certification[];
  education: Education;
  stats: { label: string; value: number; suffix: string }[];
}
