'use server';

import { headers } from 'next/headers';
import { contactSchema, type ContactInput } from '@/schemas/contact';
import { rateLimit } from '@/lib/security/rate-limit';
import { sanitizeText } from '@/lib/security/sanitize';

export type ContactActionResult =
  | { ok: true }
  | { ok: false; error: string; fieldErrors?: Partial<Record<keyof ContactInput, string>> };

function getClientKey(): string {
  const h = headers();
  const forwarded = h.get('x-forwarded-for');
  const real = h.get('x-real-ip');
  const ip = forwarded?.split(',')[0]?.trim() || real || 'unknown';
  return `contact:${ip}`;
}

export async function submitContact(raw: unknown): Promise<ContactActionResult> {
  const limit = rateLimit(getClientKey(), { windowMs: 60_000, max: 3 });
  if (!limit.allowed) {
    return {
      ok: false,
      error: `Demasiadas solicitudes. Intenta de nuevo en ${limit.resetInSeconds}s.`,
    };
  }

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Partial<Record<keyof ContactInput, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === 'string' && !fieldErrors[key as keyof ContactInput]) {
        fieldErrors[key as keyof ContactInput] = issue.message;
      }
    }
    return { ok: false, error: 'Revisa los campos marcados.', fieldErrors };
  }

  const data = parsed.data;

  // Honeypot — si llegó algo, fingimos éxito para no informar al bot.
  if (data.website && data.website.length > 0) {
    return { ok: true };
  }

  const sanitized = {
    ...data,
    name: sanitizeText(data.name, 80),
    company: sanitizeText(data.company, 120),
    role: sanitizeText(data.role, 80),
    phone: sanitizeText(data.phone, 20),
    message: sanitizeText(data.message, 2000),
  };

  // Fase 1: solo loggeamos server-side. No exponemos PII al cliente.
  // Fase 2: conectar con proveedor de mail / CRM (Resend, Postmark, HubSpot, etc.)
  // TODO: integrar con CONTACT_INBOX_EMAIL y persistir lead en DB cuando exista backend.
  console.info('[contact] lead recibido', {
    name: sanitized.name,
    company: sanitized.company,
    email: sanitized.email,
    serviceInterest: sanitized.serviceInterest,
    companySize: sanitized.companySize,
    receivedAt: new Date().toISOString(),
  });

  return { ok: true };
}
