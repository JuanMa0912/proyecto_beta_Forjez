import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';

const nav = [
  { href: '#problemas', label: 'Cultura organizacional' },
  { href: '#servicios', label: 'Responsabilidad Organizacional' },
  { href: '#metodologia', label: 'Estrategia de Gestión del Cambio' },
  { href: '#resultados', label: 'Indicadores' },
  { href: '#contacto', label: 'Contacto' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-forjex-border/60 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="container-fz flex h-16 items-center justify-between md:h-20">
        <Link href="/" aria-label="Ir al inicio" className="flex items-center">
          <Logo priority />
        </Link>

        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-4 text-[13px] font-medium text-forjex-muted lg:gap-5">
            {nav.map((item) => (
              <li key={item.href}>
                <a className="transition hover:text-forjex-ink" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contacto" className="btn-primary hidden md:inline-flex">
          Solicitar diagnóstico
        </a>

        <a href="#contacto" className="btn-primary md:hidden text-xs px-4 py-2">
          Diagnóstico
        </a>
      </div>
    </header>
  );
}
