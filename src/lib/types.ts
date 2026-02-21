// Credly types

export interface CredlyBadge {
  id: string;
  expires_at_date: string | null;
  issued_at_date: string;
  issued_to: string;
  public: boolean;
  state: string;
  image_url: string;
  image: {
    id: string;
    url: string;
  };
  badge_template: CredlyBadgeTemplate;
  issuer: CredlyIssuer;
}

export interface CredlyBadgeTemplate {
  id: string;
  name: string;
  description: string;
  level: string | null;
  type_category: string | null;
  image_url: string;
  url: string;
  skills: CredlySkill[];
}

export interface CredlyIssuer {
  summary: string;
  entities: {
    label: string;
    primary: boolean;
    entity: {
      type: string;
      id: string;
      name: string;
      vanity_url: string;
    };
  }[];
}

export interface CredlySkill {
  id: string;
  name: string;
  vanity_slug: string;
}

export interface CredlyResponse {
  data: CredlyBadge[];
  metadata: {
    count: number;
    total_count: number;
    total_pages: number;
  };
}

// Portfolio data types

export interface TechItem {
  name: string;
  icon: string; // Devicon class name or SVG path
  iconType: "devicon" | "svg";
  category: "language" | "framework" | "tool" | "networking" | "observability";
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  kind: "pro" | "personal";
  github?: string;
  demo?: string;
  image?: string;
  featured?: boolean;
  highlights?: string[];
  screenshots?: ProjectScreenshot[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
