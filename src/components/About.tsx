import { motion } from "framer-motion";
import { ShaderBackground } from "@/components/ui/liquid-metal-noir";
import { about, skills, type Lang } from "@/data";

export default function About({ lang }: { lang: Lang }) {
  const t = about[lang];
  return (
    <section id="sobre" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <ShaderBackground className="h-full w-full" />
        <div className="absolute inset-0 bg-black/55" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 md:p-12"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
            {lang === "pt" ? "01 — Sobre Mim" : "01 — About Me"}
          </p>
          <h2 className="chrome-text mt-3 text-4xl font-bold md:text-5xl">{t.title}</h2>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
            <div className="space-y-4 leading-relaxed text-zinc-200">
              {t.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="space-y-6">
              <dl className="space-y-4">
                {t.facts.map(([k, v]) => (
                  <div key={k} className="border-b border-white/10 pb-3">
                    <dt className="font-mono text-xs uppercase tracking-wider text-zinc-500">{k}</dt>
                    <dd className="mt-1 text-sm text-zinc-100">{v}</dd>
                  </div>
                ))}
              </dl>
              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-wider text-zinc-500">
                  {lang === "pt" ? "Tecnologias" : "Tech"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((s) => (
                    <span key={s} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-zinc-200">
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

