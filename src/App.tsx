import { useState } from "react";
import Header from "@/components/Header";
import LiquidMetalHero from "@/components/ui/liquid-metal-hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experiences from "@/components/Experiences";
import Contact from "@/components/Contact";
import type { Lang } from "@/data";

const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function App() {
  const [lang, setLang] = useState<Lang>("pt");
  const pt = lang === "pt";

  return (
    <>
      <Header lang={lang} setLang={setLang} />
      <main>
        <LiquidMetalHero
          badge={pt ? "✨ Disponível para novas oportunidades" : "✨ Open to new opportunities"}
          title="Cairo Rezende"
          subtitle={
            pt
              ? "Desenvolvedor apaixonado por experiências de usuário fluidas, Inteligência Artificial e Dados. Estudante de Engenharia de Software na PUC Minas."
              : "Developer passionate about fluid user experiences, Artificial Intelligence and Data. Software Engineering student at PUC Minas."
          }
          primaryCtaLabel={pt ? "Ver projetos" : "View projects"}
          secondaryCtaLabel={pt ? "Entrar em contato" : "Get in touch"}
          onPrimaryCtaClick={() => go("projetos")}
          onSecondaryCtaClick={() => go("contato")}
          features={["React · Next.js · Flutter", pt ? "IA & Machine Learning" : "AI & Machine Learning", pt ? "Análise de Dados" : "Data Analysis"]}
        />
        <About lang={lang} />
        <Projects lang={lang} />
        <Experiences lang={lang} />
        <Contact lang={lang} />
      </main>
      <footer className="border-t border-white/10 py-8 text-center font-mono text-xs text-zinc-500">
        © {new Date().getFullYear()} Cairo Rodrigues Rezende · {pt ? "Feito com React, Tailwind e shaders WebGL" : "Built with React, Tailwind and WebGL shaders"}
      </footer>
    </>
  );
}

