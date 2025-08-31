'use server';

import { createUser } from '@/data-access-layer/user';
import { registerSchema } from './register-schema';
import { z } from 'zod';
import { createKeysArray, filterKeysObject } from '@/utils/filter-objects';

type RegisterFormSubmit = {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  username: string;
};

type FieldErrors = Record<string, string[]>;

export type RegisterValidationResult = {
  success: boolean;
  fieldErrorNames?: string[];
  fieldErrors?: FieldErrors;
};

//

export async function handleRegisterSubmit(
  prevState: RegisterValidationResult,
  formData: FormData,
): Promise<RegisterValidationResult> {
  const rawFormData = Object.fromEntries(formData) as RegisterFormSubmit;
  const validationResult = registerSchema.safeParse(rawFormData);

  if (validationResult.success) {
    const request = await createUser(rawFormData);

    if (request.success) {
      return { success: true };
    }

    // inform user that user already exists
    return { success: false };
  }

  const errors = z.treeifyError(validationResult.error);
  const fieldErrors: Record<string, string[]> = {};
  const fieldErrorNames: string[] = [];

  for (const [key, value] of Object.entries(errors.properties ?? {})) {
    fieldErrors[key] = value['errors'];
    fieldErrorNames.push(key);
  }

  return {
    success: false,
    fieldErrorNames: fieldErrorNames,
    fieldErrors: fieldErrors,
  };
}
