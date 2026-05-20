---
name: backend-api-data
description: Use when designing or implementing database models, APIs, server actions, Prisma, PostgreSQL, validation and data flows for FORJEZ.
---

# Backend API & Data Skill

## Purpose

Design safe backend foundations for leads, clients, diagnostics, proposals and consulting projects.

## Workflow

1. Define data entity.
2. Define ownership and access rules.
3. Define validation schema with Zod.
4. Define persistence using Prisma/PostgreSQL.
5. Define API/server action.
6. Define error handling.
7. Define audit/logging needs.
8. Define tests.

## Security rules

- Validate every input.
- Reject unknown fields.
- Avoid SQL injection.
- Do not expose internal errors.
- Do not log sensitive data in production.
- Protect private routes.
- Use role-based authorization.

## Output

- Data model.
- Validation schema.
- API/action contract.
- Access control notes.
- Migration notes.
