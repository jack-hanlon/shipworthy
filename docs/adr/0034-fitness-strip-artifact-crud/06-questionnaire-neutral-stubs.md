# Sub-plan 6 - Questionnaire neutral stubs

Parent: [0034](./index.md) · Index: [plan.md](./plan.md)

**Keep the gate UI; replace the fitness question catalog.**

## Purpose

Questionnaire remains a template hook without Training profile / constraint / program-format questions (C10). Fitness catalog imports should already be gone from slice 1; this slice ships the stub content.

## Owns

- Replace `sampleQuestions*` / selection in `questionnaire-gate/**` with a tiny domain-neutral stub set (e.g. artifact title, audience) — or empty + one optional stub
- Delete any remaining training-profile ask detection and program-format missing-field logic
- Tool copy in `getMoreInfoQuestions`: no Training profile / killed profile-write guidance
- Update gate UI bindings if question ids change
- Rewrite or delete selection tests

## Does not own

- Prompt “when to open gate” prose (7) beyond what blocks compile
- Profile persistence tools (already killed)

## Contract

- C10

## Context that is easy to miss

- Default template still should **not** force the gate open; stubs exist for extenders and rare clarify turns
- Answers may still ride on the next chat body; do not write Agentic memory tables

## Done when

- Selection tests assert stub ids only
- No `days-per-week` / training-profile question ids in kept catalog

## Out of scope

- Agent-authored arbitrary question lists (ADR 0023 app-owns-list stays)
