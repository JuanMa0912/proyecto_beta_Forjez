import { Section } from '@/components/ui/Section';

// Placeholders marcados. No inventar testimonios reales.
const items = [
  {
    quote:
      'Espacio reservado para el testimonio de un cliente que recibió diagnóstico operativo y rediseño de procesos.',
    name: 'Nombre cliente',
    role: 'Cargo, Empresa',
  },
  {
    quote:
      'Espacio reservado para el testimonio de un cliente que implementó tableros de control y manuales internos.',
    name: 'Nombre cliente',
    role: 'Cargo, Empresa',
  },
  {
    quote:
      'Espacio reservado para el testimonio de un cliente que ordenó su estructura organizacional con FORJEZ.',
    name: 'Nombre cliente',
    role: 'Cargo, Empresa',
  },
];

export function Testimonials() {
  return (
    <Section
      id="testimonios"
      surface="muted"
      eyebrow="Voces de quienes nos eligen"
      title="Testimonios de clientes"
      description="Bloque preparado para sustituirse por testimonios reales cuando se autoricen."
    >
      <ul className="grid gap-5 md:grid-cols-3">
        {items.map((t, i) => (
          <li key={i} className="card-fz flex flex-col">
            <span aria-hidden="true" className="text-3xl leading-none text-forjez-gold">“</span>
            <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-forjez-text">
              {t.quote}
            </blockquote>
            <footer className="mt-6 border-t border-forjez-border pt-4 text-sm">
              <div className="font-semibold text-forjez-ink">{t.name}</div>
              <div className="text-forjez-muted">{t.role}</div>
            </footer>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-center text-xs text-forjez-muted">
        Placeholders. Reemplazar con testimonios reales y firmados.
      </p>
    </Section>
  );
}
