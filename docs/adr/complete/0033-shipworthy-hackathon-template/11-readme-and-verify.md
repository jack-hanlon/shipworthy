# Sub-plan 11 - README and verify

Parent: [0033](./index.md) · Index: [plan.md](./plan.md)

**Absorbed by ADR 0034.** Do not implement this slice in the 0033 tree.

## Purpose (historical)

A stranger can clone, set env, run dev, and see hero → builder → chat. Greps match ADR contracts.

## Status

After slices 1–10 and 12, fitness APIs and shared helpers were deleted ahead of schedule. Callers, tests, Soft-fail, Agentic memory peek, and `/build-program` naming remained. A green `lint` / `test:ci` / `build` gate belongs with the fitness strip + Artifact CRUD work.

**Implement:** [0034 sub-plan 08 - Verify](../../0034-fitness-strip-artifact-crud/08-verify.md) (also covers former 0033 C1–C11 checks that still apply).

## Owns

Nothing further in 0033.

## Does not own

- Reopening brand/tool-kill decisions already recorded in [index.md](./index.md)

## Done when

- ADR 0034 verify is green (this slice is then closed by handoff, not by work here)
