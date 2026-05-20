---
name: qa-release
description: Use when preparing test cases, release notes, deployment checklist and final QA for the FORJEZ Consulting project.
---

# QA Release Skill

## Purpose

Ensure each release is stable, tested and documented.

## Workflow

1. Identify changed areas.
2. Map acceptance criteria.
3. Create manual tests.
4. Suggest automated tests.
5. Check responsive UI.
6. Check forms.
7. Check accessibility basics.
8. Prepare release notes.

## Manual test template

| Test | Steps | Expected result | Status |
|---|---|---|---|

## Release notes template

```md
# Release [version]

## Added

## Changed

## Fixed

## Security

## Known issues
```

## Go/no-go

End every QA review with:

- `GO`: ready to deploy.
- `NO-GO`: must fix blockers.
- `GO WITH WARNINGS`: safe but pending improvements.
