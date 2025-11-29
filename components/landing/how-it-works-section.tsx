"use client";

import { useRef, useEffect } from "react";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { Music2, QrCode, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Music2,
    title: "Connect Spotify",
    description:
      "Link your Spotify account in seconds. Your existing playlists and library are ready to use.",
  },
  {
    icon: QrCode,
    title: "Guests scan the QR",
    description:
      "Guests scan a QR code at your venue to access the request system on their phones.",
  },
  {
    icon: CheckCircle,
    title: "Staff approves requests",
    description:
      "You maintain full control. Approve or reject song requests from your dashboard.",
  },
];

export function HowItWorksSection() {
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
    <section ref={sectionRef} id="how-it-works" className="py-20 relative">
      <Container>
        <SectionTitle
          title="How It Works"
          subtitle="Get started in three simple steps"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className="text-center border-orange-500/20 fade-up"
              >
                <div className="flex justify-center mb-4">
                  <div className="glass-deep rounded-3xl p-4 border border-primary/30 transition-transform duration-300 hover:rotate-3">
                    <Icon className="h-8 w-8 text-primary icon-glow" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

