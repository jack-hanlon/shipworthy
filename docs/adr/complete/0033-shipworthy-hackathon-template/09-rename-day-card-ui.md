# Sub-plan 9 - Rename DayCard UI

Parent: [0033](./index.md) · Index: [plan.md](./plan.md)

**File and component renames under `program-builder` for the kept grid UI.**

## Purpose

**Artifact day** UI is `DayCard` (etc.), not `HevyDayCard`.

## Owns

Multiple commits only if needed; ~22 `Hevy*` UI files.

**Priority renames**

| Old file / symbol | New |
|-------------------|-----|
| `HevyDayCard` | `DayCard` |
| `HevyColumn` | `ArtifactColumn` or `DayColumn` |
| `HevyRoutine` / `HevyRoutineCard` | `ArtifactDay` / `DaySummaryCard` (pick one scheme and stick to it) |
| Dialogs `HevyAddExerciseDialog`, … | drop `Hevy` prefix |

Rename all kept `Hevy*` UI files and update imports/tests in one pass. Split only if review needs a seam.

Do not chase dead export/PDF/Hevy promo components if slice 7 should have deleted them — delete instead of rename if unused.

## Does not own

- Ambient type renames (8, done)
- `hevyProgram` state name across chat hooks (10)
- Mutations catalog op names (`insert_exercise`, …) — keep

## Contract

- C8 for DayCard UI symbols/paths

## Context that is easy to miss

- Git `git mv` preserves history; update barrel `index.ts` exports in the same commit as the move
- Screenshot/gif paths and `HevyExerciseGif` — rename or delete if Hevy CDN coupling is unwanted; prefer rename prefix only

## Done when

- `rg "HevyDayCard|hevy/Hevy" src/components/program-builder --glob '!**/api/**'` is clean for UI component names
- Builder grid still renders (empty grid OK)

## Out of scope

- Visual redesign of cards
- Changing card sizing for a future artifact (explicit later work)
