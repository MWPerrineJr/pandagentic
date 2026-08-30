import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { workflows } from "@/data/site";

function NodePath({ nodes }: { nodes: readonly string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {nodes.map((node, nodeIndex) => (
        <span key={node} className="inline-flex items-center gap-2">
          <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {node}
          </span>
          {nodeIndex < nodes.length - 1 ? (
            <ArrowRight className="h-3.5 w-3.5 text-primary/70" aria-hidden="true" />
          ) : null}
        </span>
      ))}
    </div>
  );
}

export default function Workflows() {
  return (
    <div className="container py-16 lg:py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Workflows</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Autonomous workflows</h1>
        <p className="mt-4 text-muted-foreground">
          n8n automations that move work without a human copy-paste step. Document translation is the
          live app. The rest are high-value patterns built the same way: a real trigger, AI where it
          earns its keep, and an output in the tools the team already pays for.
        </p>
      </div>

      <ol className="mt-12 grid gap-6 lg:grid-cols-2">
        {workflows.map((workflow, index) => (
          <li key={workflow.id} className={workflow.featured ? "lg:col-span-2" : undefined}>
            <Card className="h-full bg-section-glow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-primary">
                    {workflow.featured ? "Featured n8n app" : "n8n"}
                  </p>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-background/50 text-sm font-semibold text-primary">
                    {index + 1}
                  </span>
                </div>
                <CardTitle className="mt-2 text-xl">{workflow.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{workflow.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <NodePath nodes={workflow.nodes} />
                {"href" in workflow && workflow.href ? (
                  <Button asChild>
                    <a href={workflow.href} target="_blank" rel="noreferrer">
                      Open translation form <ExternalLink />
                    </a>
                  </Button>
                ) : null}
              </CardContent>
            </Card>
          </li>
        ))}
      </ol>

      <div className="mt-16 overflow-hidden rounded-2xl border border-primary/25 bg-cta-glow p-8 shadow-glow md:p-12">
        <h2 className="text-2xl font-semibold tracking-tight">Need a flow that is still stuck in inboxes?</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Document translation is the working example. The other patterns are where we usually start
          next. If the work is different, we map the trigger, the decision, and the system of record
          before a single node is wired.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link to="/contact">
            Talk through a workflow <ArrowRight />
          </Link>
        </Button>
      </div>
    </div>
  );
}
