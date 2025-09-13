export interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  points: string[];
}

export enum ProjectCategoryEnum {
    DataEngineer = "Data Engineer",
    AI = "AI",
    DataScience = "Data Science",
    QuantumComputing = "Quantum Computing",
    FullStack = "Full Stack",
    UIUX = "UI/UX"
}

export interface Project {
  title: string;
  category: ProjectCategoryEnum;
  duration?: string;
  description: string;
  skills: string[];
  links: {
    github?: string;
    live?: string;
    other?: string;
  };
}

export interface ProjectCategory {
    name: ProjectCategoryEnum;
    projects: Project[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  gpa?: string;
  details: string[];
}

export interface SkillCategory {
    name: string;
    skills: string[];
}

export interface Testimonial {
    quote: string;
    author: string;
    role: string;
    context: string;
}

export interface Publication {
    title: string;
    journal: string;
    date: string;
    link: string;
    description: string;
}
