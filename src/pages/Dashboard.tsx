import { ExternalLink } from "lucide-react";
import { DashboardPreview } from "@/components/DashboardPreview";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { dashboards } from "@/data/site";

export default function Dashboard() {
  return (
    <div className="container py-16 lg:py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Dashboard</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Live dashboards</h1>
        <p className="mt-4 text-muted-foreground">
          Three public Streamlit apps from completed data-science work. Sales, churn, and fraud detection
          sit in that order below.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {dashboards.map((item) => (
            <Button key={item.id} asChild variant="outline">
              <a href={`#${item.id}`}>{item.title}</a>
            </Button>
          ))}
        </div>
      </div>

      {dashboards.map((item) => (
        <section key={item.id} id={item.id} className="mt-16 scroll-mt-24">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight">{item.title}</h2>
            <p className="mt-3 text-muted-foreground">{item.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <a href={item.href} target="_blank" rel="noreferrer">
                  Open live dashboard <ExternalLink />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={item.sourceHref} target="_blank" rel="noreferrer">
                  View source <ExternalLink />
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-8">
            <DashboardPreview dashboard={item} />
          </div>

          <h3 className="mt-10 text-lg font-semibold tracking-tight">What’s inside</h3>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            {item.highlights.map((highlight) => (
              <Card key={highlight.title} className="bg-section-glow">
                <CardHeader>
                  <CardTitle className="text-lg">{highlight.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {highlight.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
