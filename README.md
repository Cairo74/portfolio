# 🏷️ Portfólio Profissional — Cairo Rodrigues Rezende 👨‍💻

> [!NOTE]
> Website de portfólio profissional moderno com estética *Liquid Metal* em WebGL, apresentando trajetória, habilidades, linha do tempo dinâmica de projetos e canais de contato. Desenvolvido para o **Laboratório 01** da disciplina **Desenvolvimento e Integração de Aplicações Web (DIAW)** — PUC Minas.

<table>
  <tr>
    <td width="800px">
      <div align="justify">
        Este repositório contém a implementação completa do portfólio profissional de <b>Cairo Rodrigues Rezende</b>, estudante de Engenharia de Software na <b>PUC Minas</b> com formação técnica em TI pelo <b>COTEMIG</b>. A aplicação une alta performance, internacionalização bilíngue (Português / Inglês) e design de ponta através de shaders WebGL em tempo real baseados nas referências visuais de <b>Liquid Metal Hero</b>, <b>Liquid Metal Noir</b> e <b>Metallic Button</b> do <i>21st.dev</i>. O projeto foi projetado conforme as diretrizes acadêmicas do orientador <a href="https://github.com/joaopauloaramuni">Prof. Dr. João Paulo Aramuni</a>.
      </div>
    </td>
    <td>
      <div>
        <img src="https://joaopauloaramuni.github.io/image/logo_ES_vertical.png" alt="Logo Engenharia de Software PUC Minas" width="120px"/>
      </div>
    </td>
  </tr> 
</table>

---

## 🚧 Status do Projeto

![Versão](https://img.shields.io/badge/Versão-v1.0.0-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.3.0-007ec6?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-7.0.2-3178c6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.3.4-646cff?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![WebGL](https://img.shields.io/badge/WebGL-Shaders-990000?style=for-the-badge&logo=webgl&logoColor=white)
![Status](https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge)

---

## 📚 Índice
- [Links Úteis](#-links-úteis)
- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades Principais](#-funcionalidades-principais)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura](#-arquitetura)
- [Instalação e Execução](#-instalação-e-execução)
  - [Pré-requisitos](#pré-requisitos)
  - [Variáveis de Ambiente](#-variáveis-de-ambiente)
  - [Instalação de Dependências](#-instalação-de-dependências)
  - [Como Executar a Aplicação](#-como-executar-a-aplicação)
  - [Build para Produção](#-build-para-produção)
- [Deploy](#-deploy)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Demonstração dos Projetos](#-demonstração-dos-projetos)
- [Autor](#-autor)
- [Licença](#-licença)

---

## 🔗 Links Úteis
* 🌐 **Repositório GitHub:** [github.com/Cairo74](https://github.com/Cairo74)
* 💼 **LinkedIn:** [linkedin.com/in/cairo-rezende-791a51293](https://linkedin.com/in/cairo-rezende-791a51293)
* ✉️ **Contato Direto:** [cairowork.dev@gmail.com](mailto:cairowork.dev@gmail.com)
* 💬 **WhatsApp:** [+55 (31) 97501-1696](https://wa.me/5531975011696)

---

## 📝 Sobre o Projeto

O objetivo deste projeto é construir uma identidade web profissional de alto nível, apresentando habilidades técnicas, projetos práticos e experiência profissional de forma acessível, fluida e visualmente impressionante.

- **Por que ele existe:** Criado como entrega da avaliação do Laboratório 01 da disciplina DIAW do curso de Engenharia de Software da PUC Minas.
- **Qual problema ele resolve:** Centraliza todo o ecossistema profissional do desenvolvedor (currículo, projetos desenvolvidos, canais de contato e portfólio de IA/Dados/Web) em uma aplicação única, com carregamento rápido e suporte a dois idiomas.
- **Contexto:** Acadêmico e profissional, servindo como cartão de visitas para empresas, processos seletivos e clientes de desenvolvimento sob demanda.
- **Diferencial:** Adoção de elementos visuais avançados como shaders *Liquid Metal* WebGL (com física matemática e iluminação dinâmica calculadas por fragment shaders na GPU), dispensando imagens pesadas e garantindo alta performance de renderização a 60 FPS.

---

## ✨ Funcionalidades Principais

- 🌐 **Internacionalização Dinâmica (i18n):** Alternância instantânea de idioma (Português 🇧🇷 e Inglês 🇺🇸) sem necessidade de recarregar a página.
- 🌊 **Liquid Metal Hero Section:** Hero animado com fragment shaders reativos e botões metálicos personalizáveis.
- 🖤 **Liquid Metal Noir Shader:** Background na seção *Sobre Mim* com shader WebGL nativo de alta fidelidade visual em monocromático metálico.
- ⏳ **Linha do Tempo de Projetos:** Ordenação cronológica (do mais antigo ao mais recente), incluindo mockups visuais detalhados em alta resolução, tags de tecnologias e links para repositórios.
- 🏢 **Seção de Experiências:** Histórico detalhado de passagens profissionais (MRV, KXP Tech, Freelancer e COTEMIG).
- 📩 **Formulário de Contato com Validação e EmailJS:** Validação em tempo real com `react-hook-form` e disparo integrado via EmailJS.
- 📱 **Design Totalmente Responsivo & Acessível:** Menu hamburguer mobile, contrastes testados e suporte a `prefers-reduced-motion`.

---

## 🛠 Tecnologias Utilizadas

### 💻 Front-end
* **Framework:** React 19 (React DOM 19)
* **Linguagem:** TypeScript 7.0 (Strict mode ativado)
* **Build Tool:** Vite 8
* **Estilização:** Tailwind CSS v4 (@tailwindcss/vite)
* **Animações:** Framer Motion 14
* **Renderização 3D/Shaders:** WebGL nativo & `@paper-design/shaders-react`
* **Formulários:** React Hook Form 7
* **Serviço de Email:** EmailJS Browser SDK
* **Ícones:** Lucide React

---

## 🏗 Arquitetura

O projeto adota uma arquitetura em componentes modulares orientada a responsabilidade única, com separação clara entre camadas visuais primitivas, componentes de seção e dados desacoplados.

```
┌────────────────────────────────────────────────────────┐
│                        App.tsx                         │
│       (Gerenciamento de Idioma & Layout Global)         │
└───────────────────────────┬────────────────────────────┘
                            │
       ┌────────────────────┼────────────────────┐
       ▼                    ▼                    ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Header.tsx  │     │   Hero.tsx   │     │  About.tsx   │
│ (Navegação & │     │ (LiquidMetal │     │(Noir Shader &│
│  Lang Toggle)│     │    WebGL)    │     │  Trajetória) │
└──────────────┘     └──────────────┘     └──────────────┘
       │                    │                    │
       ▼                    ▼                    ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│ Projects.tsx │     │Experience.tsx│     │ Contact.tsx  │
│  (Timeline   │     │  (Histórico  │     │(Formulário & │
│ Cronológica) │     │ Profissional)│     │   EmailJS)   │
└──────────────┘     └──────────────┘     └──────────────┘
```

---

## ⚙️ Instalação e Execução

### Pré-requisitos
* **Node.js** v20+ ou v24+
* **npm** v10+

### 🔑 Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto (use [.env.example](file:///.env.example) como modelo se desejar configurar o envio real de e-mails via EmailJS):

```env
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_EMAILJS_PUBLIC_KEY=sua_public_key
```

> [!NOTE]
> Caso as variáveis não sejam preenchidas, o formulário exibirá tratamento de erro amigável, orientando o envio por e-mail ou WhatsApp direto.

### 📦 Instalação de Dependências
```bash
npm install
```

### 🚀 Como Executar a Aplicação
```bash
npm run dev
```
O servidor de desenvolvimento iniciará em `http://localhost:5173`.

### 🏗 Build para Produção
```bash
npm run build
```
Para testar a versão compilada localmente:
```bash
npm run preview
```

---

## ☁️ Deploy

A aplicação está configurada para deploy simplificado em provedores como **Vercel**, **Render** ou **Netlify**:

1. Conecte o repositório do GitHub à [Vercel](https://vercel.com).
2. Configure as seguintes opções de compilação:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
3. Configure as variáveis de ambiente (`VITE_EMAILJS_*`) nas configurações do projeto na plataforma (opcional).
4. O deploy será gerado automaticamente a cada push na branch `main`.

---

## 📁 Estrutura de Pastas

```
Lab1 - Portfolio/
├── public/
│   └── projects/                  # Mockups visuais dos projetos (SVG)
│       ├── ia-dados.svg
│       ├── drew.svg
│       └── flya.svg
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── liquid-metal-hero.tsx  # Hero com shader WebGL
│   │   │   ├── liquid-metal-noir.tsx  # Shader noir WebGL nativo
│   │   │   └── metallic-button.tsx    # Botão metálico interativo
│   │   ├── Header.tsx                 # Barra de navegação e seletor de idioma
│   │   ├── About.tsx                  # Seção Sobre Mim (PT/EN)
│   │   ├── Projects.tsx               # Linha do tempo dinâmica de projetos
│   │   ├── Experiences.tsx            # Experiências profissionais
│   │   └── Contact.tsx                # Formulário e ícones de contato
│   ├── data.ts                        # Base de dados desacoplada do portfólio
│   ├── App.tsx                        # Componente raiz da aplicação
│   ├── main.tsx                       # Ponto de entrada React
│   └── index.css                      # Estilos globais e tokens Tailwind CSS
├── index.html                         # Estrutura HTML base
├── vite.config.ts                     # Configuração do Vite e Tailwind v4
├── tsconfig.json                      # Configuração TypeScript
├── package.json                       # Dependências e scripts do projeto
└── README.md                          # Documentação detalhada da aplicação
```

---

## 🖥️ Demonstração dos Projetos

Os projetos apresentados na linha do tempo contam com interfaces simuladas detalhando a aplicação em funcionamento:

| Projeto | Descrição | Stack |
| :--- | :--- | :--- |
| **IA para Análise de Dados** | Sistema de Machine Learning para avaliação e classificação de risco e scores de crédito. | Python, Scikit-Learn, Pandas |
| **Drew** | Interface criativa com visão computacional para desenhar na tela através de gestos das mãos. | Next.js, React, TypeScript |
| **Flya** | Plataforma colaborativa inteligente que cria roteiros de viagem sob medida usando modelos Groq. | ReactJS, NestJS, Supabase, Groq |

---

## 👨‍💻 Autor

**Cairo Rodrigues Rezende**  
- GitHub: [@Cairo74](https://github.com/Cairo74)  
- LinkedIn: [Cairo Rezende](https://linkedin.com/in/cairo-rezende-791a51293)  
- Email: [cairowork.dev@gmail.com](mailto:cairowork.dev@gmail.com)  

---

## 📄 Licença

Este projeto está sob a licença [MIT](https://opensource.org/licenses/MIT).
