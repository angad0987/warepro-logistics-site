import { getIcon } from "@/lib/icons";

export function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const Icon = getIcon(name);
  return <Icon className={className} />;
}