import { CreateEventResponse } from '@/models/events/eventPostRequest';
import { EventModel } from '@/models/events/eventsModel';

export interface EventsInterface {
  getAllEvents(): Promise<EventModel[]>;

  createEvent(event: EventModel): Promise<CreateEventResponse>;
  // update event
  // delete event
}
