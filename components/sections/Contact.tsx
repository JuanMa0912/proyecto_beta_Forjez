import { Section } from '@/components/ui/Section';
import { ContactForm } from '@/components/sections/ContactForm';

export function Contact() {
  return (
    <Section
      id="contacto"
      eyebrow="Hablemos"
      title="Solicita tu diagnóstico inicial"
      description="Déjanos tus datos y un consultor te contactará en menos de 1 día hábil para revisar tu necesidad y proponer próximos pasos."
    >
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="rounded-card border border-forjex-border bg-forjex-surface p-7">
            <h3 className="text-h3 font-semibold text-forjex-ink">¿Qué incluye?</h3>
            <ul className="mt-5 space-y-3 text-sm text-forjex-text">
              <Li>Conversación inicial estructurada de 30 minutos.</Li>
              <Li>Identificación preliminar de oportunidades operativas.</Li>
              <Li>Recomendación de pilar de servicio aplicable.</Li>
              <Li>Sin compromiso comercial.</Li>
            </ul>
          </div>

          <div className="mt-5 rounded-card border border-forjex-border bg-white p-7">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-forjex-green">
              Contacto directo
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a className="text-forjex-text hover:text-forjex-ink" href="mailto:forjexconsulting@outlook.com">
                  forjexconsulting@outlook.com
                </a>
              </li>
              <li>
                <a className="text-forjex-text hover:text-forjex-ink" href="tel:+576024445687">
                  (602) 444 5687
                </a>
              </li>
              <li>
                <a className="text-forjex-text hover:text-forjex-ink" href="tel:+573054879051">
                  +57 305 487 9051
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2">
      <span
        aria-hidden="true"
        className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-forjex-gold"
      />
      <span>{children}</span>
    </li>
  );
}
