import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { Lang } from "@/data";

const links = [
  { id: "sobre", pt: "Sobre Mim", en: "About" },
  { id: "formacao", pt: "Formação", en: "Education" },
  { id: "experiencias", pt: "Experiências", en: "Experience" },
  { id: "projetos", pt: "Projetos", en: "Projects" },
  { id: "contato", pt: "Contato", en: "Contact" },
];

export default function Header({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="font-mono text-sm font-semibold tracking-tight text-white hover:text-zinc-300 transition-colors">
          Cairo<span className="text-zinc-500 font-normal">.dev</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className="text-sm font-medium text-zinc-300 transition-colors hover:text-white">
                {l[lang]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="flex overflow-hidden rounded-full border border-white/15 bg-white/5 text-xs" role="group" aria-label="Idioma">
            {(["pt", "en"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`px-3 py-1 font-semibold uppercase transition-colors ${
                  lang === l ? "bg-white text-black" : "text-zinc-400 hover:text-white"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <button
            className="text-zinc-300 hover:text-white md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="space-y-1 border-t border-white/10 bg-zinc-950 px-6 py-4 md:hidden">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-medium text-zinc-300 hover:text-white"
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
