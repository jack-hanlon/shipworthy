# Sub-plan 7 - Prompt and skill

Parent: [0034](./index.md) · Index: [plan.md](./plan.md)

**Teach only Artifact CRUD + sandbox; rewrite `mutate-artifact`.**

## Purpose

Instructions and skill match C11; no fitness coach brain.

## Owns

- `src/app/api/chat/instructions/instructions.ts` — domain-neutral Agent prompt: `readArtifact` / `mutateArtifact` / sandbox / optional questionnaire; delete buildProgram, Hevy, periodization, profiles, Soft-fail, weight-unit coach rules
- `.agents/skills/mutate-artifact/SKILL.md` — document real CRUD + op list + read-before-mutate; allowlist tools including `readArtifact` / `mutateArtifact` as appropriate
- Delete leftover fitness skills if any reappear
- Rewrite `instructions` / skill-scope tests for the new keep-set

## Does not own

- Tool implementation (5)
- README clone docs (8)

## Contract

- C11 (and C2/C4 via prose)

## Context that is easy to miss

- Do **not** instruct the agent to force the Questionnaire gate before mutate
- New arrival: agent may leave the grid empty; that is OK for the template
- Proposal voice rules stay (no past-tense “I've updated” before Accept)

## Done when

- Vitest instructions suite asserts CRUD tools present and fitness tools absent
- Skill file no longer says “CRUD not registered yet”

## Out of scope

- New coaching persona for a non-fitness domain
