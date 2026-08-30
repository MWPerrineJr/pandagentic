import { ExternalLink } from "lucide-react";
import { StandingChairPreview } from "@/components/StandingChairPreview";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { saasProjects } from "@/data/site";

const product = saasProjects[0];

export default function SaaS() {
  return (
    <div className="container py-16 lg:py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">SaaS</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">SaaS applications</h1>
        <p className="mt-4 text-muted-foreground">
          Custom software around a real workflow. The first public product is a booking marketplace for
          beauty and wellness shops.
        </p>
      </div>

      <section className="mt-12">
        <p className="text-xs font-medium uppercase tracking-wider text-primary">{product.kind}</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">{product.title}</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">{product.description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href={product.href} target="_blank" rel="noreferrer">
              Open live app <ExternalLink />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={product.demoHref} target="_blank" rel="noreferrer">
              Product tour <ExternalLink />
            </a>
          </Button>
        </div>
      </section>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {product.kpis.map((kpi) => (
          <div key={kpi.label} className="rounded-xl border border-primary/20 bg-section-glow p-5">
            <p className="text-2xl font-semibold text-primary">{kpi.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{kpi.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <StandingChairPreview />
      </div>

      <h3 className="mt-16 text-2xl font-semibold tracking-tight">How the product runs</h3>
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {product.steps.map((step, index) => (
          <Card key={step.title} className="bg-section-glow">
            <CardHeader>
              <p className="text-xs font-medium uppercase tracking-wider text-primary">Step {index + 1}</p>
              <CardTitle className="text-lg">{step.title}</CardTitle>
              <CardDescription className="text-base leading-relaxed">{step.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <h3 className="mt-16 text-2xl font-semibold tracking-tight">Pricing</h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {product.plans.map((plan) => (
          <Card key={plan.name}>
            <CardHeader>
              <CardTitle className="text-lg">{plan.name}</CardTitle>
              <p className="text-sm font-medium text-primary">{plan.price}</p>
              <CardDescription className="text-base leading-relaxed">{plan.detail}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
