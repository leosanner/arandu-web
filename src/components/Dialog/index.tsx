'use client';

import { deleteEvent } from '@/app/actions/events/delete-event';
import clsx from 'clsx';
import { useActionState } from 'react';

type DialogProps = {
  display: boolean;
  onCancel: () => void;
  // onConfirm: () => null;
};

export function Dialog({ display, onCancel }: DialogProps) {
  const [deleteEventResponse, formAction, isPending] = useActionState(
    deleteEvent,
    { success: false },
  );
  function handleCancel() {
    onCancel();
  }

  return (
    <div
      className={clsx(
        'fixed bg-black/20 top-0 left-0 right-0 bottom-0 backdrop-blur-sm',
        'flex align-middle items-center justify-center',
        display ? 'hidden' : '',
      )}
    >
      <div className='bg-zinc-100 p-10 flex flex-col gap-y-6 rounded-xl'>
        <h2 className='font-semibold text-center text-xl'>Tem certeza?</h2>
        <div className='flex gap-x-10'>
          <button
            className='p-3 bg-white border-1 rounded-2xl cursor-pointer hover:bg-slate-200'
            onClick={handleCancel}
          >
            Cancelar
          </button>
          <button className='p-5 bg-red-200 rounded-2xl cursor-pointer hover:bg-red-400'>
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}
