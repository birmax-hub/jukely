"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/layout/container";

export function ScreenshotsSection() {
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
    <section ref={sectionRef} className="py-20 relative">
      <Container>
        <SectionTitle
          title="See It In Action"
          subtitle="Beautiful interfaces for both staff and guests"
        />

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <Card className="p-0 overflow-hidden border-orange-500/20 fade-up">
            <div className="glass-deep p-6 md:p-8 flex flex-col items-center justify-center min-h-[300px] md:min-h-[400px]">
              <div className="w-full mb-4 relative">
                <div className="w-full h-[260px] flex items-center justify-center overflow-hidden rounded-xl bg-transparent relative">
                  <Image
                    src="/previews/dashboard-preview.png"
                    alt="Dashboard Preview"
                    width={800}
                    height={600}
                    fill={false}
                    sizes="100vw"
                    priority={false}
                    className="rounded-xl"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      objectPosition: "center",
                      maxWidth: "100%",
                      maxHeight: "100%",
                      animation: "fadeInScale 0.75s ease-out 0.1s forwards",
                    }}
                  />
                  <div 
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    style={{
                      background: "linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.25))",
                    }}
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg md:text-xl font-semibold mb-2">Dashboard Preview</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Staff control panel for managing requests
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-0 overflow-hidden border-orange-500/20 fade-up">
            <div className="glass-deep p-6 md:p-8 flex flex-col items-center justify-center min-h-[300px] md:min-h-[400px]">
              <div className="w-full mb-4 relative">
                <div className="w-full h-[260px] flex items-center justify-center overflow-hidden rounded-xl bg-transparent relative">
                  <Image
                    src="/previews/mobile-preview.png"
                    alt="Guest Mobile Request"
                    width={800}
                    height={600}
                    fill={false}
                    sizes="100vw"
                    priority={false}
                    className="rounded-xl"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      objectPosition: "center",
                      maxWidth: "100%",
                      maxHeight: "100%",
                      animation: "fadeInScale 0.75s ease-out 0.1s forwards",
                    }}
                  />
                  <div 
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    style={{
                      background: "linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.25))",
                    }}
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  Guest Mobile Request
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Simple interface for guests to request songs
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}

