import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ServiceIcon } from "@/components/ServiceIcon";
import { company, founder, proof, services } from "@/data/site";

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden bg-hero-glow">
        <div className="pointer-events-none absolute inset-0">
          <img
            src="/logo.webp"
            alt=""
            width="678"
            height="452"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        </div>

        <div className="container relative grid items-center gap-10 py-20 lg:grid-cols-2 lg:py-28">
          <div className="max-w-xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              {company.location}
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-gradient">{company.name}</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground sm:text-xl">{company.tagline}</p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{company.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contact">
                  Start a conversation <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/about">Meet the founder</Link>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl" />
            <img
              src="/logo.webp"
              alt={`${company.name} panda logo on a matrix of green code`}
              width="678"
              height="452"
              fetchPriority="high"
              className="relative w-full rounded-2xl border border-primary/30 shadow-glow"
            />
          </div>
        </div>
      </section>

      <section className="container py-16 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight">What we do</h2>
          <p className="mt-3 text-muted-foreground">
            Four focused offerings. Each one is meant to land in production, not a proof-of-concept folder.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {services.map((service, index) => (
            <Card key={service.title} className="bg-section-glow">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-md border border-primary/30 bg-background/40">
                  <ServiceIcon index={index} />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <div className="container">
        <Separator />
      </div>

      <section className="container py-16 lg:py-20">
        <div className="grid gap-8 rounded-2xl border border-primary/20 bg-section-glow p-8 sm:grid-cols-3">
          {proof.map((item) => (
            <div key={item.label} className="text-center sm:text-left">
              <p className="text-2xl font-semibold text-primary">{item.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container pb-20">
        <div className="overflow-hidden rounded-2xl border border-primary/25 bg-cta-glow p-8 shadow-glow md:p-12">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
            {founder.role}
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight">
            Ready to put agents and automation on real work?
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Tell us about the process that is still held together with inboxes and spreadsheets. We will
            come back with a clear next step.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link to="/contact">
              Contact {company.name} <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
