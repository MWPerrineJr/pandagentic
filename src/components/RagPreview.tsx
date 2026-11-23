import { useState } from "react";
import { ExternalLink, MonitorPlay } from "lucide-react";
import { Button } from "@/components/ui/button";
import { rag } from "@/data/site";

/** Static mock of the Streamlit chat: one answered question and one refusal. */
function ChatVisual() {
  return (
    <div className="grid bg-white text-left text-slate-800 md:grid-cols-[12rem_1fr]">
      <div className="hidden border-r border-slate-200 bg-slate-50 p-4 md:block">
        <p className="text-sm font-semibold">Settings</p>
        <p className="mt-4 text-[11px] text-slate-500">Library</p>
        <div className="mt-1 rounded-md border border-slate-200 bg-white px-2 py-1.5 text-[12px]">All</div>
        <div className="mt-4 flex items-center gap-2 text-[12px] text-slate-600">
          <span className="h-3.5 w-6 rounded-full bg-slate-300" /> Show details
        </div>
        <p className="mt-4 text-[11px] text-slate-500">Session cost</p>
        <p className="text-lg font-semibold">$0.0003</p>
      </div>

      <div className="space-y-4 p-4 sm:p-6">
        <div>
          <p className="text-xl font-semibold">{rag.title}</p>
          <p className="mt-1 text-[12px] text-slate-500">
            Ask about pandas, NumPy, SciPy, scikit-learn, matplotlib or Plotly. Answers cite the reference docs.
          </p>
        </div>

        <div className="rounded-lg bg-slate-100 px-3 py-2 text-[13px]">How do I make a pivot table in pandas?</div>

        <div className="space-y-2 text-[13px]">
          <p>
            Use <code className="rounded bg-slate-100 px-1">DataFrame.pivot_table</code> to reshape and aggregate in
            one step:
          </p>
          <pre className="overflow-x-auto rounded-md bg-slate-900 p-3 text-[11px] text-slate-100">
            {`df.pivot_table(index="region", columns="year",\n               values="sales", aggfunc="sum")`}
          </pre>
          <p className="text-[11px] text-slate-500">Sources</p>
          <div className="rounded-md border border-slate-200 px-3 py-2 text-[12px]">
            <span className="font-semibold">pandas 3.1.0</span> · Reshaping and pivot tables · p. 100
          </div>
        </div>

        <div className="rounded-lg bg-slate-100 px-3 py-2 text-[13px]">What is the capital of France?</div>
        <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-[12px] text-amber-900">
          I couldn't find this in the documentation with enough confidence.
        </div>
      </div>
    </div>
  );
}

export function RagPreview() {
  const [showLive, setShowLive] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-primary/25 bg-card shadow-glow">
      <div className="flex items-center gap-3 border-b border-border/70 bg-background/80 px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
        </div>
        <a
          href={rag.href}
          target="_blank"
          rel="noreferrer"
          className="min-w-0 truncate rounded-md border border-border/70 bg-muted/40 px-3 py-1 text-xs text-muted-foreground hover:text-primary"
        >
          {rag.href.replace(/\/$/, "")}
        </a>
      </div>

      {showLive ? (
        <iframe
          title={rag.title}
          src={rag.embedHref}
          className="h-[min(44rem,75vh)] w-full bg-white"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allow="clipboard-write"
        />
      ) : (
        <ChatVisual />
      )}

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/70 bg-background/60 px-4 py-3">
        <p className="text-xs text-muted-foreground">
          {showLive
            ? "Live Streamlit embed. The cloud app may take a moment to wake."
            : "Static preview of the deployed app. Try it live here or in a new tab."}
        </p>
        <div className="flex flex-wrap gap-2">
          {showLive ? (
            <Button type="button" size="sm" variant="outline" onClick={() => setShowLive(false)}>
              Show preview
            </Button>
          ) : (
            <Button type="button" size="sm" variant="outline" onClick={() => setShowLive(true)}>
              <MonitorPlay /> Try it here
            </Button>
          )}
          <Button asChild size="sm">
            <a href={rag.href} target="_blank" rel="noreferrer">
              Open live assistant <ExternalLink />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
