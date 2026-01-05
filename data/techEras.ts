export interface TechItem {
  name: string;
  description?: string;
}

export interface Era {
  id: number;
  title: string;
  caption: string;
  technologies: TechItem[];
  theme: string;
}

export const techEras: Era[] = [
  {
    id: 2017,
    title: "Learning to Code",
    caption: "I focused on making things work — learning how the web actually runs behind the scenes.",
    technologies: [
      { name: "Laravel", description: "PHP framework for building web applications" },
      { name: "jQuery", description: "Simplifying DOM manipulation and AJAX" },
      { name: "Git", description: "Version control and collaboration" },
      { name: "MySQL", description: "Relational database management" },
      { name: "Nginx", description: "Web server and reverse proxy" },
    ],
    theme: "var(--era-1)",
  },
  {
    id: 2021,
    title: "Backend Awakening",
    caption: "Backend was no longer just code. It became queues, environments, and reliability.",
    technologies: [
      { name: "AWS", description: "SQS - Message queuing service" },
      { name: "AWS", description: "Elastic Beanstalk - PaaS deployment" },
      { name: "AWS", description: "S3 - Object storage solution" },
    ],
    theme: "var(--era-2)",
  },
  {
    id: 2022,
    title: "Structure & Performance",
    caption: "Structure brought clarity. Performance became a conscious decision.",
    technologies: [
      { name: "NestJS", description: "Enterprise-grade Node.js framework" },
      { name: "Fastify", description: "High-performance web framework" },
      { name: "PostgreSQL", description: "Advanced relational database" },
    ],
    theme: "var(--era-3)",
  },
  {
    id: 2023,
    title: "Distributed Thinking",
    caption: "I stopped thinking in servers — and started thinking in scalable systems.",
    technologies: [
      { name: "Go", description: "High-performance concurrent programming" },
      { name: "Docker", description: "Container platform for consistency" },
      { name: "Kubernetes", description: "Container orchestration at scale" },
    ],
    theme: "var(--era-4)",
  },
  {
    id: 2024,
    title: "Interface & Experience",
    caption: "Efficiency matters — for both users and developers.",
    technologies: [
      { name: "React Admin", description: "Admin panel framework for rapid development" },
      { name: "Tailwind CSS", description: "Utility-first CSS for fast styling" },
      { name: "Element UI", description: "Component library for enterprise apps" },
    ],
    theme: "var(--era-1)",
  },
  {
    id: 2025,
    title: "Production-Grade Systems",
    caption: "Systems aren't complete until they're observable, testable, and resilient.",
    technologies: [
      { name: "Kong Gateway", description: "API gateway for microservices" },
      { name: "Redis", description: "In-memory caching and data store" },
      { name: "RabbitMQ", description: "Message broker for async processing" },
      { name: "k6", description: "Load testing and performance validation" },
      { name: "Grafana", description: "Observability and monitoring dashboards" },
    ],
    theme: "var(--era-2)",
  },
];

export const philosophyPoints = [
  "I choose tools for clarity, not trends.",
  "I design interfaces to feel effortless.",
  "I value maintainability more than cleverness.",
];

export const currentStackPrinciples = [
  {
    principle: "Performance-first",
    tech: "Next.js",
    description: "Server components, streaming, and edge optimization",
  },
  {
    principle: "Accessibility-aware",
    tech: "Semantic HTML + ARIA",
    description: "Building for everyone, not just some",
  },
  {
    principle: "Scalable architecture",
    tech: "TypeScript",
    description: "Type safety that grows with the codebase",
  },
  {
    principle: "Developer experience",
    tech: "Tailwind + Framer Motion",
    description: "Rapid iteration without sacrificing quality",
  },
];
