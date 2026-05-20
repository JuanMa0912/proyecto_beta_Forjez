import { cn } from '@/lib/cn';

type Props = {
  className?: string;
  tone?: 'dark' | 'light';
};

export function Logo({ className, tone = 'dark' }: Props) {
  const fg = tone === 'dark' ? '#12343B' : '#FFFFFF';
  const accent = '#C9A227';

  return (
    <span className={cn('inline-flex items-center gap-2.5 font-semibold tracking-tight', className)} aria-label="FORJEZ Consulting">
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="28" height="28" rx="8" fill={fg} />
        <path d="M10 9h12v3h-9v4h7v3h-7v6h-3V9z" fill={accent} />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={cn('text-base font-bold', tone === 'dark' ? 'text-forjez-ink' : 'text-white')}>FORJEZ</span>
        <span className={cn('text-[10px] uppercase tracking-[0.22em]', tone === 'dark' ? 'text-forjez-muted' : 'text-white/70')}>Consulting</span>
      </span>
    </span>
  );
}
