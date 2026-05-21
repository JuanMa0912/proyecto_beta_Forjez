export function FinalCTA() {
  return (
    <section className="bg-forjex-ink text-white">
      <div className="container-fz py-20 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow text-forjex-gold">El siguiente paso</span>
          <h2 className="mt-5 text-h2 font-semibold text-white">
            El potencial de tu empresa ya existe. Nosotros lo transformamos en resultados.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/80">
            Agenda una conversación inicial. En 30 minutos te decimos si podemos ayudarte y cómo.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#contacto" className="btn-accent">
              Solicitar diagnóstico inicial
            </a>
            <a
              href="mailto:forjexconsulting@outlook.com"
              className="inline-flex items-center justify-center rounded-pill border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Escribirnos por correo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
