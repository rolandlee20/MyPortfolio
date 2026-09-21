"use client";

import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { HeartDoodle } from "./doodles";

type Entry = {
  id: string;
  name: string;
  message: string;
  noteColor: string;
  createdAt: string;
};

const NOTE_STYLES: Record<string, string> = {
  paper: "bg-[#fffdf6]",
  rust: "bg-[#f5ddcf]",
  sage: "bg-[#e4e9da]",
  mustard: "bg-[#f6e8c4]",
};

const COLOR_CHOICES = [
  { key: "paper", label: "plain", cls: "bg-[#fffdf6]" },
  { key: "rust", label: "terracotta", cls: "bg-[#f5ddcf]" },
  { key: "sage", label: "sage", cls: "bg-[#e4e9da]" },
  { key: "mustard", label: "mustard", cls: "bg-[#f6e8c4]" },
];

const STARTER_ENTRIES: Entry[] = [
  {
    id: "starter-1",
    name: "ryo",
    message: "welcome to my little corner of the internet :) thanks for stopping by — feel free to say hi!",
    noteColor: "rust",
    createdAt: "2026-01-01T00:00:00.000Z",
  },
  {
    id: "starter-2",
    name: "a lurker",
    message: "stumbled in from your codester profile. the vibe here is nice. good luck with the launches!",
    noteColor: "mustard",
    createdAt: "2026-01-02T00:00:00.000Z",
  },
  {
    id: "starter-3",
    name: "anon visitor",
    message: "found this through your codester profile. subscribing to updates :)",
    noteColor: "paper",
    createdAt: "2026-01-03T00:00:00.000Z",
  },
];


function timeAgo(iso: string) {
  const s = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  if (s < 60) return "just now";
  if (s < 3600) return `${Math.floor(s / 60)}m ago`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  if (s < 86400 * 30) return `${Math.floor(s / 86400)}d ago`;
  return new Date(iso).toLocaleDateString("en-PH", { month: "short", day: "numeric" });
}

function rotationFor(i: number) {
  // deterministic slightly-crooked rotations so the wall feels pinned by hand
  return [-2.2, 1.6, -1.2, 2.4, -1.8, 1.2, -2.6, 2][i % 8];
}

function NoteSkeleton() {
  return (
    <div className="animate-pulse rounded-sm bg-secondary/80 h-32" />
  );
}

export default function Guestbook() {
  const { toast } = useToast();
  const [entries, setEntries] = useState<Entry[] | null>(null);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("paper");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("ryoshicode-guestbook");
      setEntries(saved ? JSON.parse(saved) : STARTER_ENTRIES);
    } catch {
      setEntries(STARTER_ENTRIES);
    }
  }, []);

  async function sign(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (sending) return;

    const cleanName = name.trim();
    const cleanMessage = message.trim();

    if (!cleanName || !cleanMessage) {
      setError("please add your name and a note first.");
      return;
    }

    setSending(true);

    try {
      const entry: Entry = {
        id: crypto.randomUUID(),
        name: cleanName.slice(0, 40),
        message: cleanMessage.slice(0, 280),
        noteColor: color,
        createdAt: new Date().toISOString(),
      };

      const nextEntries = [entry, ...(entries ?? STARTER_ENTRIES)];
      localStorage.setItem("ryoshicode-guestbook", JSON.stringify(nextEntries));
      setEntries(nextEntries);
      setName("");
      setMessage("");

      toast({
        title: "you're on the wall!",
        description: "saved in this browser — thanks for signing :)",
      });
    } catch {
      setError("couldn't save the note in this browser — try again?");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="guestbook" className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
      <div className="rule-dash mb-12" aria-hidden="true" />

      <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-12 items-start">
        {/* left: pitch + form */}
        <div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink tracking-tight">
            the guestbook
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">
            every visitor used to leave a comment on old-school personal
            sites, and honestly? we lost something good. bring it back —
            leave a note, a hello, a bug report, a haiku about coffee. it
            gets saved in your browser and pinned to this wall. no account or sign-up needed.
          </p>

          <form onSubmit={sign} className="mt-7 wobble bg-linen p-5 sm:p-6 space-y-4">
            <div>
              <label
                htmlFor="gb-name"
                className="block font-mono text-[12px] text-ink-soft mb-1.5"
              >
                your name (or alias — mystery is welcome)
              </label>
              <input
                id="gb-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={40}
                placeholder="e.g. ghost_of_coffee_past"
                className="w-full bg-card border border-input rounded-md px-3.5 py-2.5 text-[15px] text-ink placeholder:text-ink-soft/50 focus:outline-none focus:ring-2 focus:ring-rust/40 focus:border-rust transition"
              />
            </div>

            <div>
              <label
                htmlFor="gb-msg"
                className="flex items-center justify-between font-mono text-[12px] text-ink-soft mb-1.5"
              >
                <span>your note</span>
                <span
                  className={message.length > 280 ? "text-destructive" : ""}
                  aria-live="polite"
                >
                  {message.length}/280
                </span>
              </label>
              <textarea
                id="gb-msg"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={300}
                rows={3}
                placeholder="say hi… tell me where you're from… review the vibes…"
                className="w-full bg-card border border-input rounded-md px-3.5 py-2.5 text-[15px] text-ink placeholder:text-ink-soft/50 resize-none focus:outline-none focus:ring-2 focus:ring-rust/40 focus:border-rust transition"
              />
            </div>

            <fieldset>
              <legend className="font-mono text-[12px] text-ink-soft mb-2">
                pick a paper color
              </legend>
              <div className="flex gap-2.5" role="radiogroup" aria-label="note color">
                {COLOR_CHOICES.map((c) => (
                  <button
                    key={c.key}
                    type="button"
                    role="radio"
                    aria-checked={color === c.key}
                    aria-label={c.label}
                    onClick={() => setColor(c.key)}
                    className={`w-8 h-8 rounded-full ${c.cls} border-2 transition-all ${
                      color === c.key
                        ? "border-ink scale-110 shadow-[1.5px_2px_0_rgba(56,50,42,0.25)]"
                        : "border-creamline hover:border-ink-soft"
                    }`}
                  />
                ))}
              </div>
            </fieldset>

            {error && (
              <p role="alert" className="text-[14px] text-destructive">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={sending}
              className="wobble-sm bg-rust text-primary-foreground px-6 py-2.5 text-[15px] font-bold hover:bg-rust-deep hover:-rotate-1 transition-all disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center gap-2"
            >
              {sending ? "pinning it up…" : "sign the guestbook"}
              {!sending && <HeartDoodle className="w-3.5 h-3.5" />}
            </button>
          </form>
        </div>

        {/* right: the wall */}
        <div>
          <div className="grid sm:grid-cols-2 gap-4 content-start min-h-[300px]">
            {entries === null ? (
              <>
                <NoteSkeleton />
                <NoteSkeleton />
                <NoteSkeleton />
                <NoteSkeleton />
              </>
            ) : entries.length === 0 ? (
              <p className="font-mono text-[14px] text-ink-soft sm:col-span-2">
                the wall is empty… you could be the first. no pressure. (some
                pressure.)
              </p>
            ) : (
              entries.map((entry, i) => (
                <article
                  key={entry.id}
                  className={`note ${NOTE_STYLES[entry.noteColor] ?? NOTE_STYLES.paper} p-4 pt-5 flex flex-col min-h-[130px]`}
                  style={{ transform: `rotate(${rotationFor(i)}deg)` }}
                >
                  <p className="text-[14.5px] leading-relaxed text-ink/90 break-words">
                    {entry.message}
                  </p>
                  <p className="mt-auto pt-3 font-mono text-[11.5px] text-ink-soft">
                    — {entry.name} · {timeAgo(entry.createdAt)}
                  </p>
                </article>
              ))
            )}
          </div>
          {entries && entries.length > 0 && (
            <p className="mt-6 font-mono text-[12px] text-ink-soft text-right">
              {entries.length} note{entries.length === 1 ? "" : "s"} on the wall · oldest first? nope — newest first, like fresh coffee
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
