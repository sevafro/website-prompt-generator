# MedTravel Experts — client notes

International medical travel service for Russian- and English-speaking clients
in the US and Canada. Medical tourism, preventive health / medical wellness, and
international rehabilitation.

**Team:** Nadi Frolova (Client Experience) · Olesya Kulikouski (Medical Programs)
· Vsevolod Frolov (Business Development)

## What's in here

- `site/` — the bilingual single-page site. React + TypeScript + Tailwind v4 +
  Lucide, built with Vite.
- `WEBSITE-PROMPT.md` — the content/structure brief distilled from the client's
  business plan. This is the source of truth for copy; the site's `content.ts`
  is derived from it.

## Build and deploy

```bash
cd site
npm ci
npm run build     # -> site/dist, a static folder
npm run dev       # local dev server
```

`dist/` is a plain static bundle (relative asset paths, `base: './'`), so it can
be dropped into Hostinger `public_html`, Netlify, Vercel, or any static host
without configuration. `dist/` is gitignored — rebuild rather than committing it.

## Content

All copy for both languages lives in one file: `site/src/content.ts`. Editing
that file is the only thing needed to change wording — nothing is hardcoded in
the components. The `Content` type keeps the two languages structurally
identical, so a missing translation is a type error rather than a silent gap.

Language selection: defaults to Russian if the browser locale starts with `ru`,
otherwise English, and remembers the visitor's choice in `localStorage`.
Sets `<html lang>` so search engines index each language correctly.

## Decisions worth knowing

**The hero video is a light pastel clip.** The supplied CloudFront video is a
1920×1080 / 10s H.264 animation of a rotating anatomical brain in pale blue and
pink — mean luma 169/255, and essentially constant across the whole loop. White
text and the near-transparent "liquid glass" elements were both invisible on it
untreated. The hero therefore applies a two-layer scrim (a flat ink tint plus a
vertical gradient that weights the nav and stats areas). Measured worst-case
contrast after the scrim, sampling the brightest 2% of background behind each
text block:

| element | desktop | mobile |
|---|---|---|
| h1 (white) | 7.9:1 | 9.6:1 |
| subtitle (white/70) | 5.1:1 | 5.3:1 |
| badge (white/80) | 5.3:1+ | 5.5:1+ |
| stat labels (white/60) | 6.0:1 | 6.2:1 |

All above the WCAG AA threshold (4.5:1 normal, 3:1 large). **If the video is ever
swapped, re-check these** — the scrim is tuned to this specific clip. A brighter
or busier clip will need a heavier scrim.

The clip is also 8.3 MB, which is a slow first paint on mobile. A poster frame
(`public/hero-poster.jpg`, 33 KB) is extracted from it and shows immediately
while the video loads. Worth compressing the video to ~2 MB before launch, and
consider serving a shorter loop.

**Language toggle replaces the account button.** The design reference had a
user-account circle in the nav; this site has no accounts, so that slot is a
RU/EN toggle instead — which the brief requires and which needed a home in the
header. Same liquid-glass treatment.

**Nav is three links plus a Contact CTA.** Home / Services / Destinations in the
glass pill, with Contact as the button, since booking a consultation is the only
conversion that matters here.

## Contact form

Currently has **no backend**. `FORM_ENDPOINT` in `site/src/Sections.tsx` is
empty, and the form falls back to opening the visitor's mail client with the
request pre-filled to `hello@medtravelexperts.com` — so a lead is never silently
dropped, but it is also not a great experience.

To finish it, set `FORM_ENDPOINT` to something that accepts a JSON POST
(Formspree, Make, Zapier, or a small serverless function) and have it fan out to
email **and** WhatsApp/Telegram, per the brief. The payload is
`{ name, contact, interest, message, language }`.

## Still needed from the client

- [ ] Real contact details — WhatsApp number, email, Telegram. `hello@medtravelexperts.com` is a placeholder.
- [ ] Team photos. The bios are in place; the cards are text-only for now.
- [ ] Client testimonials / case studies. No testimonial section exists yet — it should, once there is real material.
- [ ] The four faces in the hero badge are Pexels stock placeholders. Replace with real client photos, or drop the avatars.
- [ ] Domain + SSL. Meta tags assume `medtravelexperts.com`.
- [ ] Confirm the two hero stats: "15+ years in medical tourism" (from Olesya's bio) and "10 countries" (the destinations in the business plan). Both are defensible from the document, but they are public claims — worth a sign-off.
- [ ] Decide whether to keep the brain video or shoot/licence something warmer. It matches the brand palette well, but it reads clinical rather than reassuring, and it is neuro-specific for a company that covers far more than neurology.

## Compliance notes

The business plan carries three disclaimers that are **not optional** — all three
render in the footer in both languages:

1. Not a medical institution; does not diagnose or prescribe. All medical decisions are made by licensed physicians at the partner clinic.
2. Accreditation is one selection criterion and does not guarantee outcomes.
3. PRP / ozone therapy / IV infusions only after physician assessment and when indicated.

Also per the brief: **no pricing anywhere on the site.** Pricing is only given in
a personal consultation, and the contact section says so explicitly.
