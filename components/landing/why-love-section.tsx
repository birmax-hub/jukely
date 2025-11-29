"use client";

import { useRef, useEffect } from "react";
import { SectionTitle } from "@/components/ui/section-title";
import { Container } from "@/components/layout/container";
import { Check } from "lucide-react";

const reasons = [
  "Reduces chaos around music",
  "Gives guests a modern experience",
  "Staff retains full control",
  "Works with Spotify",
  "Fully legal and compliant",
  "Modern and premium presentation",
];

export function WhyLoveSection() {
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
          title="Why Venues Love Jukely"
          subtitle="The perfect solution for modern music management"
        />

        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 glass-deep rounded-3xl p-4 border border-orange-500/20 fade-up"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="glass-deep rounded-full p-1 border border-success/30 transition-transform duration-300 hover:rotate-3">
                    <Check className="h-5 w-5 text-success icon-glow" />
                  </div>
                </div>
                <p className="text-foreground font-medium">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

