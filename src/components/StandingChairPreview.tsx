import { useState } from "react";
import { ExternalLink, MonitorPlay, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { saasProjects } from "@/data/site";

const product = saasProjects[0];

function MarketplaceVisual() {
  return (
    <div className="bg-[#F7F3EE] text-left text-slate-800">
      <div className="flex items-center justify-between border-b border-stone-200 bg-white px-4 py-3">
        <p className="text-sm font-semibold tracking-tight">{product.title}</p>
        <div className="hidden gap-4 text-[11px] text-slate-500 sm:flex">
          <span>Marketplace</span>
          <span>Shops</span>
          <span className="font-medium text-emerald-700">Demo</span>
          <span>Provider</span>
          <span>Owner</span>
        </div>
        <span className="rounded-full bg-emerald-700 px-3 py-1 text-[11px] font-medium text-white">Book Now</span>
      </div>

      <div className="px-4 py-5 sm:px-6">
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-emerald-800">
          Beauty & wellness booking, simplified
        </p>
        <p className="mt-2 text-lg font-semibold sm:text-xl">Find your next appointment</p>
        <p className="mt-1 max-w-xl text-[12px] text-slate-500">
          Discover studios, salons, and spas, view their services, and book in under a minute.
        </p>

        <div className="mt-4 flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-2 text-[12px] text-slate-400 shadow-sm">
          <Search className="h-3.5 w-3.5" />
          Search shops, services, or a city
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {product.categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-stone-200 bg-white px-2.5 py-1 text-[10px] text-slate-600"
            >
              {category}
            </span>
          ))}
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            { name: "Northside Barber", service: "Haircut · 45 min", slot: "Today 2:30 PM" },
            { name: "Lumen Nails", service: "Gel set · 75 min", slot: "Tomorrow 11:00 AM" },
            { name: "Cedar Spa", service: "Deep tissue · 60 min", slot: "Fri 4:15 PM" },
          ].map((shop) => (
            <div key={shop.name} className="rounded-xl border border-stone-200 bg-white p-3 shadow-sm">
              <div className="h-16 rounded-lg bg-gradient-to-br from-emerald-100 via-stone-100 to-amber-100" />
              <p className="mt-2 text-sm font-semibold">{shop.name}</p>
              <p className="text-[11px] text-slate-500">{shop.service}</p>
              <p className="mt-2 text-[11px] font-medium text-emerald-800">{shop.slot}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-3 rounded-xl border border-stone-200 bg-white p-3 sm:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-medium text-slate-500">Choose a time</p>
            <div className="mt-2 grid grid-cols-4 gap-1.5 text-center text-[10px]">
              {["9:00", "9:45", "11:00", "1:15", "2:30", "4:00", "5:20", "6:10"].map((slot, index) => (
                <span
                  key={slot}
                  className={
                    index === 4
                      ? "rounded-md bg-emerald-700 px-1 py-1.5 font-medium text-white"
                      : "rounded-md border border-stone-200 px-1 py-1.5 text-slate-600"
                  }
                >
                  {slot}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-lg bg-stone-50 p-3">
            <p className="text-[11px] font-medium text-slate-500">Checkout</p>
            <p className="mt-1 text-sm font-semibold">Deep tissue · Cedar Spa</p>
            <p className="mt-1 text-[11px] text-slate-500">Fri 4:15 PM · prepaid deposit</p>
            <span className="mt-3 inline-flex rounded-full bg-emerald-700 px-3 py-1 text-[11px] font-medium text-white">
              Confirm booking
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function StandingChairPreview() {
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
          href={product.href}
          target="_blank"
          rel="noreferrer"
          className="min-w-0 truncate rounded-md border border-border/70 bg-muted/40 px-3 py-1 text-xs text-muted-foreground hover:text-primary"
        >
          {product.href.replace(/\/$/, "")}
        </a>
        <a
          href={product.href}
          target="_blank"
          rel="noreferrer"
          className="ml-auto inline-flex shrink-0 items-center gap-1 text-xs font-medium text-primary hover:underline"
        >
          Open live app <ExternalLink className="h-3 w-3" />
        </a>
      </div>

      {showLive ? (
        <iframe
          title={product.title}
          src={product.embedHref}
          className="h-[min(44rem,75vh)] w-full bg-white"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <a
          href={product.href}
          target="_blank"
          rel="noreferrer"
          className="group relative block"
          aria-label={`Open the live ${product.title} app in a new tab`}
        >
          <MarketplaceVisual />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100" />
          <span className="pointer-events-none absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-primary/40 bg-background/90 px-4 py-2 text-sm font-medium text-foreground opacity-0 shadow-glow-sm backdrop-blur-md transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            Open live app <ExternalLink className="h-4 w-4" />
          </span>
        </a>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/70 bg-background/60 px-4 py-3">
        <p className="text-xs text-muted-foreground">
          {showLive
            ? "Live embed of The Standing Chair. The app may take a moment to load."
            : "Product demo of search, categories, shop cards, and prepaid checkout. Open the live app to book or list a shop."}
        </p>
        <div className="flex flex-wrap gap-2">
          {showLive ? (
            <Button type="button" size="sm" variant="outline" onClick={() => setShowLive(false)}>
              Show demo
            </Button>
          ) : (
            <Button type="button" size="sm" variant="outline" onClick={() => setShowLive(true)}>
              <MonitorPlay /> Preview live here
            </Button>
          )}
          <Button asChild size="sm">
            <a href={product.href} target="_blank" rel="noreferrer">
              Open live app <ExternalLink />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
