# Sub-plan 3 - Artifact mutation registry

Parent: [0034](./index.md) · Index: [plan.md](./plan.md)

**Add week/day/item mutation ops. Fitness registry should already be gone (slice 1).**

## Purpose

`mutateArtifact` needs a typed, fail-all op catalog with no exercise/set semantics (C3–C4).

## Owns

- New registry under `src/components/artifact-builder/mutations/` (zod schemas + handlers + `applyOperations`) for ops only:
  - `set_title`
  - `add_week` / `delete_week`
  - `add_day` / `delete_day` / `rename_day`
  - `upsert_item` / `delete_item` / `reorder_items`
- Wire **ArtifactMutationContext** (or equivalent) / undo / proposal apply path to the new registry
- Ambient / shared types for artifact JSON + **Artifact item** (align with `CONTEXT.md` and slice 4)
- Tests for apply/reorder/delete for items and days

## Does not own

- Day card visual item rows beyond what the new types force (4)
- Tool registration (5)
- Soft-fail (should already be deleted in 1)

## Contract

- C3, C4

## Context that is easy to miss

- Keep Accept/Reject **Mutation proposal** behavior for standalone batches on a non-empty artifact
- Fail-all batch semantics stay
- Ordinary errors / thrown validation only — no Soft-fail return channel
- If any fitness op files survived slice 1, delete them here; do not port them

## Done when

- Vitest covers apply/reorder/delete for items and days
- `rg "weight_kg|exercise_template_id|update_set|insert_exercise|swap_exercise" src/components/artifact-builder/mutations` is clean

## Out of scope

- Outline/board artifact shapes
