# Instalación rápida

## Opción A — Nuevo proyecto Next.js

```bash
npx create-next-app@latest forjez-consulting --typescript --tailwind --eslint --app
cd forjez-consulting
```

Copia este paquete dentro de la raíz del proyecto.

## Opción B — Proyecto existente

Copia estos archivos en la raíz del repositorio:

- `CLAUDE.md`
- `DESIGN.md`
- `.claude/`
- `docs/`
- `prompts/`

## Uso con Claude Code

```bash
claude
```

Luego pega el contenido de:

```text
prompts/00_master_prompt_for_claude.md
```

## Uso con Stitch

1. Abre Stitch.
2. Pega el contenido de `DESIGN.md` como contexto de diseño.
3. Pega `prompts/01_stitch_prompt_landing_web.md` o `prompts/02_stitch_prompt_admin_dashboard.md`.
4. Exporta el resultado o captura la referencia visual.
5. Entrégale el resultado a Claude usando `prompts/03_claude_implementation_prompt.md`.
