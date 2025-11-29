"use client";

import { useState, useRef, useEffect } from "react";
import { SectionTitle } from "@/components/ui/section-title";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Is it legal to use Spotify in bars?",
    answer:
      "Yes, when used with proper licensing. Jukely helps ensure compliance with commercial music licensing requirements. You may need ZAMP/SOKOJ licenses depending on your location.",
  },
  {
    question: "Do I need ZAMP/SOKOJ license?",
    answer:
      "Depending on your country and venue type, you may need performance rights licenses. Jukely works alongside these licenses to provide a compliant digital jukebox solution. Check with your local licensing authority.",
  },
  {
    question: "How do guests request songs?",
    answer:
      "Guests scan a QR code displayed at your venue, which opens a simple request interface on their phone. They can search and request songs, which then appear in your dashboard for approval.",
  },
  {
    question: "Does staff stay in control?",
    answer:
      "Absolutely. All song requests require staff approval before playing. You can approve, reject, or manage the queue from your dashboard at any time.",
  },
  {
    question: "Is Jukely a music streaming service?",
    answer:
      "No, Jukely is a platform that integrates with your existing Spotify account. We provide the request management and approval system, while Spotify handles the music streaming.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
    <section ref={sectionRef} id="faq" className="py-20 relative">
      <Container>
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Jukely"
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="border-orange-500/20 fade-up"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-4 md:p-6 text-left"
              >
                <h3 className="text-base md:text-lg font-semibold pr-8">{faq.question}</h3>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ease-[cubic-bezier(.4,0,.2,1)]",
                    openIndex === index && "transform rotate-180"
                  )}
                />
              </button>
              {openIndex === index && (
                <div className="px-4 md:px-6 pb-4 md:pb-6">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

