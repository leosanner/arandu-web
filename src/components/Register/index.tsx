'use client';

import clsx from 'clsx';
import { Container } from '../Container';
import { FormField } from '../FormField';
import { handleRegisterSubmit } from '@/lib/validations/form/register-form';
import { useActionState, useEffect } from 'react';
import { FormFieldErrors } from '../FormFieldErrors';
import { fieldsTemplate } from './fields';
import { toast } from 'react-toastify';
import { redirect } from 'next/navigation';

// TODO: Turn form in a component

export function Register() {
  const [message, formAction, isPending] = useActionState(
    handleRegisterSubmit,
    { success: false },
  );

  useEffect(() => {
    if (message.success) {
      toast.success('Usuário criado com sucesso', { autoClose: 400 });

      setTimeout(() => {
        redirect('/');
      }, 500);
    }
  }, [message.success]);

  return (
    <Container>
      {message.success}
      <h1 className='text-3xl md:text-4xl font-bold'>Cadastre-se</h1>
      <form className='flex flex-col w-full' action={formAction}>
        {fieldsTemplate.map(({ name, label, placeholder, type = 'text' }) => (
          <div key={name}>
            <FormField
              inputProps={{ name, placeholder, type }}
              labelProps={{}}
              labelTitle={label}
            />
            {message.fieldErrors?.[name] && (
              <FormFieldErrors errors={message.fieldErrors[name]} />
            )}
          </div>
        ))}

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
          <span className='font-semibold'>
            {!isPending ? 'enviar' : 'enviando...'}
          </span>
        </button>
      </form>
    </Container>
  );
}
