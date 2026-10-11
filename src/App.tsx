import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import type { Lang } from "@/data";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function App() {
  const [lang, setLang] = useState<Lang>("pt");
  const isPt = lang === "pt";

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Header lang={lang} setLang={setLang} />

      <main>
        <Hero
          name="Cairo Rodrigues Rezende"
          subtitle={
            isPt
              ? "Desenvolvedor focado em criar experiências digitais fluidas e intuitivas, com sólida atuação em desenvolvimento Web, Inteligência Artificial e Análise de Dados."
              : "Developer focused on crafting fluid and intuitive digital experiences, with solid expertise across Web development, Artificial Intelligence, and Data Analysis."
          }
          primaryCtaLabel={isPt ? "Ver projetos" : "View projects"}
          secondaryCtaLabel={isPt ? "Entrar em contato" : "Get in touch"}
          onPrimaryCtaClick={() => scrollTo("projetos")}
          onSecondaryCtaClick={() => scrollTo("contato")}
          tags={["Data Analytics", "Data Science", "Developer"]}
        />

        <About lang={lang} />
        <Education lang={lang} />
        <Experiences lang={lang} />
        <Projects lang={lang} />
        <Contact lang={lang} />
      </main>

      <footer className="border-t border-white/10 bg-black py-8 text-center text-xs text-zinc-500">
        Cairo Rodrigues Rezende
      </footer>
    </div>
  );
}
