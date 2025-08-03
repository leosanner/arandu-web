import { z } from 'zod';
import { EmailSchema, PasswordSchema } from './register-schema';

export const LoginSchema = z.object({
  email: EmailSchema,
  password: PasswordSchema,
});
