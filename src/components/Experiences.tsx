import { motion } from "framer-motion";
import { experiences, type Lang } from "@/data";
import { Briefcase } from "lucide-react";

export default function Experiences({ lang }: { lang: Lang }) {
  return (
    <section id="experiencias" className="border-b border-white/10 bg-black">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            {lang === "pt" ? "03 — Experiências Profissionais" : "03 — Professional Experience"}
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {lang === "pt" ? "Atuação e Trajetória" : "Work History"}
          </h2>

          <div className="mt-10 space-y-4">
            {experiences.map((e, i) => (
              <motion.article
                key={e.org + e.period.pt}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-xl border border-white/10 bg-zinc-950 p-6 transition-colors hover:border-white/20"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-white/5 text-zinc-400">
                      <Briefcase size={14} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {e.org}
                      <span className="ml-2 font-normal text-zinc-400">· {e.role[lang]}</span>
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-zinc-500">{e.period[lang]}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  {e.description[lang]}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
