import { z } from 'zod';

// Schemas

const NameSchema = z.string().regex(/^[A-Za-z]+$/, {
  message: 'Seu nome não deve conter espaços e também não deve conter números.',
});

const PasswordSchema = z
  .string()
  .min(8, { message: 'A senha deve ter no mínimo 8 caracteres.' })
  .regex(/[a-zA-Z]/, { message: 'Deve conter pelo menos uma letra.' })
  .regex(/[0-9]/, { message: 'Deve conter pelo menos 1 número.' })
  .regex(/[^a-zA-Z0-9]/, {
    message: 'Deve conter pelo menos 1 caractere especial.',
  })
  .trim();

const UsernameSchema = z
  .string()
  .regex(/^[^\s]+$/, { message: 'O username não deve conter espaços.' });

const EmailSchema = z.email({ message: 'Endereço de email inválido.' });

// Form schema

export const registerSchema = z.object({
  firstName: NameSchema,
  lastName: NameSchema,
  email: EmailSchema,
  password: PasswordSchema,
  username: UsernameSchema,
});
