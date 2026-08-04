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

**The hero is a scroll-scrubbed frame sequence, not a video.** The supplied
CloudFront clip is a 10s H.264 animation of a rotating anatomical brain. It ships
as 72 WebP frames in `public/frames/` (~1.4 MB total) drawn to a canvas, with the
frame index driven by scroll position through the tall track the hero is pinned
inside. This is lighter than the 8.3 MB mp4, scrubs instantly instead of fighting
`video.currentTime` seeking, and does not depend on the browser's H.264 support.
`public/hero-poster.webp` paints immediately while the sequence decodes.

To regenerate the frames from a different clip:

```bash
ffmpeg -i source.mp4 -vf "fps=7.2,scale=1440:-2" -c:v libwebp -q:v 80 \
  public/frames/f_%03d.webp
```

Keep the count at 72, or update `FRAME_COUNT` in `src/HeroCanvas.tsx`. `fps` is
`FRAME_COUNT / clip_duration`.

**Light palette, and the animation is deliberately not darkened.** The clip is
pale pastel (mean luma 169/255). Rather than darkening it to carry white text,
the type is deep navy and the hero uses a *white* wash — brightening, not
darkening — that gives the copy a near-white bed while leaving the figure clean
on the right. Measured worst-case contrast, sampling the darkest 2% of background
behind each block with the foreground stripped out:

| element | colour | desktop | mobile |
|---|---|---|---|
| h1 line 1 | navy-900 | 11.4:1 | 13.5:1 |
| h1 line 2 | brand-700 | 4.5:1 | 5.2:1 |
| subtitle | navy-800 | 12.2:1 | 13.4:1 |
| stat value | navy-900 | 10.1:1 | 14.2:1 |
| stat label | navy-600 | 4.6:1 | 6.5:1 |
| CTA | white on brand-700 | 6.6:1 | 6.6:1 |

All above the WCAG AA threshold (4.5:1 normal text, 3:1 large text and UI).
**If the clip is ever swapped, re-measure these** — the scrim is tuned to this
one. The palette itself was also tuned against measurement: the first pass used
`brand-500` (#1CADE4) for accents and a lighter navy for secondary copy, and both
failed (2.6:1 and 4.2:1 on white respectively). Accents are `brand-600`/`700` and
secondary copy is `navy-400` (#4e7391) or darker for that reason — **don't
lighten them back without re-checking.**

**Nav handoff.** The hero stays pinned for the whole track, so its own nav is
visible the entire time. The hero foreground (nav + copy) fades out over the last
stretch of the scrub and the compact sticky nav fades in as it goes — otherwise
both are on screen at once. The compact nav exists at every breakpoint because on
mobile it carries the only menu trigger once the hero foreground is gone.

**Language toggle replaces the account button.** The design reference had a
user-account circle in the nav; this site has no accounts, so that slot is a
RU/EN toggle instead — which the brief requires and which needed a home in the
header.

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
- [ ] Decide whether to keep the brain animation or licence something warmer. It matches the brand palette well, but it is neuro-specific for a company that covers far more than neurology. Swapping it means regenerating the frames (above) and re-measuring hero contrast.

## Compliance notes

The business plan carries three disclaimers that are **not optional** — all three
render in the footer in both languages:

1. Not a medical institution; does not diagnose or prescribe. All medical decisions are made by licensed physicians at the partner clinic.
2. Accreditation is one selection criterion and does not guarantee outcomes.
3. PRP / ozone therapy / IV infusions only after physician assessment and when indicated.

Also per the brief: **no pricing anywhere on the site.** Pricing is only given in
a personal consultation, and the contact section says so explicitly.
