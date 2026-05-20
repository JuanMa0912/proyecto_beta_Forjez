# proyecto_beta_Forjez

Repositorio publico base para construir la presencia digital y la futura plataforma operativa de FORJEZ Consulting.

Este repo fue inicializado desde el pack FORJEZ Claude + Stitch y deja listas las instrucciones para Claude, agentes, Stitch, documentacion, estructura tecnica y flujo Git.

## Identidad del repositorio

- Nombre: `proyecto_beta_Forjez`
- Visibilidad esperada: publico
- Producto: FORJEZ Consulting

## Estado actual

- Repo Git preparado para iniciar trabajo en `main`.
- Pack de agentes y skills de Claude instalado en `.claude/`.
- Documentacion funcional, visual, de seguridad y de ramas en `docs/`.
- Prompts de trabajo para Claude y Stitch en `prompts/`.
- Carpetas base listas para una app Next.js con App Router.
- Aun no hay `package.json` ni dependencias instaladas.

## Estructura

```text
.
├── .claude/                 # Agentes y skills para Claude Code
├── .github/                 # Plantillas de issues y pull requests
├── app/                     # Rutas y layouts de Next.js App Router
├── components/              # Componentes UI reutilizables
├── docs/                    # Producto, marca, seguridad, Git y DoD
├── lib/                     # Utilidades compartidas
├── prisma/                  # Esquema y migraciones futuras
├── prompts/                 # Prompts maestros para Claude/Stitch
├── public/                  # Assets publicos
├── resources/               # Materiales fuente y archivos de apoyo
├── schemas/                 # Esquemas Zod y contratos de validacion
├── scripts/                 # Automatizaciones del proyecto
├── server/                  # Logica server-side, actions, API y servicios
├── styles/                  # Estilos globales y tokens
├── tests/                   # Pruebas unitarias, integracion y E2E
└── types/                   # Tipos compartidos de TypeScript
```

## Lectura recomendada

1. `AGENTS.md`: reglas canonicas para agentes de codigo.
2. `CLAUDE.md`: instrucciones maestras del proyecto FORJEZ.
3. `DESIGN.md`: direccion visual para Stitch y UI.
4. `docs/brand_context.md`: tono, posicionamiento y marca.
5. `docs/security_requirements.md`: reglas de seguridad obligatorias.
6. `docs/branching_strategy.md`: ramas, commits y PRs.

## Stack sugerido

Usar el stack definido en `CLAUDE.md` salvo que el proyecto cambie de direccion:

- Next.js con App Router.
- TypeScript estricto.
- Tailwind CSS.
- Zod y React Hook Form.
- Prisma y PostgreSQL cuando exista backend.
- Auth.js / NextAuth para areas privadas.
- Vercel para despliegue.

## Flujo Git

La estrategia esta documentada en `docs/branching_strategy.md`.

Comandos iniciales utiles:

```bash
git status --short --branch
git diff --check
```

Convencion de commits: Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`, `security:`, `design:`).

## Siguiente paso sugerido

Cuando quieras construir la app real, crea el proyecto Next.js dentro de esta misma estructura o genera el scaffold respetando las carpetas ya preparadas. Antes de implementar UI, leer `DESIGN.md` y `docs/brand_context.md`.
