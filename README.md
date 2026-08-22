# Pandagentic

Marketing site for Pandagentic: AI consultation, agentic AI, n8n workflow automation, and SaaS business applications.

Built as a Lovable-compatible Vite + React + TypeScript app (Tailwind CSS, shadcn/ui, React Router). No Next.js.

## Local development

```sh
npm install
npm run dev
```

The app runs at [http://localhost:8080](http://localhost:8080).

```sh
npm run build
npm run preview
npm run lint
npm run test
```

## Where to edit copy

All public copy, links, and the contact address live in [`src/data/site.ts`](src/data/site.ts).

When the company inbox is ready, change `CONTACT_EMAIL`. The contact form uses `mailto:` with that address until you wire Formspree or another backend.

The source logo is [`public/logo.png`](public/logo.png). The site serves optimized WebP versions generated from that source.

## Deploy on Lovable

1. Push this repo to GitHub.
2. In Lovable, create or open a project and connect GitHub (`+` → GitHub → Connect project).
3. Import this repository. Lovable expects Vite + React + TypeScript + Tailwind + shadcn/ui, which this project already uses.
4. Use **Share → Publish**. Bind a custom domain in project settings when you have one.

You can also keep editing locally; pushes to GitHub sync back into Lovable when the repo is connected.
