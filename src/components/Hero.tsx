import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import LiquidMetalBlob from "@/components/ui/LiquidMetalBlob";

interface HeroProps {
  name?: string;
  subtitle: string;
  primaryCtaLabel: string;
  secondaryCtaLabel?: string;
  onPrimaryCtaClick: () => void;
  onSecondaryCtaClick?: () => void;
  tags?: string[];
}

export default function Hero({
  subtitle,
  primaryCtaLabel,
  secondaryCtaLabel,
  onPrimaryCtaClick,
  onSecondaryCtaClick,
  tags = ["Data Analytics", "Data Science", "Developer"],
}: HeroProps) {
  const ref = useRef<HTMLElement>(null);

  // Scroll parallax for orbs and content
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const orbY1 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const orbY3 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.15]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-[90vh] items-center overflow-hidden border-b border-white/10 bg-gradient-to-b from-zinc-950 via-zinc-900 to-black px-6 pt-24 pb-16"
    >
      {/* Dynamic, massive, non-repeating liquid-metal blobs */}
      <motion.div aria-hidden className="pointer-events-none absolute inset-0 z-0" style={{ y: orbY1 }}>
        <LiquidMetalBlob
          size={680}
          className="-left-16 -top-12"
          duration={32}
          speed={0.34}
          scale={0.82}
          distortion={0.14}
          shiftRed={0.28}
          shiftBlue={0.22}
          path={{
            x: [0, 200, 420, 240, 520, 310, 90, -80, 0],
            y: [0, -110, -20, 160, 80, 220, 110, -30, 0],
            rotate: [0, 50, -30, 100, 170, 240, 310, 360],
            scale: [1, 1.15, 0.94, 1.1, 0.96, 1.12, 0.98, 1],
          }}
        />
      </motion.div>

      <motion.div aria-hidden className="pointer-events-none absolute inset-0 z-0" style={{ y: orbY2 }}>
        <LiquidMetalBlob
          size={500}
          className="right-[-4%] top-[18%]"
          duration={25}
          speed={0.28}
          scale={0.76}
          distortion={0.1}
          shiftRed={0.18}
          shiftBlue={0.32}
          path={{
            x: [0, -220, -100, -360, -180, -440, -240, -70, 0],
            y: [0, 140, 240, 90, -80, 50, -140, -60, 0],
            rotate: [0, -80, -160, -230, -290, -360],
            scale: [1, 0.9, 1.16, 0.93, 1.12, 0.96, 1],
          }}
        />
      </motion.div>

      <motion.div aria-hidden className="pointer-events-none absolute inset-0 z-0" style={{ y: orbY3 }}>
        <LiquidMetalBlob
          size={340}
          className="left-[40%] top-[48%]"
          duration={19}
          speed={0.38}
          scale={0.68}
          distortion={0.16}
          shiftRed={0.24}
          shiftBlue={0.28}
          path={{
            x: [0, 160, -140, 200, -100, 140, 0],
            y: [0, -130, -60, -180, -100, 70, 0],
            rotate: [0, 110, 220, 310, 360],
            scale: [1, 1.22, 0.88, 1.14, 1],
          }}
        />
      </motion.div>

      {/* Atmospheric veil so text remains punchy and readable */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-black/40 via-black/25 to-black/85" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-6xl"
      >
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
          {/* Lado Esquerdo: Nome com destaque e autoridade + Tags */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center text-left"
          >
            <h1 className="text-6xl font-black tracking-tight text-white sm:text-7xl lg:text-8xl leading-[1.03]">
              Cairo
              <br />
              <span className="bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-400 bg-clip-text text-transparent">
                Rodrigues
              </span>
              <br />
              <span className="text-zinc-500">Rezende</span>
            </h1>

            {/* Tags de foco profissional */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-xs sm:text-sm font-medium text-zinc-300 backdrop-blur-md transition-colors hover:border-white/30 hover:bg-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Lado Direito: Subtítulo e Botões de ação */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col justify-center text-left space-y-8 md:border-l md:border-white/15 md:pl-10 lg:pl-14"
          >
            <p className="text-lg leading-relaxed text-zinc-300 sm:text-xl lg:text-2xl font-normal">
              {subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onPrimaryCtaClick}
                className="group inline-flex h-13 items-center justify-center gap-2.5 rounded-xl bg-white px-8 text-base font-semibold text-zinc-950 shadow-xl shadow-white/10 transition-all duration-300 hover:bg-zinc-200 hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <span>{primaryCtaLabel}</span>
                <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              {secondaryCtaLabel && onSecondaryCtaClick && (
                <button
                  onClick={onSecondaryCtaClick}
                  className="inline-flex h-13 items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:scale-[1.02] active:scale-95 cursor-pointer"
                >
                  <Mail size={18} className="text-zinc-400" />
                  <span>{secondaryCtaLabel}</span>
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
