export interface Project {
  id: string;
  num: string;
  title: string;
  tags: string[];
  summary: string;
  architecture: string;
  keyFeatures: string[];
  githubUrl?: string;
}

export interface SpecBlock {
  specId: string;
  title: string;
  desc: string;
  badge: string;
}

export interface AcademicRecord {
  level: string;
  degree: string;
  institution: string;
}
