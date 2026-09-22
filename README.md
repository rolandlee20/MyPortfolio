# ryoshicode — static portfolio

A hand-built, single-route portfolio for **ryoshicode**, now set up as a fully
static Next.js site that can be deployed directly to GitHub Pages.
.

## Stack

- Next.js 16 App Router + TypeScript
- Tailwind CSS 4
- Framer Motion / CSS animations already used by the project
- Fonts: Fraunces Variable, Karla, JetBrains Mono
- Browser `localStorage` for the guestbook
- `mailto:` for the contact form

## Run locally

```bash
bun install
bun run dev
```

Or with npm:

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Build

```bash
bun run build
```

The build is a static export and produces the `out/` folder.

## GitHub Pages

This repo includes a GitHub Actions workflow at
`.github/workflows/deploy.yml`.

1. Push the project to GitHub.
2. In the repository, open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main` (or run the workflow manually).
5. GitHub Actions builds the static site and publishes it to Pages.

The Next.js config automatically uses the repository name as the GitHub Pages
`basePath` for normal project repositories. If the repository itself is named
`yourusername.github.io`, it uses the root path instead.

## What changed for the static version

- The visitor counter is now a simple "no tracking" message.
- Guestbook entries are stored in each visitor's browser with `localStorage`.
  They are **not shared between visitors**.
- Contact section now points visitors to Codester or direct email.
- Kept the existing animations and visual styling.

## Editing content

- **Name / bio / terminal text** — `src/components/portfolio/hero.tsx`
- **About / skills** — `src/components/portfolio/about.tsx`
- **Projects** — `src/components/portfolio/work.tsx`
- **Email / Codester link** — `src/components/portfolio/contact.tsx`
- **Guestbook starter notes** — `src/components/portfolio/guestbook.tsx`
- **Colors / textures / CSS animations** — `src/app/globals.css`
