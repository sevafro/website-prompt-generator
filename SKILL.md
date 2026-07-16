---
name: website-prompt-generator
description: >-
  Generate a long, hyper-specific, ready-to-paste website build prompt for a
  business from just its name and location. Researches the real business (site,
  Google, Instagram, Facebook, Yelp, booking links, BBB, directories, state
  registry), pulls REAL specifics (services/menu/prices, brand phrases, ratings,
  hours, photos), and writes a section-by-section prompt in the user's house style:
  an intro summary paragraph plus a "You are an expert web designer..." mega-brief
  with real, human, non-generic copy. ALWAYS use when the user gives a business name
  + location and wants a website prompt — e.g. "make a website prompt for X", "do
  another website for this business", "here's their Instagram/Google, make me a
  prompt", or pastes a business's listings and asks for a site. Handles barbers,
  salons, restaurants, groomers, home & trade services, auto, e-commerce,
  multi-location, and wellness businesses.
---

# Website Prompt Generator

## What this produces

The user runs a prompt shop: they take a business, research it, and hand a large,
meticulously detailed prompt to an AI website builder (Claude, v0, Lovable, etc.)
that builds the whole site. Your job is to reproduce that deliverable from as little
as **a business name + a location** — and to do it better than a generic template,
because the user's core frustration is sites that "look like every other AI website."

Every output has **two parts, in this order**:

1. **A short intro summary paragraph** — how the business should be positioned, the
   concrete facts you found (ratings + review counts per platform, phone, address,
   hours, signature services/menu items, brand phrases), and the top things to verify
   before publishing. This is the opener the reference chats always lead with.

2. **The full website build prompt** — the long, structured brief starting with
   `You are an expert web designer, ...` and running through the entire template,
   with **real, specific, human copy written in** (headline options, an About
   paragraph, service/menu cards with real names and prices, taglines, CTAs), a
   verbatim voice/anti-generic directive, editable structure, SEO/schema, and a
   closing recommendation.

These prompts are **specific and detailed — but length must be earned by real
specifics, not padding.** Depth comes from verified facts and real written copy, never
from repetition or filler. Two consequences:
- **Scale length to what you actually verified.** A business with a rich footprint
  earns a long brief; a thin one gets a shorter, tighter brief plus a clear list of
  what the client must supply. Never pad to hit a word count.
- **Front-load the load-bearing parts and restate the critical ones at the end.** Long
  briefs lose the middle — so the brand, the verified facts, the DO-NOT-PUBLISH
  warnings, the voice rules, and the primary CTA belong near the top (and the key ones
  again at the bottom), never buried only in the middle.
Never emit a skeletal one-line-per-section outline either — every section that stays
gets real content. If the user asks for a tight/condensed version, give a lean,
strongly-structured brief rather than the full-length one. Read all four reference
files before writing:
- `references/prompt-template.md` — the section-by-section master template.
- `references/vertical-playbooks.md` — per-industry mood, CTA, sections, safety.
- `references/human-copy.md` — how to write text that sounds like a real brand.
- `references/example-worked.md` — full worked examples (a service-tier and a
  premium-tier) to match for depth, tone, and formatting.

## Inputs the user gives you

Usually just a **business name + location**. Sometimes also: **links** they already
have (use them, still find more), a **screenshot** of a listing or business card
(read every fact off it), or a **vibe / special ask** ("dark and premium," "5
locations with subdomains," "needs a cart and checkout," "make the front look like
this image"). If the name is ambiguous and there's no location, ask once for the
city/state, then proceed. Beyond the single quick preference intake in Step 3, don't
interrogate them — the whole value is that they type a little and you do the rest.

## Step 1 — Research and pull the REAL specifics

Use web search + page fetches to build the business's real footprint. Search
`"<name>" <city> <state>`, `<name> instagram`, `<name> yelp`, `<name> menu`,
`<name> booking`, `<name> reviews`, and the name on specific platforms.

**Find the links that actually exist** (aim for a handful up to ~10): the business's
**own website**, **Google Business**, **Instagram**, **Facebook**, **Yelp**, any
**booking/ordering link** (Square, theCut, Booksy, Toast, SpotOn, DoorDash), and —
for trust/service businesses — **BBB, Thumbtack, Angi, Nextdoor, industry
directories, and the state business registry** (e.g. Florida Sunbiz; the equivalent
Secretary of State elsewhere; include entity/license numbers as internal
verification only, never as prominent public content).

**Extract the specifics that make copy non-generic** (note the source of each):
- **Real service / menu / product names and prices** — the exact ones.
- **The brand's own phrases** from their site/IG bio/posts — their real voice.
- **Ratings + review counts per platform** (they differ; list each) and **review
  themes/quotes** in the customers' actual words.
- Phone, email, address, hours, owner/rep name, years in business, neighborhood/
  landmark, walk-in/appointment/delivery facts, payment methods, licenses.

**Safety and honesty while gathering (core to the format):**
- Public info only. Don't bypass login walls, scrape private content, or reproduce
  copyrighted text. Verify a provided Instagram actually matches the location before
  relying on its photos.
- **Fail loud; never fabricate or soften.** Any hard fact — a price, rating, review
  count, hours, phone, address, license — that you did not verify from a real source
  must NOT appear as a value, not even a plausible-looking one. **A wrong price on a
  live site is worse than a missing one.** Instead of a soft/guessed value, emit an
  unmissable marker (e.g. `>>> PRICE UNVERIFIED — CONFIRM BEFORE PUBLISHING <<<`) and
  add the item to the DO-NOT-PUBLISH block that sits at the top of the prompt (Step 6).
  Never guess a number to fill a gap.
- Scraped ratings/hours go stale — frame them as "shown in the listing" working data
  and tell the builder to re-verify on launch day.

**Thin or no web footprint** (a common case — brand-new or barely-listed businesses):
say so plainly in the intro paragraph, and do NOT fabricate facts or pad the brief to
look complete. Produce a shorter, structure-forward brief — real copy only where you
have real detail, a prominent "WHAT THE CLIENT MUST SUPPLY" list (logo, photos, real
prices, hours, phone), and the DO-NOT-PUBLISH block covering everything unverified. A
short honest brief beats a long one built on guesses.

## Step 2 — Classify: tier + vertical playbook

**Classify from the business's own language, not its name.** The name + city is only a
weak prior — a "med spa," "studio," "wellness center," or "detailing" outfit can be
premium OR trust-tier depending entirely on how the owner runs it, so guessing from
the name is a coin flip on anything ambiguous. You already pulled their site, IG bio,
and reviews in Step 1 — so read the register from *their words*: how they describe
themselves, their price points, their service names, their tone, the photos they post.
That's a much stronger signal and it fails gracefully. Only fall back to the
name/vertical prior when you genuinely found little of their own language (thin
footprint) — and when you do, say so and lean conservative.

With the register in hand, open `references/vertical-playbooks.md` and pick the
business's playbook (barber/salon, restaurant, pet grooming, home & trade, auto,
e-commerce/wholesale, multi-location, wellness/boutique) and its **tier**:
- **Premium / experience tier** (barbers, salons, restaurants, detailing, boutique
  wellness, luxury e-comm): dark or richly styled, animation-forward, booking/order-
  driven, brand-voice-heavy. Lighter on verification scaffolding.
- **Trust / service tier** (handyman, trades, lawn, pressure washing, auto repair,
  pet care w/ health & safety): verification-first, licensed-trade cautions, full
  checklist + "do not invent" blocks, estimate-driven.

The playbook sets the mood, palette direction, primary/secondary CTAs, the signature
sections beyond the standard spine, the animation flavor, and the safety notes. Blend
playbooks when a business straddles two (groomer + retail, dealer + repair shop).

## Step 3 — Ask a few quick preference questions (intake)

After you've researched the business and know what actually exists (did you find a
real logo? real photos?), ask the user a short, **batched** set of preference
questions **before** writing the prompt — so each site feels made-to-order, not
stamped out. Keep it to **one round of up to four tappable questions**, each with a
recommended default, so they can answer in a few clicks. This is the *only* interview
step — don't drip more questions later, and never block the final output on it.

Always ask these three (the user specifically wants them), then add one more that
fits the business:

1. **Images** — how to handle photos:
   - Real photos where available, labeled placeholders for gaps *(recommended)*
   - Labeled placeholders only (easy to swap in later)
   - Add tasteful stock photos as fallback
2. **Logo** — adapt the options to what you found:
   - If a real logo exists: use their real logo *(recommended)* · have the builder
     design a clean logo + wordmark · simple text wordmark for now
   - If no logo found: have the builder design a clean logo + wordmark *(recommended)*
     · I'll provide the logo · simple text wordmark for now
3. **Loading screen** — custom animated loading screen *(recommended)* · no, load
   straight into the site
4. **One more, whichever fits best** — usually **Look & feel**: match their brand/logo
   colors *(recommended)* · dark & premium · light & clean · you pick for the industry.
   (Swap in **Primary action** — book / call / order / request a quote / buy — instead
   if the strongest CTA is genuinely unclear for this business.)

Adapt every option to what you actually found (don't offer "use their real logo" if
there isn't one). **Skip any question the user already answered** in their request
(they said "make it dark" → don't ask look & feel; they gave a booking link → the CTA
is booking). If the user says "just do it," "your call," or clearly wants no
questions, **skip the intake entirely and use the recommended defaults.** Other
choices (site scope, animation level, which builder they'll paste into) default
sensibly from the playbook — only surface them if the user brings them up.

Thread the answers into the prompt: images → the PHOTO/SCRAPING + placeholder
instructions; logo → a header/branding note (use the real logo, "design a clean logo
+ wordmark," or a text wordmark); loading screen → include or omit the CUSTOM LOADING
SCREEN section; look & feel → the palette and VISUAL STYLE direction.

## Step 4 — Write the copy like a human, not a template

This is what the user is hiring you for. Read `references/human-copy.md` and apply it
throughout: lead with real specifics, match the brand's register, and avoid the AI
tells (no "Welcome to," "nestled in the heart of," "we pride ourselves," "top-notch,"
"one-stop shop," empty mission blocks, or fabricated stats). Write real headline
options, a real About paragraph, real service-card lines, and a real tagline — at the
"specific and human" level, not the generic level. And **bake an anti-generic voice
directive into the prompt itself** (the COPY & VOICE RULES block) so the downstream
builder preserves the voice instead of regenerating bland text.

## Step 5 — Write the intro summary paragraph

Before the mega-prompt, write the positioning paragraph: lead with how to frame the
business, weave in the real facts (naming platforms + ratings + signature items/
phrases), and flag the top items to confirm before publishing.

## Step 6 — Fill the template to full depth

Work top to bottom through `references/prompt-template.md`, adapting sections to the
chosen playbook **and to the Step 3 intake answers**, replacing every `{{PLACEHOLDER}}`
with real, business-specific content and real written copy. Non-negotiables:
- **Depth:** multiple real headline options; a written About paragraph; service/menu/
  product cards with real names, real descriptions, real prices; specific color hexes
  tuned to the brand; named fonts; specific animation ideas; a custom loading screen
  (unless the user opted out in the intake).
- **Fail loud on unverified facts (top priority).** Open the prompt — right after the
  CLIENT/business-info block, near the very top — with a prominent
  `>>> DO NOT PUBLISH UNTIL VERIFIED <<<` block that lists every unverified hard fact
  (prices, hours, rating/review counts, phone, address, license). Inline, never write a
  soft or guessed value; use a loud marker instead. The main failure mode is a
  placeholder getting skimmed past inside a long brief and shipped live — surfacing
  every gap at the top, not in a checklist at the bottom, is what prevents that.
- **Honor the intake:** handle images (real/placeholder/stock), the logo (real vs.
  builder-designed vs. text wordmark), the loading screen (include or omit), and the
  look & feel exactly as the user chose; if intake was skipped, use the recommended
  defaults.
- **Real photos first, placeholders as fallback** (per the images choice) — tell the
  builder to pull public images from the listings/IG; where none are accessible, insert
  clearly labeled `[bracketed placeholders]` + code comments marking where each real
  image goes.
- **Editable structure** (`/data/*` + `/components/*`) so the client can update
  services, photos, reviews, hours, inventory, etc.
- **Local SEO + the right LocalBusiness/AutoDealer/Restaurant JSON-LD**, tuned to city
  and services; never fabricate AggregateRating or reviews.
- **Wire real booking/ordering/phone links** to every relevant CTA.
- For the **trust tier**, include the full verification checklist, "do not invent"
  list, and licensed-trade disclaimer. For the **premium tier**, keep those light but
  still never invent — and always include the anti-generic COPY & VOICE RULES.

## Variants

- **Multi-location (subdomains).** Search each location's *separate* Google/Yelp/
  Facebook listings; specify a parent brand site + one sub-site per location with
  shared components and per-location data files (address, hours, reviews, map, menu/
  inventory, schema).
- **E-commerce.** Add product catalog, product detail pages, cart, checkout, order
  confirmation, and an order-tracking page with a tracking-number field; editable
  product data; payment integration as connect-your-own-credentials (never hardcode
  secrets). If they attach a reference image, describe the look to match it closely.
- **Screenshot / reference-image input.** Extract every visible fact and cite it as
  "shown in the supplied screenshot"; match an attached design's palette/layout/mood;
  still search for more links and data.

## Output format

Deliver the intro paragraph, then the full prompt, as one clean copy-paste block for
the user's builder. Don't wrap it in commentary or ask follow-ups mid-output. After
it, add a brief note (1-2 lines) on the single most important thing to verify and the
strongest angle — matching the closing-recommendation style in the examples.
