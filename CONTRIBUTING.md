# Contribuir a FORJEX Consulting

Gracias por ayudar a construir este proyecto. El objetivo es mantener un repositorio claro, seguro y facil de evolucionar.

## Antes de empezar

1. Lee `README.md`.
2. Lee `AGENTS.md` si trabajaras con agentes de codigo.
3. Lee `CLAUDE.md`, `DESIGN.md` y los documentos principales en `docs/`.
4. Revisa `docs/branching_strategy.md` para ramas y commits.

## Setup local

Actualmente el repo contiene documentacion, prompts y estructura base, pero aun no tiene `package.json`.

Checks disponibles ahora:

```bash
git status --short --branch
git diff --check
```

Cuando exista la app Next.js, este archivo debe actualizarse con comandos reales de instalacion, lint, typecheck, test y build.

## Ramas

- `main`: version estable.
- `develop`: integracion de trabajo estable cuando se habilite flujo por releases.
- `feature/*`: funcionalidades nuevas.
- `fix/*`: correcciones.
- `docs/*`: documentacion.
- `design/*`: cambios visuales o Stitch.
- `security/*`: hardening, permisos y auditorias.
- `qa/*`: pruebas y regresiones.

## Commits

Usa Conventional Commits:

```text
feat: add contact form shell
fix: correct lead status mapping
docs: update security checklist
security: add input validation guardrails
design: refine service cards layout
chore: initialize repository
```

## Pull requests

Cada PR debe incluir:

- Objetivo.
- Cambios realizados.
- Evidencia de validacion.
- Riesgos o supuestos.
- Capturas si cambia UI.
- Checklist de seguridad si toca datos, auth, formularios o APIs.

## Seguridad

- Nunca subas `.env` real.
- Documenta variables en `.env.example`.
- No agregues secretos, tokens ni credenciales a commits.
- Si el cambio toca datos internos, roles, formularios o auth, revisa `docs/security_requirements.md`.

## Documentacion

Actualiza `README.md`, `AGENTS.md`, `CONTRIBUTING.md` o `docs/` cuando cambien comandos, estructura, arquitectura, seguridad o reglas de entrega.
