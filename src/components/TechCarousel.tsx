import { useState } from "react";
import { motion } from "framer-motion";
import { techStack, type Tech, type Lang } from "@/data";
import LiquidMetalBlob from "@/components/ui/LiquidMetalBlob";

function TechCard({ tech }: { tech: Tech }) {
  const [failed, setFailed] = useState(!tech.logo);
  return (
    <div className="group flex w-36 shrink-0 flex-col items-center gap-3 rounded-2xl border border-white/10 bg-zinc-900/50 px-4 py-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-white/30 hover:bg-zinc-900/80 hover:shadow-xl hover:shadow-black/60">
      {failed ? (
        <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/15 font-mono text-sm font-bold text-zinc-200">
          {tech.name.includes(" ")
            ? tech.name.split(" ").map((w) => w[0]).join("").toUpperCase()
            : tech.name.slice(0, 3)}
        </div>
      ) : (
        <img
          src={tech.logo}
          alt={`${tech.name} logo`}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      )}
      <span className="font-mono text-xs text-zinc-400 transition-colors group-hover:text-white">
        {tech.name}
      </span>
    </div>
  );
}

function Row({ items, reverse = false }: { items: Tech[]; reverse?: boolean }) {
  // duplicated so the -50% translate loops seamlessly
  const loop = [...items, ...items];
  return (
    <div className="marquee overflow-hidden py-2">
      <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
        {loop.map((t, i) => (
          <TechCard key={`${t.name}-${i}`} tech={t} />
        ))}
      </div>
    </div>
  );
}

export default function TechCarousel({ lang }: { lang: Lang }) {
  return (
    <section id="tecnologias" className="relative overflow-hidden border-b border-white/10 bg-black">
      {/* Ambient background liquid metal blob */}
      <LiquidMetalBlob
        size={520}
        className="left-[35%] top-[25%]"
        duration={26}
        speed={0.22}
        scale={0.7}
        opacity={0.5}
        distortion={0.14}
        shiftRed={0.2}
        shiftBlue={0.3}
        path={{
          x: [0, 160, -80, 120, -140, 0],
          y: [0, -60, 80, -40, 50, 0],
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.12, 0.92, 1.08, 1],
        }}
      />
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            {lang === "pt" ? "— Tecnologias" : "— Technologies"}
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {lang === "pt" ? "Habilidades & Tecnologias" : "Skills & Technologies"}
          </h2>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-3 pb-24"
      >
        <Row items={techStack.row1} />
        <Row items={techStack.row2} reverse />
      </motion.div>
    </section>
  );
}
