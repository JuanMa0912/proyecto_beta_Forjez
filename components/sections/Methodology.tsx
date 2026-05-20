import { Section } from '@/components/ui/Section';

const steps = [
  {
    n: '1',
    title: 'Diagnosticar',
    description:
      'Levantamos la operación actual, identificamos cuellos de botella, riesgos, duplicidades y oportunidades concretas de mejora.',
  },
  {
    n: '2',
    title: 'Diseñar',
    description:
      'Rediseñamos los procesos clave, definimos roles, controles e indicadores. Entregamos un blueprint operativo accionable.',
  },
  {
    n: '3',
    title: 'Implementar',
    description:
      'Acompañamos el despliegue. Construimos manuales, controles internos y tableros de información operativa.',
  },
  {
    n: '4',
    title: 'Medir y ajustar',
    description:
      'Definimos KPIs operativos, los monitoreamos y ajustamos el sistema hasta que los resultados sean sostenibles.',
  },
];

export function Methodology() {
  return (
    <Section
      id="metodologia"
      surface="muted"
      eyebrow="Metodología"
      title="Un proceso probado en cuatro pasos"
      description="No entregamos un informe y nos vamos. Nos involucramos hasta que el sistema funcione y sea medible."
    >
      <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.n} className="card-fz relative">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-pill bg-forjez-ink text-sm font-bold text-white">
                {s.n}
              </span>
              <h3 className="text-lg font-semibold text-forjez-ink">{s.title}</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-forjez-muted">{s.description}</p>
            {i < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute right-4 top-9 hidden text-forjez-border lg:block"
              >
                →
              </span>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
