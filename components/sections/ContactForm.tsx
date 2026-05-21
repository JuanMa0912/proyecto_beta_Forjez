'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  contactSchema,
  COMPANY_SIZES,
  SERVICE_INTERESTS,
  type ContactInput,
} from '@/schemas/contact';
import { submitContact } from '@/server/actions/contact';
import { cn } from '@/lib/cn';

const serviceLabels: Record<(typeof SERVICE_INTERESTS)[number], string> = {
  'estructuracion-operaciones': 'Estructuración y optimización de operaciones',
  'control-organizacional': 'Control organizacional y eficiencia',
  'sistemas-decision': 'Sistemas para la toma de decisiones',
  'diagnostico-general': 'Diagnóstico general',
  'no-estoy-seguro': 'No estoy seguro, necesito orientación',
};

const sizeLabels: Record<(typeof COMPANY_SIZES)[number], string> = {
  '1-10': '1 a 10 personas',
  '11-50': '11 a 50 personas',
  '51-200': '51 a 200 personas',
  '201-500': '201 a 500 personas',
  '500+': 'Más de 500 personas',
};

type Status = 'idle' | 'success' | 'error';

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<Status>('idle');
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitted },
    setError,
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
    defaultValues: {
      name: '',
      company: '',
      role: '',
      email: '',
      phone: '',
      message: '',
      website: '',
    },
  });

  const onSubmit = handleSubmit((values) => {
    setServerError(null);
    startTransition(async () => {
      const result = await submitContact(values);
      if (result.ok) {
        setStatus('success');
        reset();
        return;
      }
      setStatus('error');
      setServerError(result.error);
      if (result.fieldErrors) {
        for (const [field, message] of Object.entries(result.fieldErrors)) {
          if (message) {
            setError(field as keyof ContactInput, { type: 'server', message });
          }
        }
      }
    });
  });

  if (status === 'success') {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-card border border-state-success/30 bg-state-success/5 p-8 text-center"
      >
        <h3 className="text-h3 font-semibold text-forjex-ink">Recibimos tu solicitud</h3>
        <p className="mt-3 text-forjex-muted">
          Un consultor revisará tu información y se pondrá en contacto en un plazo de 1 día hábil.
        </p>
        <button
          type="button"
          className="btn-secondary mt-6"
          onClick={() => {
            setStatus('idle');
            setServerError(null);
          }}
        >
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="rounded-card border border-forjex-border bg-white p-6 shadow-card md:p-10"
      aria-describedby={serverError ? 'contact-error' : undefined}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Nombre" id="name" error={errors.name?.message} required>
          <input
            id="name"
            type="text"
            autoComplete="name"
            aria-invalid={!!errors.name}
            className={inputClass(!!errors.name)}
            {...register('name')}
          />
        </Field>

        <Field label="Empresa" id="company" error={errors.company?.message} required>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            aria-invalid={!!errors.company}
            className={inputClass(!!errors.company)}
            {...register('company')}
          />
        </Field>

        <Field label="Cargo" id="role" error={errors.role?.message} required>
          <input
            id="role"
            type="text"
            autoComplete="organization-title"
            aria-invalid={!!errors.role}
            className={inputClass(!!errors.role)}
            {...register('role')}
          />
        </Field>

        <Field label="Correo corporativo" id="email" error={errors.email?.message} required>
          <input
            id="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            aria-invalid={!!errors.email}
            className={inputClass(!!errors.email)}
            {...register('email')}
          />
        </Field>

        <Field label="Teléfono" id="phone" error={errors.phone?.message} required>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={!!errors.phone}
            className={inputClass(!!errors.phone)}
            {...register('phone')}
          />
        </Field>

        <Field
          label="Tamaño de empresa"
          id="companySize"
          error={errors.companySize?.message}
          required
        >
          <select
            id="companySize"
            aria-invalid={!!errors.companySize}
            className={inputClass(!!errors.companySize)}
            defaultValue=""
            {...register('companySize')}
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            {COMPANY_SIZES.map((s) => (
              <option key={s} value={s}>
                {sizeLabels[s]}
              </option>
            ))}
          </select>
        </Field>

        <Field
          className="md:col-span-2"
          label="Servicio de interés"
          id="serviceInterest"
          error={errors.serviceInterest?.message}
          required
        >
          <select
            id="serviceInterest"
            aria-invalid={!!errors.serviceInterest}
            className={inputClass(!!errors.serviceInterest)}
            defaultValue=""
            {...register('serviceInterest')}
          >
            <option value="" disabled>
              Selecciona el servicio que mejor describe tu necesidad
            </option>
            {SERVICE_INTERESTS.map((s) => (
              <option key={s} value={s}>
                {serviceLabels[s]}
              </option>
            ))}
          </select>
        </Field>

        <Field
          className="md:col-span-2"
          label="Mensaje"
          id="message"
          error={errors.message?.message}
          required
          hint="Cuéntanos brevemente qué necesitas resolver."
        >
          <textarea
            id="message"
            rows={5}
            aria-invalid={!!errors.message}
            className={cn(inputClass(!!errors.message), 'resize-y')}
            {...register('message')}
          />
        </Field>

        {/* Honeypot oculto para bots */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">
            No completar este campo
            <input
              id="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...register('website')}
            />
          </label>
        </div>
      </div>

      {serverError && (
        <p id="contact-error" role="alert" className="mt-5 text-sm text-state-error">
          {serverError}
        </p>
      )}

      <div className="mt-8 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-forjex-muted">
          Al enviar este formulario aceptas que FORJEX Consulting te contacte para evaluar tu
          solicitud. Tus datos se tratan con confidencialidad.
        </p>
        <button type="submit" disabled={isPending} className="btn-primary">
          {isPending ? 'Enviando…' : 'Solicitar diagnóstico'}
        </button>
      </div>

      {isSubmitted && Object.keys(errors).length > 0 && (
        <p role="alert" className="sr-only">
          Hay errores en el formulario. Revisa los campos marcados.
        </p>
      )}
    </form>
  );
}

function Field({
  id,
  label,
  required,
  error,
  hint,
  className,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-forjex-ink">
        {label}
        {required && (
          <span className="ml-1 text-state-error" aria-hidden="true">
            *
          </span>
        )}
      </label>
      <div className="mt-1.5">{children}</div>
      {hint && !error && (
        <p className="mt-1.5 text-xs text-forjex-muted">{hint}</p>
      )}
      {error && (
        <p className="mt-1.5 text-xs text-state-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function inputClass(invalid: boolean) {
  return cn(
    'block w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-forjex-text shadow-soft transition placeholder:text-forjex-muted/60 focus:border-forjex-ink focus:outline-none focus:ring-2 focus:ring-forjex-ink/15',
    invalid ? 'border-state-error focus:ring-state-error/20' : 'border-forjex-border',
  );
}
