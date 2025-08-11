'use client';

import { Container } from '@/components/Container';
import { FormField } from '@/components/FormField';
import { FormFieldErrors } from '@/components/FormFieldErrors';
import { Header } from '@/components/Header';
import { handleLoginSubmit } from '@/lib/validations/form/login-form';
import clsx from 'clsx';
import Link from 'next/link';
import { useActionState } from 'react';

export default function LoginPage() {
  const [message, formAction, isPending] = useActionState(handleLoginSubmit, {
    success: undefined,
  });

  return (
    <>
      <Header />

      <Container>
        <header className='flex flex-col gap-y-4'>
          <h1 className='text-3xl md:text-4xl font-bold'>Log In</h1>
          <span className='text-lg'>
            Primeira vez?{' '}
            <Link href='/get-started' className='text-purple-950 font-semibold'>
              Cadatre-se
            </Link>
          </span>
        </header>
        <form action={formAction} className='flex flex-col w-full'>
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
              'hover:bg-slate-300',
              'w-1/2 h-8',
              'rounded-2xl',
              'm-auto mt-8',
              'md: text-lg',
              'active:bg-stone-500',
              'transition-colors',
              'duration-75',
              'cursor-pointer',
            )}
            type='submit'
          >
            <span className='font-semibold'>
              {' '}
              {!isPending ? 'enviar' : 'enviando...'}
            </span>
          </button>
        </form>

        {message.requestMessage && (
          <FormFieldErrors
            className={'flex justify-around'}
            errors={[message.requestMessage]}
          />
        )}
      </Container>
    </>
  );
}
