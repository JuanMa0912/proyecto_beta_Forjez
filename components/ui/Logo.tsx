import Image from 'next/image';
import { cn } from '@/lib/cn';

type Props = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function Logo({ className, imageClassName, priority = false }: Props) {
  return (
    <span className={cn('inline-flex items-center', className)} aria-label="FORJEX Consulting">
      <Image
        src="/forjex-logo.jpeg"
        alt="FORJEX Consulting"
        width={695}
        height={196}
        priority={priority}
        sizes="(min-width: 768px) 190px, 150px"
        className={cn('h-10 w-auto object-contain md:h-12', imageClassName)}
      />
    </span>
  );
}
