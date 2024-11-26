export interface Author {
  id: string;
  name: string;
  role: string;
  bio?: string;
  image: string;
  expertise?: string[];
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  author: Author;
  publishedAt: string;
  readingTime: string;
  category: string;
  tags: string[];
  image: string;
  featured?: boolean;
}

export interface Whitepaper {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  downloadUrl: string;
  category: string;
  tags: string[];
  publishedAt: string;
  author: Author;
}

export interface CaseStudyMetric {
  label: string;
  value: string;
  description: string;
  trend?: {
    direction: 'up' | 'down';
    percentage: number;
  };
  icon: string;
}

export interface DetailedCaseStudy {
  id: string;
  title: string;
  description: string;
  industry: string;
  challenge: string;
  solution: string;
  implementation: string;
  results: CaseStudyMetric[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  technologies: string[];
  timeline: string;
  roi: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  expertise: string[];
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  education?: string[];
  certifications?: string[];
}
