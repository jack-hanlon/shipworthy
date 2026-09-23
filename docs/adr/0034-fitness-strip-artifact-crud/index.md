# Fitness strip + Artifact CRUD

**Status:** accepted  
**Depends on:** [ADR 0033](../complete/0033-shipworthy-hackathon-template/index.md) (accepted under `docs/adr/complete/`)  
**Domain glossary:** `CONTEXT.md` (**Shipworthy**, **Agent**, **Chat artifact**, **Artifact day**, **Artifact item**, **New arrival**, **Arrival**, **Dispatch**, **Artifact CRUD tools**, **Questionnaire gate**, **Soft-fail**)  
**Sub-plans:** [plan.md](./plan.md)  
**Does not change:** Auth + Free metering; Supabase as the data plane; dual-pane chat + week/day grid layout; Accept/Reject mutation proposal plumbing; unused fitness / `hevy_*` **table presence** (fossils — **no DROP or rename migrations** in this ADR unless the operator explicitly requests them)

After 0033 neutralized brand and killed coach tools, an aggressive mid-flight delete removed most fitness APIs and shared helpers while leaving the workout builder brain, Soft-fail, Agentic memory peek, and `/build-program` / `program-builder` names. **0034** finishes that strip, retires those names, keeps a hollow week/day grid shell, then wires durable JSON **Chat artifact** persistence and **Artifact CRUD tools**.

`CONTEXT.md` already describes the post-0034 target. Runtime lag until these slices ship is expected; do not snap the glossary backward.

## Decisions

- **0033 is complete.** Residual verify and leftover fitness-builder cleanup live here. C1 (0033 under `complete/`) is satisfied.
- **Slice 1 is a full strip + rename.** Delete remaining fitness UI/brain and every caller of already-deleted modules. Move route to `/dashboard`, folder to `artifact-builder/`, entry symbols to `Dashboard*`. No kept path may retain `build-program` / `BuildProgram` / `program-builder` / `ProgramBuilder` product naming.
- **Hollow week/day grid shell stays** after the strip (empty Day card chrome; no exercises/sets). Dual-pane template remains visible while persistence and CRUD land. Artifact-item rendering is a later slice.
- **No empty file stubs** to resolve compile errors. Prefer delete callers and dead tests.
- **If a source file is deleted, delete tests that rely on it.** Prefer delete over rewrite when the surface is gone.
- **Never DROP or destructively migrate fitness / `hevy_*` tables** in this ADR without explicit operator permission. Deleting repo files (edge function copy, Hevy seed SQL) is allowed; SQL `DROP` is not.
- **Delete filesystem fossils:** local `supabase/functions/hevy-program-sync` copy and Hevy warmup/exercise seed files used only for the old product. Migrations that create unused tables stay.
- **Artifact days hold Artifact items** — `{ id, title, notes? }` only. No exercises, sets, reps, RPE, `weight_kg`, or Hevy template ids in kept UI, ops, or JSON.
- **Persistence:** new user-owned `artifacts` table with a single JSON document column (plus id, user id, timestamps, optional title denorm). App never reads/writes fitness tables after this ADR.
- **Artifact CRUD keep-set:** `readArtifact`, `mutateArtifact`, skill sandbox (`loadSkill`, `readFile`, `bash`), `getMoreInfoQuestions`.
- **`mutateArtifact` ops (fail-all batches):** `set_title`, `add_week`, `delete_week`, `add_day`, `delete_day`, `rename_day`, `upsert_item`, `delete_item`, `reorder_items`. Standalone mutates on a non-empty artifact keep **Mutation proposal** Accept/Reject.
- **New arrival unchanged in spirit:** agent starts a chat session; creates/edits the artifact via CRUD only when appropriate. No client-seeded empty durable row on arrival.
- **Questionnaire gate:** keep UI + tool; replace catalog with tiny domain-neutral stubs. Delete training-profile / constraint / program-format selection logic.
- **Soft-fail is out of product.** Ordinary tool errors only. Do not retarget Soft-fail onto neutral artifacts.
- **Agentic memory** stays out of the default template (peek UI and inject paths deleted with the strip).

## Considered options

- **Finish 0033 verify on a half-deleted workout brain, then start 0034.** Rejected. Restoring deleted helpers only to delete them again wastes work; the keep-grid-with-fitness-brain checkpoint is already broken.
- **Narrow compile-unbreak (stubs or tiny restores).** Rejected. No empty stubs; delete callers and tests instead.
- **Late `/dashboard` + `artifact-builder` rename after CRUD.** Rejected. Operator does not want `build-program` / `program-builder` names left in kept paths.
- **Delete Day card / grid entirely until CRUD.** Rejected. Keep a hollow dual-pane shell.
- **Chat-only builder until CRUD.** Rejected (same as 0033).
- **Swap to outline/card-board/JSON viewer in the same ADR.** Rejected. Keep day-card chrome; reshape later.
- **Client-ephemeral artifact only (no `artifacts` table).** Rejected. Extenders need a durable pattern; JSON blob is enough.
- **Normalized `artifact_days` / `artifact_items` tables.** Rejected for this ADR; JSON document is easier to reshape later.
- **Reuse `programs` rows as the parent.** Rejected. Touches fitness table names in the happy path.
- **Drop fitness tables in 0034.** Rejected. Leave unused; drop only with explicit operator permission in a later ADR.
- **Apply mutates immediately (no proposals).** Rejected. Proposal plumbing is part of the agent+artifact teaching surface.

## Consequences

- 0033 contract **C3** (no read/mutate CRUD) is **superseded** for the post-0034 template: CRUD returns as domain-neutral `readArtifact` / `mutateArtifact`.
- Empty hollow grid on New arrival remains until the agent mutates; accepted for a domain-free template.
- Generated `src/hooks/supabase.ts` gains `artifacts` via `supabase gen types` after the migration; still may mention unused `hevy_*` — do not hand-edit.
- Large test deletions are expected and required when their source surface is deleted.
- 0033 verify checklist items that still apply are re-checked in this ADR’s verify slice.

## Working rules (all slices)

1. **No empty stub files** to silence import errors.
2. **Delete tests with deleted sources.**
3. **No SQL `DROP` / destructive fitness-schema migrations** without explicit operator permission.
4. Prefer **delete** over rewrite when a fitness surface is gone.

## Contracts

| # | Invariant |
|---|-----------|
| C1 | ADR 0033 is under `docs/adr/complete/` (satisfied when this ADR opens) |
| C2 | Chat tool registry keep-set is exactly: `readArtifact`, `mutateArtifact`, `loadSkill`, `readFile`, `bash`, `getMoreInfoQuestions` |
| C3 | `mutateArtifact` op literals are only the Decision list; no exercise/set/RPE/Hevy ops in the kept registry |
| C4 | Day card / grid JSON model uses **Artifact items** only (no exercise/set fields in kept runtime paths) |
| C5 | User-owned `artifacts` table exists; app artifact persistence goes only there |
| C6 | Kept app code does not read/write fitness tables (`programs`, `schedule_workouts`, `program_workout_exercises`, `hevy_*`, workout history, …) |
| C7 | No Soft-fail / program-sanity / Program stalemate modules or UI in kept paths |
| C8 | Builder URL is `/dashboard`; no primary nav to `/build-program`; no kept `BuildProgram*` entry symbols |
| C9 | Surviving builder UI lives under `src/components/artifact-builder/`; no kept `program-builder/` path |
| C10 | Questionnaire catalog is domain-neutral stubs only; no training-profile / constraint / days-per-week fitness questions |
| C11 | System prompt + `mutate-artifact` skill teach `readArtifact` / `mutateArtifact` only — no killed fitness tools, no Soft-fail |
| C12 | Auth routes and Free metering paths remain |
| C13 | No migration drops or renames unused fitness / `hevy_*` tables in this ADR |
| C14 | `CONTEXT.md` matches Shipworthy terms used in this ADR |
| C15 | No Agentic memory peek / inject / profile-write paths in kept template runtime |
| C16 | Local Hevy edge-function copy and Hevy-only seed files are gone from the repo (DB table fossils may remain) |
