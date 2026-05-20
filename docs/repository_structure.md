# Estructura del repositorio

Este repositorio separa documentacion, prompts, agentes y codigo futuro para que el proyecto pueda crecer sin mezclar responsabilidades.

## Carpetas de producto

- `app/`: rutas, layouts y paginas de Next.js App Router.
- `components/`: componentes UI reutilizables y pequenos.
- `styles/`: estilos globales, tokens y configuracion visual.
- `public/`: assets servidos publicamente.

## Carpetas de aplicacion

- `lib/`: utilidades compartidas.
- `lib/security/`: helpers de seguridad.
- `server/`: logica server-side, actions, rutas API y servicios.
- `schemas/`: validaciones Zod.
- `types/`: tipos compartidos de TypeScript.
- `prisma/`: schema, migraciones y seeds cuando exista base de datos.

## Carpetas de soporte

- `docs/`: decisiones, requerimientos y reglas del proyecto.
- `prompts/`: prompts para Claude, Stitch, implementacion y hardening.
- `.claude/`: agentes y skills del pack FORJEZ.
- `.github/`: plantillas de colaboracion.
- `scripts/`: automatizaciones.
- `tests/`: pruebas.
- `resources/`: materiales fuente y archivos de apoyo.
