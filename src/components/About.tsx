import { motion } from "framer-motion";
import { about, skills, type Lang } from "@/data";

export default function About({ lang }: { lang: Lang }) {
  const t = about[lang];
  return (
    <section id="sobre" className="border-b border-white/10 bg-black">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            {lang === "pt" ? "01 — Sobre Mim" : "01 — About Me"}
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.title}
          </h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.7fr_1fr]">
            <div className="space-y-4 text-base leading-relaxed text-zinc-300">
              {t.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="space-y-6">
              <div className="rounded-xl border border-white/10 bg-zinc-950 p-6">
                <dl className="space-y-4">
                  {t.facts.map(([k, v]) => (
                    <div key={k} className="border-b border-white/10 pb-3 last:border-b-0 last:pb-0">
                      <dt className="font-mono text-xs uppercase tracking-wider text-zinc-500">{k}</dt>
                      <dd className="mt-1 text-sm font-medium text-zinc-200">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-wider text-zinc-500">
                  {lang === "pt" ? "Habilidades & Tecnologias" : "Skills & Technologies"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-white/10 bg-zinc-900/60 px-2.5 py-1 text-xs text-zinc-300 hover:border-white/20 transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
