import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { capabilityProjects, featuredProjects } from "@/data/site";

export default function Projects() {
  return (
    <div className="container py-16 lg:py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Projects</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Work in the open, and work we do</h1>
        <p className="mt-4 text-muted-foreground">
          Public builds sit next to the service work Pandagentic is set up to deliver. Named client
          case studies can be added here as they are ready to share.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <Card key={project.title} className="bg-section-glow">
            <CardHeader>
              <p className="text-xs font-medium uppercase tracking-wider text-primary">{project.kind}</p>
              <CardTitle className="mt-2">{project.title}</CardTitle>
              <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline">
                <a href={project.href} target="_blank" rel="noreferrer">
                  {project.cta} <ExternalLink />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="mt-16 text-2xl font-semibold tracking-tight">Capability work</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {capabilityProjects.map((project) => (
          <Card key={project.title}>
            <CardHeader>
              <CardTitle className="text-lg">{project.title}</CardTitle>
              <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
