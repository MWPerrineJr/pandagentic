import { Bot, GitBranch, LineChart, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const icons: LucideIcon[] = [LineChart, Bot, Workflow, GitBranch];

export function ServiceIcon({ index }: { index: number }) {
  const Icon = icons[index % icons.length];
  return <Icon className="h-5 w-5 text-primary" />;
}
