# AGENTS.md

Instrucciones canonicas para agentes que trabajen en este repositorio. `CLAUDE.md` se mantiene como guia especifica para Claude; este archivo resume las reglas operativas compartidas.

## Prioridad de lectura

Antes de crear codigo, textos, pantallas o flujos, leer en este orden:

1. `CLAUDE.md`
2. `DESIGN.md`
3. `docs/brand_context.md`
4. `docs/product_scope.md`
5. `docs/functional_requirements.md`
6. `docs/security_requirements.md`
7. `docs/definition_of_done.md`

Para cambios de ramas, commits o PRs, leer tambien `docs/branching_strategy.md` y `CONTRIBUTING.md`.

## Alcance del proyecto

FORJEZ Consulting necesita una presencia digital profesional que pueda crecer hacia una plataforma operativa interna. El stack preferido es Next.js, TypeScript, Tailwind CSS, Zod, Prisma, PostgreSQL y Auth.js cuando exista panel privado.

## Estructura esperada

- `app/`: rutas, layouts y paginas de Next.js App Router.
- `components/`: componentes visuales reutilizables.
- `lib/`: utilidades compartidas sin acoplarlas a UI.
- `lib/security/`: helpers de seguridad, permisos, saneamiento y limites.
- `server/`: logica server-side, actions, rutas API y servicios.
- `schemas/`: validaciones Zod y contratos de entrada.
- `types/`: tipos TypeScript compartidos.
- `styles/`: estilos globales y tokens.
- `prisma/`: esquema y migraciones cuando exista base de datos.
- `tests/`: pruebas unitarias, integracion y E2E.
- `docs/`: documentacion fuente del producto y del proceso.
- `prompts/`: prompts de trabajo para Claude, Stitch y revision.

## Always

- Mantener cambios pequenos, revisables y alineados con la estructura del repo.
- Marcar supuestos con `SUPUESTO:` y pendientes reales con `TODO:`.
- Validar entradas con Zod antes de persistir o procesar datos sensibles.
- Mantener secretos fuera de Git y documentar variables en `.env.example`.
- Usar Conventional Commits para commits locales.
- Actualizar docs cuando cambie arquitectura, seguridad, flujos o comandos.

## Ask first

- Antes de introducir un framework distinto al stack sugerido.
- Antes de mover o borrar documentos del pack original.
- Antes de agregar servicios externos, pagos, credenciales o integraciones privadas.
- Antes de cambiar reglas de ramas, seguridad o definicion de completitud.

## Never

- No hardcodear secretos, tokens, contrasenas ni URLs privadas.
- No inventar datos comerciales, legales, financieros o personales de FORJEZ.
- No exponer trazas internas al usuario final.
- No guardar tokens sensibles en `localStorage`.
- No crear endpoints abiertos para datos internos, leads o clientes.
- No mezclar logica de negocio dentro de componentes visuales.

## Comandos actuales

El repo todavia no tiene `package.json`, por lo que no existen comandos de build, lint o test. Hasta que se cree la app, los checks disponibles son:

```bash
git status --short --branch
git diff --check
```

Cuando se agregue el scaffold de Next.js, documentar aqui los comandos reales antes de exigirlos en PRs.
