"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Music2, QrCode, Tablet } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".fade-up");
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center pt-16 pb-24 bg-transparent"
      style={{
        // Override CSS variables to keep original bright orange in hero
        "--primary": "#FF7A00",
        "--accent": "#FF7A00",
        "--ring": "#FF7A00",
      } as React.CSSProperties}
    >
      {/* Background image - lowest layer */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <img
          src="/images/hero-bg.png"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        {/* Extremely subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/10"></div>
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center lg:text-left fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 font-display leading-tight max-w-[540px] mx-auto lg:mx-0">
              A fully compliant{" "}
              <span className="text-primary">digital jukebox</span> for modern
              venues.
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-[540px] mx-auto lg:mx-0">
              Connect your Spotify, let guests request songs, and control
              everything from a simple tablet — legally and effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/dashboard">
                <Button size="lg" className="w-full sm:w-auto hover-glow">
                  Get Started
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  See How It Works
                </Button>
              </Link>
            </div>
          </div>

          {/* Visual composition */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] fade-up">
            {/* Central Jukely icon */}
            <div className="absolute top-[52%] left-[48%] -translate-x-1/2 -translate-y-1/2 z-20 glow-element">
              <div className="glass-deep rounded-3xl p-6 md:p-8 border-2 border-primary/30 shadow-neon-sm md:shadow-neon">
                <Music2 className="h-12 w-12 md:h-16 md:w-16 text-primary icon-glow transition-transform duration-300 hover:rotate-3" />
              </div>
            </div>

            {/* Tablet mockup - 2x2 grid on tablet */}
            <div className="absolute top-8 right-8 md:top-6 md:right-6 glass-deep rounded-3xl p-4 md:p-6 border border-orange-500/20 shadow-lg transition-transform duration-300 hover:rotate-3 glow-element icon-float-1">
              <Tablet className="h-16 w-16 md:h-24 md:w-24 text-primary/80 icon-glow" />
            </div>

            {/* Spotify logo */}
            <div className="absolute bottom-24 left-12 md:bottom-20 md:left-10 glass-deep rounded-3xl p-4 md:p-6 border border-success/30 shadow-lg transition-transform duration-300 hover:-rotate-3 glow-element icon-float-2">
              <Music2 className="h-12 w-12 md:h-16 md:w-16 text-success icon-glow" />
            </div>

            {/* QR code card */}
            <div className="absolute bottom-12 right-20 md:bottom-10 md:right-16 glass-deep rounded-3xl p-4 md:p-6 border border-primary/30 shadow-lg transition-transform duration-300 hover:rotate-3 glow-element icon-float-3">
              <QrCode className="h-16 w-16 md:h-20 md:w-20 text-primary icon-glow" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}


