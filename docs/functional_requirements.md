# Requerimientos funcionales

## Landing page

- Mostrar propuesta de valor principal.
- Mostrar los tres pilares de servicio.
- Mostrar metodología de trabajo.
- Capturar leads mediante formulario.
- Validar campos obligatorios.
- Enviar o almacenar lead según fase técnica.
- Mostrar información de contacto.

## Página de servicios

- Listar pilares y servicios.
- Explicar beneficios y entregables.
- Incluir CTA por servicio.

## Panel administrativo

- Inicio de sesión para usuarios autorizados.
- Ver lista de leads.
- Filtrar por estado.
- Cambiar estado del lead.
- Registrar notas internas.
- Crear cliente desde lead aprobado.
- Ver métricas básicas.

## Entidades iniciales

### Lead
- id
- nombre
- empresa
- cargo
- correo
- telefono
- tamanoEmpresa
- servicioInteres
- mensaje
- estado
- fechaCreacion
- fechaActualizacion

### Cliente
- id
- razonSocial
- contactoPrincipal
- correo
- telefono
- estado
- fechaCreacion

### Diagnostico
- id
- clienteId
- estado
- fechaInicio
- fechaCierre
- resumen
- hallazgos
- recomendaciones

### Usuario
- id
- nombre
- email
- rol
- estado
