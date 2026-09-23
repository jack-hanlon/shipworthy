# Sub-plan 6 - Neutral prompt and mutate-artifact skill

Parent: [0033](./index.md) · Index: [plan.md](./plan.md)

**Agent brain matches the template.** Questionnaire exists as a primitive; instructions must not force it.

## Purpose

System prompt is domain-neutral **Agent** teaching for Artifact CRUD. Stub skill `mutate-artifact` replaces fitness skills.

## Owns

- `src/app/api/chat/instructions/instructions.ts` — rewrite: Agent identity, keep-set tools only, no forced questionnaire, no Hevy/export/history/periodization teaching
- `src/app/api/chat/route.ts` — drop Agentic memory / body measurement inject into `instructions(...)` if still present; skill discovery still loads `.agents/skills`
- `.agents/skills/mutate-artifact/SKILL.md` — create (frontmatter `name`/`description`/`allowedTools` = sandbox; not questionnaire-required; note future `readArtifact` / mutate)
- Do **not** add `build-program` skill
- `src/app/api/chat/__tests__/instructions.test.ts` — rewrite expectations
- `src/app/api/chat/__tests__/constraint-persist-skill-scope.test.ts` (or delete/replace) — align with new always-available + skill allowlist
- Optional: thin `instructions` helper excerpt file if rewrite needs split for clarity (counts toward cap)

## Does not own

- Tool registry changes (5, already done)
- Questionnaire UI component redesign (keep as-is)
- Renaming `mutateProgram` tool id (keep wire name; glossary says Artifact CRUD)

## Contract

- C4, C5

## Context that is easy to miss

- Q20: tool stays registered; prompt must not say “call getMoreInfoQuestions before building”
- Skill `allowedTools` intersection still unions `ALWAYS_AVAILABLE_CHAT_TOOLS`
- Tests that snapshot long Andy/Hevy prompt strings will fail en masse — update or delete obsolete cases, do not keep fitness assertions

## Done when

- `rg "Andy|buildProgram|getExerciseList|Hevy export|periodization|open the questionnaire before" src/app/api/chat/instructions/instructions.ts` is clean (or only historical comments you intentionally removed)
- `.agents/skills/mutate-artifact/SKILL.md` exists and is discovered
- Instructions vitest green

## Out of scope

- Changing Questions UI copy to non-fitness (optional later); stripping agent *steering* is enough
