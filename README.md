# Client Websites

Website projects and client deliverables.

## Terra Source Corp — `clients/terra-source/`

B2B wholesale supplier of organic commodities (crude red palm oil, green coffee,
cocoa) — terrasourcecorp.com.

- `site/` — the homepage build. Static, no build step: upload the folder contents
  to any host (Hostinger `public_html`, Netlify, etc.).
- `hostinger-temp-page/` — single-file "coming soon" page used to put a live page
  on the domain quickly (includes the SMS opt-in and privacy wording needed for
  toll-free number verification).
- `CLIENT-NOTES.md` — running status, requirements from the client thread, and
  open items.

## MedTravel Experts — `clients/medtravel-experts/`

International medical travel for Russian- and English-speaking clients in the US
and Canada — medical tourism, preventive health/wellness, and rehabilitation.

- `site/` — bilingual (RU/EN) single-page site. React + TypeScript + Tailwind +
  Vite, so this one has a build step: `cd site && npm ci && npm run build`
  produces a static `dist/` to upload anywhere.
- `WEBSITE-PROMPT.md` — content and structure brief distilled from the client's
  business plan; the source of truth for all copy.
- `CLIENT-NOTES.md` — build/deploy steps, design decisions, the contact-form
  wiring that still needs a backend, and what's outstanding from the client.
