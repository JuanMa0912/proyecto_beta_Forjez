// Rate limiter en memoria para Fase 1. En producción multi-instancia
// reemplazar por Upstash, Redis o KV con TTL nativo.
type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

export type RateLimitOptions = {
  windowMs: number;
  max: number;
};

export type RateLimitResult = {
  allowed: boolean;
  remaining: number;
  resetInSeconds: number;
};

export function rateLimit(key: string, opts: RateLimitOptions): RateLimitResult {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    const resetAt = now + opts.windowMs;
    buckets.set(key, { count: 1, resetAt });
    return { allowed: true, remaining: opts.max - 1, resetInSeconds: Math.ceil(opts.windowMs / 1000) };
  }

  if (bucket.count >= opts.max) {
    return {
      allowed: false,
      remaining: 0,
      resetInSeconds: Math.max(1, Math.ceil((bucket.resetAt - now) / 1000)),
    };
  }

  bucket.count += 1;
  return {
    allowed: true,
    remaining: opts.max - bucket.count,
    resetInSeconds: Math.max(1, Math.ceil((bucket.resetAt - now) / 1000)),
  };
}
