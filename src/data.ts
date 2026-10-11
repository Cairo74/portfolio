export type Lang = "pt" | "en";

export const about = {
  pt: {
    title: "Minha trajetória",
    paragraphs: [
      "Olá, meu nome é Cairo Rodrigues Rezende, um apaixonado por tecnologia e atualmente estudante de Engenharia de Software na PUC Minas, após concluir o Ensino Médio Técnico em TI no COTEMIG. Desde cedo, a inovação e o universo digital me fascinam, e essa curiosidade natural me levou a trilhar um caminho como desenvolvedor, buscando sempre aprimorar minhas habilidades para estar à altura dos desafios do setor.",
      "Durante minha jornada, solidifiquei minha paixão por criar experiências de usuário fluidas e intuitivas, e tenho grande amor por Inteligência Artificial e Dados, áreas em que estou sempre estudando e desenvolvendo projetos para aplicar soluções inteligentes a problemas do mundo real.",
      "Sou uma pessoa dedicada e organizada, que valoriza a eficiência e a qualidade em tudo o que faz. Busco entregar soluções que vão além das expectativas e contribuam para experiências digitais incríveis. Estou em busca de uma oportunidade para colocar minhas habilidades em prática, colaborar com pessoas talentosas e contribuir para projetos inovadores que tragam impacto positivo.",
      "No tempo livre, gosto de me desconectar praticando esportes ao ar livre, como basquete e ciclismo. Essa combinação entre tecnologia e atividade física me mantém equilibrado e com energia para encarar qualquer projeto com foco e disposição.",
    ],
    facts: [
      ["Formação", "Eng. de Software — PUC Minas (2029)"],
      ["Atuação", "Web, Mobile, IA & Dados"],
      ["Idiomas", "Português (nativo) · Inglês (fluente)"],
      ["Local", "Minas Gerais, Brasil"],
    ],
  },
  en: {
    title: "My journey",
    paragraphs: [
      "Hi, my name is Cairo Rodrigues Rezende. I'm a technology enthusiast and a Software Engineering student at PUC Minas, after completing a Technical High School program in IT at COTEMIG. Innovation and the digital world have fascinated me since an early age, and that natural curiosity led me down the path of software development, always improving my skills to rise to the challenges of the industry.",
      "Throughout my journey I've strengthened my passion for building fluid, intuitive user experiences, and I have a deep love for Artificial Intelligence and Data — areas I constantly study and build projects in, applying intelligent solutions to real-world problems.",
      "I'm a dedicated and organized person who values efficiency and quality in everything I do. I aim to deliver solutions that go beyond expectations and contribute to amazing digital experiences. I'm looking for an opportunity to put my skills into practice, collaborate with talented people and contribute to innovative projects with a positive impact.",
      "In my free time I like to disconnect by playing outdoor sports such as basketball and cycling. Mixing technology and physical activity keeps me balanced and energized to take on any project with focus and drive.",
    ],
    facts: [
      ["Education", "Software Eng. — PUC Minas (2029)"],
      ["Focus", "Web, Mobile, AI & Data"],
      ["Languages", "Portuguese (native) · English (fluent)"],
      ["Location", "Minas Gerais, Brazil"],
    ],
  },
} as const;

export interface Project {
  name: string;
  period: string;
  description: { pt: string; en: string };
  tech: string[];
  repo: string;
  image: string;
}

/** Ordenados do mais antigo ao mais recente (requisito do laboratório). */
export const projects: Project[] = [
  {
    name: "IA para Análise de Dados",
    period: "2025",
    description: {
      pt: "Sistema de machine learning que analisa e classifica scores de crédito de clientes em diferentes níveis de risco.",
      en: "Machine learning system that analyzes and classifies customers' credit scores into different risk levels.",
    },
    tech: ["Python", "Scikit-Learn", "Pandas"],
    repo: "https://github.com/Cairo74",
    image: "/projects/ia-dados.svg",
  },
  {
    name: "Drew",
    period: "2025",
    description: {
      pt: "Interface de desenho por gestos que transforma a câmera do dispositivo em ferramenta criativa: desenhe na tela com o movimento das mãos usando visão computacional.",
      en: "Gesture-based drawing interface that turns the device camera into a creative tool: draw on screen with hand movement using computer vision.",
    },
    tech: ["Next.js", "React", "TypeScript"],
    repo: "https://github.com/Cairo74",
    image: "/projects/drew.svg",
  },
  {
    name: "Flya",
    period: "2026",
    description: {
      pt: "Plataforma colaborativa que gera roteiros de viagem personalizados com IA, com base em perfil, interesses e orçamento. Atuei no back-end (NestJS), front-end (React) e integrações com APIs externas.",
      en: "Collaborative platform that generates AI-powered personalized travel itineraries based on profile, interests and budget. I worked on the back-end (NestJS), front-end (React) and external API integrations.",
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
      pt: "Atuo no setor bancário e de análise de crédito, analisando dados de crédito, clientes, propostas e imóveis para apoiar aprovações e decisões orientadas por dados, além de contribuir com ferramentas de geração de leads e relatórios analíticos.",
      en: "I work in banking and credit analysis, analyzing credit, customer, proposal and property data to support approvals and data-driven decisions, and contributing to lead-generation tools and analytical reports.",
    },
  },
  {
    org: "KXP Tech",
    role: { pt: "Estagiário em Desenvolvimento Flutter", en: "Flutter Development Intern" },
    period: { pt: "Fev. 2025 – Set. 2025", en: "Feb 2025 – Sep 2025" },
    description: {
      pt: "Desenvolvi e mantive aplicações móveis em Flutter, do design de UI/UX à integração com APIs e bancos de dados (Firebase e Supabase), com testes unitários e boas práticas de Git.",
      en: "Built and maintained Flutter mobile apps, from UI/UX design to API and database integration (Firebase and Supabase), with unit tests and Git best practices.",
    },
  },
  {
    org: "Freelancer",
    role: { pt: "Desenvolvedor Web Personalizado", en: "Custom Web Developer" },
    period: { pt: "Jan. 2025 – Atual", en: "Jan 2025 – Present" },
    description: {
      pt: "Desenvolvo projetos web personalizados e responsivos para clientes, com React e Next.js, transformando briefings em interfaces modernas, performáticas e alinhadas à identidade de marca.",
      en: "I build custom, responsive web projects for clients with React and Next.js, turning briefs into modern, performant interfaces aligned with brand identity.",
    },
  },
  {
    org: "COTEMIG",
    role: { pt: "Ensino Médio Técnico em TI", en: "Technical High School in IT" },
    period: { pt: "Jan. 2023 – Dez. 2025", en: "Jan 2023 – Dec 2025" },
    description: {
      pt: "Formação prática em web, Android, iOS e frameworks modernos, com foco na criação de aplicações e soluções digitais.",
      en: "Hands-on training in web, Android, iOS and modern frameworks, focused on building applications and digital solutions.",
    },
  },
];

export const skills = [
  "Python", "SQL", "Java", "JavaScript", "TypeScript", "Flutter", "Kotlin", "Swift", "C#",
  "React", "Next.js", "NestJS", "scikit-learn", "TensorFlow", "PyTorch", "Hugging Face",
  "MySQL", "SQL Server", "GCP", "Power BI", "Tableau", "Docker", "Git", "Figma",
];

export const contact = {
  email: "cairowork.dev@gmail.com",
  whatsapp: "https://wa.me/5531975011696",
  linkedin: "https://linkedin.com/in/cairo-rezende-791a51293",
  github: "https://github.com/Cairo74",
};

