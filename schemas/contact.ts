import { z } from 'zod';

export const COMPANY_SIZES = [
  '1-10',
  '11-50',
  '51-200',
  '201-500',
  '500+',
] as const;

export const SERVICE_INTERESTS = [
  'estructuracion-operaciones',
  'control-organizacional',
  'sistemas-decision',
  'diagnostico-general',
  'no-estoy-seguro',
] as const;

export const contactSchema = z.object({
  name: z
    .string({ required_error: 'El nombre es obligatorio.' })
    .trim()
    .min(2, 'Mínimo 2 caracteres.')
    .max(80, 'Máximo 80 caracteres.'),
  company: z
    .string({ required_error: 'La empresa es obligatoria.' })
    .trim()
    .min(2, 'Mínimo 2 caracteres.')
    .max(120, 'Máximo 120 caracteres.'),
  role: z
    .string({ required_error: 'El cargo es obligatorio.' })
    .trim()
    .min(2, 'Mínimo 2 caracteres.')
    .max(80, 'Máximo 80 caracteres.'),
  email: z
    .string({ required_error: 'El correo es obligatorio.' })
    .trim()
    .toLowerCase()
    .email('Correo no válido.')
    .max(120, 'Máximo 120 caracteres.'),
  phone: z
    .string()
    .trim()
    .min(7, 'Mínimo 7 dígitos.')
    .max(20, 'Máximo 20 caracteres.')
    .regex(/^[+()\d\s-]+$/u, 'Solo dígitos, espacios, paréntesis o guion.'),
  companySize: z.enum(COMPANY_SIZES, {
    required_error: 'Selecciona el tamaño de la empresa.',
  }),
  serviceInterest: z.enum(SERVICE_INTERESTS, {
    required_error: 'Selecciona un servicio de interés.',
  }),
  message: z
    .string({ required_error: 'Cuéntanos brevemente tu necesidad.' })
    .trim()
    .min(20, 'Mínimo 20 caracteres.')
    .max(2000, 'Máximo 2000 caracteres.'),
  // Honeypot: debe permanecer vacío. Los bots tienden a llenarlo.
  website: z.string().max(0, 'Campo no permitido.').optional().default(''),
});

export type ContactInput = z.infer<typeof contactSchema>;
