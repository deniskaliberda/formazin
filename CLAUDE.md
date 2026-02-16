# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Dev Commands

```bash
npm run dev       # Start Next.js dev server
npm run build     # Production build
npm run start     # Run production server
npm run lint      # ESLint check
```

No test framework is configured.

## Tech Stack

- **Next.js 16** (App Router) with **React 19** and **TypeScript** (strict mode)
- **Tailwind CSS v4** — configured inline via `@theme inline` in `src/app/globals.css` (no tailwind.config file)
- **Framer Motion** for animations, **Lucide React** for icons
- Path alias: `@/*` → `./src/*`
- Deployed on **Vercel**

## Architecture

### Routing (App Router)

```
src/app/
├── layout.tsx              # Root layout: fonts (Archivo, Archivo Narrow), metadata, Schema.org LocalBusiness
├── page.tsx                # Home: Hero → BueroSection → LeistungenSection → KontaktSection → Footer
├── leistungen/page.tsx     # Services page with hash navigation (#architektur, #brandschutz, etc.)
├── projekte/page.tsx       # Projects overview grid
├── projekte/[slug]/page.tsx # Project detail with gallery carousel, sticky sidebar
└── ueber-uns/page.tsx      # About page with interactive TeamHeroSection
```

**Not yet implemented:** `/kontakt`, `/impressum`, `/datenschutz` (referenced in Navigation/Footer)

### Components (`src/components/`)

All interactive components use `"use client"`. Page routes are server components by default.

- **Navigation.tsx** — Sticky nav, desktop + mobile hamburger (mobile drawer not yet implemented)
- **Hero.tsx** — Full-screen hero with gradient overlay and service links
- **TeamHeroSection.tsx** — Interactive team photo with clickable hotspots, spotlight/cutout effect, vita cards with glassmorphism
- **KontaktSection.tsx** — Contact form posting to `/api/kontakt` (API route not yet implemented)
- **Footer.tsx** — Company info, legal links, scroll-to-top button

### Data Pattern

All project and team data is **hardcoded inside components** — no CMS or database. Projects live in the components on `/projekte` and `/projekte/[slug]`. To add a project, follow the template in `PROJEKTE-ANLEITUNG.md`.

### Project Image Convention

```
/public/images/projekte/[slug]/
  hero.jpg
  galerie-1.jpg, galerie-2.jpg, ...
```

Slug rule: lowercase, no umlauts, hyphens for spaces (e.g., "Grundschule Lindenberg" → `grundschule-lindenberg`).

## Design System

**Brand:** Dr.-Ing. Formazin & Partner mbB — architecture/engineering firm in Ahrensfelde (Berlin-Brandenburg), founded 1990, 3rd generation.

- **Typography:** Archivo (headlines, Bold/Black) + Archivo Narrow (body, Regular). Loaded via `next/font/google` with CSS variables `--font-archivo` and `--font-archivo-narrow`.
- **Colors:** Primary Deep Blue `#2d4196` / `rgb(45, 65, 150)`, Background White/Gray `#F3F4F6`, Text Dark Slate `#1e293b`. Defined as CSS variables in `globals.css`.
- **Visual style:** "Ingenieur-Ästhetik" — grid-based, precise, sharp corners (max 2px radius), real photography only.
- **Animations:** Subtle fades and y-axis translations (0.4–0.6s), `viewport={{ once: true }}` for scroll triggers. No bouncy/cartoony effects.
- **Responsive:** Mobile-first. Breakpoints: md (768), lg (1024), xl (1280). Section max-width: `max-w-screen-2xl`.

## SEO & Accessibility Rules

- Semantic HTML (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`) required
- One `<H1>` per page with logical heading hierarchy
- Always use `next/image` with German-language `alt` tags
- Schema.org LocalBusiness structured data in root layout
- `lang="de"` on HTML element
- Aria-labels on all interactive elements

## Content Language

All user-facing content is in **German**. The site slogan is Low German: "GEIHT NICH – GIFFT NICH!" (pragmatic can-do attitude).
