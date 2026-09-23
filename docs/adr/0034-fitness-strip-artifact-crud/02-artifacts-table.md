# Sub-plan 2 - Artifacts table

Parent: [0034](./index.md) · Index: [plan.md](./plan.md)

**Add durable JSON Chat artifact storage. Do not use fitness tables.**

## Purpose

Extenders get a real persistence pattern. App artifact I/O goes only to `artifacts` (C5–C6).

## Owns

- New Supabase migration: `public.artifacts` with at least `id`, `user_id` → `public.users (id)`, JSON document column (weeks/days/items shape), timestamps; optional denormalized `title`
- RLS: owner read/write only (match existing user-owned table patterns)
- Server/browser API module(s) to load/save artifact JSON by id / current user session — **no** imports of fitness prescription/history/Hevy helpers
- Regenerate types: `npx supabase gen types --lang=typescript --local` (do not hand-edit `src/hooks/supabase.ts`)

## Does not own

- Mutation op handlers (3)
- Chat tools (5)
- Route/folder rename (already 1)

## Contract

- C5, C6, C13

## Context that is easy to miss

- JSON document should be able to represent: `{ title, weeks: [{ days: [{ id, title, items: [{ id, title, notes? }] }] }] }` (exact field names may match ambient types from slices 3–4)
- FK to **`public.users (id)`**, not `auth.users`
- Leaving `programs` / `hevy_*` in the DB is required (C13); just stop calling them from kept app code
- **No DROP** of fitness tables

## Done when

- Migration applies on local Supabase
- Types include `artifacts`
- A minimal unit or route test can insert/read JSON without touching fitness tables

## Out of scope

- Migrating existing `programs` rows into `artifacts`
