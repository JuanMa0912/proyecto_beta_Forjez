import { Section } from '@/components/ui/Section';

const focusAreas = [
  'Reskilling tecnológico para preparar equipos frente a la automatización.',
  'Formación en IA argumentada para fortalecer criterio, análisis y toma de decisiones.',
  'Desarrollo del capital intelectual como ventaja competitiva sostenible.',
];

export function Methodology() {
  return (
    <Section
      id="metodologia"
      surface="muted"
      eyebrow="Estrategia de Gestión del Cambio"
      title="FORJEX Future Skills: adaptación tecnológica con enfoque humano"
      description="Acompañamos el crecimiento organizacional reconociendo un riesgo clave del mercado: que la automatización y la inteligencia artificial desplacen talento humano si no existe una estrategia de preparación."
    >
      <div className="grid gap-6 lg:grid-cols-12">
        <article className="rounded-card border border-forjex-border bg-white p-7 shadow-card md:p-9 lg:col-span-7">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-forjex-green">
            Nuestra respuesta
          </span>
          <h3 className="mt-4 text-2xl font-semibold text-forjex-ink">FORJEX Future Skills</h3>
          <p className="mt-4 text-sm leading-relaxed text-forjex-muted md:text-base">
            Respondemos a este desafío mediante FORJEX Future Skills, una iniciativa de reskilling
            y formación en IA argumentada orientada a fortalecer el capital intelectual y preparar
            a las personas frente a los cambios del mercado laboral.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-forjex-muted md:text-base">
            Este enfoque busca que la tecnología no reemplace el criterio humano, sino que lo
            potencie. La transformación se gestiona con aprendizaje, acompañamiento y adopción
            responsable.
          </p>
        </article>

        <aside className="rounded-card border border-forjex-green/20 bg-white p-7 shadow-card md:p-9 lg:col-span-5">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-forjex-green">
            Líneas de acción
          </span>
          <ul className="mt-5 space-y-4">
            {focusAreas.map((area) => (
              <li key={area} className="flex gap-3 text-sm leading-relaxed text-forjex-muted">
                <span
                  aria-hidden="true"
                  className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-forjex-green"
                />
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
}
