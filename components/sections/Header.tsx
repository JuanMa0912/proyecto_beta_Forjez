import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';

const nav = [
  { href: '#problemas', label: 'Problemas' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#metodologia', label: 'Metodología' },
  { href: '#resultados', label: 'Resultados' },
  { href: '#contacto', label: 'Contacto' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-forjez-border/60 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="container-fz flex h-16 items-center justify-between md:h-20">
        <Link href="/" aria-label="Ir al inicio" className="flex items-center">
          <Logo />
        </Link>

        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium text-forjez-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <a className="transition hover:text-forjez-ink" href={item.href}>
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
