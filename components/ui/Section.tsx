import { cn } from '@/lib/cn';

type Props = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  surface?: 'default' | 'muted' | 'ink';
};

export function Section({ id, eyebrow, title, description, children, className, surface = 'default' }: Props) {
  const surfaces = {
    default: 'bg-white text-forjex-text',
    muted: 'bg-forjex-surface text-forjex-text',
    ink: 'bg-forjex-ink text-white',
  } as const;

  return (
    <section id={id} className={cn('section', surfaces[surface], className)}>
      <div className="container-fz">
        {(eyebrow || title || description) && (
          <header className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            {eyebrow && <span className={cn('eyebrow', surface === 'ink' && 'text-forjex-gold')}>{eyebrow}</span>}
            {title && (
              <h2
                className={cn(
                  'mt-4 text-h2 font-semibold',
                  surface === 'ink' ? 'text-white' : 'text-forjex-ink',
                )}
              >
                {title}
              </h2>
            )}
            {description && (
              <p
                className={cn(
                  'mt-5 text-base md:text-lg leading-relaxed',
                  surface === 'ink' ? 'text-white/80' : 'text-forjex-muted',
                )}
              >
                {description}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
