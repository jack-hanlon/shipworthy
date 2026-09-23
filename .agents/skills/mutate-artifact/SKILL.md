---
name: mutate-artifact
description: Create, inspect, or change the Chat artifact (structured week/day grid opposite the chat). Load when the user wants to work on the artifact itself.
allowedTools:
  - readArtifact
  - mutateArtifact
  - readFile
  - bash
---

# Mutate artifact

Work on the **Chat artifact** with Artifact CRUD. The Questionnaire gate stays optional — never open it as a required step before edits.

## Tools

- `readArtifact` — request-start snapshot (week/day/item JSON). When the artifact already has weeks, call it in this turn before `mutateArtifact` and take `weekIndex` / `dayId` / `itemId` from that snapshot.
- `mutateArtifact` — fail-all op batch. Ops:
  - `set_title` — set the Chat artifact title
  - `add_week` — append or insert an empty week
  - `delete_week` — delete a week by 0-based index
  - `add_day` — add an Artifact day to a week
  - `delete_day` — delete an Artifact day by id within a week
  - `rename_day` — rename an Artifact day
  - `upsert_item` — insert or update an Artifact item (`id`, `title`, optional `notes`)
  - `delete_item` — delete an Artifact item from a day
  - `reorder_items` — reorder Artifact items on a day (full id permutation)

`getMoreInfoQuestions` remains available via always-available tools. Use it only when preferences would help.

## Steps

1. If the artifact may already have weeks, call `readArtifact` and plan targets from that snapshot only.
2. Call `mutateArtifact` with the op batch.
3. Reply from the tool outcome:
   - Non-empty artifact → Mutation proposal until Accept. Describe the intended change. Do not claim the grid already changed. Do not write "I've updated" or "Your artifact is now".
   - Empty artifact (no weeks) → first mutate may land when the turn finishes. Summarize what you built. Do not ask the user to Accept.

## Rules

1. Do not reuse `weekIndex` / `dayId` / `itemId` from an earlier turn.
2. Artifact items are title + optional notes only — no exercises, sets, reps, or RPE.
3. Leaving the grid empty is fine when the user has not asked for artifact work.
