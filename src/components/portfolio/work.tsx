import { StarDoodle } from "./doodles";

/* ---------- hand-built mini mockups (no screenshots — just CSS) ---------- */

function VesperMockup() {
  return (
    <div
      className="wobble-card overflow-hidden bg-[#f4ede1] shadow-[3px_4px_0_rgba(56,50,42,0.18)]"
      aria-hidden="true"
    >
      <div className="flex items-center gap-1.5 px-3.5 py-2 bg-[#eae1cf] border-b border-[#d8ccB2]">
        <span className="w-2 h-2 rounded-full bg-[#c9584a]" />
        <span className="w-2 h-2 rounded-full bg-[#d9a441]" />
        <span className="w-2 h-2 rounded-full bg-[#7c8b6f]" />
        <span className="ml-2 font-mono text-[10px] text-[#8a7c60]">
          vesper-studio.template
        </span>
      </div>
      <div className="p-4 sm:p-5 grid grid-cols-[1.1fr_0.9fr] gap-3 sm:gap-4 items-stretch">
        <div className="flex flex-col justify-center gap-2.5">
          <p className="font-display font-semibold text-[#3d362c] text-xl sm:text-2xl tracking-wide leading-none">
            VESPER
          </p>
          <p className="font-display italic text-[#8a7c60] text-[10px] sm:text-xs">
            luxury residences &amp; interiors
          </p>
          <div className="mt-2 space-y-1.5">
            <div className="h-1.5 w-[85%] bg-[#cbbfa2] rounded-full" />
            <div className="h-1.5 w-[70%] bg-[#cbbfa2] rounded-full" />
            <div className="h-1.5 w-[78%] bg-[#cbbfa2] rounded-full" />
          </div>
          <div className="mt-3 inline-flex w-fit border border-[#8a7c60] px-3 py-1 text-[9px] sm:text-[10px] font-mono text-[#6b5f48] tracking-widest">
            ENQUIRE
          </div>
        </div>
        <div className="relative min-h-[110px] sm:min-h-[140px]">
          {/* abstract "architecture photo" */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#d9cdb4] to-[#a49377]" />
          <div className="absolute left-2 bottom-0 w-8 sm:w-11 h-[70%] bg-[#6b5f48]/70" />
          <div className="absolute left-11 sm:left-16 bottom-0 w-5 sm:w-7 h-[52%] bg-[#8a7c60]/70" />
          <div className="absolute right-3 top-2 w-7 sm:w-10 h-7 sm:h-10 rounded-full bg-[#f4ede1]/80" />
        </div>
      </div>
    </div>
  );
}

function VidoraMockup() {
  return (
    <div
      className="wobble-card overflow-hidden bg-[#2b2620] shadow-[3px_4px_0_rgba(56,50,42,0.18)]"
      aria-hidden="true"
    >
      <div className="flex items-center gap-1.5 px-3.5 py-2 bg-[#221e19] border-b border-[#3c352c]">
        <span className="w-2 h-2 rounded-full bg-[#c9584a]" />
        <span className="w-2 h-2 rounded-full bg-[#d9a441]" />
        <span className="w-2 h-2 rounded-full bg-[#7c8b6f]" />
        <span className="ml-2 font-mono text-[10px] text-[#8a8070]">shhh…</span>
      </div>
      <div className="relative p-4 sm:p-5">
        {/* dimmed player */}
        <div className="relative h-[110px] sm:h-[140px] bg-gradient-to-br from-[#4a4238] to-[#2b2620] rounded-md overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#f6f1e5]/12 border-2 border-[#f6f1e5]/45 flex items-center justify-center backdrop-blur-[1px]">
              <div className="w-0 h-0 border-y-[7px] border-y-transparent border-l-[11px] border-l-[#f6f1e5]/80 ml-1" />
            </div>
          </div>
          {/* playbar */}
          <div className="absolute bottom-2.5 left-3 right-3">
            <div className="h-1 bg-[#f6f1e5]/20 rounded-full overflow-hidden">
              <div className="h-full w-[42%] bg-[#d9a441] rounded-full" />
            </div>
            <div className="flex justify-between mt-1.5">
              <div className="h-1 w-8 bg-[#f6f1e5]/25 rounded-full" />
              <div className="h-1 w-5 bg-[#f6f1e5]/25 rounded-full" />
            </div>
          </div>
          {/* the veil */}
          <div className="absolute inset-0 bg-[#2b2620]/55 flex items-center justify-center">
            <p className="font-display italic text-[#f6f1e5]/85 text-sm sm:text-base text-center px-4 leading-snug">
              under wraps until launch day
            </p>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="space-y-1.5">
            <div className="h-1.5 w-32 bg-[#57503f] rounded-full" />
            <div className="h-1.5 w-20 bg-[#3c352c] rounded-full" />
          </div>
          <span className="font-mono text-[10px] text-[#8a8070]">🔒 v2.12</span>
        </div>
      </div>
    </div>
  );
}

/* ---------- product cards ---------- */

const VESPER_FEATURES = [
  "lead capture + crm-ready enquiry forms",
  "showroom booking with a polished booking flow",
  "an ai design advisor wired to a live llm",
  "filterable portfolio with saved projects",
  "rebrand the whole thing from one file",
];

export default function Work() {
  return (
    <section id="work" className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
      <div className="rule-dash mb-12" aria-hidden="true" />

      <div className="flex items-end justify-between gap-4 mb-3">
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink tracking-tight">
          things i&rsquo;ve made
        </h2>
        <StarDoodle className="w-6 h-6 text-mustard mb-2 shrink-0" />
      </div>
      <p className="text-[15.5px] text-ink-soft max-w-2xl mb-12">
        two big projects, both full-stack, both built start-to-finish by one
        person (me). one is out in the world, one is stretching its wings
        backstage.
      </p>

      {/* --- Vesper: the detailed one --- */}
      <article className="grid md:grid-cols-2 gap-8 md:gap-10 items-center mb-16">
        <div className="relative">
          <div className="tape" />
          <VesperMockup />
        </div>
        <div>
          <p className="font-mono text-[12px] text-sage-deep tracking-wide">
            ✦ available now on codester
          </p>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink mt-1.5">
            Vesper — luxury studio template
          </h3>
          <p className="mt-3 text-[15.5px] leading-relaxed text-ink/90">
            a full-stack website template for architecture and interior-design
            studios. it looks like an editorial magazine and works like a real
            business tool — every form on the page is wired to a working
            backend, not a fake demo. rebranding is deliberately easy: copy,
            projects, services and branding all live in a single content file.
          </p>
          <ul className="mt-4 space-y-1.5">
            {VESPER_FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-2 text-[14.5px] text-ink/85">
                <span className="text-sage-deep mt-0.5" aria-hidden="true">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            {["next.js 16", "typescript", "llm-powered", "seo ready"].map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-secondary text-ink-soft"
              >
                {t}
              </span>
            ))}
          </div>
          <a
            href="https://www.codester.com/ryoshicode"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 wobble-sm bg-sage text-white px-5 py-2.5 text-[14.5px] font-bold hover:bg-sage-deep hover:rotate-1 transition-all"
          >
            view vesper on codester →
          </a>
        </div>
      </article>

      {/* --- Vidora: the teaser --- */}
      <article className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
        <div className="md:order-2 relative">
          <div className="tape tape-rust" />
          <VidoraMockup />
        </div>
        <div className="md:order-1">
          <p className="font-mono text-[12px] text-rust-deep tracking-wide">
            ✦ launching soon — details reserved
          </p>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink mt-1.5">
            Vidora — a self-hosted video platform
          </h3>
          <p className="mt-3 text-[15.5px] leading-relaxed text-ink/90">
            the biggest thing i&rsquo;ve built so far: a video platform that
            people can run entirely on their own machine. it&rsquo;s been
            through a lot of late nights, eleven minor versions, and more
            espresso than i&rsquo;d like to admit.
          </p>
          <p className="mt-3 text-[15.5px] leading-relaxed text-ink/90">
            i&rsquo;m keeping the feature list under my hat until it goes live
            on codester — partly for the surprise, mostly because i&rsquo;m
            still polishing it. want a nudge when it ships?{" "}
            <a href="#contact" className="link-warm font-semibold">
              write me
            </a>{" "}
            or{" "}
            <a href="#guestbook" className="link-warm font-semibold">
              sign the guestbook
            </a>{" "}
            and i&rsquo;ll make sure you hear first.
          </p>
          <div className="mt-5 wobble bg-linen p-4 inline-block -rotate-1">
            <p className="font-mono text-[12.5px] text-ink-soft leading-relaxed">
              <span className="text-rust-deep font-bold">status:</span> final
              polish · <span className="text-rust-deep font-bold">vibes:</span>{" "}
              cinema-mode · <span className="text-rust-deep font-bold">eta:</span>{" "}
              when it&rsquo;s ready ✓
            </p>
          </div>
        </div>
      </article>

      {/* --- small stuff --- */}
      <div className="mt-16">
        <p className="font-mono text-[13px] text-ink-soft mb-4">{"// plus the tiny experiments"}</p>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="wobble-2 bg-linen p-5 rotate-1">
            <p className="font-bold text-ink text-[15px]">this very website</p>
            <p className="text-[13.5px] text-ink-soft mt-1.5 leading-relaxed">
              built it myself, obviously — the guestbook and visitor experience
              are part of the demo you&rsquo;re looking at.
            </p>
          </div>
          <div className="wobble bg-linen p-5 -rotate-1">
            <p className="font-bold text-ink text-[15px]">small tools &amp; utils</p>
            <p className="text-[13.5px] text-ink-soft mt-1.5 leading-relaxed">
              scripts, helpers and mini-apps that make my own workflow
              lazier. a few may grow up and get listings of their own.
            </p>
          </div>
          <div className="wobble-2 bg-linen p-5 rotate-1">
            <p className="font-bold text-ink text-[15px]">custom work</p>
            <p className="text-[13.5px] text-ink-soft mt-1.5 leading-relaxed">
              need something tailored — a rebrand of vesper, a bespoke admin
              panel, a whole idea brought to life? my inbox is open.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
