# SvojSmeštaj — landing page

Next.js 14 (App Router) landing page for the accommodation-website business, built for SEO and multi-language support.

## Languages

Serbian (`sr`), Croatian (`hr`), Bosnian (`bs`), and Montenegrin (`me`) — each on its own URL (`/sr`, `/hr`, `/bs`, `/me`), with proper `hreflang` tags so Google indexes each language separately. Visitors are auto-redirected from `/` based on their browser language (middleware.ts), and can switch manually at any time — the choice is remembered in a cookie.

## Before you deploy

1. Copy `.env.example` to `.env.local` and fill in your real WhatsApp number, Telegram handle, phone, email, and site URL:
   ```
   cp .env.example .env.local
   ```
2. Set the same variables in your hosting provider's dashboard (Vercel: Project Settings → Environment Variables) — `.env.local` is never committed to git.

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000 — it will redirect to /sr automatically.

## Deploying

The fastest path is Vercel (built by the same team as Next.js, zero config):

1. Push this repo to GitHub.
2. Go to vercel.com → New Project → import the repo.
3. Add the environment variables from `.env.example` in the Vercel project settings.
4. Deploy. Vercel gives you a URL immediately; point your own domain at it in Project Settings → Domains.

## Editing content

All page copy lives in `dictionaries/sr.json`, `dictionaries/hr.json`, `dictionaries/bs.json`, `dictionaries/me.json` — one flat JSON file per language, no code changes needed to update text. Keep the same set of keys across all four files.

## Project structure

```
app/[locale]/          route for each language (layout + page)
app/sitemap.ts          auto-generated sitemap.xml (all languages)
app/robots.ts           robots.txt
components/             one file per page section
lib/i18n-config.ts       list of supported locales
lib/dictionaries.ts      loads the right JSON file per request
lib/links.ts             builds WhatsApp/Telegram/phone/email links from env vars
dictionaries/*.json      all page copy, per language
middleware.ts            detects browser language, redirects "/" to the right locale
```
