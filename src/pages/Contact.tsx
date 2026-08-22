import { FormEvent, useState } from "react";
import { ExternalLink, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT_EMAIL, company, links } from "@/data/site";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Pandagentic inquiry from ${name}`);
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="container py-16 lg:py-24">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Contact</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Let’s talk about the work</h1>
        <p className="mt-4 text-muted-foreground">
          Share a little about the process you want automated or the product you want built. The form
          opens your email client so the message lands in the {company.name} inbox.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <CardHeader>
            <CardTitle>Send a message</CardTitle>
            <CardDescription>Name, email, and a short note are enough to start.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-5" onSubmit={onSubmit}>
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  autoComplete="name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  autoComplete="email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </div>
              <Button type="submit" size="lg">
                <Mail /> Send message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="bg-section-glow">
            <CardHeader>
              <CardTitle className="text-lg">Direct</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <a className="flex items-center gap-2 text-primary hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
                <Mail className="h-4 w-4" />
                {CONTACT_EMAIL}
              </a>
              <p className="text-muted-foreground">
                Prefer email? Write directly and we will follow up.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Elsewhere</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 text-sm">
              <a className="inline-flex items-center gap-1 text-primary hover:underline" href={links.linkedin}>
                LinkedIn <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a className="inline-flex items-center gap-1 text-primary hover:underline" href={links.github}>
                GitHub <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a className="inline-flex items-center gap-1 text-primary hover:underline" href={links.huggingface}>
                Hugging Face <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
