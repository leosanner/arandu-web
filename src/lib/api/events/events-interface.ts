import {
  CreateEventResponse,
  DeleteEventDTO,
  DeleteEventResponse,
} from '@/models/events/eventPostRequest';
import { CreateEventDTO, EventModel } from '@/models/events/eventsModel';

export interface EventsInterface {
  getAllEvents(): Promise<EventModel[]>;

  createEvent(event: CreateEventDTO): Promise<CreateEventResponse>;

  deleteEvent(eventId: DeleteEventDTO): Promise<DeleteEventResponse>;
  // update event
  // delete event
}
