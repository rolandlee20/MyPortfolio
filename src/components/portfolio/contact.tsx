"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { SmileDoodle } from "./doodles";

const EMAIL = "ryoshicodeofficial@gmail.com";
const CODESTER_URL = "https://www.codester.com/ryoshicode";

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      toast({
        title: "email copied",
        description: "it's on your clipboard — write anytime.",
      });
    } catch {
      // clipboard can be blocked; fall back to just showing the toast
      toast({ title: "couldn't auto-copy", description: "but it's right there — select & copy :)" });
    }
  }

  function send(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const subject = `Portfolio message from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    try {
      window.location.href = mailto;
      setSent(true);
      toast({
        title: "opening your mail app",
        description: "your message is ready to send — just hit send there.",
      });
    } catch {
      setError(`couldn't open your mail app. email me directly at ${EMAIL}.`);
    }
  }

  return (
    <section id="contact" className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
      <div className="rule-dash mb-12" aria-hidden="true" />

      <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink tracking-tight">
        say hi
      </h2>
      <p className="mt-4 text-[16px] leading-relaxed text-ink-soft max-w-2xl">
        template questions, custom work, bug reports with screenshots (my
        favorite genre), collaboration ideas, or just a hello — it all lands in
        my inbox and i read every single one. usually reply within a day or
        two, faster if the coffee is strong.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-8 md:gap-10 items-start">
        {/* left: direct channels */}
        <div className="space-y-5">
          <div className="wobble bg-linen p-5 sm:p-6">
            <p className="font-mono text-[12px] text-ink-soft mb-2">{"// the direct line"}</p>
            <a
              href={`mailto:${EMAIL}`}
              className="text-[16px] sm:text-[17px] font-bold text-ink link-warm break-all"
            >
              {EMAIL}
            </a>
            <button
              onClick={copyEmail}
              className="mt-3 block wobble-sm bg-secondary hover:bg-accent px-4 py-2 text-[13.5px] font-bold text-ink transition-colors"
            >
              copy my email
            </button>
          </div>

          <div className="wobble-2 bg-linen p-5 sm:p-6">
            <p className="font-mono text-[12px] text-ink-soft mb-2">{"// where i sell"}</p>
            <a
              href={CODESTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[16px] sm:text-[17px] font-bold text-ink link-warm"
            >
              codester.com/ryoshicode →
            </a>
            <p className="mt-2 text-[14px] text-ink-soft leading-relaxed">
              all my templates &amp; tools live there. reviews, changelogs and
              license details included — no surprises after purchase, promise.
            </p>
          </div>

          <div className="flex items-center gap-3 px-1">
            <SmileDoodle className="w-6 h-6 text-mustard shrink-0" />
            <p className="text-[13.5px] text-ink-soft leading-snug">
              good topics: self-hosting, template rebrands, coffee beans, why
              your checkout form hates you.
            </p>
          </div>
        </div>

        {/* right: the letter form */}
        <div className="tape tape-sage relative">
          {sent ? (
            <div className="wobble bg-linen p-8 text-center">
              <p className="text-4xl" aria-hidden="true">📮</p>
              <p className="font-display font-bold text-2xl text-ink mt-3">
                ready to send!
              </p>
              <p className="mt-2 text-[15px] text-ink-soft leading-relaxed">
                your email app should be open with everything filled in. hit send
                there, and i&rsquo;ll get back to you soon. in the meantime, the
                guestbook is right upstairs.
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  setForm({ name: "", email: "", message: "" });
                }}
                className="mt-5 wobble-sm bg-secondary hover:bg-accent px-5 py-2 text-[14px] font-bold text-ink transition-colors"
              >
                write another
              </button>
            </div>
          ) : (
            <form onSubmit={send} className="wobble bg-linen p-5 sm:p-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="c-name" className="block font-mono text-[12px] text-ink-soft mb-1.5">
                    your name
                  </label>
                  <input
                    id="c-name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    maxLength={80}
                    required
                    className="w-full bg-card border border-input rounded-md px-3.5 py-2.5 text-[15px] text-ink focus:outline-none focus:ring-2 focus:ring-rust/40 focus:border-rust transition"
                  />
                </div>
                <div>
                  <label htmlFor="c-email" className="block font-mono text-[12px] text-ink-soft mb-1.5">
                    your email
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    maxLength={160}
                    required
                    className="w-full bg-card border border-input rounded-md px-3.5 py-2.5 text-[15px] text-ink focus:outline-none focus:ring-2 focus:ring-rust/40 focus:border-rust transition"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="c-msg" className="block font-mono text-[12px] text-ink-soft mb-1.5">
                  what&rsquo;s on your mind?
                </label>
                <textarea
                  id="c-msg"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  maxLength={2000}
                  rows={5}
                  required
                  placeholder="be as detailed as you like — i actually read these"
                  className="w-full bg-card border border-input rounded-md px-3.5 py-2.5 text-[15px] text-ink placeholder:text-ink-soft/50 resize-none focus:outline-none focus:ring-2 focus:ring-rust/40 focus:border-rust transition"
                />
              </div>

              {error && (
                <p role="alert" className="text-[14px] text-destructive">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="wobble-sm bg-rust text-primary-foreground px-6 py-2.5 text-[15px] font-bold hover:bg-rust-deep hover:-rotate-1 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                send it my way
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
