# proyecto_beta_Forjex

Repositorio publico base para construir la presencia digital y la futura plataforma operativa de FORJEX Consulting.

Este repo fue inicializado desde el pack FORJEX Claude + Stitch y deja listas las instrucciones para Claude, agentes, Stitch, documentacion, estructura tecnica y flujo Git.

## Identidad del repositorio

- Nombre: `proyecto_beta_Forjex`
- Visibilidad esperada: publico
- Producto: FORJEX Consulting

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
2. `CLAUDE.md`: instrucciones maestras del proyecto FORJEX.
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

## Desarrollo local

Requisitos: Node.js 18.18 o superior (recomendado 20+) y npm 10+.

```bash
npm install
cp .env.example .env.local   # ajusta los valores
npm run dev                  # http://localhost:3000
```

Scripts disponibles:

- `npm run dev` — servidor de desarrollo.
- `npm run build` — build de producción.
- `npm run start` — servidor productivo (requiere build previo).
- `npm run lint` — ESLint con `next/core-web-vitals`.
- `npm run typecheck` — verificación de tipos con `tsc --noEmit`.

## Despliegue en Vercel

1. Sube los cambios a GitHub: `git add . && git commit -m "feat: scaffold landing Fase 1" && git push`.
2. En [vercel.com](https://vercel.com) → **New Project** → importa el repo `proyecto_beta_Forjex`.
3. Framework: **Next.js** (autodetectado). No cambies `Build Command` ni `Output Directory`.
4. En **Environment Variables**, agrega las claves de `.env.example` (al menos `NEXT_PUBLIC_SITE_URL` apuntando al dominio final). Las variables de DB/Auth solo aplican en Fase 2.
5. Pulsa **Deploy**. La primera build toma ~1–2 min.
6. Tras desplegar, configura el dominio definitivo desde **Settings → Domains**.

El proyecto ya incluye `vercel.json` con la configuración base y headers de seguridad en `next.config.mjs`.

## Estado del scaffold

- Landing Fase 1 implementada: Header, Hero, Problemas, Pilares, Metodología, Resultados, Testimonios (placeholders), Contacto, CTA final y Footer.
- Formulario de contacto con validación Zod, React Hook Form, server action, rate limit en memoria y honeypot anti-bot.
- Métricas mostradas con placeholders `X` — no se inventan cifras reales. TODO: reemplazar cuando existan casos documentados.
- Sin backend ni Prisma activos todavía. Fase 2 conecta DB, NextAuth y panel admin.
