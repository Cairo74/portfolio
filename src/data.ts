export type Lang = "pt" | "en";

export const about = {
  pt: {
    title: "Minha trajetória",
    paragraphs: [
      "Olá, meu nome é Cairo Rodrigues Rezende, tenho 19 anos e sou estudante de Engenharia de Software na PUC Minas, com formação técnica em TI pelo Colégio COTEMIG. Desde cedo, o universo da tecnologia e da inovação me fascinam, motivando-me a construir uma trajetória sólida e prática em desenvolvimento e análise de dados.",
      "Atualmente, atuo no mercado como aprendiz na área de Análise de Dados, aplicando métodos analíticos e engenharia para apoiar decisões estratégicas e otimizar processos. Tenho grande entusiasmo por Inteligência Artificial e Ciência de Dados, áreas em que estou constantemente desenvolvendo projetos e aplicando soluções inteligentes a desafios reais.",
      "Com uma postura dedicada, organizada e orientada a resultados, prezo pelo rigor técnico e pela eficiência em cada entrega. Busco criar soluções digitais que unam performance, usabilidade e inteligência analítica, sempre aberto a colaborar em times dinâmicos e inovadores.",
      "No meu tempo livre, gosto de me desconectar e praticar esportes ao ar livre, como basquete e ciclismo. Essa dinâmica mantém meu foco e energia alinhados para encarar novos desafios tecnológicos com entusiasmo e disciplina.",
    ],
    facts: [
      ["Idade", "19 anos"],
      ["Graduação", "Engenharia de Software — PUC Minas (em andamento)"],
      ["Técnico", "Técnico em TI — COTEMIG (concluído)"],
      ["Atuação", "Aprendiz em Análise de Dados"],
      ["Idiomas", "Português (nativo) · Inglês (fluente)"],
      ["Local", "Belo Horizonte e Região, MG"],
    ],
  },
  en: {
    title: "My journey",
    paragraphs: [
      "Hello, my name is Cairo Rodrigues Rezende. I'm 19 years old, currently pursuing a Bachelor's degree in Software Engineering at PUC Minas, and hold an IT Technical degree from Colégio COTEMIG. From an early age, technology and digital innovation have inspired me to build a strong practical foundation in software development and data analytics.",
      "I currently work as a Data Analysis Apprentice, leveraging analytical methods and software tools to support strategic decision-making and operational efficiency. I'm deeply passionate about Artificial Intelligence and Data Science, constantly building hands-on projects that translate intelligent solutions into real-world value.",
      "With a dedicated, organized, and results-driven approach, I emphasize technical quality and efficiency in every project. I aim to create digital experiences that merge high performance, intuitive interfaces, and analytical depth, always eager to collaborate in dynamic and ambitious teams.",
      "In my free time, I like to disconnect and enjoy outdoor sports like basketball and cycling. This balance keeps my energy high and my mind sharp to tackle complex engineering challenges with focus and discipline.",
    ],
    facts: [
      ["Age", "19 years old"],
      ["Degree", "Software Engineering — PUC Minas (in progress)"],
      ["Technical", "IT Technical High School — COTEMIG (completed)"],
      ["Current Role", "Data Analysis Apprentice"],
      ["Languages", "Portuguese (native) · English (fluent)"],
      ["Location", "Minas Gerais, Brazil"],
    ],
  },
} as const;

export interface Education {
  institution: string;
  degree: { pt: string; en: string };
  period: { pt: string; en: string };
  status: { pt: string; en: string };
  description: { pt: string; en: string };
}

export const educations: Education[] = [
  {
    institution: "PUC Minas",
    degree: {
      pt: "Bacharelado em Engenharia de Software",
      en: "Bachelor in Software Engineering",
    },
    period: {
      pt: "Fev. 2025 – Conclusão prevista: Dez. 2029",
      en: "Feb 2025 – Expected graduation: Dec 2029",
    },
    status: {
      pt: "Em andamento (2º período)",
      en: "In progress (2nd semester)",
    },
    description: {
      pt: "Construção de base sólida em engenharia de software, com ênfase em modelagem de sistemas, estruturas de dados, arquitetura de aplicações e boas práticas voltadas à escalabilidade e manutenibilidade.",
      en: "Building a solid software engineering foundation, focusing on system modeling, data structures, application architecture, and best practices geared toward scalability and maintainability.",
    },
  },
  {
    institution: "COTEMIG",
    degree: {
      pt: "Ensino Médio Técnico em Tecnologia da Informação",
      en: "Technical High School in Information Technology",
    },
    period: {
      pt: "Jan. 2023 – Dez. 2025",
      en: "Jan 2023 – Dec 2025",
    },
    status: {
      pt: "Concluído",
      en: "Completed",
    },
    description: {
      pt: "Desenvolvimento de habilidades práticas em desenvolvimento web, Android, iOS e frameworks modernos, com foco na criação de aplicações e soluções digitais.",
      en: "Practical skills development across web, Android, iOS, and modern frameworks, focused on building applications and digital solutions.",
    },
  },
];

export interface Project {
  name: string;
  period: string;
  description: { pt: string; en: string };
  tech: string[];
  repo: string;
  image: string;
}

export const projects: Project[] = [
  {
    name: "IA para Análise de Dados",
    period: "2025",
    description: {
      pt: "Sistema de machine learning para analisar e classificar scores de crédito de clientes em diferentes níveis de risco.",
      en: "Machine learning system to analyze and classify customers' credit scores into different risk levels.",
    },
    tech: ["Python", "Scikit-Learn", "Pandas"],
    repo: "https://github.com/Cairo74",
    image: "/projects/ia-dados.svg",
  },
  {
    name: "Drew",
    period: "2025",
    description: {
      pt: "Interface de desenho por gestos que transforma a câmera do dispositivo em ferramenta criativa, permitindo desenhar na tela com o movimento das mãos via visão computacional.",
      en: "Gesture-based drawing interface turning the device camera into a creative tool, allowing users to draw on screen through hand motions using computer vision.",
    },
    tech: ["Next.js", "React", "TypeScript"],
    repo: "https://github.com/Cairo74",
    image: "/projects/drew.svg",
  },
  {
    name: "Flya",
    period: "2026",
    description: {
      pt: "Plataforma colaborativa que gera roteiros de viagem personalizados com IA com base em perfil, interesses e orçamento. Atuação no back-end (NestJS), front-end (React) e integrações com APIs externas.",
      en: "Collaborative platform generating customized AI travel itineraries based on user profile, interests, and budget. Development across back-end (NestJS), front-end (React), and external API integrations.",
    },
    tech: ["ReactJS", "NestJS", "Supabase", "Groq"],
    repo: "https://github.com/Cairo74",
    image: "/projects/flya.svg",
  },
];

export interface Experience {
  org: string;
  role: { pt: string; en: string };
  period: { pt: string; en: string };
  description: { pt: string; en: string };
}

export const experiences: Experience[] = [
  {
    org: "MRV",
    role: { pt: "Aprendiz em Análise de Dados", en: "Data Analysis Apprentice" },
    period: { pt: "Fev. 2026 – Atual", en: "Feb 2026 – Present" },
    description: {
      pt: "Atuação no setor bancário e de análise de crédito, apoiando operações de dados em área com volume médio mensal expressivo de crédito. Análise de propostas, suporte a decisões orientadas por dados e evolução de ferramentas de geração de leads.",
      en: "Working in banking and credit analysis operations with substantial monthly credit volume. Analyzing credit proposals, supporting data-driven decisions, and improving lead-generation tooling.",
    },
  },
  {
    org: "KXP Tech",
    role: { pt: "Estagiário em Desenvolvimento Flutter", en: "Flutter Development Intern" },
    period: { pt: "Fev. 2025 – Set. 2025", en: "Feb 2025 – Sep 2025" },
    description: {
      pt: "Desenvolvimento e manutenção de aplicações móveis em Flutter, do design de UI/UX à integração com APIs e bancos de dados usando Firebase e Supabase, com testes unitários e boas práticas de arquitetura.",
      en: "Developed and maintained Flutter mobile apps, from UI/UX design to API and database integration using Firebase and Supabase, writing unit tests and following clean architecture.",
    },
  },
  {
    org: "Desenvolvedor Freelancer",
    role: { pt: "Desenvolvimento Web Personalizado", en: "Custom Web Developer" },
    period: { pt: "Jan. 2025 – Atual", en: "Jan 2025 – Present" },
    description: {
      pt: "Desenvolvimento de projetos sob medida com foco em interfaces web modernas, responsivas e performáticas utilizando React e Next.js, transformando requisitos e briefings em produtos digitais de alta qualidade.",
      en: "Building tailored, responsive web applications focused on performance and modern UI using React and Next.js, turning client requirements into high quality digital products.",
    },
  },
];

export const skills = [
  "Python", "SQL", "Java", "JavaScript", "TypeScript", "Flutter", "Kotlin", "Swift", "C#",
  "React", "Next.js", "NestJS", "scikit-learn", "Hugging Face",
  "MySQL", "SQL Server", "GCP", "Power BI", "Tableau", "Docker", "Git", "Figma",
];

const dv = (name: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${variant}.svg`;
const si = (slug: string, hex: string) => `https://cdn.simpleicons.org/${slug}/${hex}`;

export interface Tech {
  name: string;
  logo: string;
}

export const techStack: { row1: Tech[]; row2: Tech[] } = {
  row1: [
    { name: "Python", logo: dv("python") },
    { name: "SQL", logo: "" },
    { name: "Java", logo: dv("java") },
    { name: "JavaScript", logo: dv("javascript") },
    { name: "TypeScript", logo: dv("typescript") },
    { name: "Flutter", logo: dv("flutter") },
    { name: "Kotlin", logo: dv("kotlin") },
    { name: "Swift", logo: dv("swift") },
    { name: "C#", logo: dv("csharp") },
    { name: "React", logo: dv("react") },
    { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
    { name: "NestJS", logo: dv("nestjs") },
  ],
  row2: [
    { name: "scikit-learn", logo: dv("scikitlearn") },
    { name: "Hugging Face", logo: si("huggingface", "FFD21E") },
    { name: "MySQL", logo: dv("mysql") },
    { name: "SQL Server", logo: dv("microsoftsqlserver", "plain") },
    { name: "GCP", logo: dv("googlecloud") },
    { name: "Power BI", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
    { name: "Tableau", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png" },
    { name: "Docker", logo: dv("docker") },
    { name: "Git", logo: dv("git") },
    { name: "Figma", logo: dv("figma") },
  ],
};


export const contact = {
  email: "cairowork.dev@gmail.com",
  whatsapp: "https://wa.me/5531975011696",
  linkedin: "https://linkedin.com/in/cairo-rezende-791a51293",
  github: "https://github.com/Cairo74",
};
