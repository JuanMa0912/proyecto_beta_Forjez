import { Section } from '@/components/ui/Section';

const problems = [
  {
    title: 'Procesos sin documentar',
    description:
      'La operación depende del conocimiento de pocas personas. No hay manuales, ni procedimientos, ni un mapa claro de cómo funciona la empresa.',
  },
  {
    title: 'Reprocesos y reglas no controladas',
    description:
      'Equipos repiten trabajo, los errores se descubren tarde y las decisiones se toman sin un control sistemático.',
  },
  {
    title: 'Crecimiento sin estructura',
    description:
      'La empresa creció más rápido que sus procesos. Hoy se requiere ordenar roles, responsabilidades y flujos para escalar.',
  },
  {
    title: 'Decisiones sin información',
    description:
      'No existe un tablero confiable. Las decisiones estratégicas se basan en intuición porque los datos están dispersos.',
  },
];

export function Problems() {
  return (
    <Section
      id="problemas"
      surface="muted"
      eyebrow="Problemas que resolvemos"
      title="Tu operación tiene potencial. Hoy quizás no tiene sistema."
      description="Trabajamos con empresas que sienten que la operación se les está quedando corta para el ritmo de crecimiento que necesitan."
    >
      <ul className="grid gap-5 md:grid-cols-2">
        {problems.map((p) => (
          <li key={p.title} className="card-fz">
            <h3 className="text-h3 font-semibold text-forjez-ink">{p.title}</h3>
            <p className="mt-3 text-forjez-muted">{p.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
