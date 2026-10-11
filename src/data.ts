export type Lang = "pt" | "en";

export const about = {
  pt: {
    title: "Minha trajetória",
    paragraphs: [
      "Olá, meu nome é Cairo Rodrigues Rezende, um apaixonado por tecnologia e atualmente estudante de Ensino Médio Técnico no Colégio COTEMIG, onde estou aprofundando minhas habilidades no mundo dev. Desde cedo, a inovação e o universo digital me fascinam, e essa curiosidade natural me levou a trilhar um caminho como desenvolvedor, buscando sempre aprimorar minhas habilidades e conhecimentos para estar à altura dos desafios do setor.",
      "Durante minha jornada como desenvolvedor, solidifiquei minha paixão por criar experiências de usuário fluidas e intuitivas, e tenho um grande amor por Inteligência Artificial e Dados, áreas em que estou sempre estudando e desenvolvendo projetos para aplicar soluções inteligentes a problemas do mundo real.",
      "Com uma abordagem profissional, sou uma pessoa dedicada e organizada, valorizando a eficiência e a qualidade em tudo o que faço. Busco entregar soluções que vão além das expectativas e que contribuam para a criação de experiências digitais incríveis. Estou em busca de uma oportunidade para colocar em prática minhas habilidades, colaborar com pessoas talentosas e contribuir para projetos inovadores que tragam impacto positivo.",
      "No meu tempo livre, gosto de me desconectar um pouco e praticar esportes ao ar livre, como basquete e ciclismo. Essa combinação entre tecnologia e atividades físicas me ajuda a manter o equilíbrio e a energia para encarar qualquer projeto com foco e disposição. Espero fazer parte de uma equipe divertida e ambiciosa, onde posso crescer ao lado de pessoas que compartilham da mesma paixão por tecnologia e inovação.",
    ],
    facts: [
      ["Graduação", "Engenharia de Software — PUC Minas (em andamento)"],
      ["Técnico", "Ensino Médio Técnico em TI — COTEMIG"],
      ["Idiomas", "Português (nativo) · Inglês (fluente)"],
      ["Local", "Belo Horizonte e Região, MG"],
    ],
  },
  en: {
    title: "My journey",
    paragraphs: [
      "Hello, my name is Cairo Rodrigues Rezende, passionate about technology and currently a Technical High School student at Colégio COTEMIG, where I am deepening my skills in the software development world. Since an early age, innovation and the digital universe have fascinated me, and this natural curiosity led me to pursue a path as a developer, always striving to improve my skills and knowledge to meet industry challenges.",
      "Throughout my journey as a developer, I solidified my passion for creating fluid and intuitive user experiences, and I have a great love for Artificial Intelligence and Data, fields where I am constantly studying and developing projects to apply smart solutions to real-world problems.",
      "With a professional approach, I am dedicated and organized, valuing efficiency and quality in everything I do. I strive to deliver solutions that exceed expectations and contribute to creating incredible digital experiences. I am seeking an opportunity to put my skills into practice, collaborate with talented people, and contribute to innovative projects that make a positive impact.",
      "In my free time, I like to disconnect and practice outdoor sports like basketball and cycling. This balance between technology and physical activity helps me maintain the focus and energy needed to face any project with enthusiasm. I look forward to joining a fun and ambitious team where I can grow alongside people who share the same passion for technology and innovation.",
    ],
    facts: [
      ["Degree", "Software Engineering — PUC Minas (in progress)"],
      ["Technical", "IT Technical High School — COTEMIG"],
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

/** Ordenados do mais antigo ao mais recente (requisito do laboratório). */
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
  "React", "Next.js", "NestJS", "scikit-learn", "TensorFlow", "PyTorch", "Hugging Face",
  "MySQL", "SQL Server", "GCP", "Power BI", "Tableau", "Docker", "Git", "Figma",
];

export const contact = {
  email: "cairowork.dev@gmail.com",
  whatsapp: "https://wa.me/5531975011696",
  linkedin: "https://linkedin.com/in/cairo-rezende-791a51293",
  github: "https://github.com/Cairo74",
};
