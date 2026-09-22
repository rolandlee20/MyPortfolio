import { StarDoodle } from "./doodles";

const VESPER_FEATURES = [
  "lead capture with CRM-ready enquiry fields",
  "showroom booking with weekday calendar + time slots",
  "LLM-powered design advisor grounded in site content",
  "searchable / filterable project portfolio with saved work",
  "single-file content architecture for fast rebranding",
];

const VESPER_STACK = [
  "next.js 16",
  "typescript 5",
  "tailwind css 4",
  "prisma 6",
  "sqlite → postgres",
  "zod 4",
  "react hook form",
  "framer motion",
];

const VESPER_BUILD_NOTES = [
  {
    file: "src/lib/site-data.ts",
    label: "content source",
    detail: "Projects, services, testimonials, FAQs and company details are centralized here so a buyer can rebrand the template without hunting through components.",
  },
  {
    file: "prisma/schema.prisma",
    label: "data model",
    detail: "Enquiries, showroom appointments and newsletter subscriptions are modeled as real persisted records rather than fake front-end state.",
  },
  {
    file: "src/app/api/*",
    label: "backend routes",
    detail: "The template exposes dedicated endpoints for enquiries, appointments, subscriptions and the design advisor, with schema validation and error handling.",
  },
  {
    file: "src/app/api/advisor/route.ts",
    label: "ai layer",
    detail: "The design advisor builds its knowledge context from the same site data, keeping the chat aligned with the content a studio is actually presenting.",
  },
];

function BrowserChrome({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-1.5 px-3.5 py-2 bg-[#eae1cf] border-b border-[#d8ccb2]">
      <span className="w-2 h-2 rounded-full bg-[#c9584a]" />
      <span className="w-2 h-2 rounded-full bg-[#d9a441]" />
      <span className="w-2 h-2 rounded-full bg-[#7c8b6f]" />
      <span className="ml-2 font-mono text-[10px] text-[#8a7c60] truncate">{label}</span>
    </div>
  );
}

function VesperHeroMockup() {
  return (
    <div className="wobble-card overflow-hidden bg-[#f4ede1] shadow-[3px_4px_0_rgba(56,50,42,0.18)]">
      <BrowserChrome label="vesper — studio home" />
      <div className="relative aspect-[1.55] overflow-hidden bg-[#7d705c]">
        <img
          src="./projects/vesper/hero.jpg"
          alt="Vesper architecture template hero"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#211d18]/75 via-transparent to-[#211d18]/10" />
        <div className="absolute left-4 sm:left-6 bottom-4 sm:bottom-6 right-4 sm:right-6 text-[#fbf6ed]">
          <p className="font-mono text-[9px] sm:text-[10px] tracking-[0.18em] uppercase opacity-80">luxury residential / interiors</p>
          <p className="mt-1 font-display text-2xl sm:text-4xl leading-none">quiet spaces. lasting work.</p>
        </div>
      </div>
    </div>
  );
}

function VesperDetailThumb({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <div className="group relative overflow-hidden wobble-sm bg-[#eae1cf] aspect-[1.15]">
      <img src={src} alt={alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-x-2 bottom-2 px-2.5 py-1.5 bg-[#fdf9ef]/92 font-mono text-[9px] sm:text-[10px] text-ink truncate">
        {label}
      </div>
    </div>
  );
}

function VidoraMockup() {
  return (
    <div className="wobble-card overflow-hidden bg-[#2b2620] shadow-[3px_4px_0_rgba(56,50,42,0.18)]">
      <div className="flex items-center gap-1.5 px-3.5 py-2 bg-[#221e19] border-b border-[#3c352c]">
        <span className="w-2 h-2 rounded-full bg-[#c9584a]" />
        <span className="w-2 h-2 rounded-full bg-[#d9a441]" />
        <span className="w-2 h-2 rounded-full bg-[#7c8b6f]" />
        <span className="ml-2 font-mono text-[10px] text-[#8a8070]">commercial build / sealed</span>
      </div>
      <div className="relative p-4 sm:p-5">
        <div className="relative aspect-[1.55] bg-gradient-to-br from-[#4a4238] to-[#2b2620] rounded-md overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-[#f6f1e5]/10 border-2 border-[#f6f1e5]/40 flex items-center justify-center backdrop-blur-[1px]">
              <div className="w-0 h-0 border-y-[7px] border-y-transparent border-l-[11px] border-l-[#f6f1e5]/75 ml-1" />
            </div>
          </div>
          <div className="absolute left-3 right-3 bottom-3 space-y-1.5">
            <div className="h-1 bg-[#f6f1e5]/16 rounded-full overflow-hidden"><div className="h-full w-[44%] bg-[#d9a441] rounded-full" /></div>
            <div className="flex items-center justify-between">
              <div className="h-1 w-8 bg-[#f6f1e5]/20 rounded-full" />
              <div className="h-1 w-5 bg-[#f6f1e5]/20 rounded-full" />
            </div>
          </div>
          <div className="absolute inset-0 bg-[#2b2620]/54 flex items-center justify-center px-5 text-center">
            <div>
              <p className="font-display italic text-[#f6f1e5]/88 text-sm sm:text-base leading-snug">commercial source stays off the shelf</p>
              <p className="mt-2 font-mono text-[9px] sm:text-[10px] tracking-[0.16em] uppercase text-[#cfc3ad]/70">product preview only</p>
            </div>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {[
            "self-hosted",
            "creator tools",
            "live + realtime",
            "player QoL",
          ].map((item) => (
            <span key={item} className="font-mono text-[9.5px] px-2 py-1 rounded-full border border-[#57503f] text-[#bdb09b]">{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function CodePath({ file, label, detail }: { file: string; label: string; detail: string }) {
  return (
    <div className="wobble bg-linen p-4 sm:p-5">
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <span className="font-mono text-[10px] sm:text-[11px] text-rust-deep font-bold">{label}</span>
        <span className="font-mono text-[10px] sm:text-[11px] text-ink-soft">·</span>
        <code className="font-mono text-[10px] sm:text-[11px] text-ink/80 break-all">{file}</code>
      </div>
      <p className="mt-2 text-[13px] sm:text-[13.5px] leading-relaxed text-ink/80">{detail}</p>
    </div>
  );
}

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
        not just screenshots. these are the actual builds behind the portfolio —
        with the useful parts left visible and the sellable parts kept under wraps.
      </p>

      <article className="relative mb-16 sm:mb-20">
        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-8 lg:gap-10 items-start">
          <div className="relative">
            <div className="tape" />
            <VesperHeroMockup />
            <div className="grid grid-cols-2 gap-3 mt-4">
              <VesperDetailThumb src="./projects/vesper/project-palmbeach.jpg" alt="Vesper project page image" label="project / editorial case study" />
              <VesperDetailThumb src="./projects/vesper/showroom.jpg" alt="Vesper showroom image" label="showroom / booking experience" />
            </div>
          </div>

          <div>
            <p className="font-mono text-[12px] text-sage-deep tracking-wide">✦ available now on codester</p>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink mt-1.5">
              Vesper — luxury studio template
            </h3>
            <p className="mt-3 text-[15.5px] leading-relaxed text-ink/90">
              a production-minded full-stack template for architecture and interior-design studios.
              the front end sells the visual story, while the backend handles the boring-but-important
              business work underneath it.
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
              {VESPER_STACK.map((t) => (
                <span key={t} className="font-mono text-[10.5px] px-2.5 py-1 rounded-full bg-secondary text-ink-soft">{t}</span>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-2.5 max-w-md">
              <div className="wobble-sm bg-linen p-3 text-center">
                <p className="font-display text-xl font-bold text-ink">4</p>
                <p className="font-mono text-[9.5px] text-ink-soft">backend routes</p>
              </div>
              <div className="wobble bg-linen p-3 text-center rotate-1">
                <p className="font-display text-xl font-bold text-ink">3</p>
                <p className="font-mono text-[9.5px] text-ink-soft">db models</p>
              </div>
              <div className="wobble-2 bg-linen p-3 text-center -rotate-1">
                <p className="font-display text-xl font-bold text-ink">1</p>
                <p className="font-mono text-[9.5px] text-ink-soft">content source</p>
              </div>
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
        </div>

        <div className="mt-8 sm:mt-10">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div>
              <p className="font-mono text-[12px] text-ink-soft">// proof from the actual source</p>
              <h4 className="font-display font-bold text-xl sm:text-2xl text-ink mt-1">under the hood</h4>
            </div>
            <span className="hidden sm:inline-flex font-mono text-[10px] px-2.5 py-1 rounded-full bg-secondary text-ink-soft">no secret sauce pasted here :)</span>
          </div>
          <div className="grid md:grid-cols-2 gap-3.5">
            {VESPER_BUILD_NOTES.map((note) => (
              <div key={note.file}>
                <CodePath file={note.file} label={note.label} detail={note.detail} />
              </div>
            ))}
          </div>
          <p className="mt-3 text-[12.5px] leading-relaxed text-ink-soft max-w-3xl">
            the point isn&rsquo;t to turn this page into a code dump. it&rsquo;s to show that the nice visuals
            are backed by real structure: validated forms, persisted data, dedicated endpoints and a
            content model designed for handoff.
          </p>
        </div>
      </article>

      <article className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
        <div className="md:order-2 relative">
          <div className="tape tape-rust" />
          <VidoraMockup />
        </div>
        <div className="md:order-1">
          <p className="font-mono text-[12px] text-rust-deep tracking-wide">✦ commercial build — details reserved</p>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink mt-1.5">
            Vidora — a self-hosted video platform
          </h3>
          <p className="mt-3 text-[15.5px] leading-relaxed text-ink/90">
            the larger, more ambitious build: a self-hosted video product shaped around the things i
            actually wanted from a modern media app. it covers the viewer side, creator side and the
            real-time side as one product instead of a pile of disconnected demos.
          </p>
          <div className="mt-5 grid sm:grid-cols-2 gap-2.5">
            {[
              "viewer + creator experience",
              "self-hosted deployment",
              "offline library + downloads",
              "live / realtime workflows",
              "deep playback controls",
              "multiple interface themes",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-[13.5px] text-ink/82">
                <span className="text-rust-deep mt-0.5" aria-hidden="true">✦</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 wobble bg-linen p-4 inline-block -rotate-1">
            <p className="font-mono text-[12px] text-ink-soft leading-relaxed">
              <span className="text-rust-deep font-bold">source:</span> private commercial build · <span className="text-rust-deep font-bold">public:</span> product-level details only
            </p>
          </div>
        </div>
      </article>

      <div className="mt-16">
        <p className="font-mono text-[13px] text-ink-soft mb-4">{"// plus the tiny experiments"}</p>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="wobble-2 bg-linen p-5 rotate-1">
            <p className="font-bold text-ink text-[15px]">this very website</p>
            <p className="text-[13.5px] text-ink-soft mt-1.5 leading-relaxed">
              built it myself, obviously — static hosting, a hand-drawn visual system, and the guestbook / visitor experience you&rsquo;re using right now.
            </p>
          </div>
          <div className="wobble bg-linen p-5 -rotate-1">
            <p className="font-bold text-ink text-[15px]">small tools &amp; utils</p>
            <p className="text-[13.5px] text-ink-soft mt-1.5 leading-relaxed">
              scripts, helpers and mini-apps that make my own workflow lazier. a few may grow up and get listings of their own.
            </p>
          </div>
          <div className="wobble-2 bg-linen p-5 rotate-1">
            <p className="font-bold text-ink text-[15px]">custom work</p>
            <p className="text-[13.5px] text-ink-soft mt-1.5 leading-relaxed">
              need something tailored — a rebrand, a bespoke admin panel, or a whole idea brought to life? my inbox is open.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
