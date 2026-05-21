import { Logo } from '@/components/ui/Logo';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-forjex-border bg-white">
      <div className="container-fz grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-forjex-muted">
            FORJEX Consulting transforma el potencial de tu empresa en resultados sostenibles y
            medibles a través de diagnóstico, rediseño operativo y sistemas de decisión.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-forjex-ink">Servicios</h4>
          <ul className="mt-4 space-y-2 text-sm text-forjex-muted">
            <li>Estructuración de operaciones</li>
            <li>Control organizacional</li>
            <li>Sistemas de decisión</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-forjex-ink">Contacto</h4>
          <ul className="mt-4 space-y-2 text-sm text-forjex-muted">
            <li>
              <a className="hover:text-forjex-ink" href="mailto:forjexconsulting@outlook.com">
                forjexconsulting@outlook.com
              </a>
            </li>
            <li>
              <a className="hover:text-forjex-ink" href="tel:+576024445687">
                (602) 444 5687
              </a>
            </li>
            <li>
              <a className="hover:text-forjex-ink" href="tel:+573054879051">
                +57 305 487 9051
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-forjex-border">
        <div className="container-fz flex flex-col items-start gap-2 py-5 text-xs text-forjex-muted md:flex-row md:items-center md:justify-between">
          <p>&copy; {year} FORJEX Consulting. Todos los derechos reservados.</p>
          <p>Donde la estrategia se convierte en resultados.</p>
        </div>
      </div>
    </footer>
  );
}
