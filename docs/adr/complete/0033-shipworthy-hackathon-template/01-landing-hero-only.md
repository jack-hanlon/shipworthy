# Sub-plan 1 - Landing hero only

Parent: [0033](./index.md) · Index: [plan.md](./plan.md)

**Leaf marketing cut on `/`.** Does not rebrand copy (slice 2) or delete route files for `/about` etc. (slice 3).

## Purpose

Home page is the hero Prompt and nothing below it. Footer does not render on `/`.

## Owns

- `src/app/(app)/page.tsx` — render `Prompt` only; remove landing section imports/usage
- `src/components/footer/ConditionalFooter.tsx` (and/or `ConditionalFooterDynamic.tsx`) — hide footer on `/` as well as `build-program`, or always hide if simpler
- Delete or stop exporting unused landing section modules when safe for routes still alive until slice 3:
  - Prefer **unwire from `page.tsx` only** here; file deletion of `CredibilityBand`, `YouTubeReviewSection`, `HowItWorksSection`, `EditProgramCtaSection`, `PositiveReviewsMosaic` can wait for slice 3 if imports remain elsewhere
- Tests that assert home composition, if any under `src/app` / landing `__tests__`

## Does not own

- Brand string rewrites (2)
- Deleting `/about`, `/proxima-app`, … (3)
- Footer link data cleanup beyond what’s needed to stop rendering (3)

## Contract

- C1: `/` has no marketing bands and no footer

## Context that is easy to miss

- `PwaSection` is already commented out on home — leave deleted/absent
- `layout.tsx` hosts `ConditionalFooterDynamic`; changing hide rules there may affect other pages intentionally until slice 3

## Done when

- Manual: open `/` — only hero + input
- `rg "CredibilityBand|YouTubeReviewSection|HowItWorksSection|EditProgramCtaSection|PositiveReviewsMosaic" src/app/(app)/page.tsx` is clean

## Out of scope

- Rewriting Prompt copy
- Removing `ProximaStarCanvasDynamic` (slice 12)
