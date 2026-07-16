# Website Prompt Generator — a Claude Code skill

Turn a business name + location into a **long, hyper-specific, ready-to-paste
website-builder prompt** — with real, human copy instead of generic AI filler.

You type:

```
make a website prompt for Joe's Barbershop, Tampa FL
```

The skill researches the real business online (its site, Google, Instagram,
Facebook, Yelp, booking/ordering links, BBB, directories, the state business
registry), pulls the **real** details — actual services, menu items and prices,
brand phrases, ratings, hours, photos — and writes a detailed, section-by-section
prompt you can paste straight into Claude, v0, Lovable, or any AI website builder.

The output is always two parts:

1. **A short summary paragraph** — how to position the business and what to verify.
2. **The full website prompt** — a "You are an expert web designer…" mega-brief with
   real headline options, a written About section, service/menu cards with real
   names and prices, palette, typography, animations, SEO, schema, and a closing
   recommendation.

## Why it's different

Most AI-built sites read the same: *"Welcome to our business, where quality meets
professionalism."* This skill is built to avoid exactly that. It carries a
**human-copy doctrine** that:

- leads with **real specifics** (the neighborhood, the years in business, the actual
  $299 fee, the real sauce names) instead of adjectives,
- matches each business's **real voice** (gritty local wing spot vs. premium exporter
  vs. friendly neighborhood groomer),
- **bans the AI tells** ("nestled in the heart of," "we pride ourselves on,"
  "top-notch," "one-stop shop," empty mission blocks, fabricated stats), and
- bakes a voice directive into the generated prompt so the downstream builder keeps
  the voice instead of regenerating bland text.

It also stays **verification-first**: it never invents ratings, reviews, licenses,
prices, or guarantees — anything unconfirmed becomes a labeled placeholder plus a
"verify before launch" note.

## Sample output

Here's a trimmed example so you can see the voice before installing. The real output
is much longer (every section written out); this shows the shape and the copy quality.

**You type:**

```
make a website prompt for Downtown Barbers, Pittsburgh PA
```

<details>
<summary><strong>Part 1 — Summary paragraph</strong> (click to expand)</summary>

> Downtown Barbers should be positioned as a sharp, downtown-Pittsburgh barbershop with
> real local personality — third floor over Market Square, a 5.0 Google rating (8
> reviews), and booking through theCut. Reviews carry the voice to lean into ("one of
> the best cuts of my life," "great vibe and energy," a shout-out to barber Jordan), so
> the site should feel like a real shop people are loyal to, not a generic grooming
> template. Confirm the correct Instagram before pulling photos, and verify hours,
> walk-in policy, and the full service menu/pricing before launch.

</details>

<details>
<summary><strong>Part 2 — The website prompt</strong> (excerpt — click to expand)</summary>

> You are an expert web designer and front-end developer. Build a clean, modern, dark
> premium website for a barber shop client.
>
> **CLIENT:** Downtown Barbers — 433 Market Square, 3rd Floor, Pittsburgh, PA 15222 ·
> (412) 418-6428 · 5.0 Google rating (8 reviews) · Booking: theCut · Instagram:
> @downtownbarbers815 (verify it matches the Pittsburgh shop before pulling photos).
>
> **BRAND VOICE:** Confident, local, a little proud — the way a regular talks about
> their barber. Real Pittsburgh, real Market Square. Write like a person, not a brochure.
>
> **HERO** — Headline options: "Fresh Cuts, Third Floor, Right on Market Square." /
> "Sharp Cuts. Fresh Shaves. Downtown Pittsburgh." Subheadline: "Precision cuts, clean
> lineups, and fresh shaves in the middle of Market Square — book online or just call up."
> Primary CTA "Book Appointment" (theCut); secondary "Call the Shop." Badges: "5.0 on
> Google," "433 Market Square • 3rd Floor," "Good for kids."
>
> **ABOUT** (written, in-voice, no filler): "Third floor over Market Square, Downtown
> Barbers is the kind of shop you end up sending your friends to. Clean fades, sharp
> lineups, fresh shaves, and a chair that's easy to sit in for a while — good cut, good
> energy, no rush."
>
> *(…full sections for Services, Gallery, Why-Choose-Us, Reviews, Booking, Location,
> Footer, plus palette, typography, animations, SEO, and schema…)*
>
> **COPY & VOICE RULES:** Write like a proud regular describing their barber —
> specific, local, confident. Use the real details (Market Square, 3rd floor, 5.0, real
> service names). Do NOT write "Welcome to," "nestled in the heart of," "we pride
> ourselves," "top-notch," or empty mission blocks. One good specific line beats three
> adjectives.

</details>

## What it handles

Two tiers, several vertical "playbooks":

- **Premium / experience tier** — barbers, salons, restaurants, auto detailing,
  boutique wellness, luxury e-commerce (dark, animation-forward, booking/order-driven,
  brand-voice-heavy).
- **Trust / service tier** — handyman & trades, lawn/pressure washing, auto repair,
  used-car sales, pet care (verification-first, licensed-trade cautions, estimate-driven).

Plus variants: **multi-location** (subdomains) and **e-commerce** (cart, checkout,
order tracking).

## Install

**Method A — copy the folder (works everywhere):**

1. Copy this folder into your Claude skills directory so you get
   `.claude/skills/website-prompt-generator/SKILL.md`:
   - Windows: `C:\Users\<You>\.claude\skills\`
   - macOS / Linux: `~/.claude/skills/`
2. Restart Claude Code / start a new session.
3. Try it: `make a website prompt for [business], [city]`

```bash
git clone https://github.com/sevafro/website-prompt-generator.git \
  ~/.claude/skills/website-prompt-generator
```

**Method B — the packaged `.skill` file:** download
`website-prompt-generator.skill` and open it in the Claude desktop app (click
**Save skill**). It's just a zip of this folder.

## Requirements

- Claude Code (CLI, desktop, or Cowork).
- Web access (WebSearch / WebFetch) for the research step. Without it, the skill still
  runs but leans on more placeholders.
- No dependencies — it's just Markdown instruction files.

## What's in here

```
SKILL.md                         # the workflow: research → classify → write copy → fill template
references/
  prompt-template.md             # the section-by-section master template
  vertical-playbooks.md          # per-industry mood, CTA, sections, safety
  human-copy.md                  # the anti-generic / real-voice doctrine
  example-worked.md              # two full worked examples (service + premium tiers)
website-prompt-generator.skill   # packaged for one-click install
```

## Feedback welcome

This is a work in progress and I'd genuinely love opinions — on the copy quality, the
structure, the vertical coverage, or anything that reads as "too AI." Open an issue or
a discussion.

## License

MIT — see [LICENSE](LICENSE).
