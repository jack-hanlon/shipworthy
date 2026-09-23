# Sub-plan 7 - Strip Hevy builder chrome

Parent: [0033](./index.md) · Index: [plan.md](./plan.md)

**Remove Hevy sync/export/share UI from the builder shell** now that tools are gone.

## Purpose

Builder does not show export gates, Hevy key prompts, or share-import affordances.

## Owns

- `src/components/program-builder/shared/agent/HevyExportGate.tsx` (+ test) — delete; remove imports from `Agent.tsx` / `Chat.tsx`
- `src/components/program-builder/shared/agent/hevy-export-gate.ts` if present — delete
- `IsHevyProvider` / Hevy context wiring in builder layout — remove or stub only if it blocks compile after deletes (keep file count honest)
- Share-import UI branches in `MessageBubbles.tsx` if any remain after slice 5
- Toolbar Save/Export labels that still say Export-to-Hevy — point at Save-only or generic save
- One builder layout file that mounts the gate

If the gate plus Agent wiring is large, still delete leftover Hevy promo/export banners under `program-builder` in the same slice.

## Does not own

- Ambient type rename (8)
- `HevyDayCard` file rename (9)
- Edge function folder cleanup (optional note in slice 11)

## Contract

- C6 for builder Hevy chrome

## Context that is easy to miss

- ADR 0021/0022 UI should be deleted, not “fixed”
- Profile Week Export is already gone with slice 4 profile route — do not reintroduce

## Done when

- `rg "HevyExportGate|openHevyExportGate|IsHevyProvider" src/components/program-builder` is clean (or only DayCard files awaiting rename)
- Builder loads without export gate footer

## Out of scope

- Renaming DayCard components
