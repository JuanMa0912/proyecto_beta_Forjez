import { Section } from '@/components/ui/Section';

const metrics = [
  { value: '+X%', label: 'Eficiencia operativa', note: 'Reducción de tiempos en procesos clave' },
  { value: '-X%', label: 'Reprocesos', note: 'Menos errores operativos y retrabajo' },
  { value: 'X', label: 'Procesos documentados', note: 'Manuales y procedimientos en operación' },
  { value: 'X', label: 'KPIs implementados', note: 'Indicadores activos en dashboards' },
];

export function Results() {
  return (
    <Section
      id="resultados"
      eyebrow="Resultados esperados"
      title="Mejoras concretas, no promesas vagas"
      description="Estos son los rangos de resultados que típicamente buscamos cuando intervenimos una operación. Las cifras finales dependen del alcance y la madurez del cliente."
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((m) => (
          <li key={m.label} className="rounded-card border border-forjex-border bg-forjex-surface p-7 text-center">
            <div className="text-4xl font-bold text-forjex-ink">{m.value}</div>
            <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-forjex-green">
              {m.label}
            </div>
            <p className="mt-3 text-xs leading-relaxed text-forjex-muted">{m.note}</p>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-center text-xs text-forjex-muted">
        Métricas placeholder. Se reemplazarán con casos reales documentados.
      </p>
    </Section>
  );
}
