import { Slider } from "@/components/ui/slider";

interface PreferenceSliderProps {
  label: string;
  description: string;
  value: number;
  onChange: (value: number) => void;
  leftLabel?: string;
  rightLabel?: string;
}

export const PreferenceSlider = ({
  label,
  description,
  value,
  onChange,
  leftLabel = "Low",
  rightLabel = "High",
}: PreferenceSliderProps) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-medium text-foreground">{label}</h4>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
        <span className="text-sm font-medium text-primary">{value}%</span>
      </div>
      <Slider
        value={[value]}
        onValueChange={([v]) => onChange(v)}
        max={100}
        step={1}
      />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{leftLabel}</span>
        <span>{rightLabel}</span>
      </div>
    </div>
  );
};
