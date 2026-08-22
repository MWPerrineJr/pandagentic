import { useState } from "react";
import { Bot, ExternalLink, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { links } from "@/data/site";

export function AssistantWidget() {
  const [open, setOpen] = useState(false);

  return (
    <aside className="fixed bottom-4 right-4 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open ? (
        <div
          id="digital-assistant-panel"
          className="flex h-[min(32rem,calc(100vh-7rem))] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-xl border border-primary/30 bg-card shadow-glow backdrop-blur-md"
        >
          <div className="flex items-start justify-between gap-4 border-b border-border/70 p-4">
            <div>
              <p className="font-semibold">Digital assistant</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Ask about Michael, his projects, or Pandagentic.
              </p>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="-mr-2 -mt-2 shrink-0"
              aria-label="Close digital assistant"
              onClick={() => setOpen(false)}
            >
              <X />
            </Button>
          </div>
          <iframe
            title="Pandagentic digital assistant"
            src={links.assistant}
            className="min-h-0 flex-1 bg-background"
            loading="lazy"
            allow="clipboard-write"
          />
          <div className="border-t border-border/70 p-3">
            <Button asChild variant="outline" size="sm" className="w-full">
              <a href={links.huggingface} target="_blank" rel="noreferrer">
                Open assistant in a new tab <ExternalLink />
              </a>
            </Button>
          </div>
        </div>
      ) : null}

      <Button
        type="button"
        size="icon"
        className="h-12 w-12 rounded-full shadow-glow"
        aria-label={open ? "Hide digital assistant" : "Open digital assistant"}
        aria-expanded={open}
        aria-controls="digital-assistant-panel"
        onClick={() => setOpen((value) => !value)}
      >
        <Bot className="h-5 w-5" />
      </Button>
    </aside>
  );
}
