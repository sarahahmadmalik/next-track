import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TrackCard } from "./TrackCard";
import { PreferenceSlider } from "./PreferenceSlider";
import { Sparkles, Plus, RefreshCw, Music2, Zap, Heart, Dumbbell } from "lucide-react";

const sampleTracks = [
  { id: "1", title: "Blinding Lights", artist: "The Weeknd", album: "After Hours", imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop" },
  { id: "2", title: "Levitating", artist: "Dua Lipa", album: "Future Nostalgia", imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=100&h=100&fit=crop" },
  { id: "3", title: "Heat Waves", artist: "Glass Animals", album: "Dreamland", imageUrl: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=100&h=100&fit=crop" },
  { id: "4", title: "good 4 u", artist: "Olivia Rodrigo", album: "SOUR", imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop" },
  { id: "5", title: "Stay", artist: "Kid LAROI & Justin Bieber", album: "F*CK LOVE 3", imageUrl: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=100&h=100&fit=crop" },
];

const recommendedTracks = [
  { id: "r1", title: "Save Your Tears", artist: "The Weeknd", album: "After Hours", imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=100&h=100&fit=crop" },
  { id: "r2", title: "Don't Start Now", artist: "Dua Lipa", album: "Future Nostalgia", imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop" },
  { id: "r3", title: "Watermelon Sugar", artist: "Harry Styles", album: "Fine Line", imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=100&h=100&fit=crop" },
];

export const DemoSection = () => {
  const [history, setHistory] = useState(sampleTracks.slice(0, 3));
  const [energy, setEnergy] = useState(70);
  const [mood, setMood] = useState(60);
  const [familiarity, setFamiliarity] = useState(40);
  const [recommendation, setRecommendation] = useState<typeof sampleTracks[0] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showResponse, setShowResponse] = useState(false);

  const addRandomTrack = () => {
    const available = sampleTracks.filter(t => !history.find(h => h.id === t.id));
    if (available.length > 0) {
      const random = available[Math.floor(Math.random() * available.length)];
      setHistory([...history, random]);
    }
  };

  const removeTrack = (id: string) => {
    setHistory(history.filter(t => t.id !== id));
  };

  const getRecommendation = async () => {
    setIsLoading(true);
    setShowResponse(false);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const random = recommendedTracks[Math.floor(Math.random() * recommendedTracks.length)];
    setRecommendation(random);
    setIsLoading(false);
    setShowResponse(true);
  };

  const apiRequest = {
    track_history: history.map(t => t.id),
    preferences: {
      energy: energy / 100,
      mood: mood / 100,
      familiarity: familiarity / 100,
    },
  };

  const apiResponse = recommendation ? {
    success: true,
    recommended_track: {
      id: recommendation.id,
      title: recommendation.title,
      artist: recommendation.artist,
      album: recommendation.album,
      confidence: 0.87,
      reason: "Based on your listening history and preference for high-energy tracks with positive mood.",
    },
  } : null;

  return (
    <section id="demo" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Interactive Demo</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Try the NextTrack API in action. Add tracks to your history, adjust your preferences, 
            and get personalized recommendations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Panel - Input */}
          <div className="space-y-6">
            {/* Track History */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Music2 className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold">Listening History</h3>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={addRandomTrack}
                  disabled={history.length >= sampleTracks.length}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Add Track
                </Button>
              </div>
              
              <div className="space-y-3">
                {history.length === 0 ? (
                  <p className="text-center text-muted-foreground py-8">
                    Add tracks to your listening history
                  </p>
                ) : (
                  history.map(track => (
                    <TrackCard
                      key={track.id}
                      track={track}
                      onRemove={() => removeTrack(track.id)}
                    />
                  ))
                )}
              </div>
            </div>

            {/* Preferences */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">Preferences</h3>
              </div>
              
              <div className="space-y-6">
                <PreferenceSlider
                  label="Energy"
                  description="How energetic should the track be?"
                  value={energy}
                  onChange={setEnergy}
                  leftLabel="Chill"
                  rightLabel="Energetic"
                />
                <PreferenceSlider
                  label="Mood"
                  description="Overall emotional tone"
                  value={mood}
                  onChange={setMood}
                  leftLabel="Melancholic"
                  rightLabel="Uplifting"
                />
                <PreferenceSlider
                  label="Discovery"
                  description="Balance between familiar and new"
                  value={familiarity}
                  onChange={setFamiliarity}
                  leftLabel="Familiar"
                  rightLabel="Discover New"
                />
              </div>
            </div>

            <Button
              variant="hero"
              size="lg"
              className="w-full"
              onClick={getRecommendation}
              disabled={history.length === 0 || isLoading}
            >
              {isLoading ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  Finding your next track...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Get Recommendation
                </>
              )}
            </Button>
          </div>

          {/* Right Panel - Output */}
          <div className="space-y-6">
            {/* Recommendation Result */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-semibold">Recommended Track</h3>
              </div>
              
              {recommendation ? (
                <div className="animate-scale-in">
                  <TrackCard
                    track={recommendation}
                    isRecommendation
                  />
                  <div className="mt-4 p-4 rounded-lg bg-secondary/50">
                    <p className="text-sm text-muted-foreground">
                      <span className="text-primary font-medium">Why this track?</span>
                      <br />
                      Based on your listening history featuring {history[0]?.artist} and preferences 
                      for {energy > 50 ? 'high-energy' : 'calm'}, {mood > 50 ? 'uplifting' : 'introspective'} music.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <Dumbbell className="w-12 h-12 mx-auto mb-4 opacity-30" />
                  <p>Add tracks and click "Get Recommendation" to see results</p>
                </div>
              )}
            </div>

            {/* API Request/Response */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4">API Preview</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded">POST</span>
                    <code className="text-xs text-muted-foreground">/api/v1/recommend</code>
                  </div>
                  <pre className="p-4 rounded-lg bg-background/50 text-xs overflow-x-auto">
                    <code className="text-muted-foreground">
                      {JSON.stringify(apiRequest, null, 2)}
                    </code>
                  </pre>
                </div>

                {showResponse && apiResponse && (
                  <div className="animate-fade-in">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 text-xs font-medium bg-green-500/20 text-green-400 rounded">200</span>
                      <span className="text-xs text-muted-foreground">Response</span>
                    </div>
                    <pre className="p-4 rounded-lg bg-background/50 text-xs overflow-x-auto">
                      <code className="text-green-400/80">
                        {JSON.stringify(apiResponse, null, 2)}
                      </code>
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
