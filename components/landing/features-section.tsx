"use client";

import { useRef, useEffect } from "react";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import {
  Shield,
  Music2,
  Smartphone,
  QrCode,
  UserCheck,
  LayoutDashboard,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Fully compliant",
    description:
      "Built to meet all legal requirements for commercial music playback.",
  },
  {
    icon: Music2,
    title: "Spotify integration",
    description:
      "Seamlessly connect with your existing Spotify account and playlists.",
  },
  {
    icon: Smartphone,
    title: "Digital jukebox experience",
    description:
      "Modern, intuitive interface that guests love to use on their phones.",
  },
  {
    icon: QrCode,
    title: "Guest requests via QR",
    description:
      "Simple QR code scanning gets guests into the request system instantly.",
  },
  {
    icon: UserCheck,
    title: "Staff approval system",
    description:
      "You stay in control with an easy approve/reject workflow.",
  },
  {
    icon: LayoutDashboard,
    title: "Modern, fast dashboard UI",
    description:
      "Beautiful, responsive dashboard that works on tablets and desktops.",
  },
];

export function FeaturesSection() {
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
    <section ref={sectionRef} id="features" className="py-20 relative">
      <Container>
        <SectionTitle
          title="Features"
          subtitle="Everything you need for a modern jukebox experience"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-orange-500/20 fade-up"
              >
                <div className="flex items-start space-x-4">
                  <div className="glass-deep rounded-2xl p-3 border border-primary/20 flex-shrink-0 transition-transform duration-300 hover:rotate-3">
                    <Icon className="h-6 w-6 text-primary icon-glow" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

