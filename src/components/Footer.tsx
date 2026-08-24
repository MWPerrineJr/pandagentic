import { Link } from "react-router-dom";
import { company, CONTACT_EMAIL, links } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/70 bg-background/60">
      <div className="container flex flex-col gap-6 py-10 md:flex-row md:items-start md:justify-between">
        <div className="flex items-start gap-3">
          <img
            src="/logo-160.webp"
            alt=""
            width="160"
            height="107"
            loading="lazy"
            className="h-9 w-9 rounded-full border border-primary/30 object-cover"
          />
          <div>
            <p className="font-semibold">{company.name}</p>
            <p className="mt-1 max-w-sm text-sm text-muted-foreground">{company.tagline}</p>
            <p className="mt-2 text-sm text-muted-foreground">{company.location}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <p className="font-medium text-foreground">Connect</p>
          <a className="text-muted-foreground hover:text-primary" href={links.linkedin}>
            LinkedIn
          </a>
          <a className="text-muted-foreground hover:text-primary" href={links.github}>
            GitHub
          </a>
          <a className="text-muted-foreground hover:text-primary" href={links.huggingface}>
            Hugging Face
          </a>
          <a className="text-muted-foreground hover:text-primary" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <p className="font-medium text-foreground">Site</p>
          <Link className="text-muted-foreground hover:text-primary" to="/about">
            About
          </Link>
          <Link className="text-muted-foreground hover:text-primary" to="/mission">
            Mission
          </Link>
          <Link className="text-muted-foreground hover:text-primary" to="/experience">
            Experience
          </Link>
          <Link className="text-muted-foreground hover:text-primary" to="/projects">
            Projects
          </Link>
          <Link className="text-muted-foreground hover:text-primary" to="/dashboard">
            Dashboard
          </Link>
          <Link className="text-muted-foreground hover:text-primary" to="/contact">
            Contact
          </Link>
        </div>
      </div>
      <div className="border-t border-border/50 py-4">
        <p className="container text-xs text-muted-foreground">
          © {new Date().getFullYear()} {company.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
