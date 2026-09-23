# Sub-plan 8 - Rename ambient grid types

Parent: [0033](./index.md) · Index: [plan.md](./plan.md)

**Neutral names for the kept Chat artifact shape in ambient globals.** DB unchanged (C9).

## Purpose

`CONTEXT.md` **Artifact day** / grid types are not Hevy-branded in `@types`.

## Owns

Mechanical rename across the kept surface. Prefer one pass; split commits only if review needs a seam.

**Suggested mapping (lock in first commit’s PR note):**

| Old | New |
|-----|-----|
| `THevyRoutine` | `TArtifactDay` |
| `THevyExercise` | `TArtifactExercise` |
| `THevySets` | `TArtifactSet` |
| `THevyRepRange` | `TArtifactRepRange` |
| `hevyRoutineId` field | `artifactDayId` or keep id field neutral |
| `TGenericDay` alias | point at `TArtifactDay` |

**Commit A**

- `@types/global.d.ts` — renames + update aliases (`TGenericDay`, card/dialog aliases if they alias Hevy types)
- One hub module that re-exports or heavily uses them (if any)

**Commits B+**

- Update import-free ambient usages by directory batches of ≤8 production files + ≤2 test files per commit (e.g. `src/api/`, then `src/app/api/chat/`, then `src/components/program-builder/mutations/`)
- Prefer `rg` + project-wide rename tooling; do not expand into UI file renames (`HevyDayCard.tsx`) — that is slice 9

## Does not own

- Renaming component files `HevyDayCard.tsx` (9)
- Renaming `hevyProgram` React state variable (10) unless it is the same symbol as a type — coordinate to avoid half-renames
- DB / `supabase.ts` (C9)

## Contract

- C8 for ambient type names; C9 no migrations

## Context that is easy to miss

- `exercise_template_id` and `folder_id` (week index) may stay as field names — they are shape fossils, not product brand. Optional rename is out of scope unless needed for compile.
- Delete unused Hevy sync ambient types (`THevyWorkout*`, body measurement Hevy types) when no remaining references

## Done when

- `rg "THevyRoutine|THevyExercise|THevySets" --glob '!docs/adr/**'` is clean in runtime/types
- `tsc` / vitest for touched packages green

## Out of scope

- `HevyDayCard` path rename
- Schema migrations
