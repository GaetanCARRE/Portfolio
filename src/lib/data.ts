import { TechItem, Project } from "./types";

export const CREDLY_USERNAME = "gaetan-carre.58d49ebb";

export const personalInfo = {
  name: "Gaëtan",
  surname: "CARRÉ",
  title: "Developer & DevNetOps Engineer",
  location: "Paris, France",
  experience: "2 years at Thales as DevNetOps Engineer",
  education: "Cybersecurity Engineering Degree — ECE Paris",
  hobbies: "Sport, Cybersecurity",
  email: "gaetancarre.pro@gmail.com",
};

export const techStack: TechItem[] = [
  // Languages
  { name: "Python", icon: "devicon-python-plain", iconType: "devicon", category: "language" },
  { name: "Go", icon: "devicon-go-original-wordmark", iconType: "devicon", category: "language" },
  { name: "TypeScript", icon: "devicon-typescript-plain", iconType: "devicon", category: "language" },
  { name: "Java", icon: "devicon-java-plain", iconType: "devicon", category: "language" },
  // Frameworks
  { name: "FastAPI", icon: "devicon-fastapi-plain", iconType: "devicon", category: "framework" },
  { name: "Flask", icon: "devicon-flask-original", iconType: "devicon", category: "framework" },
  { name: "Next.js", icon: "devicon-nextjs-plain", iconType: "devicon", category: "framework" },
  // Tools
  { name: "Docker", icon: "devicon-docker-plain", iconType: "devicon", category: "tool" },
  { name: "Kubernetes", icon: "devicon-kubernetes-plain", iconType: "devicon", category: "tool" },
  { name: "Ansible", icon: "devicon-ansible-plain", iconType: "devicon", category: "tool" },
  { name: "GitLab CI", icon: "devicon-gitlab-plain", iconType: "devicon", category: "tool" },
  { name: "RabbitMQ", icon: "devicon-rabbitmq-original", iconType: "devicon", category: "tool" },
  // Observability / SRE
  { name: "Grafana", icon: "devicon-grafana-plain", iconType: "devicon", category: "observability" },
  { name: "Loki", icon: "/loki.svg", iconType: "svg", category: "observability" },
  // Networking
  { name: "Palo Alto", icon: "/palo-alto.svg", iconType: "svg", category: "networking" },
  { name: "Juniper SRX", icon: "/juniper-networks-logo-4.svg", iconType: "svg", category: "networking" },
];

export const projects: Project[] = [
  {
    title: "Finsight",
    description:
      "Full-stack portfolio tracking application with performance analytics, real-time market data and automated calculations.",
    stack: ["Next.js", "Go", "Python", "MongoDB", "Docker"],
    github: "https://github.com",
  },
  {
    title: "Portfolio",
    description:
      "This portfolio! Built with Next.js 15, TypeScript, shadcn/ui and dynamic Credly integration.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    github: "https://github.com",
  },
  {
    title: "AI Agent GenAI",
    description:
      "Autonomous AI agent with execution loop and function calling. Capable of interpreting requests, dynamically calling tools and executing Python code.",
    stack: ["Python", "GenAI", "Function Calling"],
    github: "https://github.com/GaetanCARRE/ai-agent-genai",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/GaetanCARRE",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/gaetan-carre",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:gaetancarre.pro@gmail.com",
    icon: "mail",
  },
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
