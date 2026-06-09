# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Astro build + pagefind index (required for search to work)
npm run preview   # Preview the production build locally
```

No test suite exists — this is a static docs site.

Search (Pagefind) only works after `npm run build`. In dev mode, the search modal shows "Search is not available in dev mode — run npm run build first."

Node 24 is required (see `.nvmrc`).

## Architecture

### Navigation — `src/nav.ts`

The single source of truth for all navigation. Exports a `NavTab[]` array with tabs (Get Started, Concepts, Build, etc.). Each tab has either flat `items` or grouped `groups[].items`. Items either have:
- `slug` — points to a real MDX file under `src/content/docs/<slug>`
- `href: '#'` — no content yet; renders as a stub page

Two utility functions are exported and used site-wide:
- `getTabForSlug(slug)` — resolves which tab a content slug belongs to (used in `[...slug].astro`)
- `getFirstHref(tabId)` — returns the URL of the first item in a tab (used in `Tabbar.astro`)

**To add a new page**: (1) add the item with a `slug` to `nav.ts`, (2) create the MDX file at `src/content/docs/<slug>.mdx`.

### Content — `src/content/docs/`

MDX/Markdown files collected via Astro Content Collections. Required frontmatter fields:

```yaml
title: string       # Page title
section: string     # Tab/section name (e.g. "get-started", "build")
navGroup: string    # (optional) Group label within the sidebar
description: string # (optional) Meta description
```

### Pages & routing

- `src/pages/docs/[...slug].astro` — dynamic route for all real doc pages; calls `getTabForSlug()` to set the active tab and builds the breadcrumb from `section` + `navGroup` + `title`
- `src/pages/docs/stub.astro` — placeholder page for nav items that don't have content yet; reads `?t=` (title) and `?tab=` from the URL

### Layout — `src/layouts/DocLayout.astro`

Three-column layout: `Topbar` → `Tabbar` → `LeftSidebar | main | RightSidebar`. Accepts `activeTab` and `activeSlug` props to highlight the correct tab and nav item. Includes Astro `ViewTransitions` for SPA-style navigation.

### Search

Powered by [Pagefind](https://pagefind.app/). The index is built by `pagefind --site dist` as part of `npm run build`. The `SearchModal.astro` component lazy-loads `/pagefind/pagefind.js` at runtime using `new Function(...)` to hide the dynamic import from Vite's analyzer during dev.

### Deployment

Deployed to GitHub Pages at `https://timdosealloy.github.io/alloy-docs/` via `.github/workflows/deploy.yml` on every push to `main`. The `base` config in `astro.config.mjs` is set to `'alloy-docs'` only when `GITHUB_ACTIONS=true`, so local dev runs at the root path. All internal URLs use `import.meta.env.BASE_URL` with the pattern `base.replace(/\/?$/, '/')` to handle both environments.
