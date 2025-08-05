import { CreateEventResponse } from '@/models/events/eventPostRequest';
import { CreateEventDTO, EventModel } from '@/models/events/eventsModel';

export interface EventsInterface {
  getAllEvents(): Promise<EventModel[]>;

  createEvent(event: CreateEventDTO): Promise<CreateEventResponse>;
  // update event
  // delete event
}
