import { Code, Database, Key, Zap, GitBranch, Shield } from "lucide-react";

const endpoints = [
  {
    method: "POST",
    path: "/api/v1/recommend",
    description: "Get a recommended next track based on listening history and preferences",
    params: [
      { name: "track_history", type: "string[]", desc: "Array of track IDs (MusicBrainz/Spotify)" },
      { name: "preferences.energy", type: "float", desc: "Energy level (0.0 - 1.0)" },
      { name: "preferences.mood", type: "float", desc: "Mood positivity (0.0 - 1.0)" },
      { name: "preferences.familiarity", type: "float", desc: "Discovery vs familiar (0.0 - 1.0)" },
    ],
  },
  {
    method: "GET",
    path: "/api/v1/track/{id}",
    description: "Get detailed information about a specific track",
    params: [
      { name: "id", type: "string", desc: "Track identifier (MusicBrainz ID or Spotify URI)" },
    ],
  },
  {
    method: "POST",
    path: "/api/v1/playlist",
    description: "Generate a complete playlist based on seed tracks",
    params: [
      { name: "seed_tracks", type: "string[]", desc: "Initial tracks to build playlist from" },
      { name: "length", type: "int", desc: "Number of tracks to generate (max 50)" },
      { name: "preferences", type: "object", desc: "Same as /recommend endpoint" },
    ],
  },
];

const features = [
  {
    icon: Shield,
    title: "Privacy First",
    description: "No user tracking or profiling. All recommendations are based solely on the provided request parameters.",
  },
  {
    icon: Database,
    title: "Rich Data Sources",
    description: "Integrates MusicBrainz, Genius, Spotify, and Wikidata for comprehensive track information.",
  },
  {
    icon: Zap,
    title: "Fast & Stateless",
    description: "RESTful API with no session state. Each request is independent and processed in milliseconds.",
  },
  {
    icon: GitBranch,
    title: "Flexible Integration",
    description: "Works with multiple track identifier formats. Use MusicBrainz IDs, Spotify URIs, or custom IDs.",
  },
];

export const DocsSection = () => {
  return (
    <section id="docs" className="py-24 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">API Documentation</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Simple, RESTful endpoints for seamless integration into your music applications.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, i) => (
            <div 
              key={feature.title}
              className="glass rounded-xl p-6 hover:scale-[1.02] transition-transform duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <feature.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Endpoints */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-8">
            <Code className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-semibold">Endpoints</h3>
          </div>

          {endpoints.map((endpoint, i) => (
            <div 
              key={endpoint.path}
              className="glass rounded-xl p-6 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 text-sm font-medium rounded ${
                  endpoint.method === 'POST' 
                    ? 'bg-primary/20 text-primary' 
                    : 'bg-accent/20 text-accent'
                }`}>
                  {endpoint.method}
                </span>
                <code className="text-foreground font-mono">{endpoint.path}</code>
              </div>
              
              <p className="text-muted-foreground mb-4">{endpoint.description}</p>
              
              <div className="bg-background/50 rounded-lg p-4">
                <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
                  <Key className="w-4 h-4 text-muted-foreground" />
                  Parameters
                </h4>
                <div className="space-y-2">
                  {endpoint.params.map(param => (
                    <div key={param.name} className="flex items-start gap-4 text-sm">
                      <code className="text-primary font-mono min-w-[180px]">{param.name}</code>
                      <span className="text-accent/80 min-w-[80px]">{param.type}</span>
                      <span className="text-muted-foreground">{param.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Code Example */}
        <div className="mt-12 glass rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Quick Start Example</h3>
          <pre className="p-4 rounded-lg bg-background/50 overflow-x-auto">
            <code className="text-sm text-muted-foreground">{`// JavaScript/TypeScript Example
const response = await fetch('https://api.nexttrack.dev/v1/recommend', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    track_history: [
      'spotify:track:0VjIjW4GlUZAMYd2vXMi3b',
      'spotify:track:7qiZfU4dY1lWllzX7mPBI3'
    ],
    preferences: {
      energy: 0.7,
      mood: 0.8,
      familiarity: 0.4
    }
  })
});

const data = await response.json();
console.log('Next track:', data.recommended_track);`}</code>
          </pre>
        </div>
      </div>
    </section>
  );
};
