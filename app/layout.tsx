import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://forjez.example.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'FORJEZ Consulting — Donde la estrategia se convierte en resultados',
    template: '%s | FORJEZ Consulting',
  },
  description:
    'Transformamos el potencial de tu empresa en resultados sostenibles y medibles. Diagnóstico operativo, rediseño de procesos, control organizacional y sistemas para la toma de decisiones.',
  keywords: [
    'consultoría empresarial',
    'transformación de procesos',
    'eficiencia operativa',
    'control organizacional',
    'BPR',
    'FORJEZ',
  ],
  applicationName: 'FORJEZ Consulting',
  authors: [{ name: 'FORJEZ Consulting' }],
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: siteUrl,
    siteName: 'FORJEZ Consulting',
    title: 'FORJEZ Consulting — Donde la estrategia se convierte en resultados',
    description:
      'Optimizamos y estructuramos operaciones empresariales para potenciar la eficiencia, el control y la toma de decisiones.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FORJEZ Consulting',
    description:
      'Donde la estrategia se convierte en resultados. Diagnóstico, rediseño operativo y sistemas para la toma de decisiones.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#12343B',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-screen bg-white font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-pill focus:bg-forjez-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
