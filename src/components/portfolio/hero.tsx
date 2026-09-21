"use client";

import { useEffect, useState } from "react";
import { SquiggleArrow, StarDoodle, CoffeeDoodle, PlantDoodle } from "./doodles";

const SCRIPT: Array<{ cmd: string; reply: string; tone: "rust" | "sage" | "mustard" }> = [
  { cmd: "whoami", reply: "ryo — solo fullstack dev & template maker on codester", tone: "rust" },
  { cmd: "cat today.txt", reply: "shipping things · coffee no.3 · playlist on shuffle", tone: "sage" },
  { cmd: "say hello", reply: "hi! thanks for scrolling this far :)", tone: "mustard" },
];

const TICK_MS = 38;

// the whole terminal is a PURE function of the tick count — nothing can desync
function deriveTerminal(tick: number) {
  let t = 0;
  const lines = SCRIPT.map((item) => {
    const cmdStart = t;
    const cmdEnd = cmdStart + item.cmd.length; // cmd fully typed at cmdEnd
    const replyStart = cmdEnd + 6; // beat between cmd and reply
    const replyEnd = replyStart + item.reply.length;
    t = replyEnd + 8; // pause before the next line appears
    return {
      item,
      cmdText: item.cmd.slice(
        0,
        Math.max(0, Math.min(item.cmd.length, tick - cmdStart))
      ),
      replyText: item.reply.slice(
        0,
        Math.max(0, Math.min(item.reply.length, tick - replyStart))
      ),
      showReply: tick >= replyStart,
    };
  });
  return { lines, total: t };
}

function totalTicks() {
  return deriveTerminal(Number.MAX_SAFE_INTEGER).total;
}

function DeskTerminal() {
  const [tick, setTick] = useState(0);
  const total = totalTicks();
  const done = tick >= total;
  const { lines } = deriveTerminal(tick);

  // single interval; stops itself once the script has fully played out
  useEffect(() => {
    if (done) return;
    const t = setInterval(() => setTick((v) => v + 1), TICK_MS);
    return () => clearInterval(t);
  }, [done]);

  return (
    <div className="wobble-card bg-ink text-[#f0e9da] shadow-[3px_4px_0_rgba(56,50,42,0.25)] overflow-hidden">
      {/* title bar */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[#57503f]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#c9584a]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#d9a441]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#7c8b6f]" />
        <span className="ml-2 text-[11px] font-mono text-[#a89e88]">
          ryo@desk ~/dev
        </span>
      </div>
      {/* body */}
      <div className="p-4 sm:p-5 font-mono text-[12.5px] sm:text-[13.5px] leading-relaxed min-h-[190px]">
        {lines.map(({ item, cmdText, replyText, showReply }) => {
          const cmdDone = cmdText.length >= item.cmd.length;
          const replyDone = replyText.length >= item.reply.length;
          return (
            <div key={item.cmd} className="mb-2.5 last:mb-0">
              <div>
                <span className="text-[#d9a441]">$ </span>
                <span>{cmdText}</span>
                {!cmdDone && (
                  <span className="caret-blink text-[#d9a441]">▍</span>
                )}
              </div>
              {showReply && (
                <div
                  className={
                    item.tone === "rust"
                      ? "text-[#e08560]"
                      : item.tone === "sage"
                        ? "text-[#a4b795]"
                        : "text-[#e5c47e]"
                  }
                >
                  {replyText}
                  {!replyDone && (
                    <span className="caret-blink text-[#d9a441]">▍</span>
                  )}
                </div>
              )}
            </div>
          );
        })}
        {done && (
          <div className="text-[#d9a441]">
            $ <span className="caret-blink">▍</span>
          </div>
        )}
      </div>
    </div>
  );
}

function VisitCounter() {
  return (
    <p className="text-[13px] text-ink-soft font-mono">
      static site · no visitor tracking · just vibes :)
    </p>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* floating background doodles */}
      <StarDoodle className="absolute left-[6%] top-24 w-6 h-6 text-mustard float-soft hidden sm:block" style={{ "--float-rot": "-8deg" } as React.CSSProperties} />
      <StarDoodle className="absolute right-[10%] top-40 w-4 h-4 text-rust/70 float-soft hidden sm:block" style={{ "--float-rot": "12deg", animationDelay: "1.2s" } as React.CSSProperties} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-14 grid md:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-12 items-center">
        {/* left: intro */}
        <div>
          <p className="font-mono text-[13px] text-ink-soft mb-4 flex items-center gap-2">
            <span className="w-6 h-px bg-ink-soft inline-block" />
            solo fullstack dev · codester seller
          </p>

          <h1 className="font-display font-bold text-[2.6rem] leading-[1.08] sm:text-6xl text-ink tracking-tight">
            hey, i&rsquo;m ryo.
            <br />
            i make software
            <br />
            that feels{" "}
            <span className="squiggle text-rust-deep italic">handmade</span>.
          </h1>

          <p className="mt-6 text-[17px] leading-relaxed text-ink-soft max-w-md">
            i write full-stack tools and templates the way i&rsquo;d want to buy
            them — honest features, readable code, and no mystery meat.
            everything is designed, coded and supported by one person. two of
            them are growing up over on{" "}
            <a
              href="https://www.codester.com/ryoshicode"
              target="_blank"
              rel="noopener noreferrer"
              className="link-warm font-semibold"
            >
              codester
            </a>
            .
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="wobble-sm bg-rust text-primary-foreground px-6 py-3 text-[15px] font-bold hover:bg-rust-deep hover:-rotate-1 transition-all inline-flex items-center gap-2"
            >
              see what i&rsquo;ve made
            </a>
            <a
              href="#contact"
              className="wobble-sm bg-linen px-6 py-3 text-[15px] font-bold text-ink hover:bg-accent hover:rotate-1 transition-all inline-flex items-center gap-2"
            >
              or just say hi
            </a>
            <SquiggleArrow className="hidden lg:block text-ink-soft -rotate-12" />
          </div>

          <div className="mt-8">
            <VisitCounter />
          </div>
        </div>

        {/* right: desk corner — terminal + desk doodles */}
        <div className="relative">
          <div className="tape tape-sage" />
          <DeskTerminal />
          <div className="flex items-end justify-between mt-5 px-2">
            <PlantDoodle className="text-ink float-soft" style={{ "--float-rot": "2deg" } as React.CSSProperties} />
            <p className="text-[12px] text-ink-soft font-mono text-right max-w-[220px]">
              my desk, in spirit. the plant is plastic but the code is real.
            </p>
            <CoffeeDoodle className="text-ink float-soft" style={{ "--float-rot": "-3deg", animationDelay: "0.8s" } as React.CSSProperties} />
          </div>
        </div>
      </div>
    </section>
  );
}
