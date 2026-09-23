# Sub-plan 4 - Strip product peripherals

Parent: [0033](./index.md) · Index: [plan.md](./plan.md)

**Remove product destinations that are not the hero→builder loop.** Keep auth + metering (C7).

## Purpose

Template tree is not a fitness SaaS. Pricing, vault, history, CMS, and Public API are out.

## Owns

Sweep in one pass (split commits only if review needs a seam).

**App routes**

- `src/app/(app)/pricing/` (+ Stripe embed / pricing components only used there)
- `src/app/(app)/programs/` (vault + slug pages)
- `src/app/(app)/profile/` (including edit + orphaned content)
- `src/app/(app)/workout/`
- Sidebar / toolbar / upgrade-banner links that point at the above

**Payload + blog**

- `src/app/(payload)/` tree
- `src/app/(app)/blog/` pages + blog components/collections when orphaned
- `src/payload.config.ts`, `@payload-config` path, Next `withPayload`, and Payload packages from `package.json` as needed so build succeeds without Payload

**Public API**

- `src/app/api/v1/**` route handlers
- `src/app/developers/route.ts`, `src/app/openapi.json/`
- Nav references to Developers; orphaned `src/lib/public-api/**` when nothing kept imports it (except shared helpers still used by the builder grid)

Do **not** delete `src/app/api/chat/**`, auth routes, or `try_consume_feature_usage` / `server-feature-limits` / anon localStorage meter modules.

## Does not own

- Chat tool kills (5)
- Hevy export gate component (7)
- Type renames (8–10)

## Contract

- C6 for these surfaces; C7 auth + metering remain

## Context that is easy to miss

- Root `layout` metadata, sitemap, or middleware redirects to `/pricing` or `/programs` must be cleared or build/nav breaks
- Stripe env vars can remain in `.env.example` as optional comments; do not commit secrets
- Pre-commit `npm run build` must succeed after Payload removal — that is part of Done when

## Done when

- `npm run build` succeeds without Payload/blog/pricing/vault routes
- Auth login/sign-up still reachable
- Metering modules still importable from chat route

## Out of scope

- Dropping Supabase entirely
- Renaming DB tables
