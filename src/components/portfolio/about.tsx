import { SmileDoodle, KeyboardDoodle } from "./doodles";

const SKILLS = [
  { label: "next.js", tone: "bg-rust/15 text-rust-deep border-rust/50" },
  { label: "typescript", tone: "bg-mustard/20 text-[#8a6414] border-mustard/70" },
  { label: "node & bun", tone: "bg-sage/20 text-sage-deep border-sage/60" },
    { label: "tailwind css", tone: "bg-sage/15 text-sage-deep border-sage/50" },
  { label: "socket.io / realtime", tone: "bg-rust/10 text-rust-deep border-rust/40" },
  { label: "auth & payments", tone: "bg-mustard/15 text-[#8a6414] border-mustard/60" },
  { label: "docker & self-hosting", tone: "bg-clay/20 text-[#8a5231] border-clay/60" },
];

const CURRENTLY = [
  { k: "building", v: "a small update queue for my codester listings" },
  { k: "polishing", v: "a video platform that's almost ready to meet the world" },
  { k: "reading", v: "refactoring-ui, again. it keeps humbling me" },
  { k: "drinking", v: "barako coffee, third cup, no regrets" },
];

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
      <div className="rule-dash mb-12" aria-hidden="true" />

      <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-start">
        {/* little portrait placeholder — a wobbly frame with a doodle face */}
        <div className="relative mx-auto md:mx-0 md:sticky md:top-24">
          <div className="wobble-2 bg-linen w-44 h-44 sm:w-52 sm:h-52 flex flex-col items-center justify-center gap-3 -rotate-2">
            <SmileDoodle className="w-12 h-12 text-ink" />
            <span className="font-mono text-[11px] text-ink-soft">[ no photo yet —</span>
            <span className="font-mono text-[11px] text-ink-soft -mt-1.5">i&rsquo;m the camera shy type ]</span>
          </div>
          <KeyboardDoodle className="absolute -bottom-6 -right-8 text-ink rotate-6" />
        </div>

        <div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink tracking-tight">
            a little about me
          </h2>

          <div className="mt-6 space-y-4 text-[16.5px] leading-relaxed text-ink/90 max-w-2xl">
            <p>
              i&rsquo;m ryoshicode on codester — a solo developer who likes
              building complete, honest software: the kind where the admin
              panel actually works, the docs actually help, and the demo
              isn&rsquo;t hiding anything. i&rsquo;ve been writing code for a
              while now, and somewhere along the way i fell in love with the
              whole loop of it — designing the thing, building the thing, then
              fixing the thing at 2am because i found a bug while showing it to
              a friend.
            </p>
            <p>
              most of my work is full-stack web stuff with next.js and
              typescript, with simple architecture and whatever backend fits the project. i
              care a lot about the unglamorous parts: clean schemas, readable
              code, graceful errors, and setup instructions that don&rsquo;t
              assume you were born in a terminal. if i wouldn&rsquo;t want to
              inherit the codebase myself, i won&rsquo;t ship it to you.
            </p>
            <p>
              when i&rsquo;m not coding, i&rsquo;m probably hunting down a good
              coffee spot, sketching interface ideas that may never exist, or
              rearranging my dotfiles for the third time this month. this page
              is my little porch on the internet — kick your shoes off, flip
              through the work below, and sign the guestbook on your way out.
            </p>
          </div>

          {/* skill stickers */}
          <div className="mt-8">
            <p className="font-mono text-[13px] text-ink-soft mb-3">{"// tools i reach for"}</p>
            <ul className="flex flex-wrap gap-2.5" aria-label="skills">
              {SKILLS.map((s) => (
                <li
                  key={s.label}
                  className={`wobble-sm ${s.tone} bg-linen px-3.5 py-1.5 text-[13.5px] font-bold select-none`}
                  style={{
                    transform: `rotate(${(s.label.length % 5) - 2}deg)`,
                  }}
                >
                  {s.label}
                </li>
              ))}
            </ul>
          </div>

          {/* currently */}
          <div className="mt-8 wobble bg-linen p-5 max-w-2xl">
            <p className="font-mono text-[13px] text-ink-soft mb-3">{"// currently"}</p>
            <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {CURRENTLY.map((c) => (
                <div key={c.k} className="text-[14.5px] leading-snug">
                  <dt className="inline font-bold text-rust-deep">{c.k}: </dt>
                  <dd className="inline text-ink/85">{c.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
