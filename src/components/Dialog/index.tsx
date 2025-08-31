'use client';

import clsx from 'clsx';
import { useTransition } from 'react';

type DialogProps = {
  display: boolean;
  onCancel: () => void;
  onConfirm: () => void;
};

export function Dialog({ display, onCancel, onConfirm }: DialogProps) {
  const [isPending, startTransition] = useTransition();

  function handleConfirm() {
    startTransition(() => {
      onConfirm();
    });
  }

  return (
    <div
      className={clsx(
        'fixed bg-black/20 top-0 left-0 right-0 bottom-0 backdrop-blur-sm',
        'flex align-middle items-center justify-center',
        display ? 'hidden' : '',
      )}
    >
      <div className='bg-zinc-700 p-10 flex flex-col gap-y-6 rounded-xl ring-2'>
        <h2 className='font-semibold text-center text-2xl'>Tem certeza?</h2>
        <div className='flex gap-x-10'>
          <button
            className='p-3 bg-zinc-700 border-1 rounded-2xl cursor-pointer hover:bg-zinc-600'
            onClick={onCancel}
          >
            Cancelar
          </button>
          <button
            className={clsx(
              'p-5 bg-red-500 rounded-2xl cursor-pointer hover:bg-red-400',
              isPending && 'cursor-not-allowed',
            )}
            onClick={handleConfirm}
            disabled={isPending}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}
