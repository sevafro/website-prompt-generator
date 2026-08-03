# nxtlevel-studio mobile fix (staged, not yet deployed)

Patched files for the nxtlevel-studio.netlify.app Netlify site (site id
`4452f95a-3317-436a-8a9b-867cf7931edc`). The site has no linked repo, so the
patched bundle is staged here until it can be deployed.

## What changed (mobile only — desktop behavior untouched)

All changes are gated behind a `NLMOB` flag (touch device or viewport < 768px)
added to the built Vite bundle (`assets/index-B0mm0omh.js`, renamed to
`assets/index-Cmob1fix.js` to bust Netlify's immutable asset cache; index.html
updated to match):

1. Videos play whenever they are near the viewport, ignoring the desktop-only
   "active card" hover gating that made case-study videos wait until their
   article was centered on screen.
2. IntersectionObserver lookahead raised from 80px to 500px vertical / 250px
   horizontal so videos are already playing before they scroll into frame.
3. `loadedmetadata` now counts toward loader progress (iOS rarely fires
   `canplay` for offscreen `preload="metadata"` videos, which is why the bar
   sat at 0%).
4. A watchdog re-issues `play()` every 800ms for near-viewport paused videos,
   plus `touchstart`/`touchend` kickers so iOS Low Power Mode (which blocks
   autoplay until a user gesture) can't leave videos frozen.
5. Loader fallback timeout 6s -> 3s on mobile.
6. Loader progress bar creeps upward on a timer instead of sitting at 0%.

## To deploy

Every other file on the live site is unchanged. Deploy = current live files
with index.html replaced and the old assets/index-B0mm0omh.js swapped for
assets/index-Cmob1fix.js (keep the CSS file as is).
