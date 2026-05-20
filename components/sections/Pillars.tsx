import { Section } from '@/components/ui/Section';

const pillars = [
  {
    number: '01',
    name: 'Estructuración y Optimización de Operaciones',
    focus:
      'Diseñar el motor operativo que la empresa necesita para crecer sin perder el control.',
    services: [
      'Análisis y Diagnóstico Operacional General',
      'Rediseño y Transformación de Procesos (BPR)',
      'Modelos Operativos Escalables',
    ],
    result: 'Una operación clara, documentada y lista para escalar.',
  },
  {
    number: '02',
    name: 'Control Organizacional y Eficiencia',
    focus:
      'Mitigar riesgos y asegurar que cada recurso se utilice de manera inteligente.',
    services: [
      'Estructuración Organizacional',
      'Manuales de Procesos y Procedimientos',
      'Establecimiento de Controles Internos',
    ],
    result: 'Roles, controles y eficiencia alineados al plan estratégico.',
  },
  {
    number: '03',
    name: 'Sistemas para la Toma de Decisiones',
    focus:
      'Transformar datos operativos en información estratégica para la alta dirección.',
    services: [
      'Diseño de Tableros de Control / Dashboards',
      'Sistemas de Información Operativa',
      'Acompañamiento Estratégico',
    ],
    result: 'Decisiones basadas en indicadores, no en intuición.',
  },
];

export function Pillars() {
  return (
    <Section
      id="servicios"
      eyebrow="Pilares de servicio"
      title="Tres frentes para transformar tu operación"
      description="Cada pilar entrega un componente clave del sistema operativo de la empresa. Se diseñan por separado, pero funcionan como una sola estructura."
    >
      <ul className="grid gap-6 md:grid-cols-3">
        {pillars.map((p) => (
          <li key={p.number} className="card-fz flex flex-col">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-[0.2em] text-forjez-green">
                PILAR {p.number}
              </span>
              <span className="h-9 w-9 rounded-pill bg-forjez-ink/5 text-forjez-ink flex items-center justify-center text-sm font-bold">
                {p.number}
              </span>
            </div>
            <h3 className="mt-4 text-xl font-semibold text-forjez-ink">{p.name}</h3>
            <p className="mt-3 text-forjez-muted">{p.focus}</p>

            <ul className="mt-5 space-y-2 text-sm">
              {p.services.map((s) => (
                <li key={s} className="flex gap-2 text-forjez-text">
                  <span aria-hidden="true" className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-forjez-gold" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 border-t border-forjez-border pt-4 text-sm font-medium text-forjez-ink">
              Resultado esperado: <span className="font-normal text-forjez-muted">{p.result}</span>
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
