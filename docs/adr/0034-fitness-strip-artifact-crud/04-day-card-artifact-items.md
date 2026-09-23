# Sub-plan 4 - Day card Artifact items

Parent: [0034](./index.md) · Index: [plan.md](./plan.md)

**Fill the hollow Day card / grid shell with Artifact item lines.**

## Purpose

The right pane still teaches week/day cards without looking like a workout logger (C4). Slice 1 left empty chrome; this slice renders **Artifact items**.

## Owns

- Day card (and former set/exercise row components): render ordered **Artifact items** (`id`, `title`, optional `notes`)
- Grid / editor state: artifact JSON compatible with slices 2–3
- Manual UI mutations (if any) go through the new registry
- Delete or rewrite tests that assert exercise/set cells; delete tests tied to removed row components

## Does not own

- Folder rename (done in 1)
- Chat tools (5)

## Contract

- C4

## Context that is easy to miss

- Empty days and empty items are valid; do not require a “first exercise”
- Proposal marks / jump-to-target should key off item/day indices, not set indices

## Done when

- Manual: day card shows item titles only
- No kept day-card imports of Hevy set formatters or exercise catalog pickers

## Out of scope

- New drag-and-drop polish beyond what already exists for reordering
