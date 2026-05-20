---
name: frontend-implementation
description: Use when implementing FORJEZ UI screens, components, Tailwind styles, responsive layouts and form interactions.
---

# Frontend Implementation Skill

## Purpose

Implement UI for FORJEZ Consulting using clean Next.js, TypeScript and Tailwind.

## Workflow

1. Identify route and component boundaries.
2. Create typed component props.
3. Use semantic HTML.
4. Apply Tailwind classes consistently.
5. Add responsive behavior.
6. Add accessible labels and focus states.
7. Add loading/empty/error states where needed.
8. Avoid business logic inside UI components.

## Component conventions

- Components go in `components/`.
- Shared data constants go in `lib/constants/` or `content/`.
- Types go in `types/`.
- Schemas go in `schemas/`.
- Server-only logic must not be imported into client components.

## Quality gate

Before finishing:

- Run TypeScript check if available.
- Run lint if available.
- Verify responsive layout.
- Verify no secrets are introduced.
