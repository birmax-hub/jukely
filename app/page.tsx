import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/landing/hero-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { ScreenshotsSection } from "@/components/landing/screenshots-section";
import { WhyLoveSection } from "@/components/landing/why-love-section";
import { FAQSection } from "@/components/landing/faq-section";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <main className="app-background">
        <HowItWorksSection />
        <FeaturesSection />
        <ScreenshotsSection />
        <WhyLoveSection />
        <FAQSection />
        <Footer />
      </main>
      <ScrollToTop />
    </>
  );
}
