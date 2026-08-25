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
  { label: "Dashboard", href: "/dashboard" },
  { label: "Contact", href: "/contact" },
] as const;

export const links = {
  linkedin: "https://www.linkedin.com/in/michael-w-perrine",
  github: "https://github.com/MWPerrineJr/completed-projects",
  huggingface: "https://huggingface.co/spaces/mestico01/my_twin",
  assistant: "https://mestico01-my-twin.hf.space",
  dashboard: "https://mwperrinejr-completed--online-retailer-sales-analysisapp-092rwf.streamlit.app/",
  dashboardSource:
    "https://github.com/MWPerrineJr/completed-projects/tree/main/online-retailer-sales-analysis",
  churnDashboard: "https://completed-projects-i5vraxfwegymcjdyewtywt.streamlit.app/",
  churnDashboardSource: "https://github.com/MWPerrineJr/completed-projects/tree/main/ChurnAnalysis",
  fraudDashboard: "https://mwperrinejr-completed-projects-frauddetectionapp-raaknk.streamlit.app/",
  fraudDashboardSource: "https://github.com/MWPerrineJr/completed-projects/tree/main/FraudDetection",
  stockDashboard: "https://completed-projects-d4kxlppp8zwtqry6lpaa8h.streamlit.app/",
  stockDashboardSource: "https://github.com/MWPerrineJr/completed-projects/tree/main/StockAnalysis",
};

export const dashboards = [
  {
    id: "sales",
    title: "Sales Analysis Dashboard",
    subtitle: "European product orders, 2019–2020 — EDA, net-sales regressors, and monthly forecasts.",
    description:
      "Filter the book, inspect distributions, score net-sales regressors, and compare monthly forecasts — then open the live app to use it.",
    href: links.dashboard,
    embedHref: `${links.dashboard}?embed=true`,
    sourceHref: links.dashboardSource,
    kpis: [
      { label: "Orders", value: "1,000" },
      { label: "Total net sales", value: "€18,992,428" },
      { label: "Avg net sales / order", value: "€18,992" },
      { label: "Blended margin", value: "16.8%" },
    ],
    tabs: ["Overview & EDA", "Regression Models", "Time Series Forecast"],
    filters: ["Country", "Category", "Sales manager", "Device type"],
    filterExtra: "2019-01 — 2020-12",
    filterCaption: "1,000 of 1,000 orders",
    highlights: [
      {
        title: "Overview & EDA",
        description:
          "Filter 1,000 orders by country, category, manager, device, and date. Histograms, sales vs. COGS by country, and period-over-period change.",
      },
      {
        title: "Regression Models",
        description:
          "Predict net sales from categorical attributes only — Linear, Huber, and XGBoost — with actual-vs-predicted plots and holdout metrics.",
      },
      {
        title: "Time Series Forecast",
        description:
          "Monthly net-sales forecasts from irregular order dates, comparing a manual ARIMA spec with auto_arima on a holdout window.",
      },
    ],
  },
  {
    id: "churn",
    title: "Customer Churn Dashboard",
    subtitle: "Bank customer churn — EDA, an ANN classifier, and a single-customer predictor.",
    description:
      "Explore 10,000 bank customers, review a persisted ANN on held-out test performance, and score one customer at a time.",
    href: links.churnDashboard,
    embedHref: `${links.churnDashboard}?embed=true`,
    sourceHref: links.churnDashboardSource,
    kpis: [
      { label: "Customers", value: "10,000" },
      { label: "Churn rate", value: "20.4%" },
      { label: "Avg balance", value: "€76,486" },
      { label: "Avg credit score", value: "651" },
    ],
    tabs: ["Overview & EDA", "Model Performance", "Predict a Customer"],
    filters: ["Geography", "Gender", "Age range", "Active member"],
    filterExtra: "All ages",
    filterCaption: "10,000 of 10,000 customers",
    highlights: [
      {
        title: "Overview & EDA",
        description:
          "Filter by geography, gender, age, and active status. Credit-score distributions, salary by gender, balance by churn, and churn rate by country.",
      },
      {
        title: "Model Performance",
        description:
          "A 6-6-1 ANN trained once on the full set. Test accuracy 85.8%, ROC AUC 0.864, with a live threshold slider on the confusion matrix.",
      },
      {
        title: "Predict a Customer",
        description:
          "Interactive form that mirrors the notebook’s manual prediction cell — credit score, geography, products, and a churn probability.",
      },
    ],
  },
  {
    id: "fraud",
    title: "Fraud Detection Dashboard",
    subtitle:
      "Mobile-money transaction fraud — EDA on 6.36M transactions, a logistic regression classifier, and a transaction scorer.",
    description:
      "Explore 6.36 million mobile-money transactions, review a balanced logistic regression on a held-out test set, and score a single transfer.",
    href: links.fraudDashboard,
    embedHref: `${links.fraudDashboard}?embed=true`,
    sourceHref: links.fraudDashboardSource,
    kpis: [
      { label: "Total transactions", value: "6,362,620" },
      { label: "Fraud rate", value: "0.129%" },
      { label: "Fraudulent transactions", value: "8,213" },
      { label: "Flagged by the source system", value: "16" },
    ],
    tabs: ["Overview & EDA", "Model Performance", "Predict a Transaction"],
    filters: ["CASH_IN", "CASH_OUT", "DEBIT", "PAYMENT", "TRANSFER"],
    filterExtra: "EDA filter",
    filterCaption: "Applies to Overview & EDA only",
    highlights: [
      {
        title: "Overview & EDA",
        description:
          "Exact aggregates over 6.36M rows: volume and fraud rate by type, amount distributions, frauds over time, and a zero-balance-after-transfer signature.",
      },
      {
        title: "Model Performance",
        description:
          "Logistic regression with class_weight='balanced'. Test recall 93.6% and ROC AUC 0.989 — accuracy is 94.7%, but precision/recall are the metrics that matter at 0.13% fraud.",
      },
      {
        title: "Predict a Transaction",
        description:
          "Score a single mobile-money transfer with the same fields as the standalone form, plus a live decision threshold.",
      },
    ],
  },
  {
    id: "stocks",
    title: "Stock Analysis Dashboard",
    subtitle:
      "Technicals and a five-name tech book for AAPL, MSFT, GOOGL, NVDA, and TSLA. Every number is in-sample — it describes this window, not a forecast.",
    description:
      "Compare prices, SMA crosses, Bollinger bands, and MACD across five names, then rebuild an inverse-volatility book and stress it with Monte Carlo.",
    href: links.stockDashboard,
    embedHref: `${links.stockDashboard}?embed=true`,
    sourceHref: links.stockDashboardSource,
    kpis: [
      { label: "Universe", value: "5 names" },
      { label: "Window start", value: "Jan 2020" },
      { label: "Random books", value: "25,000" },
      { label: "Bootstrap paths", value: "5,000" },
    ],
    tabs: ["Price", "Moving averages", "Bollinger bands", "MACD", "Weights", "Monte Carlo"],
    filters: ["AAPL", "MSFT", "GOOGL", "NVDA", "TSLA"],
    filterExtra: "Risk-free: current T-bill",
    filterCaption: "Prices from Yahoo Finance starting 2020-01-01",
    highlights: [
      {
        title: "Price & technicals",
        description:
          "Adjusted close vs growth of $1, 10/50-day SMA golden and death crosses, 20-day Bollinger bands, and MACD (12, 26, 9) plotted side by side.",
      },
      {
        title: "Portfolio weights",
        description:
          "Equal-weight, inverse-volatility, and inverse-variance books. Capital weights and risk contribution are shown separately so NVDA and TSLA do not hide in dollar shares.",
      },
      {
        title: "Monte Carlo",
        description:
          "25,000 long-only random books for the feasible set, plus 5,000 one-year bootstrap paths on the inverse-volatility rule from a $10,000 start.",
      },
    ],
  },
] as const;

export type ShowcaseDashboard = (typeof dashboards)[number];

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
    title: "Sales Analysis Dashboard",
    kind: "Streamlit",
    description:
      "Interactive EDA, net-sales regressors, and monthly forecasts on 1,000 European product orders from 2019–2020. Open the live app, or see the preview on the Dashboard tab.",
    href: links.dashboard,
    cta: "Open live dashboard",
  },
  {
    title: "Customer Churn Dashboard",
    kind: "Streamlit",
    description:
      "Bank-customer EDA, a persisted ANN classifier (85.8% test accuracy), and a single-customer predictor. Open the live app, or see the preview on the Dashboard tab.",
    href: links.churnDashboard,
    cta: "Open live dashboard",
  },
  {
    title: "Fraud Detection Dashboard",
    kind: "Streamlit",
    description:
      "EDA on 6.36M mobile-money transactions, a logistic regression classifier (93.6% recall, ROC AUC 0.989), and a single-transaction scorer. Open the live app, or see the preview on the Dashboard tab.",
    href: links.fraudDashboard,
    cta: "Open live dashboard",
  },
  {
    title: "Stock Analysis Dashboard",
    kind: "Streamlit",
    description:
      "Technicals and an inverse-volatility book on AAPL, MSFT, GOOGL, NVDA, and TSLA, plus a Monte Carlo stress test. Open the live app, or see the preview on the Dashboard tab.",
    href: links.stockDashboard,
    cta: "Open live dashboard",
  },
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
