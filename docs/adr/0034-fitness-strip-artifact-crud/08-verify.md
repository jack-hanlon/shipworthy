# Sub-plan 8 - Verify

Parent: [0034](./index.md) · Index: [plan.md](./plan.md)

**Prove contracts; leave the template buildable. Absorbs former 0033 verify.**

## Purpose

Cloneable Shipworthy template with agent + artifact CRUD and no fitness happy path.

## Owns

- README: `/dashboard`, `artifacts` table, hollow-or-empty-grid-until-agent-mutates, pointer to ADR 0034; link 0033 under `docs/adr/complete/` as history; fix `.env.example` vs `.env.template` naming drift
- Fix lint / `test:ci` / `build` fallout from slices 1–7 (by deletion or real fixes — **no empty stubs**)
- Confirm `CONTEXT.md` matches shipped vocabulary (C14)
- Re-check still-relevant 0033 contracts (hero-only, brand strings, no Proxima star assets, auth/metering)
- Contract checklist below

## Does not own

- New features (shape swap, drop fitness tables)
- Publishing `hackathon_template` remote

## Contract

- C1–C16

## Pass / fail checklist

| Check | How |
|-------|-----|
| C1 | `docs/adr/complete/0033-shipworthy-hackathon-template/` exists |
| C2 | `rg` tool names in `tools.ts` / `always-available-tools.ts` |
| C3 | Op literals in mutation schemas |
| C4 | Manual day card + `rg` exercise/set fields in artifact-builder UI |
| C5 | Migration + types include `artifacts` |
| C6 | No app writes to fitness tables in kept modules |
| C7 | `rg` Soft-fail / stalemate in `src` |
| C8 | `/dashboard` works; `rg "build-program\|BuildProgram" src` clean except optional redirect |
| C9 | `artifact-builder/` exists; `program-builder/` gone |
| C10 | Questionnaire catalog stubs only |
| C11 | Instructions + skill review + vitest |
| C12 | Auth + metering smoke |
| C13 | No DROP/`hevy_*` rename migrations in 0034 |
| C14 | `CONTEXT.md` |
| C15 | `rg` Agentic memory peek / profile inject in kept `src` |
| C16 | No `supabase/functions/hevy-program-sync`; no Hevy-only seed files required by start script |
| 0033 C1–C2, C11 | Hero-only `/`; Shipworthy/Agent chrome; no star/logo assets |

## Done when

- Checklist green
- `npm run lint && npm run test:ci && npm run build` green

## Out of scope

- Operator copy to external `hackathon_template` repo
- SQL `DROP` of unused fitness tables
