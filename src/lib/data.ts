import { TechItem, Project } from "./types";

export const CREDLY_USERNAME = "gaetan-carre.58d49ebb";

function formatYearsSince(startDate: Date) {
  const now = new Date();
  const months =
    (now.getFullYear() - startDate.getFullYear()) * 12 +
    (now.getMonth() - startDate.getMonth()) +
    1;
  const years = Math.max(0, months / 12);

  return `${years.toFixed(1)} years`;
}

const thalesStartDate = new Date(2022, 8, 1);

export const personalInfo = {
  name: "Gaëtan",
  surname: "CARRÉ",
  title: "Software Engineer Infrastructure",
  location: "Paris, France",
  experience: `${formatYearsSince(thalesStartDate)} at Thales as DevNetOps Engineer`,
  education: "Cybersecurity Engineering Degree — ECE Paris",
  hobbies: "Ski, F1, Making Coffee, Personal Finance",
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
  { name: "Loki", icon: "devicon-grafana-plain", iconType: "devicon", category: "observability" },
  // Networking
  { name: "Palo Alto", icon: "/firewall.svg", iconType: "svg", category: "networking" },
  { name: "Juniper SRX", icon: "/firewall.svg", iconType: "svg", category: "networking" },
  { name: "Routing & Switching", icon: "/router.svg", iconType: "svg", category: "networking" },
];

export const projects: Project[] = [
  {
    title: "WealthScale",
    description:
      "A modern portfolio management platform for tracking investments across multiple brokers. Features real-time portfolio valuation, TWR performance metrics with benchmark comparison, automated broker imports, asset screener with fundamental data, and dividend tracking — all built with a microservices architecture.",
    stack: [
      "React",
      "TypeScript",
      "Go",
      "Python",
      "MongoDB",
      "RabbitMQ",
      "Docker",
      "Grafana",
    ],
    github: "https://github.com/GaetanCARRE/wealthscale-public",
    demo: "https://app.wealthscale.xyz",
    kind: "personal",
    featured: true,
    highlights: [
      "Real-time portfolio valuation with historical charts & TWR performance",
      "Automated broker import (Revolut, CSV) with duplicate detection",
      "Asset screener with fundamental data, financials & interactive charts",
      "Diversification analysis by sector, industry, country & currency",
      "Event-driven microservices with Go API gateway & Python data pipeline",
    ],
    screenshots: [
      { src: "/projects/wealthscale/dashboard.png", alt: "Portfolio Dashboard" },
      { src: "/projects/wealthscale/diversification.png", alt: "Diversification Analysis" },
      { src: "/projects/wealthscale/Positions.jpeg", alt: "Positions Overview" },
      { src: "/projects/wealthscale/buys.png", alt: "Buy/Sell History on Price Curve" },
      { src: "/projects/wealthscale/transactions.png", alt: "Transactions Management" },
      { src: "/projects/wealthscale/screener.png", alt: "Asset Screener" },
      { src: "/projects/wealthscale/screener_charts.png", alt: "Screener Charts" },
      { src: "/projects/wealthscale/watchlist.jpeg", alt: "Watchlists" },
      { src: "/projects/wealthscale/import_revolut.gif", alt: "Revolut Import Demo" },
    ],
  },
  {
    title: "GoFlix",
    description:
      "A Netflix-style full-stack streaming platform built with Go and React. It includes JWT authentication with refresh flow, video playback with progress tracking, personal watchlists, advanced content browsing, and an admin panel for managing the catalog.",
    stack: [
      "Go",
      "React",
      "PostgreSQL",
      "JWT",
      "Docker",
      "Tailwind CSS",
      "TMDB API",
    ],
    github: "https://github.com/GaetanCARRE/Netflix-Go",
    kind: "personal",
    featured: true,
    highlights: [
      "Netflix-like browsing experience with search, genre filtering, and responsive UI",
      "Secure auth flow with JWT access tokens and refresh token rotation",
      "Video streaming with resume playback and per-user progress tracking",
      "Admin panel to create, edit, and delete movies/series with TMDB poster integration",
      "Dockerized multi-service architecture with Go REST API and PostgreSQL backend",
    ],
    screenshots: [
      { src: "/projects/goflix/home.png", alt: "Home Page" },
      { src: "/projects/goflix/movies.png", alt: "Movies Listing" },
      { src: "/projects/goflix/movie_modal.png", alt: "Movie Details Modal" },
      { src: "/projects/goflix/admin.png", alt: "Admin Catalog Management" },
      { src: "/projects/goflix/demo.gif", alt: "GoFlix Demo" },
    ],
  },
  {
    title: "Gambas",
    description:
      "Firewall automation platform to manage the full firewall lifecycle, from opening network flows to cleanup operations, while maintaining object lifecycle as a source of truth and automating provisioning and deployments across environments.",
    stack: [
      "GitLab CI",
      "Python (Flask)",
      "React",
      "Automated Deployment",
      "Multi-Env (Prod/Preprod)",
      "Tufin",
      "Infoblox",
    ],
    kind: "pro",
  },
  {
    title: "AI Agent GenAI",
    description:
      "Autonomous AI agent with execution loop and function calling. Capable of interpreting requests, dynamically calling tools and executing Python code.",
    stack: ["Python", "GenAI", "Function Calling"],
    github: "https://github.com/GaetanCARRE/ai-agent-genai",
    kind: "personal",
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
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
