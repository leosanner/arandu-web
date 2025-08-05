import { z } from 'zod';

const EventNameSchema = z
  .string()
  .min(1, { message: 'Deve conter pelo menos um caractere.' })
  .max(50, {
    message:
      'O nome do evento não deve ser tão grande, procure usar até 50 characteres contando o espaço.',
  });

const EventDescriptionSchema = z
  .string()
  .min(1, { message: 'Deve conter pelo menos um caractere.' })
  .max(255, {
    message:
      'A descrição deve apenas resumir de maneira geral o evetno, procure usar até 255 characteres contando o espaço.',
  });

export const createEventSchema = z.object({
  name: EventNameSchema,
  description: EventDescriptionSchema,
  label: z.string(),
  startDate: z.string(),
});
