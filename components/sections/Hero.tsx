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

      <div className="container-fz grid items-center gap-12 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-7">
          <span className="eyebrow">FORJEZ Consulting</span>
          <h1 className="mt-5 text-display font-bold text-forjez-ink">
            Donde la estrategia se{' '}
            <span className="text-forjez-green">convierte en resultados</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-forjez-muted">
            Transformamos el potencial de tu empresa en sistemas operativos eficientes,
            escalables y medibles. Diagnosticamos, rediseñamos procesos y construimos el
            control que tu organización necesita para crecer sin perder el orden.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contacto" className="btn-primary">
              Solicitar diagnóstico inicial
            </a>
            <a href="#servicios" className="btn-secondary">
              Ver servicios
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-forjez-border pt-8 text-sm">
            <div>
              <dt className="text-forjez-muted">Diagnóstico</dt>
              <dd className="mt-1 text-base font-semibold text-forjez-ink">Operacional</dd>
            </div>
            <div>
              <dt className="text-forjez-muted">Enfoque</dt>
              <dd className="mt-1 text-base font-semibold text-forjez-ink">Resultados</dd>
            </div>
            <div>
              <dt className="text-forjez-muted">Modelo</dt>
              <dd className="mt-1 text-base font-semibold text-forjez-ink">Escalable</dd>
            </div>
          </dl>
        </div>

        <div className="md:col-span-5">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="rounded-card border border-forjez-border bg-white p-6 shadow-card">
        <div className="flex items-center justify-between">
          <span className="eyebrow">Sistema operativo</span>
          <span className="text-xs text-forjez-muted">v1.0</span>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          <KPI label="Eficiencia" value="+X%" tone="green" />
          <KPI label="Reprocesos" value="-X%" tone="ink" />
          <KPI label="KPIs activos" value="X" tone="gold" />
        </div>

        <div className="mt-6 space-y-3">
          <ProcessRow label="Diagnóstico operativo" pct={92} />
          <ProcessRow label="Rediseño de procesos" pct={68} />
          <ProcessRow label="Implementación de controles" pct={44} />
          <ProcessRow label="Tableros de decisión" pct={26} />
        </div>

        <p className="mt-5 text-[11px] text-forjez-muted">
          Visual de referencia. Cifras son placeholders.
        </p>
      </div>
    </div>
  );
}

function KPI({ label, value, tone }: { label: string; value: string; tone: 'green' | 'ink' | 'gold' }) {
  const toneClasses = {
    green: 'bg-forjez-green/10 text-forjez-green',
    ink: 'bg-forjez-ink/10 text-forjez-ink',
    gold: 'bg-forjez-gold/15 text-[#8a6f10]',
  } as const;
  return (
    <div className={`${toneClasses[tone]} rounded-2xl px-3 py-3`}>
      <div className="text-lg font-bold leading-none">{value}</div>
      <div className="mt-1 text-[11px] uppercase tracking-wider opacity-80">{label}</div>
    </div>
  );
}

function ProcessRow({ label, pct }: { label: string; pct: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs">
        <span className="text-forjez-text">{label}</span>
        <span className="font-medium text-forjez-muted">{pct}%</span>
      </div>
      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-forjez-border">
        <div className="h-full rounded-full bg-forjez-green" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
