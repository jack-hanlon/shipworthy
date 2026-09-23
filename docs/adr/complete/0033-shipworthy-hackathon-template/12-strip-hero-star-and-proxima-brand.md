# Sub-plan 12 - Strip hero star and Proxima brand assets

Parent: [0033](./index.md) · Index: [plan.md](./plan.md)

**Remove the dark-mode WebGPU hero star, drop Proxima logos/images, and leave a tech note so a different hero FX can be rebuilt later.** Slices 1–2 deferred this on purpose.

## Purpose

Hero and chrome read as Shipworthy with no Proxima product art and no animated star. Future work can rebuild a different backdrop from the documented stack without digging through deleted code.

## Owns

**Hero star**

- Unwire `ProximaStarCanvasDynamic` from `src/components/program-builder/shared/Prompt.tsx` (keep CSS atmosphere / vignette unless it hardcodes Proxima)
- Delete `src/components/landing/proxima-star/**`
- Delete upstream reference tree `optimized-black-hole/**` if still in the repo (not imported by the app; source of the adaptation)
- Remove `vgpu` from `package.json` / lockfile when nothing else imports it; drop `@webgpu/types` only if unused elsewhere
- Tests that mount or assert the star canvas, if any

**Proxima logos and images**

- Delete Proxima logo SVGs under `public/` (e.g. `proxima_logo_*`, `proxima-logo-*`, gold/light variants) and any other Proxima-branded raster/webp used only as product art
- Clean `public/index.ts` exports for those assets
- Replace call sites with text brand **Shipworthy** (or no mark) — at least:
  - `Prompt.tsx` hero mark
  - `Navbar.tsx`, `MobileSidebarHeader.tsx`, `AppSidebar.tsx`
  - `Footer.tsx` (if still rendered off `/`)
  - Orphan header/CTA modules still imported (`Integrations`, `GetStarted`, `DownloadPopup`, …) — delete the module or swap the image; do not leave Proxima art
- Favicon / OG / apple-touch assets if they are Proxima marks — replace with a neutral placeholder or text-only, or remove until a Shipworthy mark exists
- Visible alt text and copy that still say “Proxima” on kept UI chrome

**Documentation (this slice’s durable output)**

- Keep the **Former hero FX stack** section below in this file (do not delete it when the code goes). Optionally mirror a one-line pointer from README in slice 11.

## Does not own

- Rewriting agent system prompt identity (6)
- Hevy export attribution strings / `proximaExportAttribution` (7)
- Repo-wide purge of the word “Proxima” inside ADR history, deleted-route corpses already owned by 3–4, or generated `supabase.ts`
- Designing a replacement hero animation (document only; leave flat atmosphere)

## Contract

- C2 (hero strings stay Shipworthy; no Proxima mark on hero)
- C11: no Proxima logo/image assets wired into kept UI; no `proxima-star` / `ProximaStarCanvas*` in the tree; `vgpu` gone if unused

## Context that is easy to miss

- Star only ran in **dark** theme and **md+** viewport; light mode already used CSS blobs — after delete, dark hero should still look intentional (atmosphere divs), not empty black
- `next/dynamic` client-only load existed so SSR never touched WebGPU — any future FX should keep that pattern
- `useReducedMotion` gated animation; respect it if a new FX is added later
- Some “Proxima” strings live in Hevy share/export paths deleted in slice 7 — do not block this slice on those if 7 is still pending; do clear **assets + kept chrome**

## Former hero FX stack (retain after delete)

Use this when building a **different** hero backdrop. Do not re-add the Proxima star itself.

| Piece | What it was |
|-------|-------------|
| Runtime | **WebGPU** in the browser |
| Library | [`vgpu`](https://vgpu.sh) (`vercel-labs/vgpu`), dynamically `import("vgpu")` so it stayed out of the SSR bundle |
| Types | `@webgpu/types` (dev) |
| Shaders | **WGSL** multi-pass graph co-located with the canvas module |
| Passes | bake → refine → shade → bloom (extract/blur/downsample) → composite; plus starfield / disk-style look uniforms |
| Provenance | Adapted from Vercel’s **Optimized Black Hole** example (`optimized-black-hole/` in-repo copy; retuned camera/disk/bloom/starfield in `settings.ts` as a star) |
| React host | Client canvas + `next/dynamic` (`ProximaStarCanvasDynamic`); init/dispose + IntersectionObserver + visibility + `matchMedia` desktop gate in `renderer.ts` / canvas effect |
| Motion | `motion/react` `useReducedMotion` — static frame when reduced motion |
| Theming | Mounted only when `next-themes` resolved theme was dark |

Rough rebuild recipe for a *new* effect: keep a client-only dynamic import, a canvas host with dispose-on-unmount, a `vgpu` effect/target graph, and WGSL passes — swap the look/settings rather than restoring Proxima branding.

## Done when

- Manual: `/` dark desktop — no star canvas; no Proxima logo images in hero/nav/sidebar/footer of kept surfaces
- `rg "ProximaStarCanvas|proxima-star" src` is clean
- `rg "proxima_logo|proxima-logo" public src --glob '!**/docs/**'` is clean (or only dead comments you explicitly keep)
- `rg '"vgpu"' package.json` is clean if the dep was removed
- This file still contains **Former hero FX stack**

## Out of scope

- Shipping a new animated hero
- Renaming leftover Hevy fossils (8–10)
