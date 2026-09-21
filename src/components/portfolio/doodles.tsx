import { cn } from "@/lib/utils";

/* hand-drawn style SVG doodles shared across the site */

export function SquiggleArrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 90 60"
      fill="none"
      className={cn("w-16 h-11", className)}
      aria-hidden="true"
    >
      <path
        d="M82 8 C64 40 38 50 10 44 M18 34 L9 44.5 L21 50"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StarDoodle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("w-5 h-5", className)} aria-hidden="true">
      <path
        d="M12 2.5 C12.8 7.2 14 9.6 15.5 10.8 C17 12 19.5 12.2 21.5 12 C19 14 17.6 15.6 16.8 17 C16 18.4 15.2 20.5 14.6 22 C13.6 19.4 12.6 17.6 11.4 16.6 C10.2 15.6 8 15.2 5 15.4 C8.2 13.6 10 12.2 10.8 10.8 C11.6 9.4 11.9 6.6 12 2.5 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeartDoodle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("w-4 h-4", className)} aria-hidden="true">
      <path
        d="M12 20 C7 15.5 3.5 12.5 3.5 8.8 C3.5 6 5.6 4.2 8 4.2 C9.7 4.2 11.2 5.2 12 6.8 C12.8 5.2 14.3 4.2 16 4.2 C18.4 4.2 20.5 6 20.5 8.8 C20.5 12.5 17 15.5 12 20 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function CoffeeDoodle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("w-14 h-14", className)}
      aria-hidden="true"
    >
      <g className="steam">
        <path
          d="M24 14 C22.6 17 25.8 18.4 24.4 21.4"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M34 13 C32.6 16 35.8 17.4 34.4 20.4"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
      </g>
      <path
        d="M16 27 C15 25 17 24 19 24 L43 24 C45 24 47 25 46 27 L44 43 C43.5 47.6 40.4 50.5 36 50.5 L26 50.5 C21.6 50.5 18.5 47.6 18 43 Z"
        fill="#fffdf6"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinejoin="round"
      />
      <path
        d="M19 31 L43 31 L42 42 C41.6 45 39.4 47 36 47 L26 47 C22.6 47 20.4 45 20 42 Z"
        fill="#b4562e"
      />
      <path
        d="M46 30.5 C52 29.8 53.8 33 52.4 36 C51.2 38.6 47.4 39.6 44.6 38.8"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function PlantDoodle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("w-12 h-12", className)}
      aria-hidden="true"
    >
      <path
        d="M22 44 L42 44 L40 56 C39.7 58 38.4 59 36.4 59 L27.6 59 C25.6 59 24.3 58 24 56 Z"
        fill="#c98d68"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 40 L43.5 40 L42 44.5 L22 44.5 Z"
        fill="#d9a441"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path
        d="M32 40 C32 33 32 28 32 23"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M32 30 C26 30 23 27 22.6 21.6 C28 21.8 31.2 24.4 32 30 Z"
        fill="#7c8b6f"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M32 24 C38 24 41 21 41.4 15.6 C36 15.8 32.8 18.4 32 24 Z"
        fill="#7c8b6f"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function KeyboardDoodle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 96 40"
      className={cn("w-20 h-9", className)}
      aria-hidden="true"
    >
      <rect
        x="4"
        y="8"
        width="88"
        height="26"
        rx="7"
        fill="#fffdf6"
        stroke="currentColor"
        strokeWidth="2.6"
      />
      <g fill="currentColor" opacity="0.75">
        <rect x="12" y="14" width="6" height="6" rx="1.6" />
        <rect x="22" y="14" width="6" height="6" rx="1.6" />
        <rect x="32" y="14" width="6" height="6" rx="1.6" />
        <rect x="42" y="14" width="6" height="6" rx="1.6" />
        <rect x="52" y="14" width="6" height="6" rx="1.6" />
        <rect x="62" y="14" width="6" height="6" rx="1.6" />
        <rect x="72" y="14" width="6" height="6" rx="1.6" />
        <rect x="30" y="25" width="30" height="5" rx="2" />
      </g>
    </svg>
  );
}

export function SmileDoodle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("w-5 h-5", className)} aria-hidden="true">
      <circle cx="12" cy="12" r="9.2" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="8.8" cy="10" r="1.15" fill="currentColor" />
      <circle cx="15.2" cy="10" r="1.15" fill="currentColor" />
      <path
        d="M8 14.2 C9.2 16.2 10.5 17 12 17 C13.5 17 14.8 16.2 16 14.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
