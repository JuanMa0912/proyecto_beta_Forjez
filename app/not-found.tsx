import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-forjez-surface px-6">
      <div className="max-w-md text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-4 text-h2 font-semibold text-forjez-ink">Página no encontrada</h1>
        <p className="mt-3 text-forjez-muted">
          La ruta que buscas no existe o fue movida. Vuelve al inicio para continuar navegando.
        </p>
        <Link href="/" className="btn-primary mt-8 inline-flex">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
