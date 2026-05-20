# Prompt para Claude — Revisión final, seguridad y hardening

Revisa el proyecto FORJEZ Consulting como si fueras auditor técnico antes de despliegue.

## Debes revisar

1. Seguridad del frontend.
2. Seguridad del backend si existe.
3. Validación de formularios.
4. Manejo de errores.
5. Variables de entorno.
6. Exposición accidental de datos.
7. Accesibilidad.
8. SEO básico.
9. Performance básica.
10. Preparación para despliegue en Vercel.

## Checklist obligatorio

- [ ] No hay secretos en el repositorio.
- [ ] Existe `.env.example` si se usan variables.
- [ ] Formularios validados.
- [ ] No se usa `dangerouslySetInnerHTML` sin sanitización.
- [ ] Rutas privadas protegidas si existe dashboard.
- [ ] Roles aplicados si existe autenticación.
- [ ] Mensajes de error no filtran información interna.
- [ ] Build pasa.
- [ ] Lint pasa.
- [ ] TypeScript pasa.
- [ ] Responsive revisado.
- [ ] CTAs y textos respetan marca.

## Salida esperada

Entrega una tabla con:

- Hallazgo.
- Severidad: crítica, alta, media, baja.
- Archivo afectado.
- Recomendación.
- Estado: corregido o pendiente.

Después corrige automáticamente los hallazgos que sean seguros de corregir sin romper funcionalidad.
