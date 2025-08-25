import { EventModel } from '@/models/events/eventsModel';

type EspecificDayPageProps = {
  eventsObject: EventModel[];
};

export default function EspecificDayPage({
  eventsObject,
}: EspecificDayPageProps) {
  if (eventsObject.length === 0) return <div> Nenhum Evento Encontrado</div>;

  return (
    <>
      {eventsObject.map(event => {
        return <p key={event.id}>{event.name}</p>;
      })}
    </>
  );
}
