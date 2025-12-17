import { Button } from "@/components/ui/button";
import { Play, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-spin-slow" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">AI-Powered Music Recommendations</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <span className="gradient-text">NextTrack</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Discover your perfect next song
        </p>
        
        <p className="text-base md:text-lg text-muted-foreground/70 mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
          A stateless RESTful API that recommends tracks based on your listening history 
          and preferences — no user tracking, just pure music discovery.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button variant="hero" size="xl" onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}>
            <Play className="w-5 h-5" />
            Try the Demo
          </Button>
          <Button variant="glass" size="xl" onClick={() => document.getElementById('docs')?.scrollIntoView({ behavior: 'smooth' })}>
            View API Docs
          </Button>
        </div>

        {/* Floating music visualization */}
        <div className="mt-16 flex justify-center gap-1 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-gradient-to-t from-primary to-accent rounded-full"
              style={{
                height: `${20 + Math.sin(i * 0.5) * 30 + Math.random() * 20}px`,
                animation: `pulse ${1 + Math.random()}s ease-in-out infinite`,
                animationDelay: `${i * 0.05}s`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
