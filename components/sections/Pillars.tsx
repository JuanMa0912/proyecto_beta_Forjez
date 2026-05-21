import { Section } from '@/components/ui/Section';

const responsibilities = [
  {
    label: 'Responsabilidad Social',
    description:
      'Impulsamos el desarrollo del talento humano mediante formación continua y reskilling tecnológico frente a la automatización y la inteligencia artificial.',
  },
  {
    label: 'Responsabilidad Económica',
    description:
      'Optimizamos procesos empresariales para mejorar la eficiencia, competitividad y sostenibilidad de las Pymes.',
  },
  {
    label: 'Responsabilidad Ambiental',
    description:
      'Promovemos la digitalización y automatización de procesos para reducir el uso de papel y optimizar recursos operativos.',
  },
];

export function Pillars() {
  return (
    <Section
      id="servicios"
      eyebrow="Responsabilidad Organizacional"
      title="Crecimiento empresarial con desarrollo humano y transformación responsable"
      description="Entendemos la sostenibilidad como el equilibrio entre eficiencia operativa, competitividad, cuidado de los recursos y preparación del talento frente a los cambios tecnológicos."
    >
      <ul className="grid gap-6 md:grid-cols-3">
        {responsibilities.map((item, index) => (
          <li key={item.label} className="card-fz flex flex-col">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-forjex-green">
                Eje {String(index + 1).padStart(2, '0')}
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-pill bg-forjex-ink/5 text-sm font-bold text-forjex-ink">
                {index + 1}
              </span>
            </div>
            <h3 className="mt-5 text-xl font-semibold text-forjex-ink">{item.label}</h3>
            <p className="mt-4 text-sm leading-relaxed text-forjex-muted md:text-base">
              {item.description}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-8 rounded-card border border-forjex-border bg-forjex-surface p-7 text-center md:p-9">
        <span className="eyebrow">Enfoque sostenible</span>
        <p className="mx-auto mt-4 max-w-3xl text-xl font-semibold leading-relaxed text-forjex-ink">
          En FORJEX Consulting, la sostenibilidad no es un bloque aislado: es una forma de tomar
          decisiones que protege la operación, fortalece a las personas y mejora la competitividad.
        </p>
      </div>
    </Section>
  );
}
