import { motion } from "framer-motion";
import { projects, type Lang } from "@/data";
import MetallicButton from "@/components/ui/metallic-button";

export default function Projects({ lang }: { lang: Lang }) {
  return (
    <section id="projetos" className="mx-auto max-w-5xl px-6 py-28">
      <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
        {lang === "pt" ? "02 — Projetos" : "02 — Projects"}
      </p>
      <h2 className="chrome-text mt-3 text-4xl font-bold md:text-5xl">
        {lang === "pt" ? "Linha do tempo" : "Timeline"}
      </h2>

      <ol className="relative mt-14 border-l border-white/15 pl-8 md:pl-12">
        {projects.map((p, i) => (
          <motion.li
            key={p.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="relative mb-14 last:mb-0"
          >
            <span className="absolute -left-[41px] top-2 h-4 w-4 rounded-full border-2 border-white bg-black md:-left-[57px]" />
            <time className="font-mono text-xs text-zinc-500">{p.period}</time>
            <div className="mt-2 grid gap-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:grid-cols-[1fr_1.1fr]">
              <img
                src={p.image}
                alt={`${p.name}`}
                loading="lazy"
                className="aspect-video w-full rounded-lg border border-white/10 object-cover"
              />
              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-300">{p.description[lang]}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full border border-white/15 px-3 py-1 font-mono text-xs text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5">
                  <MetallicButton label="GitHub ↗" href={p.repo} baseColor="#18181b" />
                </div>
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}

