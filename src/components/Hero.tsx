import { motion } from "framer-motion";

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
  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] items-center border-b border-white/10 bg-gradient-to-b from-zinc-950 via-zinc-900 to-black px-6 pt-24 pb-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          {/* Lado Esquerdo: Nome com destaque e autoridade */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center text-left"
          >
            <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.08]">
              Cairo
              <br />
              <span className="text-zinc-300">Rodrigues</span>
              <br />
              <span className="text-zinc-500">Rezende</span>
            </h1>

            {/* Tags de foco profissional solicitadas */}
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-xs font-medium text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Lado Direito: Descrição e Botões de ação */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col justify-center text-left space-y-7 md:border-l md:border-white/10 md:pl-10"
          >
            <p className="text-lg leading-relaxed text-zinc-300 sm:text-xl">
              {subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onPrimaryCtaClick}
                className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-7 font-semibold text-zinc-950 transition-all hover:bg-zinc-200 active:scale-95"
              >
                {primaryCtaLabel}
              </button>
              {secondaryCtaLabel && onSecondaryCtaClick && (
                <button
                  onClick={onSecondaryCtaClick}
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-white/20 bg-white/5 px-7 font-semibold text-white transition-all hover:bg-white/10 active:scale-95"
                >
                  {secondaryCtaLabel}
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
