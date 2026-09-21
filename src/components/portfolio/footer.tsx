import { CoffeeDoodle, HeartDoodle } from "./doodles";

export default function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-creamline bg-linen/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <CoffeeDoodle className="w-9 h-9 text-ink" />
            <p className="text-[14px] text-ink-soft leading-snug">
              handmade by <span className="font-bold text-ink">ryoshicode</span>
              <br className="hidden sm:block" />
              <span className="inline-flex items-center gap-1">
                with too much coffee &amp; a mechanical keyboard
                <HeartDoodle className="w-3 h-3 text-rust" />
              </span>
            </p>
          </div>

          <nav aria-label="footer" className="flex items-center gap-4 text-[14px]">
            <a href="#about" className="text-ink-soft hover:text-rust transition-colors">about</a>
            <a href="#work" className="text-ink-soft hover:text-rust transition-colors">work</a>
            <a href="#guestbook" className="text-ink-soft hover:text-rust transition-colors">guestbook</a>
            <a href="#contact" className="text-ink-soft hover:text-rust transition-colors">contact</a>
            <a
              href="mailto:ryoshicodeofficial@gmail.com"
              className="text-ink-soft hover:text-rust transition-colors"
            >
              email
            </a>
          </nav>
        </div>

        <p className="mt-6 text-center sm:text-left font-mono text-[11.5px] text-ink-soft/80">
          © {new Date().getFullYear()} ryoshicode · all rights reserved, all vibes intentional ·
          no trackers on this page, just you and a little sqlite database
        </p>
      </div>
    </footer>
  );
}
