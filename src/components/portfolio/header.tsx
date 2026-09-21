"use client";

import { useEffect, useState } from "react";
import { StarDoodle } from "./doodles";

const NAV = [
  { href: "#about", label: "about" },
  { href: "#work", label: "work" },
  { href: "#guestbook", label: "guestbook" },
  { href: "#contact", label: "say hi" },
];

function formatManilaTime(d: Date) {
  return new Intl.DateTimeFormat("en-PH", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Manila",
  }).format(d);
}

export default function SiteHeader() {
  const [time, setTime] = useState<string>("");

  // live clock in my timezone — a small "real person is behind this" signal
  useEffect(() => {
    const tick = () => setTime(formatManilaTime(new Date()));
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-paper/85 backdrop-blur-sm border-b border-creamline">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        <a
          href="#top"
          className="flex items-center gap-2 font-display font-bold text-lg tracking-tight text-ink hover:text-rust transition-colors"
        >
          <StarDoodle className="w-4.5 h-4.5 text-mustard" />
          ryoshicode
        </a>

        <nav aria-label="main" className="flex items-center gap-0.5 sm:gap-1 lg:gap-2">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-2 sm:px-3 py-2 text-[13.5px] sm:text-[15px] text-ink-soft hover:text-rust hover:bg-accent/60 transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <span
          className="hidden md:inline-flex items-center gap-1.5 text-[13px] text-ink-soft font-mono"
          title="it's late-night-build hours here, most of the time"
        >
          <span className="w-2 h-2 rounded-full bg-sage inline-block" />
          my time · {time || "…"}
        </span>
      </div>
    </header>
  );
}
