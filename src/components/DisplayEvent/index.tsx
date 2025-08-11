'use client';

import { EventModel } from '@/models/events/eventsModel';
import { formatDatetime } from '@/utils/format-datetime';
import clsx from 'clsx';
import { Pencil, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { Dialog } from '../Dialog';
import { useActionState, useState } from 'react';
import { deleteEvent } from '@/app/actions/events/delete-event';

type DisplayEventProps = {
  event: EventModel;
};

export function DisplayEvent({ event }: DisplayEventProps) {
  const [state, setState] = useState(true);

  function handleDelete() {
    if (state) setState(false);
    else setState(true);
  }

  return (
    <div className='w-full m-auto bg-slate-200 flex flex-col gap-y-3'>
      <h2 className='text-lg font-bold'>
        <Link
          href={`/user/events/${event.id}`}
          className='hover:text-slate-400'
        >
          {event.name}
        </Link>
      </h2>
      <div className='flex flex-col gap-y-1'>
        <p>
          <span className='font-semibold'>Criado em: </span>
          {formatDatetime(event.createdAt)}
        </p>
        <p>
          <span className='font-semibold'>Descrição: </span>
          {event.description}
        </p>
        <p>
          <span className='font-semibold'>Programado para: </span>
          {formatDatetime(event.startDate)}
        </p>
      </div>

      <div className='flex gap-x-8'>
        <button
          className={clsx('bg-gray-400 p-2 rounded-xl', 'cursor-pointer')}
        >
          <Pencil />
        </button>
        <button onClick={handleDelete}>
          <Trash2 className='text-red-700 cursor-pointer' />
        </button>
        <Dialog display={state} onCancel={handleDelete} />
      </div>
    </div>
  );
}
