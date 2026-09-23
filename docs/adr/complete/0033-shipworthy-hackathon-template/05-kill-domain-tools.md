# Sub-plan 5 - Kill domain tools

Parent: [0033](./index.md) · Index: [plan.md](./plan.md)

**Shrink the chat tool registry to Artifact CRUD + questionnaire + sandbox.** Client must not expect `tool-buildProgram` lands.

## Purpose

Agent cannot call fitness-domain tools. Keep-set matches C3.

## Owns

Expect **2 commits** if tests + tools.ts exceed the cap.

**Commit A — registry**

- `src/app/api/chat/tools/tools.ts` — remove killed tools; stop registering Pro-gated history/measurement tools
- `src/app/api/chat/always-available-tools.ts` — keep-set only: sandbox trio + `getMoreInfoQuestions` (drop export gate, share fetch/import, profile updates)
- Delete or gut now-unreferenced modules:
  - `src/app/api/chat/tools/workout-history.ts`
  - `src/app/api/chat/tools/body-measurements.ts`
  - `src/app/api/chat/tools/hevy-share.ts`
- `src/app/api/chat/route.ts` — stop injecting latest body measurement / constraint-training merge **only if** that is required for compile after tool removal; prefer leaving merge dead code for slice 6 if it keeps this slice focused on tools

**Commit B — client land paths + tests**

- `src/components/program-builder/shared/agent/MessageBubbles.tsx` (or helpers) — remove `tool-buildProgram` / share-import commit branches
- `src/app/(app)/(with-toolbar)/build-program/use-build-program-chat.ts` — drop types/checks for killed tools if present
- `src/app/api/chat/__tests__/tools.test.ts` — delete or rewrite suites for killed tools; assert keep-set
- One more focused test file if needed for always-available list

## Does not own

- Rewriting full system prompt (6)
- Creating `.agents/skills` (6)
- Export gate React component deletion (7)

## Contract

- C3 keep-set

## Context that is easy to miss

- Killed: `buildProgram`, `getExerciseList`, `importHevyShareFolder`, `fetchHevyShareFolder`, `openHevyExportGate`, `updateConstraintProfile`, `updateTrainingProfile`, `rateProgram`, `getWorkoutHistory`, `getBodyMeasurements`
- Kept (final C3 after operator trim): `loadSkill`, `readFile`, `bash`, `getMoreInfoQuestions`
- Operator later killed `mutateProgram` / `readProgram` as well (generic artifact; recipe kept in `read-program.ts` for future `readArtifact`)
- `buildProgram` sanity/periodization modules may become unused — delete in this slice if unused; otherwise leave orphans for slice 7/11 `rg` cleanup
- Soft-fail / stalemate UI tied only to First build may break tests; fix or delete those tests here

## Done when

- `rg "buildProgram|getExerciseList|openHevyExportGate|getWorkoutHistory|getBodyMeasurements|rateProgram|importHevyShareFolder|fetchHevyShareFolder|updateConstraintProfile|updateTrainingProfile" src/app/api/chat/tools/tools.ts src/app/api/chat/always-available-tools.ts` shows no registrations
- Vitest tools suite green for keep-set

## Out of scope

- Neutral prompt prose
- Ambient type rename
