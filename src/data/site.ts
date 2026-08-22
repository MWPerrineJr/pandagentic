/**
 * Single source of truth for site copy and links.
 * Swap CONTACT_EMAIL when the company inbox is ready.
 */
export const CONTACT_EMAIL = "hello@pandagentic.com";

export const company = {
  name: "Pandagentic",
  tagline: "Agentic AI, automation, and software that your business can actually use.",
  location: "San Antonio, Texas",
  description:
    "Pandagentic helps teams adopt AI with a practical bias: consultation that maps to real work, agents that take action, n8n workflows that run without babysitting, and SaaS applications built around how the business already operates.",
};

export const mission = {
  statement:
    "Every company has a mountain of data. Most never learn to climb it. Pandagentic is the guide — pairing sharp AI consultation with intelligent automation and agentic systems to turn information into results, and results into lasting advantage.",
  values: [
    {
      title: "Honesty",
      description: "We say what we know, what we do not, and what a system can actually do.",
    },
    {
      title: "Integrity",
      description: "Recommendations serve the client’s outcome, not a tool we happen to sell.",
    },
    {
      title: "Dedication",
      description: "We stay with the work until it runs in production, not until the slide deck lands.",
    },
    {
      title: "Clarity",
      description: "Plain language, clear next steps, and no fog around cost, risk, or scope.",
    },
  ],
};

export const founder = {
  name: "Michael Perrine",
  role: "Founder",
  location: "San Antonio, Texas, United States",
  photo: "/profile.png",
  photoLinkedIn: "/profile-linkedin.jpg",
  summary: [
    "Michael Perrine is the founder of Pandagentic. He helps organizations put AI to work through consultation, agentic systems, n8n workflow automation, and custom SaaS applications.",
    "He spent about 12 years in financial planning, most recently as an Investment Solutions Representative at Fidelity Investments, where he analyzed client portfolios and financial data in support of $46M in new asset acquisition. Working with data to build financial plans is what pulled him toward data science.",
    "He completed a Master of Science in Data Science at Bellevue University in November 2025. Pandagentic is the company that puts that mix of client-facing financial experience and technical training into production systems: agents that act, workflows that run, and software teams will actually use.",
  ],
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Mission", href: "/mission" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
] as const;

export const links = {
  linkedin: "https://www.linkedin.com/in/michael-w-perrine",
  github: "https://github.com/MWPerrineJr/completed-projects",
  huggingface: "https://huggingface.co/spaces/mestico01/my_twin",
  assistant: "https://mestico01-my-twin.hf.space",
};

export const services = [
  {
    title: "AI Consultation",
    description:
      "Map where AI belongs in the business, what should stay human, and which tools will actually get used. Clear recommendations, not a slide deck of hype.",
  },
  {
    title: "Agentic AI",
    description:
      "Design and stand up agents that can take multi-step action: research, routing, follow-up, and handoff, with guardrails that match how the team already works.",
  },
  {
    title: "n8n Workflow Automation",
    description:
      "Connect the stack you already pay for. n8n workflows that move data, trigger work, and cut the copy-paste between CRMs, spreadsheets, inboxes, and internal tools.",
  },
  {
    title: "SaaS Business Applications",
    description:
      "Custom software for the process that never quite fit a generic product. Lightweight apps that capture the workflow, the data, and the decisions in one place.",
  },
] as const;

export const proof = [
  { value: "n8n Level 2", label: "Certified automation" },
  { value: "MSDS", label: "Data Science, Bellevue University" },
  { value: "12 years", label: "Financial services experience" },
] as const;

export const skills = [
  "Microsoft Power BI",
  "Market Segmentation",
  "Jupyter",
  "Python",
  "Machine Learning",
  "Computer Vision",
] as const;

export const certifications = [
  "n8n",
  "N8N Level 2 Certificate",
  "Data Science Essentials",
  "Algorithmic Trading Strategies in Python",
  "Building an Investment Trading System in Python",
] as const;

export const education = [
  {
    school: "Bellevue University",
    credential: "Master of Science in Data Science (MSDS)",
    dates: "September 2024 – November 2025",
  },
  {
    school: "The University of Texas at San Antonio",
    credential: "Bachelor of Business Administration, Finance",
    dates: "2010 – 2013",
  },
  {
    school: "San Antonio College",
    credential: "Associates of Applied Science, Banking and Financial Services",
    dates: "2007 – 2009",
  },
  {
    school: "Zero To Mastery Academy",
    credential: "Professional coursework",
    dates: "",
  },
] as const;

export type Role = {
  title: string;
  dates: string;
  bullets?: string[];
};

export type ExperienceItem = {
  company: string;
  tenure: string;
  roles: Role[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Fidelity Investments",
    tenure: "January 2024 – Present",
    roles: [
      {
        title: "Investment Solutions Representative",
        dates: "January 2024 – Present",
        bullets: [
          "Analyzed client portfolios and financial data to support $46M in new asset acquisition.",
          "Built data-driven investment strategies aligned with client goals and market conditions.",
          "Collaborated with cross-functional teams to enhance financial planning tools and reporting.",
        ],
      },
    ],
  },
  {
    company: "M&T Construction",
    tenure: "June 2020 – November 2024",
    roles: [
      {
        title: "Founder",
        dates: "June 2020 – November 2024",
        bullets: [
          "Managed project budgets and procurement using cost analytics and forecasting models.",
          "Streamlined financial operations through data tracking and margin optimization.",
          "Created dashboards to monitor resource allocation and project performance.",
        ],
      },
      {
        title: "Co-Owner",
        dates: "June 2020 – August 2023",
      },
    ],
  },
  {
    company: "Equitable Advisors",
    tenure: "August 2023 – January 2024",
    roles: [
      {
        title: "Financial Advisor",
        dates: "August 2023 – January 2024",
      },
    ],
  },
  {
    company: "USAA",
    tenure: "June 2013 – July 2020",
    roles: [
      {
        title: "Financial Advisor",
        dates: "September 2013 – July 2020",
        bullets: [
          "Delivered quantitative investment insights for high-net-worth clients using financial modeling.",
          "Developed strategic plans responsive to market trends and client objectives.",
          "Presented data visualizations to communicate portfolio performance and risk exposure.",
        ],
      },
      {
        title: "Wealth Advisor II",
        dates: "July 2019 – June 2020",
      },
      {
        title: "Wealth Management Advisor",
        dates: "June 2013 – June 2020",
      },
    ],
  },
  {
    company: "Edward Jones",
    tenure: "February 2013 – May 2013",
    roles: [
      {
        title: "Financial Advisor Trainee",
        dates: "February 2013 – May 2013",
      },
    ],
  },
  {
    company: "Chase Card Services",
    tenure: "June 2010 – February 2012",
    roles: [
      {
        title: "Customer Service",
        dates: "June 2010 – February 2012",
        bullets: [
          "Helped card members with terms, product upgrades, payments, and rewards.",
          "Received an award for customer satisfaction.",
        ],
      },
    ],
  },
  {
    company: "Citibank",
    tenure: "June 2008 – June 2010",
    roles: [
      {
        title: "Customer Service",
        dates: "June 2008 – June 2010",
        bullets: [
          "Handled inbound inquiries across loan products, deposit accounts, and complaints.",
          "Supported personal bankers and closed accounts when needed, looking for the right next product rather than a hard sell.",
        ],
      },
    ],
  },
];

export const featuredProjects = [
  {
    title: "my_twin",
    kind: "Agent space",
    description:
      "A Hugging Face Space for agent-style interaction. A public example of the kind of agentic work Pandagentic builds and iterates on.",
    href: links.huggingface,
    cta: "Open on Hugging Face",
  },
  {
    title: "Completed projects",
    kind: "Portfolio",
    description:
      "A GitHub collection of completed technical work, from data science through applied software. The working archive behind the consulting practice.",
    href: links.github,
    cta: "View on GitHub",
  },
] as const;

export const capabilityProjects = [
  {
    title: "n8n operations pipelines",
    description:
      "Connect CRM, inbox, sheets, and internal tools so handoffs happen without a human copy-paste step. Built on n8n, certified through Level 2.",
  },
  {
    title: "Agentic research and routing",
    description:
      "Agents that gather context, take a next step, and hand off cleanly. Guardrails first, then autonomy where it earns its keep.",
  },
  {
    title: "AI consultation sprints",
    description:
      "Short, opinionated engagements: what to automate, what to leave alone, and what a first production workflow should look like.",
  },
  {
    title: "SaaS for the process that never quite fit the mold",
    description:
      "Lightweight business applications around a real workflow, not a generic template. Data, decisions, and users in one place.",
  },
] as const;
