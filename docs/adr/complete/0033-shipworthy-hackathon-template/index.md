# Shipworthy hackathon template

**Status:** accepted  
**Domain glossary:** `CONTEXT.md` (**Shipworthy**, **Agent**, **Chat artifact**, **Artifact day**, **New arrival**, **Arrival**, **Dispatch**, **Artifact CRUD tools**, **Questionnaire gate**)  
**Sub-plans:** [plan.md](./plan.md)  
**Handoff:** Residual verify and remaining fitness-builder cleanup live in [ADR 0034](../../0034-fitness-strip-artifact-crud/index.md). Do not reopen slices here.  
**Does not change:** Auth + Free metering RPCs/localStorage caps; Supabase as the data plane; dual-pane chat + grid shell; DB `hevy_*` table/column names (fossils — no renames in this ADR)

This checkout was a Proxima clone gutted into a Shipworthy hackathon template (then copied to `hackathon_template` by the operator). Keep the hero chat → builder **Chat artifact** loop and the agent stack. Strip fitness product peripherals and domain-coach tools.

## Decisions

- **Template brand is Shipworthy.** Hero name, subtitle (“Chat that builds a structured artifact.”), placeholder (“Ask the agent to …”), agent display name **Agent** (not Andy / Proxima). No Proxima logos or product images on kept surfaces.
- **Landing is hero-only.** Delete marketing bands below the hero and the footer host on `/`. Remove the dark-mode WebGPU hero star; document its stack in sub-plan 12 for a future different FX (do not rebrand the old star).
- **Chat artifact stays the week/day grid for now.** No new artifact shape in this ADR. First-fill may be broken; accepted.
- **Chat tool keep-set (as of this ADR):** skill sandbox (`loadSkill`, `readFile`, `bash`) + **Questionnaire gate** (`getMoreInfoQuestions`). Gate UI stays registered but is **not** forced in instructions. `mutateProgram` / `readProgram` are **removed**. Generic Artifact CRUD returns in ADR 0034.
- **Kill domain tools:** `buildProgram`, `getExerciseList`, `importHevyShareFolder`, `fetchHevyShareFolder`, `openHevyExportGate`, `updateConstraintProfile`, `updateTrainingProfile`, `rateProgram`, `getWorkoutHistory`, `getBodyMeasurements`. Drop related prompt inject for Agentic memory / body measurement.
- **One stub skill:** `mutate-artifact` (domain-neutral). No `build-program` skill.
- **Product strip:** remove or unlink pricing/Stripe UI, program vault, profile/workout history, Payload blog/admin, Public API + `/developers`, Hevy sync/export chrome, marketing routes (`/about`, `/proxima-app`, `/waitlist`, `/download`, …). Keep auth pages and metering.
- **Rename kept TS/UI surface** off Hevy fossils (`THevyRoutine` → artifact/day types, `HevyDayCard` → `DayCard`, `hevyProgram` → `artifactProgram`, …). Delete sync/export types with the Hevy strip. **Do not** migrate DB `hevy_*` names in this ADR.
- **`CONTEXT.md`** is the Shipworthy template glossary (already replaced; may read ahead of runtime until 0034 finishes).

## Considered options

- **New repo from scratch.** Rejected. This clone is the starting point; operator copies to `hackathon_template` afterward.
- **Keep fitness `buildProgram` + catalog as the working demo.** Rejected. Template must not ship a bodybuilding coach brain.
- **Thin `seedArtifact` / keep `getExerciseList` so the grid fills.** Rejected for this ADR; empty/broken grid is fine until a later pass.
- **Chat-only builder (no right pane).** Rejected. The dual-pane artifact loop is the template’s point.
- **Nuclear anon-only (no Supabase auth).** Rejected. Keep auth + metering for extenders.
- **Rename DB schema in the same pass.** Rejected. Types/UI only; schema fossils stay until a later ADR.
- **Leave Hevy type names in code.** Rejected. Neutral names on the kept surface so attendees do not think they must integrate Hevy.
- **Keep the Proxima WebGPU star / logos as “atmosphere.”** Rejected. Template must not ship Proxima product art; document the FX stack instead of rebranding the star.

## Consequences

- Slices 1–10 and 12 shipped. Slice 11 (README/verify/green build) was **not** finished here; it is absorbed by ADR 0034 after an aggressive mid-flight delete of fitness APIs and shared helpers left callers and tests broken.
- New arrival auto-send still hits `/api/chat`, but nothing lands a first grid without Artifact CRUD; demo may look chat-only until 0034.
- ADR 0021 / 0022 / 0027 / 0030 First-build and Hevy-share surfaces are **out of product** in this template; do not “fix” them here—delete call sites.
- Generated `src/hooks/supabase.ts` may still mention `hevy_*`; do not hand-edit—leave until a schema ADR.
- Runtime may still show `/build-program`, exercise/set Day cards, Soft-fail, or Agentic memory peek until 0034’s strip+rename slice. Glossary already describes the post-0034 target; treat that lag as expected.

## Contracts

| # | Invariant |
|---|-----------|
| C1 | `/` renders hero Prompt only (no CredibilityBand, YouTube, How-it-works, Reddit mosaic, Edit CTA, footer on home) |
| C2 | Visible brand strings on hero/placeholder/agent chrome use Shipworthy / Agent generics; no Andy or Proxima Fitness product copy on those surfaces |
| C3 | Chat tool registry keep-set after this ADR is exactly: `loadSkill`, `readFile`, `bash`, `getMoreInfoQuestions` (CRUD returns in 0034; no Pro-gated history/measurement tools) |
| C4 | System prompt does not steer the agent to open the questionnaire before mutate; does not teach killed tools |
| C5 | `.agents/skills/mutate-artifact/SKILL.md` exists; no fitness `build-program` skill required |
| C6 | Pricing/Stripe upgrade UI, Payload blog/admin routes, Public API v1, program vault, profile history, Hevy export/sync builder chrome, and listed marketing routes are gone or unlinked from nav |
| C7 | Auth routes and Free metering paths remain |
| C8 | Kept ambient/UI symbols for the grid use Artifact/Day/Week names; no `THevyRoutine` / `HevyDayCard` / `hevyProgram` in kept runtime paths |
| C9 | No migration renames `hevy_*` tables/columns in this ADR |
| C10 | `CONTEXT.md` matches Shipworthy glossary terms used in this ADR |
| C11 | Kept UI has no Proxima logo/image assets and no `proxima-star` / `ProximaStarCanvas*`; former WebGPU/`vgpu` hero FX stack is documented in sub-plan 12 |
