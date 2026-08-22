import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { certifications, education, founder, links, skills } from "@/data/site";

export default function About() {
  return (
    <div className="container py-16 lg:py-24">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-stretch">
        <img
          src={founder.photo}
          alt={`${founder.name}, founder of Pandagentic`}
          className="order-1 h-44 w-44 justify-self-end rounded-full border-2 border-primary/50 object-cover object-top shadow-glow sm:h-52 sm:w-52 lg:order-3 lg:h-56 lg:w-56 lg:self-start"
        />
        <div className="order-2 lg:col-start-2">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">About</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">{founder.name}</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            {founder.role}, Pandagentic · {founder.location}
          </p>
          <div className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground">
            {founder.summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <a className="inline-flex items-center gap-1 text-primary hover:underline" href={links.linkedin}>
              LinkedIn <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a className="inline-flex items-center gap-1 text-primary hover:underline" href={links.github}>
              GitHub <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a className="inline-flex items-center gap-1 text-primary hover:underline" href={links.huggingface}>
              Hugging Face <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
        <img
          src={founder.photoLinkedIn}
          alt={`${founder.name} on LinkedIn`}
          className="order-3 h-44 w-44 justify-self-start rounded-full border-2 border-primary/50 object-cover shadow-glow sm:h-52 sm:w-52 lg:order-1 lg:h-56 lg:w-56 lg:self-end"
        />
      </div>

      <Separator className="my-14" />

      <div className="grid gap-8 lg:grid-cols-2">
        <section>
          <h2 className="text-2xl font-semibold tracking-tight">Education</h2>
          <div className="mt-6 space-y-4">
            {education.map((item) => (
              <Card key={item.school}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.school}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.credential}</p>
                  {item.dates ? (
                    <p className="mt-1 text-sm text-muted-foreground">{item.dates}</p>
                  ) : null}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Certifications</h2>
            <ul className="mt-6 space-y-2 text-muted-foreground">
              {certifications.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
