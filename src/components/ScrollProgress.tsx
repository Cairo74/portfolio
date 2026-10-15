import { motion, useScroll, useSpring } from "framer-motion";

/** Thin scroll-progress bar: scaleX only (compositor-friendly, no layout/paint). */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 24, mass: 0.3 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-white/80"
    />
  );
}
