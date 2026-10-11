import { motion } from "framer-motion";

interface HeroProps {
  name: string;
  role: string;
  subtitle: string;
  primaryCtaLabel: string;
  secondaryCtaLabel?: string;
  onPrimaryCtaClick: () => void;
  onSecondaryCtaClick?: () => void;
  features?: string[];
}

export default function Hero({
  name,
  role,
  subtitle,
  primaryCtaLabel,
  secondaryCtaLabel,
  onPrimaryCtaClick,
  onSecondaryCtaClick,
  features = [],
}: HeroProps) {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };
  const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  return (
    <section id="home" className="relative flex min-h-[92vh] items-center justify-center border-b border-white/10 bg-gradient-to-b from-zinc-950 via-zinc-900 to-black px-6 pt-24 pb-16">
      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        <motion.div
          className="space-y-6"
          variants={container}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
        >
          <motion.div variants={item}>
            <span className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-zinc-300">
              {role}
            </span>
          </motion.div>

          <motion.div className="space-y-4" variants={item}>
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
              {name}
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              {subtitle}
            </p>
          </motion.div>

          <motion.div className="flex flex-col items-center justify-center gap-3.5 sm:flex-row" variants={item}>
            <button
              onClick={onPrimaryCtaClick}
              className="inline-flex h-11 min-w-44 items-center justify-center rounded-lg bg-white px-6 font-semibold text-zinc-950 transition-all hover:bg-zinc-200 active:scale-95"
            >
              {primaryCtaLabel}
            </button>
            {secondaryCtaLabel && onSecondaryCtaClick && (
              <button
                onClick={onSecondaryCtaClick}
                className="inline-flex h-11 min-w-44 items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 font-semibold text-white transition-all hover:bg-white/10 active:scale-95"
              >
                {secondaryCtaLabel}
              </button>
            )}
          </motion.div>

          {features.length > 0 && (
            <motion.div className="pt-8" variants={item}>
              <div className="mx-auto flex flex-wrap items-center justify-center gap-3">
                {features.map((f) => (
                  <span
                    key={f}
                    className="rounded-md border border-white/10 bg-zinc-900/80 px-3.5 py-1.5 font-mono text-xs text-zinc-300"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
