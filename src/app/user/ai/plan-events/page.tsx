'use client';

import { generateSchedule } from '@/app/actions/ai/plan-schedule';
import clsx from 'clsx';
import { startTransition, useActionState } from 'react';

export default function AiPlanEventsPage() {
  const [state, action, isPending] = useActionState(generateSchedule, {
    aiResponse: undefined,
  });

  function handleClick() {
    startTransition(() => {
      action();
      console.log(state);
    });
  }

  return (
    <>
      <div className='flex align-middle justify-center mt-30'>
        <button
          className={clsx(
            'bg-purple-700/30 border-1 rounded-xl p-4 cursor-pointer',
            'hover:bg-purple-700/50',
            isPending && 'cursor-not-allowed',
          )}
          disabled={isPending}
          onClick={handleClick}
        >
          {isPending ? 'Gerando email ...' : 'Gerar resumo email.'}
        </button>
      </div>
    </>
  );
}
