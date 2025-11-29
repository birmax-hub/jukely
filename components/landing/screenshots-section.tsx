"use client";

import { useRef, useEffect } from "react";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { LayoutDashboard, Smartphone } from "lucide-react";

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
            <div className="glass-deep p-6 md:p-8 flex items-center justify-center min-h-[300px] md:min-h-[400px]">
              <div className="text-center">
                <LayoutDashboard className="h-16 w-16 md:h-24 md:w-24 text-primary/50 mx-auto mb-4 icon-glow transition-transform duration-300 hover:rotate-3" />
                <h3 className="text-lg md:text-xl font-semibold mb-2">Dashboard Preview</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Staff control panel for managing requests
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-0 overflow-hidden border-orange-500/20 fade-up">
            <div className="glass-deep p-6 md:p-8 flex items-center justify-center min-h-[300px] md:min-h-[400px]">
              <div className="text-center">
                <Smartphone className="h-16 w-16 md:h-24 md:w-24 text-primary/50 mx-auto mb-4 icon-glow transition-transform duration-300 hover:rotate-3" />
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

