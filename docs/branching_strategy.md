# Estrategia de ramas Git

## Ramas principales

### `main`
Producción. Solo recibe merges desde `release/*` o hotfix aprobados.

### `develop`
Integración de trabajo estable para la siguiente versión.

## Ramas de trabajo

### `feature/*`
Nuevas funcionalidades.

Ejemplos:
- `feature/landing-page`
- `feature/contact-form`
- `feature/admin-dashboard`

### `fix/*`
Correcciones no urgentes.

### `hotfix/*`
Correcciones urgentes sobre producción.

### `release/*`
Preparación de versión.

Ejemplo:
- `release/v1.0.0`

### `docs/*`
Documentación.

### `design/*`
Cambios de diseño, tokens, UI, prototipos Stitch.

### `security/*`
Hardening, auditoría, permisos, headers, validación.

### `mlops/*`
Reservada para futuras capacidades de IA, analítica, modelos o automatizaciones inteligentes.

### `qa/*`
Pruebas, regresiones, fixtures, datos mock.

## Convención de commits

Usar Conventional Commits:

- `feat:` nueva funcionalidad.
- `fix:` corrección.
- `docs:` documentación.
- `style:` formato sin cambio funcional.
- `refactor:` mejora interna.
- `test:` pruebas.
- `chore:` tareas menores.
- `security:` cambios de seguridad.
- `design:` cambios visuales.

## Pull Requests

Todo PR debe incluir:

- Objetivo.
- Cambios realizados.
- Evidencia de pruebas.
- Riesgos.
- Capturas si cambia UI.
- Checklist de seguridad si toca datos, auth o formularios.
