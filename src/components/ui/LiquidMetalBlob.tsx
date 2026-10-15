import { motion, useReducedMotion } from "framer-motion";
import { LiquidMetal } from "@paper-design/shaders-react";

export interface LiquidMetalBlobProps {
  size: number;
  className?: string;
  path?: {
    x: number[];
    y: number[];
    rotate?: number[];
    scale?: number[];
  };
  duration?: number;
  speed?: number;
  colorTint?: string;
  distortion?: number;
  shiftRed?: number;
  shiftBlue?: number;
  softness?: number;
  repetition?: number;
  angle?: number;
  scale?: number;
  opacity?: number;
}

/**
 * High-performance, organic floating liquid-metal blob.
 * Optimized with capped maxPixelCount, GPU transform keyframes, and smooth radial alpha mask.
 */
export default function LiquidMetalBlob({
  size,
  className = "",
  path,
  duration = 24,
  speed = 0.32,
  colorTint = "#ffffff",
  distortion = 0.12,
  shiftRed = 0.25,
  shiftBlue = 0.25,
  softness = 0.08,
  repetition = 1.6,
  angle = 90,
  scale = 0.72,
  opacity = 0.95,
}: LiquidMetalBlobProps) {
  const reduce = useReducedMotion() ?? false;

  // Capped internal WebGL buffer prevents GPU bottleneck on large canvas sizes
  const cappedMaxPixels = Math.min(size * size, 420 * 420);

  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute will-change-transform overflow-hidden ${className}`}
      style={{
        width: size,
        height: size,
        opacity,
        maskImage: "radial-gradient(circle at center, black 38%, transparent 72%)",
        WebkitMaskImage: "radial-gradient(circle at center, black 38%, transparent 72%)",
      }}
      animate={
        reduce || !path
          ? undefined
          : {
              x: path.x,
              y: path.y,
              rotate: path.rotate ?? [0, 180, 360],
              scale: path.scale ?? [1, 1.08, 0.94, 1.05, 1],
            }
      }
      transition={{
        duration,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      <LiquidMetal
        style={{ width: "100%", height: "100%" }}
        shape="metaballs"
        colorBack="rgba(0,0,0,0)"
        colorTint={colorTint}
        repetition={repetition}
        softness={softness}
        shiftRed={shiftRed}
        shiftBlue={shiftBlue}
        distortion={distortion}
        contour={0.4}
        angle={angle}
        scale={scale}
        speed={reduce ? 0 : speed}
        minPixelRatio={1}
        maxPixelCount={cappedMaxPixels}
        webGlContextAttributes={{ alpha: true, premultipliedAlpha: true }}
      />
    </motion.div>
  );
}
