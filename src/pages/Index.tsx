import { HeroSection } from "@/components/HeroSection";
import { DemoSection } from "@/components/DemoSection";
import { DocsSection } from "@/components/DocsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <DemoSection />
      <DocsSection />
      <Footer />
    </main>
  );
};

export default Index;
