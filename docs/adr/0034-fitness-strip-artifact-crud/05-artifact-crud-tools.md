# Sub-plan 5 - Artifact CRUD tools

Parent: [0034](./index.md) · Index: [plan.md](./plan.md)

**Register `readArtifact` and `mutateArtifact` on the chat agent.**

## Purpose

Tool keep-set matches C2; ops match C3. Agent can build the grid when appropriate.

## Owns

- `src/app/api/chat/tools/tools.ts` — add `readArtifact` + `mutateArtifact`; keep sandbox + `getMoreInfoQuestions`
- `src/app/api/chat/always-available-tools.ts` — align allowlist with C2
- Implement `readArtifact` from request-start artifact snapshot
- `mutateArtifact` applies slice-3 registry; proposal path unchanged in spirit
- Client land paths: MessageBubbles / chat hooks handle mutate proposals for the new tool name (not `mutateProgram` / `buildProgram`)
- Tests: tools keep-set; read/mutate happy paths with mock artifact JSON
- Delete any remaining `read-program` / `mutateProgram` fossils

## Does not own

- Full system prompt rewrite (7)
- Questionnaire catalog content (6)

## Contract

- C2, C3

## Context that is easy to miss

- Same-turn **read before mutate** targeting docs belong in tool description + skill (7)
- No Soft-fail stash on the tool context
- Empty artifact: first mutate may land immediately (no proposal) — match prior first-build vs proposal rules only where they still make sense without fitness First-build

## Done when

- `rg` on tools registry shows exactly C2 names
- Vitest tools suite green

## Out of scope

- Forcing questionnaire before mutate
