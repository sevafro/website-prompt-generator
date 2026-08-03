# Terra Source — client status, assessment, and plan

_Last updated: Aug 3, 2026 (after Alina's design direction came in)_

## UPDATE — the direction is now explicit (Alina's messages, Jul 25–Aug 1)

Alina (Russian-speaking, sends direction for the company with Arthur) approved a
specific reference mockup and said, translated: *"You can just copy this page with
small modifications — it looks much more expensive and readable, and it's exactly
what I want."* Her requirements:

1. **Copy the gold/black mockup layout** (hero with gold globe, product cards,
   leadership row, "One Source. Pure Nature. Global Future." banner).
2. **Three product types on the homepage, in this order:**
   red palm oil first, then coffee, then cocoa beans + cocoa powder.
3. **Readability is the #1 complaint**: she can barely read gold-on-black text on
   the current site. Small text → near-white; large text → "mirror gold"
   (metallic gradient). Seva confirmed this split back to her.
4. **Much more info on page one**, including photos of her and Arthur with
   "who we are" descriptions — photos are on Seva's Google Drive; she is sending
   the full info separately.
5. **The mission text** ("The Mission of Terra Source Corporation" — the Golden
   Age manifesto) is final approved copy and should appear on the site.
6. The **company name is Terra Source Corp** (their box labels: "Earth's Finest,
   Trusted Worldwide", `sales@terrasourcecorp.com`, terrasourcecorp.com) — not
   "Terra Source Global" as the old build had.
7. Product facts verified from their own packaging: Robusta green coffee in
   parchment from Mount Cameroon volcanic highlands (raw, unroasted; 1 kg / 250 g
   retail boxes exist); crude red palm oil raw/unrefined/unfiltered, product of
   Cameroon, 20 L containers; label address 750 Hawthorn Row, Vernon Hills, IL
   60061 (an earlier label draft said Houston, TX — **confirm which is real**).

## What was built in response (`site/`)

`clients/terra-source/site/index.html` — a full homepage rebuild to that spec:
mockup layout, palm oil → coffee → cocoa order, mirror-gold headings with white
body text, the complete mission section with icon rows, a featured palm-oil
section using their real product render, leadership cards with photo slots, the
banner, contact (their real email + Vernon Hills address), and the SMS/privacy
notice kept for Twilio. Real imagery recovered from the client's own materials
(coffee boxes, palm fruit, palm oil jug); cocoa image is from their approved
mockup until they send a real asset. Remaining `[FILL:]` spots: leadership
names/photos, phone number, address confirmation.

## What the client has actually asked for (from the text thread)

1. **A live "work in progress" page on their Hostinger account** — asked for twice.
   This is their most urgent item because they need a live website on
   **terrasourcecorp.com** to get their **Twilio toll-free number approved**.
2. **Help pointing the domain** `terrasourcecorp.com` — they made Seva an admin on
   their Hostinger account for exactly this.
3. **The ability to edit the site themselves** — products, photos, copy — "10 small
   tweaks over the course of 3 months." This is a hard requirement, not a nice-to-have.
4. **A direction reset.** Quote: *"It looks like you went in a totally different
   direction."* They want a video call (today, ~4pm their time / 5pm Seva's) to regroup.
5. They still have **two contract revisions left** and want to use them before
   final sign-off.

## Honest assessment of the current build (meek-kashata-c080b9.netlify.app)

The current site is an ambitious black-and-gold "global commodity trade desk" —
Cameroon/Port of Douala export logistics, letters of credit, incoterms, quote cart,
admin panel. Functionally there is a lot there, but as shown to the client it has
real problems:

- **Every image is broken** — the hero, all three program cards, and the brand mark
  render as alt-text on empty boxes.
- **Placeholder contact info is visible**: `+1 [Add Phone Number]`,
  `[Add Business Address]`, "Social profiles: client links required."
- **Wrong domain in the emails**: footer shows `info@terrasourceglobal.com` /
  `sales@terrasourceglobal.com`, but the client's domain is **terrasourcecorp.com**.
- **Direction mismatch risk**: the copy is written as a Cameroon-based exporter
  (Port of Douala, LC payments, fumigation certs). If that's not what the client's
  actual operation is, this is almost certainly what "totally different direction"
  means. Confirm on the call before defending the build.
- It's a hand-coded React SPA — which directly conflicts with requirement #3
  (client self-editing). Every "small tweak" would come back to Seva.

## What's in this folder

- `hostinger-temp-page/index.html` — a self-contained, single-file WIP landing page
  ready to upload to Hostinger. It keeps the gold/dark brand feel, describes the
  business, and includes the **SMS opt-in + privacy language Twilio looks for**
  during toll-free verification. Three `[FILL:]` spots (phone, email, address) must
  be filled with real info before upload — nothing is invented.

## Do before / on the call

**Before the call (30 min of work, unblocks the client):**
1. Accept the Hostinger admin invite.
2. Fill the three `[FILL:]` fields in `hostinger-temp-page/index.html`.
3. Upload it: hPanel → Websites → Manage → File Manager → `public_html` →
   upload as `index.html`.
4. Confirm `terrasourcecorp.com` resolves to it (if the domain is registered at
   Hostinger and the site is on the same account, this is automatic; otherwise
   point the domain's A record at the Hostinger server IP shown in hPanel).
5. Text the client: "temp page is live on terrasourcecorp.com — you can submit it
   for Twilio verification."

**Call agenda (regroup on direction):**
1. Ask them to react to the live site screen-by-screen — what specifically felt
   like the wrong direction? (Look/luxury tone? The exporter/Cameroon framing?
   Complexity?) Get concrete answers before proposing anything.
2. Nail down the facts of the business: where they actually operate from, what they
   actually sell first (green? roasted? retail too?), real contact info, real photos.
3. **Decide the platform based on requirement #3.** Options to put on the table:
   - **A: Hostinger Website Builder / WordPress** — client can genuinely self-edit
     products and photos; Seva rebuilds the approved design there. Best fit for
     what they said they want.
   - **B: Keep the React site + add a CMS** (or move product data to editable
     JSON/Sheet) — keeps the current work, but self-editing is weaker and hosting
     stays on Netlify with the domain pointed there.
   - Recommendation: **A**, unless the quote-cart/trade-desk functionality is
     something they explicitly want to keep.
4. Use the two remaining revisions deliberately: revision 1 = direction-corrected
   draft after this call; revision 2 = polish after their feedback. Say this out
   loud so scope stays contained.
5. Twilio: confirm which number/campaign they're verifying so the page contact info
   matches the submission exactly.

## After the call

- Rewrite/rebuild per the agreed direction (fix domain/email mismatch everywhere,
  real images, real contact info).
- Set a shared checklist of the "10 tweaks over 3 months" expectation — what the
  client edits themselves vs. what counts against revisions.
