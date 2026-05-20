---
name: stitch-ui-design
description: Use when preparing prompts for Google Stitch or translating Stitch outputs into implementation-ready UI guidance.
---

# Stitch UI Design Skill

## Purpose

Create high-quality prompts and design instructions for Stitch using FORJEZ Consulting's design system.

## Required context

Always read:

- `DESIGN.md`
- `docs/brand_context.md`
- `docs/product_scope.md`

## Workflow

1. Define the screen or flow.
2. Define user objective.
3. Define visual direction from `DESIGN.md`.
4. Specify required sections/components.
5. Specify responsive requirements.
6. Specify states: hover, loading, empty, error, success.
7. Specify implementation target: Next.js + TypeScript + Tailwind.
8. Explicitly forbid fake real data.

## Prompt structure for Stitch

Use this structure:

```text
Create a high-fidelity [web/mobile/admin] UI for [screen purpose].
Brand: FORJEZ Consulting.
Audience: [audience].
Tone: executive, strategic, trustworthy.
Visual style: [tokens and style].
Required sections: [list].
Components: [list].
States: [list].
Responsive: desktop + mobile.
Copy language: Spanish.
Implementation target: Next.js + Tailwind.
Do not invent real metrics, clients or testimonials.
```

## Review criteria

A Stitch output is acceptable if:

- It feels specific to FORJEZ.
- It has clear hierarchy.
- It supports conversion.
- It is feasible to implement.
- It has reusable components.
- It avoids generic SaaS visuals.
