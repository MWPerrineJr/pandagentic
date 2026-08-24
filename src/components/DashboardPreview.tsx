import { useState } from "react";
import { ExternalLink, MonitorPlay } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ShowcaseDashboard } from "@/data/site";

function Histogram({
  title,
  bars,
  color,
  xLabel,
}: {
  title: string;
  bars: number[];
  color: string;
  xLabel: string;
}) {
  const max = Math.max(...bars);
  const width = 260;
  const height = 110;
  const gap = 2;
  const barWidth = (width - gap * (bars.length - 1)) / bars.length;

  return (
    <div className="rounded-md border border-slate-200 bg-white p-3">
      <p className="text-[11px] font-medium text-slate-700">{title}</p>
      <svg viewBox={`0 0 ${width} ${height}`} className="mt-2 h-24 w-full" aria-hidden="true">
        {bars.map((value, index) => {
          const barHeight = (value / max) * 88;
          const x = index * (barWidth + gap);
          return (
            <rect
              key={`${title}-${index}`}
              x={x}
              y={height - barHeight}
              width={barWidth}
              height={barHeight}
              fill={color}
              opacity={0.85}
              rx={1}
            />
          );
        })}
      </svg>
      <div className="mt-1 flex justify-between text-[9px] text-slate-400">
        <span>{xLabel}</span>
        <span>Frequency</span>
      </div>
    </div>
  );
}

function ScatterChart() {
  const points = [
    { x: 38, y: 72, color: "#636EFA" },
    { x: 52, y: 64, color: "#EF553B" },
    { x: 70, y: 58, color: "#00CC96" },
    { x: 88, y: 50, color: "#AB63FA" },
    { x: 104, y: 46, color: "#FFA15A" },
    { x: 122, y: 40, color: "#19D3F3" },
    { x: 140, y: 36, color: "#FF6692" },
    { x: 158, y: 30, color: "#B6E880" },
    { x: 48, y: 80, color: "#636EFA" },
    { x: 96, y: 62, color: "#00CC96" },
    { x: 130, y: 48, color: "#FFA15A" },
    { x: 168, y: 28, color: "#19D3F3" },
    { x: 62, y: 70, color: "#EF553B" },
    { x: 150, y: 42, color: "#AB63FA" },
    { x: 178, y: 22, color: "#FF6692" },
  ];

  return (
    <div className="rounded-md border border-slate-200 bg-white p-3">
      <p className="text-[11px] font-medium text-slate-700">Sales vs COGS by country</p>
      <svg viewBox="0 0 220 110" className="mt-2 h-28 w-full" aria-hidden="true">
        <line x1="24" y1="96" x2="210" y2="96" stroke="#E5E7EB" />
        <line x1="24" y1="12" x2="24" y2="96" stroke="#E5E7EB" />
        <line x1="28" y1="90" x2="200" y2="18" stroke="#CBD5E1" strokeDasharray="3 3" />
        {points.map((point) => (
          <circle
            key={`${point.x}-${point.y}-${point.color}`}
            cx={point.x}
            cy={point.y}
            r="4.5"
            fill={point.color}
            opacity="0.8"
          />
        ))}
      </svg>
    </div>
  );
}

function ForecastChart() {
  const train = "M16 78 C 40 74, 58 62, 80 58 S 120 54, 148 42";
  const actual = "M148 42 C 162 38, 174 46, 188 40";
  const forecast = "M148 42 C 164 48, 176 36, 204 28";

  return (
    <div className="rounded-md border border-slate-200 bg-white p-3">
      <p className="text-[11px] font-medium text-slate-700">Monthly net sales: forecast vs actual</p>
      <svg viewBox="0 0 220 110" className="mt-2 h-28 w-full" aria-hidden="true">
        <line x1="16" y1="92" x2="208" y2="92" stroke="#E5E7EB" />
        <path d={train} fill="none" stroke="#4682B4" strokeWidth="2.4" />
        <path d={actual} fill="none" stroke="#111827" strokeWidth="2.4" />
        <path d={forecast} fill="none" stroke="#EA580C" strokeWidth="2.4" strokeDasharray="5 4" />
      </svg>
      <div className="mt-1 flex gap-3 text-[9px] text-slate-500">
        <span className="inline-flex items-center gap-1">
          <span className="h-1.5 w-3 rounded-full bg-[#4682B4]" /> Train
        </span>
        <span className="inline-flex items-center gap-1">
          <span className="h-1.5 w-3 rounded-full bg-slate-900" /> Actual
        </span>
        <span className="inline-flex items-center gap-1">
          <span className="h-1.5 w-3 rounded-sm border border-dashed border-orange-600" /> ARIMA
        </span>
      </div>
    </div>
  );
}

function BoxPlotChart() {
  return (
    <div className="rounded-md border border-slate-200 bg-white p-3">
      <p className="text-[11px] font-medium text-slate-700">Salary by gender</p>
      <svg viewBox="0 0 220 110" className="mt-2 h-28 w-full" aria-hidden="true">
        <line x1="24" y1="96" x2="210" y2="96" stroke="#E5E7EB" />
        <line x1="24" y1="12" x2="24" y2="96" stroke="#E5E7EB" />
        <line x1="70" y1="28" x2="70" y2="82" stroke="#636EFA" strokeWidth="2" />
        <rect x="58" y="40" width="24" height="28" fill="#636EFA" opacity="0.35" stroke="#636EFA" />
        <line x1="58" y1="54" x2="82" y2="54" stroke="#636EFA" strokeWidth="2" />
        <line x1="150" y1="22" x2="150" y2="88" stroke="#EF553B" strokeWidth="2" />
        <rect x="138" y="36" width="24" height="32" fill="#EF553B" opacity="0.35" stroke="#EF553B" />
        <line x1="138" y1="52" x2="162" y2="52" stroke="#EF553B" strokeWidth="2" />
        <text x="70" y="104" textAnchor="middle" fontSize="9" fill="#64748B">
          Female
        </text>
        <text x="150" y="104" textAnchor="middle" fontSize="9" fill="#64748B">
          Male
        </text>
      </svg>
    </div>
  );
}

function GeographyBars() {
  const bars = [
    { label: "France", value: 16, color: "#636EFA" },
    { label: "Germany", value: 32, color: "#EF553B" },
    { label: "Spain", value: 17, color: "#00CC96" },
  ];

  return (
    <div className="rounded-md border border-slate-200 bg-white p-3">
      <p className="text-[11px] font-medium text-slate-700">Churn rate by geography</p>
      <svg viewBox="0 0 220 110" className="mt-2 h-28 w-full" aria-hidden="true">
        <line x1="24" y1="88" x2="210" y2="88" stroke="#E5E7EB" />
        {bars.map((bar, index) => {
          const height = bar.value * 2.2;
          const x = 40 + index * 60;
          return (
            <g key={bar.label}>
              <rect x={x} y={88 - height} width="28" height={height} fill={bar.color} rx="2" />
              <text x={x + 14} y="102" textAnchor="middle" fontSize="9" fill="#64748B">
                {bar.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function BalanceBars() {
  return (
    <div className="rounded-md border border-slate-200 bg-white p-3">
      <p className="text-[11px] font-medium text-slate-700">Average balance: stayed vs churned</p>
      <svg viewBox="0 0 220 110" className="mt-2 h-28 w-full" aria-hidden="true">
        <line x1="24" y1="88" x2="210" y2="88" stroke="#E5E7EB" />
        <rect x="55" y="42" width="48" height="46" fill="#636EFA" rx="2" />
        <rect x="125" y="28" width="48" height="60" fill="#EF553B" rx="2" />
        <text x="79" y="102" textAnchor="middle" fontSize="9" fill="#64748B">
          Stayed
        </text>
        <text x="149" y="102" textAnchor="middle" fontSize="9" fill="#64748B">
          Churned
        </text>
      </svg>
    </div>
  );
}

function DashboardCharts({ dashboard }: { dashboard: ShowcaseDashboard }) {
  if (dashboard.id === "churn") {
    const creditBars = [4, 8, 14, 22, 34, 48, 62, 70, 66, 54, 40, 28, 18, 12, 8, 5, 3, 2];
    return (
      <>
        <Histogram title="Distribution of credit scores" bars={creditBars} color="#636EFA" xLabel="Credit score" />
        <BoxPlotChart />
        <BalanceBars />
        <GeographyBars />
      </>
    );
  }

  const salesBars = [8, 18, 32, 48, 62, 70, 54, 36, 22, 16, 12, 9, 7, 5, 4, 3, 3, 2];
  const cogsBars = [6, 14, 28, 44, 58, 66, 50, 34, 24, 18, 13, 10, 8, 6, 5, 4, 3, 2];
  return (
    <>
      <Histogram title="Distribution of sales" bars={salesBars} color="#636EFA" xLabel="Sales (EUR)" />
      <Histogram title="Distribution of COGS" bars={cogsBars} color="#EF553B" xLabel="COGS (EUR)" />
      <ScatterChart />
      <ForecastChart />
    </>
  );
}

function DashboardVisual({ dashboard }: { dashboard: ShowcaseDashboard }) {
  return (
    <div className="grid grid-cols-[7.5rem_minmax(0,1fr)] bg-[#F0F2F6] text-left sm:grid-cols-[9.5rem_minmax(0,1fr)]">
      <aside className="border-r border-slate-200 bg-[#F0F2F6] p-3 sm:p-4">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Filters</p>
        <div className="mt-3 space-y-2 text-[10px] text-slate-600">
          {dashboard.filters.map((label) => (
            <div key={label} className="rounded border border-slate-200 bg-white px-2 py-1.5">
              {label}
            </div>
          ))}
          <div className="rounded border border-slate-200 bg-white px-2 py-1.5">{dashboard.filterExtra}</div>
          <p className="pt-1 text-[9px] text-slate-400">{dashboard.filterCaption}</p>
        </div>
      </aside>

      <div className="bg-white p-3 sm:p-5">
        <p className="text-base font-semibold text-slate-800 sm:text-lg">{dashboard.title}</p>
        <p className="mt-1 text-[11px] text-slate-500 sm:text-xs">{dashboard.subtitle}</p>

        <div className="mt-4 grid grid-cols-2 gap-2 lg:grid-cols-4">
          {dashboard.kpis.map((kpi) => (
            <div key={kpi.label} className="rounded-md border border-slate-100 bg-slate-50 px-3 py-2">
              <p className="text-[10px] text-slate-500">{kpi.label}</p>
              <p className="mt-0.5 text-sm font-semibold text-slate-800 sm:text-base">{kpi.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex gap-4 border-b border-slate-200 text-[11px]">
          {dashboard.tabs.map((tab, index) => (
            <span
              key={tab}
              className={
                index === 0
                  ? "border-b-2 border-[#FF4B4B] pb-2 font-medium text-slate-800"
                  : "pb-2 text-slate-400"
              }
            >
              {tab}
            </span>
          ))}
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <DashboardCharts dashboard={dashboard} />
        </div>
      </div>
    </div>
  );
}

export function DashboardPreview({ dashboard }: { dashboard: ShowcaseDashboard }) {
  const [showLive, setShowLive] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-primary/25 bg-card shadow-glow">
      <div className="flex items-center gap-3 border-b border-border/70 bg-background/80 px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
        </div>
        <a
          href={dashboard.href}
          target="_blank"
          rel="noreferrer"
          className="min-w-0 truncate rounded-md border border-border/70 bg-muted/40 px-3 py-1 text-xs text-muted-foreground hover:text-primary"
        >
          {dashboard.href.replace(/\/$/, "")}
        </a>
        <a
          href={dashboard.href}
          target="_blank"
          rel="noreferrer"
          className="ml-auto inline-flex shrink-0 items-center gap-1 text-xs font-medium text-primary hover:underline"
        >
          Open live app <ExternalLink className="h-3 w-3" />
        </a>
      </div>

      {showLive ? (
        <iframe
          title={dashboard.title}
          src={dashboard.embedHref}
          className="h-[min(44rem,75vh)] w-full bg-white"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <a
          href={dashboard.href}
          target="_blank"
          rel="noreferrer"
          className="group relative block"
          aria-label={`Open the live ${dashboard.title} in a new tab`}
        >
          <DashboardVisual dashboard={dashboard} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100" />
          <span className="pointer-events-none absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-primary/40 bg-background/90 px-4 py-2 text-sm font-medium text-foreground opacity-0 shadow-glow-sm backdrop-blur-md transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            Open live dashboard <ExternalLink className="h-4 w-4" />
          </span>
        </a>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/70 bg-background/60 px-4 py-3">
        <p className="text-xs text-muted-foreground">
          {showLive
            ? "Live Streamlit embed. The cloud app may take a moment to wake."
            : "Static preview of the deployed app. Click the frame or open the live dashboard."}
        </p>
        <div className="flex flex-wrap gap-2">
          {showLive ? (
            <Button type="button" size="sm" variant="outline" onClick={() => setShowLive(false)}>
              Show preview
            </Button>
          ) : (
            <Button type="button" size="sm" variant="outline" onClick={() => setShowLive(true)}>
              <MonitorPlay /> Preview live here
            </Button>
          )}
          <Button asChild size="sm">
            <a href={dashboard.href} target="_blank" rel="noreferrer">
              Open live dashboard <ExternalLink />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
