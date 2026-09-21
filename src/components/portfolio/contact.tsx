import { SmileDoodle } from "./doodles";

const EMAIL = "ryoshicodeofficial@gmail.com";
const CODESTER_URL = "https://www.codester.com/ryoshicode";

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
      <div className="rule-dash mb-12" aria-hidden="true" />

      <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink tracking-tight">
        say hi
      </h2>
      <p className="mt-4 text-[16px] leading-relaxed text-ink-soft max-w-2xl">
        want to talk about a project, template, collaboration, bug report, or just say hello?
        just visit my Codester profile or email me directly.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-8 md:gap-10 items-start">
        <div className="space-y-5">
          <div className="wobble bg-linen p-5 sm:p-6">
            <p className="font-mono text-[12px] text-ink-soft mb-2">{"// visit my codester"}</p>
            <a
              href={CODESTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[16px] sm:text-[17px] font-bold text-ink link-warm"
            >
              codester.com/ryoshicode →
            </a>
            <p className="mt-2 text-[14px] text-ink-soft leading-relaxed">
              find my templates, tools, updates, reviews, and project details there.
            </p>
          </div>

          <div className="wobble-2 bg-linen p-5 sm:p-6">
            <p className="font-mono text-[12px] text-ink-soft mb-2">{"// or email me"}</p>
            <a
              href={`mailto:${EMAIL}`}
              className="text-[16px] sm:text-[17px] font-bold text-ink link-warm break-all"
            >
              {EMAIL}
            </a>
            <p className="mt-2 text-[14px] text-ink-soft leading-relaxed">
              send me an email directly if you want to get in touch.
            </p>
          </div>

          <div className="flex items-center gap-3 px-1">
            <SmileDoodle className="w-6 h-6 text-mustard shrink-0" />
            <p className="text-[13.5px] text-ink-soft leading-snug">
              good topics: self-hosting, template rebrands, custom projects, or just a hello.
            </p>
          </div>
        </div>

        <div className="tape tape-sage relative">
          <div className="wobble bg-linen p-8 sm:p-10 text-center">
            <p className="text-4xl" aria-hidden="true">✉️</p>
            <p className="font-display font-bold text-2xl text-ink mt-3">
              no contact form needed :)
            </p>
            <p className="mt-3 text-[15px] text-ink-soft leading-relaxed">
              just visit my Codester profile or email me directly.
              <br />
              simple, quick, and straight to the point.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href={CODESTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="wobble-sm bg-rust text-primary-foreground px-5 py-2.5 text-[14px] font-bold hover:bg-rust-deep hover:-rotate-1 transition-all"
              >
                visit my codester →
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="wobble-sm bg-secondary hover:bg-accent px-5 py-2.5 text-[14px] font-bold text-ink transition-colors"
              >
                email me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
