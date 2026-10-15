import { motion } from "framer-motion";
import { educations, type Lang } from "@/data";
import { GraduationCap, Award } from "lucide-react";
import LiquidMetalBlob from "@/components/ui/LiquidMetalBlob";

export default function Education({ lang }: { lang: Lang }) {
  return (
    <section id="formacao" className="relative overflow-hidden border-b border-white/10 bg-zinc-950">
      {/* Ambient background liquid metal blob */}
      <LiquidMetalBlob
        size={500}
        className="-left-16 top-[15%]"
        duration={29}
        speed={0.22}
        scale={0.7}
        opacity={0.5}
        distortion={0.12}
        shiftRed={0.28}
        shiftBlue={0.2}
        path={{
          x: [0, 150, 70, 190, 40, 0],
          y: [0, 90, 170, 60, -30, 0],
          rotate: [0, 80, 170, 270, 360],
          scale: [1, 1.12, 0.94, 1.06, 1],
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
            {lang === "pt" ? "02 — Formação Acadêmica" : "02 — Education"}
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {lang === "pt" ? "Formação e Estudos" : "Academic Background"}
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {educations.map((edu, idx) => (
              <motion.article
                key={edu.institution}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-zinc-900/40 p-6 transition-all duration-300 hover:border-white/25 hover:bg-zinc-900/70 hover:shadow-xl hover:shadow-black/60"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-300">
                        {idx === 0 ? <GraduationCap size={18} /> : <Award size={18} />}
                      </div>
                      <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                    </div>
                    <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 font-mono text-[11px] text-zinc-300">
                      {edu.status[lang]}
                    </span>
                  </div>

                  <h4 className="mt-4 text-base font-semibold text-zinc-100">
                    {edu.degree[lang]}
                  </h4>

                  <p className="mt-1 font-mono text-xs text-zinc-400">
                    {edu.period[lang]}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                    {edu.description[lang]}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

