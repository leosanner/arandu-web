import { eventApi } from '@/lib/api/events';
import { DisplayEvent } from '../DisplayEvent';

export default async function GetAllEvents() {
  const allEvents = await eventApi.getAllEvents();

  if (allEvents.length <= 0) {
    return (
      <div className='w-full max-w-3xl mx-auto mt-50'>
        <div className='flex items-center flex-col gap-y-2 p-3'>
          <h2 className='text-xl '>Nenhum evento encontrado</h2>
        </div>
      </div>
    );
  }

  return (
    <div className='w-full max-w-3xl mx-auto mt-10'>
      <div className='flex items-center flex-col gap-y-2 p-3'>
        {allEvents.map(event => {
          return <DisplayEvent key={event.name} event={event} />;
        })}
      </div>
    </div>
  );
}
