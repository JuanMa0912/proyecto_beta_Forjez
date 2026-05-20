# Requerimientos de seguridad

## Principios

- Mínimo privilegio.
- Privacidad desde el diseño.
- Validación explícita.
- Seguridad por defecto.
- Trazabilidad sin exponer datos sensibles.

## Autenticación

- El panel administrativo debe requerir autenticación.
- Las sesiones deben ser seguras.
- No guardar tokens sensibles en localStorage.
- Usar cookies seguras cuando aplique.

## Autorización

Roles mínimos:

- `ADMIN`: acceso completo.
- `CONSULTOR`: gestiona diagnósticos asignados.
- `COMERCIAL`: gestiona leads y propuestas.
- `LECTURA`: solo consulta.

## Validación

- Todo formulario debe usar esquemas Zod.
- Rechazar campos inesperados.
- Limitar tamaños de texto.
- Validar formato de correo y teléfono.

## Protección de datos

- No registrar datos sensibles innecesarios.
- No imprimir datos privados en consola en producción.
- No exponer errores internos al cliente.
- Usar mensajes genéricos seguros en errores.

## Backend

- Usar ORM o consultas parametrizadas.
- Evitar SQL dinámico.
- Rate limit en formularios públicos.
- CORS restringido.
- Headers de seguridad.

## Frontend

- Evitar `dangerouslySetInnerHTML` salvo justificación y sanitización.
- Escapar contenido generado por usuarios.
- Labels y validaciones visibles.

## Dependencias

- Mantener dependencias actualizadas.
- Ejecutar auditoría antes de despliegue.
- No instalar paquetes abandonados o desconocidos sin revisión.

## Checklist antes de producción

- [ ] Variables en `.env.example` documentadas.
- [ ] No hay secretos en Git.
- [ ] Formularios validados.
- [ ] Rutas privadas protegidas.
- [ ] Roles aplicados.
- [ ] Errores controlados.
- [ ] Build exitoso.
- [ ] Lint exitoso.
- [ ] Revisión de dependencias.
