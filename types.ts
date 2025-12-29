
export enum Category {
  ALL = 'All',
  UIUX = 'UI/UX',
  DEV = 'Dev',
  BRANDING = 'Branding'
}

export interface Metric {
  label: string;
  value: string;
  subtext?: string;
}

export interface ProjectResult {
  month: string;
  before: number;
  after: number;
}

export interface Project {
  id: string;
  title: string;
  category: Category;
  thumbnail: string;
  description: string;
  role: string;
  contribution: number;
  challenge: string;
  solution: string;
  results: ProjectResult[];
  impactMetrics: Metric[];
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  tasks: string[];
}
