import { motion } from "framer-motion";
import { experiences, type Lang } from "@/data";

export default function Experiences({ lang }: { lang: Lang }) {
  return (
    <section id="experiencias" className="border-y border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-5xl px-6 py-28">
        <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
          {lang === "pt" ? "03 — Experiências" : "03 — Experience"}
        </p>
        <h2 className="chrome-text mt-3 text-4xl font-bold md:text-5xl">
          {lang === "pt" ? "Onde atuei" : "Where I've worked"}
        </h2>
        <div className="mt-12 space-y-5">
          {experiences.map((e, i) => (
            <motion.article
              key={e.org + e.period.pt}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/25"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold">
                  {e.org} <span className="font-normal text-zinc-400">· {e.role[lang]}</span>
                </h3>
                <span className="font-mono text-xs text-zinc-500">{e.period[lang]}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">{e.description[lang]}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

