import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { RagPreview } from "@/components/RagPreview";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { rag } from "@/data/site";

export default function Rag() {
  return (
    <div className="container py-16 lg:py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">RAG</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Answers grounded in your documents</h1>
        <p className="mt-4 text-muted-foreground">
          Retrieval-augmented generation lets a model answer from a company's own documents instead of
          from memory. The work is in the parts you don't see: clean ingestion, honest refusals, and
          citations you can check. Here is a public example, built and evaluated end to end.
        </p>
      </div>

      <section className="mt-12">
        <p className="text-xs font-medium uppercase tracking-wider text-primary">{rag.kind}</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">{rag.title}</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">{rag.description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href={rag.href} target="_blank" rel="noreferrer">
              Open live assistant <ExternalLink />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={rag.sourceHref} target="_blank" rel="noreferrer">
              View source <ExternalLink />
            </a>
          </Button>
        </div>
      </section>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {rag.kpis.map((kpi) => (
          <div key={kpi.label} className="rounded-xl border border-primary/20 bg-section-glow p-5">
            <p className="text-2xl font-semibold text-primary">{kpi.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{kpi.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <RagPreview />
      </div>

      <h3 className="mt-16 text-2xl font-semibold tracking-tight">How it works</h3>
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rag.pipeline.map((step, index) => (
          <Card key={step.title} className="bg-section-glow">
            <CardHeader>
              <p className="text-xs font-medium uppercase tracking-wider text-primary">Step {index + 1}</p>
              <CardTitle className="text-lg">{step.title}</CardTitle>
              <CardDescription className="text-base leading-relaxed">{step.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <h3 className="mt-16 text-2xl font-semibold tracking-tight">Measured, not assumed</h3>
      <p className="mt-3 max-w-3xl text-muted-foreground">
        A 72-question evaluation set (57 answerable, 15 deliberately out of scope) decided the chunking
        strategy and the refusal threshold. A stronger model graded the answers blind.
      </p>
      <div className="mt-6 overflow-hidden rounded-xl border border-border/70">
        <table className="w-full text-left text-sm">
          <thead className="bg-muted/40 text-muted-foreground">
            <tr>
              <th scope="col" className="px-4 py-3 font-medium">Metric</th>
              <th scope="col" className="px-4 py-3 font-medium">Result</th>
              <th scope="col" className="hidden px-4 py-3 font-medium sm:table-cell">What it means</th>
            </tr>
          </thead>
          <tbody>
            {rag.evaluation.map((row) => (
              <tr key={row.metric} className="border-t border-border/70">
                <td className="px-4 py-3 font-medium">{row.metric}</td>
                <td className="px-4 py-3 font-semibold text-primary">{row.value}</td>
                <td className="hidden px-4 py-3 text-muted-foreground sm:table-cell">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {rag.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-16 overflow-hidden rounded-2xl border border-primary/25 bg-cta-glow p-8 shadow-glow md:p-12">
        <h2 className="text-2xl font-semibold tracking-tight">Have documents your team keeps searching by hand?</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Policies, manuals, contracts, product docs. The same pipeline (clean ingestion, cited answers,
          and a refusal when the answer isn't there) works on your own knowledge base.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link to="/contact">
            Talk through a RAG project <ArrowRight />
          </Link>
        </Button>
      </div>
    </div>
  );
}
