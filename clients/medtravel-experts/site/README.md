# MedTravel Experts — site

Bilingual (RU/EN) single-page site. React + TypeScript + Tailwind v4 + Lucide,
built with Vite.

```bash
npm ci
npm run dev      # local dev server
npm run build    # -> dist/, a static folder ready to upload anywhere
npm run lint
```

## Where things are

| file | what |
|---|---|
| `src/content.ts` | **all copy, both languages.** Edit here to change wording. |
| `src/App.tsx` | nav, mobile menu, hero (video + liquid-glass overlay) |
| `src/Sections.tsx` | about, services, process, destinations, contact form, footer |
| `src/Reveal.tsx` | scroll-into-view fade used across the lower sections |
| `src/index.css` | brand tokens and the `.liquid-glass` surface |

The hero video is hotlinked from CloudFront (`VIDEO_SRC` in `App.tsx`);
`public/hero-poster.jpg` is a frame from it, shown while it loads.

See `../CLIENT-NOTES.md` for deploy notes, the contact-form backend that still
needs wiring, and the outstanding items from the client.
