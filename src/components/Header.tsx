import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { Lang } from "@/data";

const links = [
  { id: "sobre", pt: "Sobre Mim", en: "About" },
  { id: "tecnologias", pt: "Tecnologias", en: "Tech" },
  { id: "formacao", pt: "Formação", en: "Education" },
  { id: "experiencias", pt: "Experiências", en: "Experience" },
  { id: "projetos", pt: "Projetos", en: "Projects" },
  { id: "contato", pt: "Contato", en: "Contact" },
];

const BrazilFlag = () => (
  <svg viewBox="0 0 20 14" className="h-3 w-4.5 rounded-[2px] shrink-0 shadow-xs" aria-hidden="true">
    <rect width="20" height="14" fill="#009c3b" />
    <polygon points="10,1.5 18.5,7 10,12.5 1.5,7" fill="#ffdf00" />
    <circle cx="10" cy="7" r="3.2" fill="#002776" />
    <path d="M7.4 6.6 C8.6 5.8 11.4 5.8 12.6 7.4" stroke="#ffffff" strokeWidth="0.6" fill="none" />
  </svg>
);

const USAFlag = () => (
  <svg viewBox="0 0 20 14" className="h-3 w-4.5 rounded-[2px] shrink-0 shadow-xs" aria-hidden="true">
    <rect width="20" height="14" fill="#b22234" />
    <rect y="1.08" width="20" height="1.08" fill="#ffffff" />
    <rect y="3.24" width="20" height="1.08" fill="#ffffff" />
    <rect y="5.4" width="20" height="1.08" fill="#ffffff" />
    <rect y="7.56" width="20" height="1.08" fill="#ffffff" />
    <rect y="9.72" width="20" height="1.08" fill="#ffffff" />
    <rect y="11.88" width="20" height="1.08" fill="#ffffff" />
    <rect width="8" height="7.56" fill="#3c3b6e" />
    <circle cx="2" cy="1.9" r="0.55" fill="#ffffff" />
    <circle cx="4" cy="1.9" r="0.55" fill="#ffffff" />
    <circle cx="6" cy="1.9" r="0.55" fill="#ffffff" />
    <circle cx="3" cy="3.8" r="0.55" fill="#ffffff" />
    <circle cx="5" cy="3.8" r="0.55" fill="#ffffff" />
    <circle cx="2" cy="5.7" r="0.55" fill="#ffffff" />
    <circle cx="4" cy="5.7" r="0.55" fill="#ffffff" />
    <circle cx="6" cy="5.7" r="0.55" fill="#ffffff" />
  </svg>
);

export default function Header({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl transition-all">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          className="group flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-white transition-colors"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-xs text-zinc-300 transition-all duration-300 group-hover:border-white/40 group-hover:bg-white/10 group-hover:text-white">
            &lt;/&gt;
          </span>
          <span>
            Cairo<span className="text-zinc-500 font-normal">.dev</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex rounded-full border border-white/10 bg-zinc-950/60 p-1.5 backdrop-blur-md">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="rounded-full px-3.5 py-1.5 text-xs font-medium text-zinc-400 transition-all duration-200 hover:bg-white/10 hover:text-white"
              >
                {l[lang]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Modern Flag Language Switcher */}
          <div
            className="flex items-center rounded-full border border-white/15 bg-zinc-900/80 p-1 shadow-inner backdrop-blur-md"
            role="group"
            aria-label="Selecionar idioma / Select language"
          >
            <button
              onClick={() => setLang("pt")}
              aria-pressed={lang === "pt"}
              className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide transition-all duration-200 ${
                lang === "pt"
                  ? "bg-white text-zinc-950 shadow-sm shadow-white/20 scale-[1.02]"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
              }`}
            >
              <BrazilFlag />
              <span>PT</span>
            </button>
            <button
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide transition-all duration-200 ${
                lang === "en"
                  ? "bg-white text-zinc-950 shadow-sm shadow-white/20 scale-[1.02]"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
              }`}
            >
              <USAFlag />
              <span>EN</span>
            </button>
          </div>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-zinc-300 transition-colors hover:border-white/30 hover:text-white md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="space-y-1 border-t border-white/10 bg-zinc-950/95 px-6 py-4 backdrop-blur-2xl md:hidden">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
              >
                {l[lang]}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
