import { motion } from "framer-motion";
import { projects, type Lang } from "@/data";
import { ExternalLink } from "lucide-react";
import LiquidMetalBlob from "@/components/ui/LiquidMetalBlob";

export default function Projects({ lang }: { lang: Lang }) {
  return (
    <section id="projetos" className="relative overflow-hidden border-b border-white/10 bg-zinc-950">
      {/* Ambient background liquid metal blob */}
      <LiquidMetalBlob
        size={580}
        className="-left-20 top-[28%]"
        duration={30}
        speed={0.24}
        scale={0.74}
        opacity={0.6}
        distortion={0.13}
        shiftRed={0.25}
        shiftBlue={0.22}
        path={{
          x: [0, 140, 60, 200, 40, 0],
          y: [0, 110, 220, 80, -30, 0],
          rotate: [0, 75, 170, 260, 360],
          scale: [1, 1.14, 0.93, 1.08, 1],
        }}
      />
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/40 to-zinc-950/80" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            {lang === "pt" ? "04 — Projetos" : "04 — Projects"}
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {lang === "pt" ? "Linha do tempo de projetos" : "Project Timeline"}
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            {lang === "pt"
              ? "Ordenados cronologicamente (do mais antigo ao mais recente)."
              : "Chronologically organized (from oldest to newest)."}
          </p>

          <ol className="relative mt-12 border-l border-white/15 pl-6 md:pl-10">
            {projects.map((p, i) => (
              <motion.li
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative mb-12 last:mb-0"
              >
                <span className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-black md:-left-[47px]" />
                <time className="font-mono text-xs font-medium text-zinc-500">{p.period}</time>

                <div className="group mt-3 grid gap-6 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 p-6 transition-all duration-300 hover:border-white/25 hover:bg-zinc-900/60 hover:shadow-2xl hover:shadow-black/80 md:grid-cols-[1.1fr_1.3fr]">
                  <div className="overflow-hidden rounded-xl border border-white/10">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white transition-colors group-hover:text-zinc-100">{p.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                        {p.description[lang]}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-white/10 bg-black/60 px-2.5 py-1 font-mono text-xs text-zinc-300 transition-colors hover:border-white/25 hover:text-white"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5">
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-all hover:border-white/40 hover:bg-white/10 active:scale-95"
                      >
                        GitHub <ExternalLink size={13} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}
