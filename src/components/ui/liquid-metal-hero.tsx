"use client";

import { LiquidMetal, liquidMetalPresets } from "@paper-design/shaders-react";
import { motion } from "framer-motion";
import MetallicButton from "@/components/ui/metallic-button";

interface LiquidMetalHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  secondaryCtaLabel?: string;
  onPrimaryCtaClick: () => void;
  onSecondaryCtaClick?: () => void;
  features?: string[];
}

/** Hero baseado em `chowlol202/liquid-metal-hero` (21st.dev), com botões metálicos. */
export default function LiquidMetalHero({
  badge,
  title,
  subtitle,
  primaryCtaLabel,
  secondaryCtaLabel,
  onPrimaryCtaClick,
  onSecondaryCtaClick,
  features = [],
}: LiquidMetalHeroProps) {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.15 } },
  };
  const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <LiquidMetal
        {...liquidMetalPresets[2]}
        style={{ position: "absolute", inset: 0, zIndex: -1, width: "100%", height: "100%" }}
      />
      <div className="absolute inset-0 -z-0 bg-black/45" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-24 lg:px-8">
        <motion.div
          className="space-y-8 text-center"
          variants={container}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
        >
          {badge && (
            <motion.div className="flex justify-center" variants={item}>
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
                {badge}
              </span>
            </motion.div>
          )}

          <motion.div className="space-y-6" variants={item}>
            <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">{title}</h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/85 sm:text-xl">{subtitle}</p>
          </motion.div>

          <motion.div className="flex flex-col items-center justify-center gap-4 sm:flex-row" variants={item}>
            <MetallicButton label={primaryCtaLabel} onClick={onPrimaryCtaClick} className="min-w-44" />
            {secondaryCtaLabel && onSecondaryCtaClick && (
              <MetallicButton
                label={secondaryCtaLabel}
                onClick={onSecondaryCtaClick}
                baseColor="#18181b"
                className="min-w-44"
              />
            )}
          </motion.div>

          {features.length > 0 && (
            <motion.div className="pt-10" variants={item}>
              <div className="glass mx-auto grid max-w-4xl grid-cols-1 gap-4 rounded-xl p-6 shadow-2xl md:grid-cols-3">
                {features.map((f, i) => (
                  <motion.p
                    key={f}
                    className="text-center text-base font-medium text-white/90"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                  >
                    {f}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

