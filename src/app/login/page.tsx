'use client';

import { Container } from '@/components/Container';
import { FormField } from '@/components/FormField';
import { FormFieldErrors } from '@/components/FormFieldErrors';
import { Logo } from '@/components/Logo';
import { handleLoginSubmit } from '@/lib/validations/form/login-form';
import clsx from 'clsx';
import { useActionState } from 'react';

export default function LoginPage() {
  const [message, formAction, isPending] = useActionState(handleLoginSubmit, {
    success: false,
  });

  return (
    <>
      <Logo />

      <Container>
        <header>
          <h1 className='text-4xl font-bold'>Log In</h1>
        </header>
        <form action={formAction}>
          <FormField
            inputProps={{
              name: 'email',
              placeholder: 'ex: exemplo@email.com',
              type: 'text',
            }}
            labelTitle='Email:'
            labelProps={{}}
          />

          {message.fieldErrors?.['email'] && (
            <FormFieldErrors errors={message.fieldErrors['email']} />
          )}

          <FormField
            inputProps={{
              name: 'password',
              placeholder: 'ex: senhaSecreta@32',
              type: 'text',
            }}
            labelTitle='Password:'
            labelProps={{}}
          />

          {message.fieldErrors?.['password'] && (
            <FormFieldErrors errors={message.fieldErrors['password']} />
          )}

          <button
            className={clsx(
              'bg-stone-200',
              'w-1/2 h-8',
              'rounded-2xl',
              'm-auto mt-8',
              'md: text-lg',
              'active:bg-stone-500',
              'transition-colors',
              'duration-75',
            )}
            type='submit'
          >
            <span className='font-semibold'>Enviar</span>
          </button>
        </form>
      </Container>
    </>
  );
}
