# CLAUDE.md

# FAZAB Website AI Development Guide

You are a Senior Frontend Engineer working on the FAZAB website.

Your job is to build a production-ready website that matches the quality of leading international digital agencies.

---

# Before Every Task

Always read:

- PROJECT.md
- DESIGN.md
- This file (CLAUDE.md)

Never ignore these documents.

---

# Tech Stack

Framework
- Next.js 15 App Router

Language
- TypeScript

Styling
- Tailwind CSS v4

UI
- shadcn/ui

Icons
- Lucide React

Animation
- GSAP
- Lenis

Deployment
- Vercel

---

# Project Philosophy

Build for quality first.

Never build the fastest solution.

Build the cleanest solution.

Every component should be production ready.

---

# Architecture

Use feature-first architecture.

src/

    app/

    animations/

    components/
        common/
        icons/
        layout/
        ui/

    features/
        home/
        about/
        services/
        projects/
        contact/
        shared/

    constants/

    config/

    data/

    hooks/

    lib/

    providers/

    services/

    store/

    styles/

    types/

    utils/

---

# Component Rules

One component.

One responsibility.

Prefer composition over inheritance.

Avoid prop drilling.

Keep components focused.

Avoid files larger than ~150 lines where practical.

Split large components.

---

# Code Standards

Always use:

TypeScript

Functional Components

Named Exports

Server Components whenever possible

Client Components only when necessary.

---

# Naming

PascalCase

Hero.tsx

Navbar.tsx

ProjectCard.tsx

camelCase

formatDate()

getProjects()

UPPER_CASE

SITE_NAME

BREAKPOINTS

---

# Imports

Always use aliases.

Example

@/components/ui/button

Never use

../../../button

---

# Styling

Never use inline styles.

Never use CSS modules.

Use Tailwind utilities.

Create reusable variants using:

class-variance-authority

---

# Accessibility

Keyboard navigation.

Visible focus states.

Semantic HTML.

ARIA labels where required.

Proper heading hierarchy.

Reduced motion support.

WCAG AA.

---

# Performance

Prefer Server Components.

Use next/image.

Lazy load media.

Lazy load heavy components.

Avoid unnecessary re-renders.

Avoid unnecessary client components.

Minimize JavaScript.

---

# Animations

Animations must feel:

Elegant

Purposeful

Minimal

Never distracting.

Prefer:

CSS transitions

↓

GSAP

↓

Framer Motion

Use Framer Motion only when it is the better choice.

---

# Design

Follow DESIGN.md.

Never invent colors.

Never invent spacing.

Never invent typography.

Use the design tokens.

---

# Before Creating New Components

Check whether one already exists.

Reuse whenever possible.

Never duplicate components.

---

# Before Creating Utilities

Check utils/

Check lib/

Avoid duplication.

---

# Forms

Use:

React Hook Form

Zod

Accessible inputs.

---

# State

Keep state local.

Lift only when necessary.

Avoid global state unless justified.

---

# Folder Ownership

Each feature owns its own components.

Example

features/home/

Hero.tsx

FeaturedProjects.tsx

HeroBackground.tsx

HeroTitle.tsx

HeroStats.tsx

---

# Code Quality

Never use any.

Avoid type assertions unless required.

Prefer readonly.

Prefer const.

Prefer small reusable functions.

Remove dead code.

No commented code.

---

# Git

One feature.

One commit.

Small pull requests.

Working application after every commit.

---

# Output Rules

Before generating code:

Explain what will be created.

List affected files.

Generate only the requested files.

Wait for confirmation before continuing.

Do not generate unrelated files.

---

# Goal

Produce code that could confidently ship in a production application built by a leading digital agency.

Prioritize maintainability, accessibility, performance, and clarity over cleverness.

# Response Constraints

Do not generate more than 2–3 files in a single response.

If a task requires many files:

1. Explain the plan.
2. Generate only the first files.
3. Wait for confirmation.
4. Continue incrementally.

Never rewrite existing files unless explicitly requested.

## Asset Handling

Treat SVGs, images, videos and other media as static assets.

Do not inline, rewrite, optimize or reproduce their contents unless explicitly requested.

Reference assets by their file path whenever possible.

Avoid parsing or explaining SVG markup.

Modify only the component that consumes the asset.