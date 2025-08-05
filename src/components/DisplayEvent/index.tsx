import { EventModel } from '@/models/events/eventsModel';

type DisplayEventProps = {
  event: EventModel;
};

export function DisplayEvent({ event }: DisplayEventProps) {
  return (
    <div className='bg-slate-200 flex flex-col p-5 gap-y-3'>
      <h1 className='text-lg font-bold'>{event.name}</h1>
      <div className='flex flex-col gap-y-1'>
        <p>
          <span className='font-semibold'>Criado em: </span>
          {event.createdAt}
        </p>
        <p>
          <span className='font-semibold'>Descrição: </span>
          {event.description}
        </p>
        <p>
          <span className='font-semibold'>Programado para: </span>
          {event.startDate}
        </p>
      </div>
    </div>
  );
}
