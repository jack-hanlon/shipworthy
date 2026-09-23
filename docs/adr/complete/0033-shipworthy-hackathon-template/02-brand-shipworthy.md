# Sub-plan 2 - Brand Shipworthy

Parent: [0033](./index.md) · Index: [plan.md](./plan.md)

**Visible strings on the hero and chat placeholder.** Not a repo-wide Proxima purge (later slices delete dead marketing).

## Purpose

First viewport and prompt placeholder read as Shipworthy / Agent, not Proxima / Andy.

## Owns

- `src/components/program-builder/shared/Prompt.tsx` — logo alts, subtitle, preview alts; product name Shipworthy
- `src/components/landing/RotatingHeroTagline.tsx` — replace fitness/space taglines with generic template lines (or a single static headline if rotation is overkill)
- `src/hooks/useTypewriterPlaceholder.ts` — `Ask the agent to `
- Optional: small shared brand constant file if it prevents string drift (counts toward cap)
- Tests tied to placeholder / tagline strings

## Does not own

- Agent system prompt identity (6)
- Sidebar / metadata `title` in root layout (touch if required for C2; else note follow-up in slice 11)
- Deleting Proxima logo assets and the hero star (12)

## Contract

- C2 on hero + placeholder surfaces

## Context that is easy to miss

- Locked literals: name **Shipworthy**, subtitle **Chat that builds a structured artifact.**, placeholder **Ask the agent to …**, agent **Agent**
- Dark-mode `ProximaStarCanvasDynamic` stays until slice 12

## Done when

- Manual: `/` shows Shipworthy branding; input placeholder has no Andy
- `rg "Ask Andy|Proxima builds" src/components/program-builder/shared/Prompt.tsx src/hooks/useTypewriterPlaceholder.ts` is clean

## Out of scope

- Rewriting all blog/marketing pages (deleted in 3–4)
- Removing logos / WebGPU star (12)
