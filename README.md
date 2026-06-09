# CS Fire Website

Marketing website for **Control & Service Fire Ltd ("CS Fire")** — a New Zealand
fire protection and compliance company. Built with **Astro + Tailwind CSS v4**,
hosted on **GitHub Pages**, deployed via **GitHub Actions**.

## Tech Stack

- **Framework:** Astro 5 (zero-JS by default, excellent SEO)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 (theme tokens in `src/styles/global.css`)
- **Hosting:** GitHub Pages
- **CI/CD:** GitHub Actions (`.github/workflows/deploy.yml` + `ci.yml`)
- **SEO:** Sitemap, meta tags, Open Graph, canonical URLs, schema.org JSON-LD

## Design

Visual direction: **Bold & safety-forward** — fire red (`#ED1C24`) on near-black,
condensed Anton headlines, charcoal surfaces. Logo is the CS Fire C+S monogram
with a red flame. Design spec: `docs/superpowers/specs/2026-06-09-csfire-website-design.md`.
Reference mockup lives in `../csfire-mockups/bold.html`.

## Project Structure

```
csfire/
├── .github/workflows/      # deploy.yml + ci.yml
├── public/                 # logo assets (mark, lockup, white variants) + favicon
├── src/
│   ├── components/         # Header, Footer, ServiceCard, StatBar, CTABand
│   ├── data/
│   │   ├── services.ts     # single source of truth for the 4 services
│   │   └── site.ts         # company details + nav (contact = placeholders)
│   ├── layouts/BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── privacy.astro
│   │   └── services/
│   │       ├── index.astro
│   │       └── [slug].astro # fire-alarms, sprinkler-systems, etc.
│   └── styles/global.css   # Tailwind v4 theme (brand colors + fonts)
├── astro.config.mjs
└── package.json
```

## Quick Start

```bash
npm install      # install dependencies
npm run dev      # dev server at http://localhost:4321
npm run build    # static build to dist/
npm run preview  # preview the production build
```

## Pages

- `/` — hero, stat bar, 4-service grid, free-audit CTA
- `/about` — company story and values
- `/services` — overview of all services
- `/services/fire-alarms` · `/sprinkler-systems` · `/extinguishers-training` · `/bwof-compliance`
- `/contact` — phone, email, service area
- `/privacy` — privacy policy

## Customisation

- **Brand colors & fonts:** `src/styles/global.css` (`@theme` block)
- **Services content:** `src/data/services.ts`
- **Company details:** `src/data/site.ts`

> **TODO(contact):** phone, email and address in `src/data/site.ts` are
> placeholders (`0800 CS FIRE`, `info@csfire.co.nz`). Replace with the real
> client details before launch — search the codebase for `TODO(contact)`.

## Deployment

**Live at:** https://simontheteemo.github.io/csfire/

The site is hosted on **GitHub Pages** and auto-deploys on every push to `main`
via `.github/workflows/deploy.yml` (CI runs on PRs via `ci.yml`). No manual steps.

> **Config note:** `base: '/csfire'` is set in `astro.config.mjs` so links/assets
> resolve under the `/csfire/` project URL. If you later connect a real domain
> (e.g. `csfire.co.nz`), switch `base` back to `''`, set `site` to the domain, and
> add a `public/CNAME` file — then configure DNS and enable the custom domain in
> the repo's Pages settings.

## License

All rights reserved © 2026 Control & Service Fire Ltd
