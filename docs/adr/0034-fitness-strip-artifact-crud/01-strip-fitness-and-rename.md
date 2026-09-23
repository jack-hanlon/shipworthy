# Sub-plan 1 - Strip fitness residue and rename

Parent: [0034](./index.md) · Index: [plan.md](./plan.md)

**Delete the remaining workout programming brain and broken callers. Keep a hollow dual-pane shell under `/dashboard` + `artifact-builder`.**

## Purpose

The template must not ship Soft-fail, Agentic memory peek, exercise/set Day cards, fitness mutation ops, or `build-program` / `program-builder` naming. Mid-flight deletes already removed many APIs; this slice finishes the strip so later slices are not editing dead fitness surfaces (C6–C9, C15–C16).

## Owns

Delete (prefer delete over rewrite), including tests that import deleted modules:

- Soft-fail / program-sanity / Program stalemate modules and UI (`soft-tool-failure*`, sanity bags, stalemate cards, MessageBubbles Soft-fail branches)
- Agentic memory peek UI + lib (`AgenticMemoryPeek*`, inject helpers still present)
- Fitness mutation registry (exercise/set/superset/Hevy-normalize/validateProgram ops and their tests)
- Exercise/set Day card guts and related pickers/formatters; leave hollow Day card / week grid chrome that compiles with empty content
- Callers of already-deleted modules (`program-builder/utils/helpers`, `ProgramMutationContext`, `PoundsOrKgContext`, `ProfilePictureContext`, `form-options`, chat `constraints`, etc.) — remove the caller or the dependency graph, **do not** add empty stub files
- Fitness questionnaire selection / training-profile / constraint catalogs (stub catalog comes in slice 6; compile-breaking fitness imports go now)
- Orphan product copy (`HowItWorksSteps` Andy/Program copy, unused marketing leftovers)
- Fossil `read-program.ts` if still present without a replacement yet (CRUD lands in slice 5)
- Stale fitness query keys / hooks that only served deleted APIs
- Local `supabase/functions/hevy-program-sync` copy and Hevy-only seed files (e.g. `seed-hevy-warmups.sql`); update start scripts that assume those seeds if needed
- Empty leftover dirs (`program-builder/api/`, etc.)

Rename in the same pass:

- `src/app/(app)/(with-toolbar)/build-program/` → `.../dashboard/`
- Surviving entry modules: `BuildProgram*` → `Dashboard*`, `use-build-program-chat` → `use-dashboard-chat` (and similar)
- `src/components/program-builder/` survivors → `src/components/artifact-builder/`
- Path constants / Prompt dispatch / middleware / analytics strings off `/build-program`
- Redirect `/build-program` → `/dashboard` **or** delete old path and fix links — either is fine if no nav still points at the old name

## Does not own

- `artifacts` table (2)
- New item/day/week mutation registry (3)
- Rendering Artifact item rows inside Day cards (4) — hollow empty columns are enough here
- Registering `readArtifact` / `mutateArtifact` (5)
- Domain-neutral questionnaire stub content (6)
- Full prompt/skill CRUD teaching (7)
- SQL `DROP` of fitness tables (forbidden without explicit operator permission)

## Contract

- C6, C7, C8, C9, C15, C16

## Context that is easy to miss

- Working rules: no empty stubs; delete tests with deleted sources; no DROP migrations
- Hollow grid: dual pane must still load; Day cards may show empty days/weeks
- `rg` for `build-program|BuildProgram|program-builder|ProgramBuilder` under `src/` should be clean except an intentional redirect file if kept
- Do not hand-edit generated `src/hooks/supabase.ts`
- Leaving unused fitness tables in Postgres is required (C13)

## Done when

- `npm run build` no longer fails on missing fitness modules (because callers are gone, not stubbed)
- Kept routes use `/dashboard`; kept UI lives under `artifact-builder/`
- Soft-fail, Agentic memory peek, and exercise/set mutation ops are gone from kept paths
- Hevy edge-function copy and Hevy-only seeds are gone from the repo

## Out of scope

- Filling the grid with Artifact items (4)
- Durable persistence (2)
