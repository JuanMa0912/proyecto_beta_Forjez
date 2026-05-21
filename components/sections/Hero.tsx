import { Logo } from '@/components/ui/Logo';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'radial-gradient(60% 50% at 80% 0%, rgba(46,125,104,0.08), transparent), radial-gradient(40% 35% at 15% 100%, rgba(18,52,59,0.06), transparent)',
        }}
      />

      <div className="container-fz py-20 text-center md:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto inline-flex items-center gap-3 sm:gap-4">
            <span
              aria-hidden="true"
              className="hidden h-px w-12 bg-gradient-to-r from-transparent to-forjex-border sm:block"
            />
            <span className="inline-flex rounded-[22px] border border-forjex-border/80 bg-white px-5 py-3 shadow-soft">
              <Logo imageClassName="h-14 md:h-20" sizes="(min-width: 768px) 290px, 220px" />
            </span>
            <span
              aria-hidden="true"
              className="hidden h-px w-12 bg-gradient-to-l from-transparent to-forjex-border sm:block"
            />
          </div>
          <h1 className="mx-auto mt-5 max-w-4xl text-display font-bold text-forjex-ink">
            Donde la estrategia se{' '}
            <span className="text-forjex-green">convierte en resultados</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-forjex-muted">
            Transformamos el potencial de tu empresa en procesos eficientes, escalables y
            medibles. Diagnosticamos, rediseñamos procesos y construimos el
            control que tu organización necesita para crecer sin perder el orden.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#contacto" className="btn-primary">
              Solicitar diagnóstico inicial
            </a>
            <a href="#servicios" className="btn-secondary">
              Ver servicios
            </a>
          </div>

          <dl className="mx-auto mt-12 grid max-w-xl grid-cols-1 gap-5 border-t border-forjex-border pt-8 text-sm sm:grid-cols-3 sm:gap-6">
            <div>
              <dt className="text-forjex-muted">Diagnóstico</dt>
              <dd className="mt-1 text-base font-semibold text-forjex-ink">Operacional</dd>
            </div>
            <div>
              <dt className="text-forjex-muted">Enfoque</dt>
              <dd className="mt-1 text-base font-semibold text-forjex-ink">Resultados</dd>
            </div>
            <div>
              <dt className="text-forjex-muted">Modelo</dt>
              <dd className="mt-1 text-base font-semibold text-forjex-ink">Escalable</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
