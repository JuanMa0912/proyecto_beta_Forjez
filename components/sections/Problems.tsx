import { Section } from '@/components/ui/Section';

const behaviors = [
  'Transparencia absoluta en el manejo de la información.',
  'Ética profesional y responsabilidad organizacional.',
  'Aprendizaje continuo y adaptación tecnológica.',
  'Trabajo colaborativo y orientación a resultados.',
];

export function Problems() {
  return (
    <Section
      id="problemas"
      surface="muted"
      eyebrow="Cultura organizacional"
      title="Confianza, criterio técnico y mejora continua para transformar organizaciones"
      description="Nuestra cultura combina transparencia, pensamiento analítico y responsabilidad profesional para crear soluciones sostenibles, medibles y alineadas con el crecimiento de cada empresa."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-card border border-forjex-border bg-white p-7 shadow-card md:p-8">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-forjex-green">
            Misión
          </span>
          <p className="mt-4 text-sm leading-relaxed text-forjex-muted md:text-base">
            Optimizamos y estructuramos las operaciones empresariales a través de un estudio
            general y transformación de procesos, orientados a potenciar la eficiencia, mejorar el
            control organizacional e impulsar la toma de decisiones. Nuestro enfoque permite
            transformar el potencial de cada empresa en resultados sostenibles y medibles, mediante
            la implementación de sistemas operativos eficientes, escalables y alineados con su
            crecimiento.
          </p>
        </article>

        <article className="rounded-card border border-forjex-border bg-white p-7 shadow-card md:p-8">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-forjex-green">
            Visión
          </span>
          <p className="mt-4 text-sm leading-relaxed text-forjex-muted md:text-base">
            Para el 2030, consolidarnos como el socio estratégico líder en la optimización y
            transformación de operaciones empresariales, trabajando con organizaciones en
            crecimiento y empresas consolidadas para desarrollar sistemas eficientes, escalables y
            orientados a resultados, estableciendo un estándar de efectividad que respalde nuestro
            alcance regional.
          </p>
        </article>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-12">
        <article className="rounded-card border border-forjex-border bg-white p-7 shadow-card md:p-8 lg:col-span-7">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-forjex-green">
            Nuestra cultura
          </span>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-forjex-muted md:text-base">
            <p>
              En FORJEX Consulting promovemos una cultura organizacional orientada a la mejora
              continua, la eficiencia y la transformación estratégica de las organizaciones, basada
              en la transparencia.
            </p>
            <p>
              Nuestra cultura se fundamenta en la colaboración, el pensamiento analítico y el
              aprendizaje constante como herramientas para generar soluciones sostenibles y
              medibles. Fomentamos equipos multidisciplinarios capaces de adaptarse a entornos
              dinámicos, impulsando la innovación sin perder el control, la ética ni el enfoque
              humano.
            </p>
            <p>
              Creemos que la tecnología debe utilizarse para potenciar la toma de decisiones y
              fortalecer el crecimiento de las empresas y de las personas que las conforman.
            </p>
          </div>
        </article>

        <aside className="rounded-card border border-forjex-border bg-forjex-ink p-7 text-white shadow-card md:p-8 lg:col-span-5">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-forjex-gold">
            Comportamientos no negociables
          </span>
          <ul className="mt-5 space-y-4">
            {behaviors.map((behavior) => (
              <li key={behavior} className="flex gap-3 text-sm leading-relaxed text-white/85">
                <span
                  aria-hidden="true"
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-forjex-gold"
                />
                <span>{behavior}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <div className="mt-6 rounded-card border border-forjex-green/20 bg-white p-7 text-center shadow-card md:p-8">
        <p className="mx-auto max-w-3xl text-lg font-semibold leading-relaxed text-forjex-ink">
          Nuestro principal motor no es la tecnología, sino la confianza.
        </p>
        <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-forjex-muted md:text-base">
          La ética es la base de nuestra organización: no negociamos el manejo responsable de la
          información ni de los datos de nuestros clientes.
        </p>
      </div>
    </Section>
  );
}
