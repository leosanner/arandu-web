'use client';

import { Container } from '@/components/Container';
import { FormField } from '@/components/FormField';
import { FormFieldErrors } from '@/components/FormFieldErrors';
import { Logo } from '@/components/Logo';
import { handleCreateEventSubmit } from '@/lib/validations/form/create-event';
import clsx from 'clsx';
import { useActionState } from 'react';

export default function CreateEvent() {
  const [state, formAction, isPending] = useActionState(
    handleCreateEventSubmit,
    {
      success: false,
    },
  );

  return (
    <>
      <Logo />

      <Container>
        <h1 className='text-3xl md:text-4xl font-bold'>Registrar Evento</h1>
        <form action={formAction} className='flex flex-col gap-y-3'>
          <FormField
            inputProps={{
              name: 'name',
              placeholder: 'ex: Encontro familiar',
              type: 'text',
            }}
            labelProps={{}}
            labelTitle='Nome do Evento:'
          />
          {state.fieldErrors?.['name'] && (
            <FormFieldErrors errors={state.fieldErrors['name']} />
          )}

          <FormField
            inputProps={{
              name: 'startDate',
              placeholder: '',
              type: 'datetime-local',
            }}
            labelProps={{}}
            labelTitle='Data de início:'
          />

          {state.fieldErrors?.['date'] && (
            <FormFieldErrors errors={state.fieldErrors['date']} />
          )}

          <FormField
            inputProps={{
              name: 'description',
              placeholder:
                'ex: encontrar família para almoçar e conversar sobre algo.',
              type: 'text',
            }}
            labelProps={{}}
            labelTitle='Descrição:'
          />

          {state.fieldErrors?.['description'] && (
            <FormFieldErrors errors={state.fieldErrors['description']} />
          )}

          <div>
            <label className='font-bold text-lg md:text-2xl'>Rótulos:</label>
            <select name='label' className='w-full border-b-1 outline-none p-1'>
              <option defaultValue={'null'} value='null'>
                Nenhum
              </option>
              <option value='hard'>hard</option>
              <option value='easy'>easy</option>
            </select>
          </div>
          <button
            className={clsx(
              'bg-stone-200',
              'w-1/2 h-8',
              'rounded-2xl',
              'm-auto mt-8',
              'md: text-lg',
              'active:bg-stone-400 active:border-2',
              'transition-colors',
              'duration-150',
            )}
            type='submit'
          >
            {!isPending ? 'enviar' : 'enviando...'}
          </button>
        </form>
      </Container>
    </>
  );
}
