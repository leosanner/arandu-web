import {
  CreateEventResponse,
  DeleteEventDTO,
  DeleteEventResponse,
} from '@/models/events/eventPostRequest';
import { CreateEventDTO, EventModel } from '@/models/events/eventsModel';
import { GenericResponseDTO } from '@/models/api-response-model';

export interface EventsInterface {
  getAllEvents(): Promise<EventModel[] | GenericResponseDTO>;

  getEventsBySlugDate(
    slugDate: string,
  ): Promise<EventModel[] | GenericResponseDTO>;

  createEvent(event: CreateEventDTO): Promise<CreateEventResponse>;

  deleteEvent(eventId: DeleteEventDTO): Promise<DeleteEventResponse>;
  // update event
  // delete event
}
