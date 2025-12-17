import { Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  imageUrl: string;
}

interface TrackCardProps {
  track: Track;
  onRemove?: () => void;
  isRecommendation?: boolean;
  onPlay?: () => void;
}

export const TrackCard = ({ track, onRemove, isRecommendation = false, onPlay }: TrackCardProps) => {
  return (
    <div 
      className={`group relative glass rounded-xl p-3 transition-all duration-300 hover:scale-[1.02] ${
        isRecommendation ? 'glow-primary border-primary/30' : ''
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
          <img 
            src={track.imageUrl} 
            alt={track.album}
            className="w-full h-full object-cover"
          />
          {onPlay && (
            <button
              onClick={onPlay}
              className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
            >
              <Play className="w-6 h-6 text-primary fill-primary" />
            </button>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-foreground truncate">{track.title}</h4>
          <p className="text-sm text-muted-foreground truncate">{track.artist}</p>
          {isRecommendation && (
            <span className="inline-flex items-center gap-1 text-xs text-primary mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Recommended
            </span>
          )}
        </div>

        {onRemove && (
          <Button
            variant="ghost"
            size="icon"
            className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8"
            onClick={onRemove}
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
};
