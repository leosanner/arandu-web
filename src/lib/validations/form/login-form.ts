'use server';

import { UserCredentialsModel } from '@/models/user/userCredentials';
import { LoginSchema } from './login-schema';
import { loginUser } from '@/data-access-layer/user';
import { z } from 'zod';

type FieldErrors = Record<string, string[]>;

export type LoginValidationResult = {
  success: boolean;
  fieldErrorNames?: string[];
  fieldErrors?: FieldErrors;
};

export async function handleLoginSubmit(
  prevState: LoginValidationResult,
  formData: FormData,
): Promise<LoginValidationResult> {
  const rawFormData = Object.fromEntries(formData) as UserCredentialsModel;
  const validationResult = LoginSchema.safeParse(rawFormData);

  if (validationResult.success) {
    const request = await loginUser(rawFormData);

    if (request.success) {
      return { success: true };
    }

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
