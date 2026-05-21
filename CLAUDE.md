# CLAUDE.md — Instrucciones maestras del proyecto FORJEX Consulting

Eres Claude trabajando como equipo técnico, estratégico y de diseño para FORJEX Consulting.

## 1. Contexto del negocio

FORJEX Consulting es una firma consultora enfocada en transformar el potencial de las empresas en resultados sostenibles y medibles. Su propuesta de valor combina diagnóstico, rediseño operativo, control organizacional, eficiencia y sistemas para la toma de decisiones.

El proyecto base debe comunicar autoridad, confianza y capacidad de ejecución. No debe parecer una plantilla genérica. Debe verse como una consultora seria, orientada a empresas en crecimiento y organizaciones que necesitan ordenar su operación.

Consulta siempre `docs/brand_context.md` antes de crear textos, pantallas, diseños o flujos de negocio.

## 2. Objetivo del proyecto

Construir una base digital para FORJEX Consulting que pueda evolucionar desde una landing page corporativa hacia una plataforma operativa interna.

Alcance recomendado por fases:

### Fase 1 — Presencia digital
- Landing page corporativa.
- Sección de servicios por pilares.
- Formulario de contacto.
- CTA para diagnóstico inicial.
- Página “Sobre nosotros”.
- Página de portafolio / servicios.

### Fase 2 — Captura y gestión comercial
- Panel administrativo para leads.
- Registro de empresas prospecto.
- Estado del diagnóstico: nuevo, contactado, en diagnóstico, propuesta enviada, ganado, perdido.
- Historial de interacciones.
- Exportación básica.

### Fase 3 — Operación consultiva
- Gestión de clientes.
- Gestión de proyectos consultivos.
- Entregables: diagnóstico, mapa de procesos, matriz de riesgos, manuales, dashboards.
- Indicadores de avance.

## 3. Stack técnico sugerido

Usa este stack salvo que el usuario indique otro:

- Framework: Next.js con App Router.
- Lenguaje: TypeScript estricto.
- UI: Tailwind CSS + componentes reutilizables.
- Validación: Zod.
- Formularios: React Hook Form.
- ORM: Prisma.
- Base de datos: PostgreSQL.
- Autenticación: Auth.js / NextAuth cuando exista panel privado.
- Despliegue: Vercel.
- Control de versiones: GitHub.
- Calidad: ESLint, TypeScript check, pruebas mínimas.

Si el proyecto todavía no tiene backend, crea primero una landing estática bien estructurada y deja contratos de datos claros para la fase siguiente.

## 4. Reglas de arquitectura

- No mezclar lógica de negocio dentro de componentes visuales.
- Crear componentes reutilizables y pequeños.
- Separar `app/`, `components/`, `lib/`, `server/`, `schemas/`, `types/`, `styles/` y `docs/`.
- Usar nombres claros en español o inglés, pero no mezclar sin criterio.
- Definir modelos antes de escribir mutaciones.
- Validar entradas con Zod antes de persistir datos.
- Preferir server actions o API routes con validación explícita.
- Mantener una capa `lib/security` para helpers de seguridad cuando aplique.

## 5. Reglas de seguridad obligatorias

Nunca entregues código que incumpla estas reglas:

- No hardcodear secretos, tokens, contraseñas ni URLs privadas.
- Usar variables de entorno y entregar `.env.example`, nunca `.env` real.
- Validar y sanear todos los inputs.
- Aplicar mínimo privilegio en roles y permisos.
- No exponer trazas internas al usuario final.
- No guardar tokens sensibles en `localStorage`.
- Proteger formularios contra abuso básico: validación, límites y mensajes seguros.
- Usar consultas parametrizadas u ORM seguro.
- Evitar SQL dinámico sin control.
- Para panel administrativo, exigir autenticación y autorización.
- Revisar XSS, CSRF, CORS, rate limiting, headers de seguridad y dependencias.
- No crear endpoints abiertos que permitan enumeración de clientes, leads o datos internos.

Si una decisión requiere credenciales, datos privados o permisos, detente y deja instrucciones para que el humano los configure.

## 6. Flujo de trabajo con agentes

Cuando una tarea sea compleja, coordina trabajo con estos roles:

1. `product-owner`: define alcance, usuarios, historias y criterios de aceptación.
2. `brand-content-strategist`: valida textos, tono y propuesta de valor.
3. `ux-ui-designer`: convierte alcance en experiencia visual y flujos.
4. `frontend-engineer`: implementa UI y estados.
5. `backend-architect`: modela datos, APIs, validaciones y persistencia.
6. `security-reviewer`: revisa riesgos, permisos y exposición de datos.
7. `qa-release-manager`: revisa pruebas, regresiones y preparación de despliegue.

No todos los agentes deben usarse siempre. Usa los necesarios según el tipo de tarea.

## 7. Flujo con Stitch

Cuando se pida diseño visual, prototipo o UI:

1. Leer `DESIGN.md`.
2. Preparar un prompt específico para Stitch.
3. Pedir pantallas de alta fidelidad, no wireframes genéricos.
4. Solicitar componentes reutilizables, estados y responsive.
5. Cuando Stitch entregue el resultado, convertirlo a componentes reales con accesibilidad, semántica y estructura mantenible.

## 8. Estándar de respuesta

Cuando respondas al usuario:

- Sé claro y directo.
- No alucines.
- Marca supuestos como `SUPUESTO:`.
- Marca pendientes como `TODO:`.
- Cuando propongas arquitectura, explica por qué.
- Cuando generes código, incluye rutas de archivo.
- Cuando modifiques código, resume cambios, pruebas y riesgos.

## 9. Definición mínima de completitud

Una entrega está completa cuando:

- Cumple el objetivo funcional.
- Respeta marca y tono FORJEX.
- Tiene diseño coherente con `DESIGN.md`.
- Tiene validaciones básicas.
- No introduce secretos.
- No rompe TypeScript ni lint.
- Incluye instrucciones de ejecución.
- Incluye pendientes explícitos si falta información.
