"use client";

import { ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import { motionConfig } from "@/animations/motion-config";

interface MotionProviderProps {
  children: ReactNode;
}

export default function MotionProvider({ children }: MotionProviderProps) {
  return (
    <MotionConfig
      reducedMotion={motionConfig.reducedMotion}
      transition={motionConfig.transition}
    >
      {children}
    </MotionConfig>
  );
}

