# DESIGN.md — Sistema de diseño para Stitch y Claude

Este documento es la fuente de verdad visual para generar prototipos en Stitch y luego implementarlos con Claude.

## 1. Identidad visual

### Marca
FORJEZ Consulting

### Eslogan
“Donde la estrategia se convierte en resultados”

### Personalidad visual
- Ejecutiva.
- Estratégica.
- Sobria.
- Premium sin exagerar.
- Confiable.
- Orientada a resultados medibles.
- Cercana para empresas en crecimiento.

### Sensación deseada
La interfaz debe transmitir que FORJEZ entra a la operación real del cliente, ordena procesos, crea control, reduce fricción y convierte la estrategia en resultados medibles.

## 2. Paleta sugerida

> Ajustable cuando exista logo definitivo.

### Colores primarios
- Azul petróleo profundo: `#12343B`
- Verde estratégico: `#2E7D68`
- Dorado sobrio / acento ejecutivo: `#C9A227`

### Colores neutros
- Fondo claro: `#F7F8FA`
- Blanco: `#FFFFFF`
- Texto principal: `#172026`
- Texto secundario: `#5B6670`
- Borde: `#DDE3EA`

### Estados
- Éxito: `#2E7D32`
- Advertencia: `#B7791F`
- Error: `#C62828`
- Información: `#1565C0`

## 3. Tipografía

### Estilo
- Sans-serif moderna, limpia y corporativa.
- Títulos con peso fuerte.
- Cuerpo legible y espaciado generoso.

### Recomendación
- Inter, Manrope, Geist o similar.

### Jerarquía
- Hero title: 56–72 px desktop / 36–44 px mobile.
- H1 interno: 44–56 px.
- H2: 32–40 px.
- H3: 22–28 px.
- Body: 16–18 px.
- Caption: 13–14 px.

## 4. Layout

### Grid
- Desktop: 12 columnas.
- Tablet: 8 columnas.
- Mobile: 4 columnas.
- Máximo ancho de contenido: 1180–1280 px.
- Espaciado vertical amplio entre secciones: 72–120 px.

### Bordes y formas
- Cards: radio 20–28 px.
- Botones: radio 999 px o 14–18 px según contexto.
- Secciones: bloques amplios, respirados, con fondos alternos.

### Sombras
Sombras suaves, nunca dramáticas. Deben comunicar profundidad y orden, no ruido visual.

## 5. Componentes principales

### Header
- Logo FORJEZ.
- Navegación: Inicio, Servicios, Metodología, Resultados, Contacto.
- CTA: “Solicitar diagnóstico”.
- Sticky opcional.

### Hero
- Título fuerte basado en resultados.
- Subtítulo que explique la promesa.
- CTA principal: “Solicitar diagnóstico inicial”.
- CTA secundario: “Ver servicios”.
- Visual sugerido: dashboard abstracto, mapa de procesos o sistema operativo empresarial.

### Service Pillar Card
Cada pilar debe tener:
- Número o ícono.
- Nombre del pilar.
- Enfoque.
- Tres servicios principales.
- Resultado esperado.

### Process Section
Representar metodología en 4 pasos:
1. Diagnosticar.
2. Diseñar.
3. Implementar.
4. Medir y ajustar.

### Impact Metrics
Usar métricas de ejemplo solo como placeholders marcados:
- `+X% eficiencia operativa`.
- `-X% reprocesos`.
- `X procesos documentados`.
- `X KPIs implementados`.

No inventar cifras reales.

### Contact Form
Campos:
- Nombre.
- Empresa.
- Cargo.
- Correo.
- Teléfono.
- Tamaño de empresa.
- Servicio de interés.
- Mensaje.

### Dashboard administrativo
Módulos sugeridos:
- Leads recibidos.
- Diagnósticos activos.
- Propuestas enviadas.
- Clientes en implementación.
- Tareas pendientes.
- KPIs comerciales.

## 6. Pantallas mínimas para Stitch

### Landing page
Secciones:
1. Header.
2. Hero.
3. Problemas que resolvemos.
4. Pilares de servicios.
5. Metodología.
6. Resultados esperados.
7. Testimonios placeholder.
8. CTA final.
9. Footer.

### Página de servicios
- Pilares detallados.
- Qué incluye cada servicio.
- Para quién aplica.
- Entregables esperados.
- CTA por pilar.

### Dashboard admin
- Sidebar.
- Topbar.
- Cards de KPIs.
- Tabla de leads.
- Pipeline comercial.
- Estado de diagnósticos.
- Próximas tareas.

## 7. UX writing

### Tono
Profesional, claro, estratégico y orientado a acción.

### Ejemplos de titulares
- “Convertimos la operación de tu empresa en un sistema medible y escalable.”
- “Estrategia, control y eficiencia para empresas que quieren crecer sin perder el orden.”
- “El potencial de tu empresa ya existe. Nosotros lo transformamos en resultados.”

### Botones
- Solicitar diagnóstico.
- Ver servicios.
- Conocer metodología.
- Agendar una conversación.
- Descargar portafolio.

## 8. Accesibilidad

- Contraste mínimo AA.
- Textos legibles en mobile.
- Botones con estados hover/focus/disabled.
- Formularios con labels visibles.
- No depender solo del color para estados.
- HTML semántico en implementación.

## 9. Reglas para Stitch

Cuando se use Stitch:

- Pedir diseño de alta fidelidad.
- Pedir versión desktop y mobile.
- Pedir componentes reutilizables.
- Pedir estados de formularios.
- Pedir una estética corporativa no genérica.
- Evitar exceso de gradientes, mockups irreales o animaciones innecesarias.
- Usar textos reales de FORJEZ cuando existan.
- Usar placeholders claros cuando falte información.

## 10. Entregable esperado de Stitch

El resultado ideal debe incluir:

- Pantallas visuales claras.
- Jerarquía visual fuerte.
- Componentes coherentes.
- Código frontend exportable si está disponible.
- Guía de tokens visuales.
- Variantes de CTA y cards.
