# Issue tracker: Linear

Issues and PRDs for this repo live in Linear. Use the Linear MCP server (`user-linear`) for all operations.

## Scope

- **Team**: Proxima Fitness (key `PRO`)
- **Project**: Proxima Landing Page - file landing-page work here unless the user specifies otherwise

## Conventions

- **Create an issue**: `save_issue` with `title`, `team` ("Proxima Fitness"), and `project` ("Proxima Landing Page"). Use Markdown in `description`.
- **Read an issue**: `get_issue` with issue ID or identifier (e.g. `PRO-123`).
- **List issues**: `list_issues` filtered by project or team as needed.
- **Comment on an issue**: `save_comment`.
- **Apply labels**: pass `labels` array on `save_issue` (create or update).
- **Close / change state**: set `state` on `save_issue`.

## When a skill says "publish to the issue tracker"

Create a Linear issue in the Proxima Fitness team, under the Proxima Landing Page project.

## When a skill says "fetch the relevant ticket"

Run `get_issue` with the issue identifier, then `list_comments` if comments are needed.

## Wayfinding operations

Used by `/wayfinder`. The **map** is a single Linear issue with **child** issues as tickets.

- **Map**: issue labelled `wayfinder:map` (Destination / Notes / Decisions so far / Not yet specified / Out of scope). Team Proxima Fitness, project Proxima Landing Page unless the user says otherwise.
- **Child ticket**: `save_issue` with `parentId` set to the map’s id/identifier. Labels: `wayfinder:research` | `wayfinder:prototype` | `wayfinder:grilling` | `wayfinder:task`. Claim = assign to the driving user (`assignee: "me"`).
- **Blocking**: native Linear relations via `blockedBy` / `blocks` on `save_issue`. Frontier = open children that are unblocked and unassigned.
- **Resolve**: resolution comment on the ticket → set `state` to Done → append one gist line + link under the map’s **Decisions so far**.
