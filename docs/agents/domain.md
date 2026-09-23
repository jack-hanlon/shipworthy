# Domain Docs

How the engineering skills should consume this repo's domain documentation when exploring the codebase.

## Before exploring, read these

- **`CONTEXT.md`** at the repo root
- **`docs/adr/`** - active ADRs (in-flight plans)
- **`docs/adr/complete/`** - shipped ADRs + their sub-plans (see [`complete/README.md`](../adr/complete/README.md))
- **New path week loop:** start at [`docs/adr/complete/new-path-week-loop/index.md`](../adr/complete/new-path-week-loop/index.md) (ADRs 0007-0016 + sub-plans; 0014 still active)

If any of these files don't exist, **proceed silently**. Don't flag their absence; don't suggest creating them upfront. The producer skill (`/grill-with-docs`) creates them lazily when terms or decisions actually get resolved.

## File structure

Single-context repo:

```
/
├── CONTEXT.md
├── docs/adr/
│   ├── complete/
│   │   ├── 0001-{slug}/          ← shipped ADR = index.md + plan.md + slices
│   │   └── new-path-week-loop/   ← shipped initiative index
│   └── 0010-{slug}/              ← active ADR = index.md + plan.md + slices
└── src/
```
## Use the glossary's vocabulary

When your output names a domain concept (in an issue title, a refactor proposal, a hypothesis, a test name), use the term as defined in `CONTEXT.md`. Don't drift to synonyms the glossary explicitly avoids.

If the concept you need isn't in the glossary yet, that's a signal - either you're inventing language the project doesn't use (reconsider) or there's a real gap (note it for `/grill-with-docs`).

## Flag ADR conflicts

If your output contradicts an existing ADR, surface it explicitly rather than silently overriding:

> _Contradicts ADR-0007 (event-sourced orders) - but worth reopening because…_
