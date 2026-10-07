import {
  Activity,
  Bone,
  Brain,
  Heart,
  Leaf,
  ScanLine,
  Sparkles,
  Stethoscope,
} from "lucide-react";
export function ServiceIcon({
  name,
  size = 26,
}: {
  name: string;
  size?: number;
}) {
  const icons = {
    activity: Activity,
    bone: Bone,
    brain: Brain,
    heart: Heart,
    leaf: Leaf,
    scan: ScanLine,
    sparkles: Sparkles,
    stethoscope: Stethoscope,
  };
  const Icon = icons[name as keyof typeof icons] || Activity;
  return <Icon size={size} strokeWidth={1.5} aria-hidden="true" />;
}
