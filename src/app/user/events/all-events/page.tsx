import { DisplayEvent } from '@/components/DisplayEvent';
import { eventApi } from '@/lib/api/events';

export default async function DisplayAllEventsPage() {
  const allEvents = await eventApi.getAllEvents();

  return (
    <div className='flex flex-col gap-y-2'>
      {allEvents.map(event => {
        return <DisplayEvent key={event.name} event={event} />;
      })}
    </div>
  );
}
