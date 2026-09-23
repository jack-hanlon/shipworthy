# Sub-plan 3 - Strip marketing routes and footer

Parent: [0033](./index.md) · Index: [plan.md](./plan.md)

**Delete leaf marketing app routes and footer link surface.** Product app (pricing, vault, Payload) is slice 4.

## Purpose

Attendees do not land on Proxima marketing pages or a footer full of dead product links.

## Owns

Prefer deleting route `page.tsx` trees and nav/footer modules in one pass.

- Remove or stub routes:
  - `src/app/(app)/about/page.tsx`
  - `src/app/(app)/proxima-app/page.tsx`
  - `src/app/(app)/waitlist/page.tsx`
  - `src/app/(app)/download/page.tsx`
  - `src/app/(app)/contact/page.tsx` (keep only if legal needs it; otherwise delete)
- `src/components/footer/Footer.tsx` and/or `src/assets/constants/nav-links.tsx` — empty or minimal links (Terms/Privacy only if those pages remain)
- Delete unused `src/components/landing/*` section components orphaned by slice 1
- `src/components/features/PositiveReviewsMosaic.tsx` if only used by home

## Does not own

- `/pricing`, `/programs`, `/profile`, `(payload)`, `/api/v1` (4)
- Builder Hevy chrome (7)

## Contract

- C6 partial: marketing routes listed above are gone; footer is not a product sitemap

## Context that is easy to miss

- `src/app/(app)/layout.tsx` may import sidebar items pointing at deleted routes — clean those imports here if they are marketing-only and fit the cap
- Legal pages `/terms-of-use`, `/privacy` may stay with stripped footer links

## Done when

- `rg "proxima-app|/waitlist|/download" src/app/(app) --glob '**/page.tsx'` shows no those routes
- Footer does not link to Blog, Developers, Discord product marketing unless those surfaces still exist

## Out of scope

- Stripe / vault / Payload
