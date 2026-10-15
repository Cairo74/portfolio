import { motion } from "framer-motion";
import { experiences, type Lang } from "@/data";
import { Briefcase } from "lucide-react";
import LiquidMetalBlob from "@/components/ui/LiquidMetalBlob";

export default function Experiences({ lang }: { lang: Lang }) {
  return (
    <section id="experiencias" className="relative overflow-hidden border-b border-white/10 bg-black">
      {/* Ambient background liquid metal blob */}
      <LiquidMetalBlob
        size={520}
        className="right-[-8%] top-[20%]"
        duration={28}
        speed={0.24}
        scale={0.72}
        opacity={0.55}
        distortion={0.13}
        shiftRed={0.22}
        shiftBlue={0.28}
        path={{
          x: [0, -140, -50, -170, -30, 0],
          y: [0, 80, 160, 40, -50, 0],
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.1, 0.95, 1.05, 1],
        }}
      />
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24">
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
                className="rounded-2xl border border-white/10 bg-zinc-950/80 p-6 transition-all duration-300 hover:border-white/25 hover:bg-zinc-900/40 hover:shadow-xl hover:shadow-black/60"
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
