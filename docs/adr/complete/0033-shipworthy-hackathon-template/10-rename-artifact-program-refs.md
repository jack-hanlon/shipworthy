# Sub-plan 10 - Rename artifactProgram refs

Parent: [0033](./index.md) · Index: [plan.md](./plan.md)

**Sweep remaining kept-path identifiers** (`hevyProgram`, promo types, dialog unions) after types + DayCard renames.

## Purpose

Runtime and builder state speak **Chat artifact**, not Hevy, on the kept surface.

## Owns

Multiple commits by directory:

- `hevyProgram` → `artifactProgram` (props, chat body, React state) in builder + `/api/chat` request typing
- `THevyDialog` / `THevyCard` / leftover ambient UI types if still present after 8–9
- `IIsHevyContextType` — delete with provider (should be gone in 7) or rename if a stub remains
- Test fixtures using `hevyProgram` keys

Avoid renaming string keys required by external Hevy HTTP payloads in deleted code. If any Hevy API client remains only for exercise catalog and is still referenced, leave wire payload types named for the HTTP API or delete the client if unused after `getExerciseList` removal.

## Does not own

- DB columns
- ADR docs under `docs/adr/complete/` historical text

## Contract

- C8 complete for kept runtime paths

## Context that is easy to miss

- Client chat `body` field names may be read by tests and by `route.ts` — rename both sides in the same commit
- localStorage keys that say `hevy` — rename only if documented; migrating user drafts is not required for a template wipe

## Done when

- `rg "hevyProgram|THevyRoutine|HevyDayCard" --glob '!docs/adr/**' --glob '!src/hooks/supabase.ts'` is clean (allow `hevy_exercise_templates` SQL/type gen fossils)
- `npm run test:ci` green for affected suites

## Out of scope

- Editing generated `src/hooks/supabase.ts`
