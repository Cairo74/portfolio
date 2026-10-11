# Portfólio Profissional — Cairo Rodrigues Rezende

Portfólio profissional desenvolvido para o **Laboratório 01** da disciplina **Desenvolvimento e Integração de Aplicações Web (DIAW)** — Engenharia de Software, PUC Minas.

---

## 📸 Demonstração da Interface

![Interface do Portfólio](src/components/images/print%20portfolio.png)

---

## 🔗 Links Úteis
* **Site Publicado:** [Deploy na Vercel](https://cairo-portfolio.vercel.app) *(ou link do seu deploy)*
* **Repositório GitHub:** [https://github.com/Cairo74/portfolio](https://github.com/Cairo74/portfolio)

---

## 🛠 Tecnologias e Dependências Utilizadas

### Front-end & Core
* **React 19** & **TypeScript**
* **Vite** (Build tool e ambiente de desenvolvimento)
* **Tailwind CSS v4** (Estilização utilitária e responsividade)

### Bibliotecas e Integrações
* **Framer Motion:** Animações e transições fluidas de interface
* **React Hook Form:** Manipulação e validação do formulário de contato
* **@emailjs/browser:** Disparo direto de mensagens por e-mail
* **Lucide React:** Ícones para links e seções

---

## 📁 Estrutura de Diretórios

```
Lab1 - Portfolio/
├── public/
│   └── projects/              # Imagens e mockups dos projetos
│       ├── ia-dados.svg
│       ├── drew.svg
│       └── flya.svg
├── src/
│   ├── components/
│   │   ├── images/            # Capturas de tela e assets de documentação
│   │   │   └── preview.png
│   │   ├── Header.tsx         # Menu de navegação e alternância PT/EN
│   │   ├── Hero.tsx           # Apresentação inicial (layout bipartido)
│   │   ├── About.tsx          # Seção Sobre Mim
│   │   ├── Education.tsx      # Seção Formação Acadêmica
│   │   ├── Experiences.tsx    # Seção Experiências Profissionais
│   │   ├── Projects.tsx       # Linha do tempo de projetos (antigo ao recente)
│   │   └── Contact.tsx        # Formulário com envio e ícones de redes
│   ├── data.ts                # Dados de projetos, histórico e textos bilíngues
│   ├── App.tsx                # Estrutura principal da página
│   ├── main.tsx               # Ponto de entrada do React
│   └── index.css              # Estilos globais
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## ⚙️ Instruções de Instalação e Execução Local

### Pré-requisitos
* Node.js (versão 20 ou superior)
* npm

### 1. Clonar o repositório e instalar dependências
```bash
git clone https://github.com/Cairo74/portfolio.git
cd portfolio
npm install
```

### 2. Executar localmente (modo desenvolvimento)
```bash
npm run dev
```
Acesse no navegador: `http://localhost:5173`

### 3. Gerar build de produção
```bash
npm run build
npm run preview
```

---

## 📑 Seções do Sistema

1. **Sobre Mim:** Apresentação em português e inglês com trajetória pessoal e competências.
2. **Formação:** Graduação em Engenharia de Software (PUC Minas) e Ensino Médio Técnico em TI (COTEMIG).
3. **Experiências:** Histórico profissional na MRV (Análise de Dados), KXP Tech (Desenvolvimento Flutter) e projetos Freelancer.
4. **Projetos:** Linha do tempo cronológica com imagens de funcionamento, descrição, tecnologias e link para o GitHub.
5. **Contato:** Ícones com links diretos (E-mail, WhatsApp, LinkedIn, GitHub) e formulário com validação e envio por e-mail.
