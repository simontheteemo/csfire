# CS Fire Website — Design Spec

**Date:** 2026-06-09
**Status:** Approved, in build

## Overview

Marketing website for **Control & Service Fire Ltd ("CS Fire")**, a New Zealand
fire protection and compliance company. Static site reusing the JD Finance tech
stack (Astro 5 + Tailwind CSS v4 + TypeScript, GitHub Pages + Actions).

Visual direction: **Bold & safety-forward** — fire red on near-black, condensed
display headlines, high contrast. Based on the approved mockup at
`../csfire-mockups/bold.html`.

## Tech Stack

- **Framework:** Astro 5 (static, zero-JS by default)
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite`, theme tokens in `@theme`
- **Language:** TypeScript (`astro/tsconfigs/strict`)
- **SEO:** `@astrojs/sitemap`, schema.org JSON-LD, OG/Twitter meta
- **Hosting:** GitHub Pages via GitHub Actions (`deploy.yml` + `ci.yml`)

## Brand

- **Charcoal:** `#484848` (logo grey)
- **Fire red:** `#ED1C24` (logo flame/accent)
- **Ink:** `#0C0C0D` near-black, `#16171A` surface
- **Display font:** Anton; **Body font:** Inter
- **Logo:** triangular C+S monogram with red flame. Assets in `public/`:
  `mark.png`, `mark-white.png` (dark bg), `lockup.png`, `lockup-white.png`.

## Services (4)

1. **Fire Alarm Systems** — design, supply, install, monitoring
2. **Fire Sprinkler Systems** — design, install, testing, maintenance
3. **Extinguishers & Training** — portable equipment + fire warden training
4. **BWOF & Compliance** — Building Warrant of Fitness, inspections,
   evacuation schemes, emergency/exit lighting, passive fire

## Pages

| Route | Purpose |
|---|---|
| `/` | Hero, stat bar, 4-service grid, CTA band |
| `/about` | Company story, values, why-us |
| `/services` | Overview linking to the four service pages |
| `/services/fire-alarms` | Detailed service page |
| `/services/sprinkler-systems` | Detailed service page |
| `/services/extinguishers-training` | Detailed service page |
| `/services/bwof-compliance` | Detailed service page |
| `/contact` | Contact details + enquiry prompts |
| `/privacy` | Privacy policy |

## Components

- `BaseLayout.astro` — head/SEO, Header, Footer, slots
- `Header.astro` — logo lockup, nav, "0800 CS FIRE" call CTA
- `Footer.astro` — brand, nav, contact line
- `ServiceCard.astro` — icon, title, blurb, link (home + services index)
- `CTABand.astro` — red "free audit" call-to-action band
- `StatBar.astro` — the 30+ / 24/7 / 100% / IQP strip
- `src/data/services.ts` — single source of truth for service metadata

## Content

Drafted from the sample sites provided (firecontrolservices, firesolutions,
firesecurity). Contact details — **address, phone, email** — are placeholders
(`0800 CS FIRE`, `info@csfire.co.nz`, Auckland NZ) until the client provides
real values. Marked with `TODO(contact)` in code.

## SEO

- `schema.org` `FireProtectionService` / `LocalBusiness` JSON-LD on home
- Per-page `<title>` + meta description
- Canonical URLs, sitemap, OG + Twitter cards
- `site: https://www.csfire.co.nz` (placeholder), `base: ''`

## Out of scope (for now)

- News / blog section
- Online booking / forms backend (mailto + phone only)
- Customer portal, training LMS
