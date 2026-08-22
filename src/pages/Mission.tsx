import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { company, mission } from "@/data/site";

export default function Mission() {
  return (
    <div className="container py-16 lg:py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Mission</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Why {company.name} exists</h1>
        <blockquote className="mt-10 border-l-2 border-primary/60 pl-6 text-xl leading-relaxed text-foreground sm:text-2xl">
          {mission.statement}
        </blockquote>
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight">Core values</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {mission.values.map((value) => (
            <Card key={value.title} className="bg-section-glow">
              <CardHeader>
                <CardTitle>{value.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{value.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
