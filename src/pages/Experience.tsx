import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { experience } from "@/data/site";

export default function Experience() {
  return (
    <div className="container py-16 lg:py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Experience</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Career history</h1>
        <p className="mt-4 text-muted-foreground">
          Financial services, operations, and data work that now sits underneath Pandagentic. Fidelity
          and earlier roles stay on the record; the company is the next chapter.
        </p>
      </div>

      <ol className="relative mt-12 space-y-8 border-l border-primary/25 pl-8">
        {experience.map((item) => (
          <li key={item.company} className="relative">
            <span className="absolute -left-[37px] top-6 h-3 w-3 rounded-full bg-primary shadow-glow-sm" />
            <Card>
              <CardHeader>
                <CardTitle>{item.company}</CardTitle>
                <p className="text-sm text-primary">{item.tenure}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {item.roles.map((role) => (
                  <div key={`${role.title}-${role.dates}`}>
                    <p className="font-medium">{role.title}</p>
                    <p className="text-sm text-muted-foreground">{role.dates}</p>
                    {role.bullets ? (
                      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                        {role.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </CardContent>
            </Card>
          </li>
        ))}
      </ol>
    </div>
  );
}
