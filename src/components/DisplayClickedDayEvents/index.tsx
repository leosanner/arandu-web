import { EventModel } from '@/models/events/eventsModel';
import { formatDateToObject } from '@/utils/formatDateToObject';
import { parseISO } from 'date-fns';

type DisplayClickedDayEventsProps = {
  events: EventModel[];
};

export function DisplayClickedDayEvents({
  events,
}: DisplayClickedDayEventsProps) {
  const arr = new Array(24).fill(null);
  const eventObject: Record<string, EventModel[]> = {};

  for (const event of events) {
    const eventDateObject = formatDateToObject(parseISO(event.startDate));

    if (!eventObject[eventDateObject.hours]) {
      eventObject[eventDateObject.hours] = [event];
      continue;
    }

    eventObject[eventDateObject.hours].push(event);
  }

  return (
    <>
      <div className='flex flex-col mx-3 mt-10 ring-2'>
        {arr.map((_, index) => {
          return (
            <div key={index} className='py-3 px-1 border-b-1 flex gap-x-3 '>
              <span className='text-center font-semibold w-8'>{index}</span>{' '}
              <span>
                {eventObject[index] &&
                  eventObject[index].map(ev => {
                    return <p key={ev.id}>{ev.name}</p>;
                  })}
              </span>
            </div>
          );
        })}
      </div>

      <div className='h-20'> Footer </div>
    </>
  );
}
