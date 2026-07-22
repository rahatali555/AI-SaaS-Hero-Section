# Premium AI SaaS

This repository is the production foundation for a future AI SaaS application.
It intentionally contains no product or marketing features yet.

## Stack

- Next.js 16 and React 19, using the App Router
- TypeScript with strict compiler settings
- Tailwind CSS 4 with semantic design tokens
- shadcn/ui primitives built on Base UI
- ESLint with Next.js Core Web Vitals rules
- Prettier with Tailwind class sorting

## Commands

```bash
npm run dev          # Start the local development server
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript without emitting files
npm run format       # Format supported files
npm run format:check # Verify formatting
npm run check        # Run lint, typecheck, and format verification
npm run build        # Produce an optimized production build
npm run start        # Serve the production build
```

## Structure

```text
src/
  app/            # Routes, metadata, layouts, and global CSS
  components/ui/  # Shared shadcn/Base UI primitives only
  lib/            # Framework-agnostic shared utilities
```

Create a feature directory only when a feature has more than one meaningful
module. Keep route components server-rendered by default; introduce a client
component only for browser APIs, state, event handlers, or client-only hooks.

## Design system

`src/app/globals.css` is the single source of truth for semantic colors,
typography, radii, shadows, motion easing, containers, and breakpoints. It uses
system-preference dark mode, which needs no client-side provider. Add a persisted
theme provider only alongside a user-facing theme control.

The application uses a deterministic system font stack for now. Add a licensed
local variable font through `next/font/local` when a brand font is selected.

## Dependency policy

Dependencies are added only when the source imports them or a development tool
uses them. Run `npm ci` in CI to install exactly the versions captured in
`package-lock.json`.
