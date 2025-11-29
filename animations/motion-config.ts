import { Transition } from "framer-motion";

/**
 * Framer Motion configuration with reduced-motion support
 */
export const motionConfig = {
  reducedMotion: "user" as const,
  transition: {
    duration: 0.3,
    ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
  } as Transition,
};

