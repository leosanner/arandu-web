import { eventApi } from '@/lib/api/events';
import { DeleteEventDTO } from '@/models/events/eventPostRequest';
import { CreateEventDTO } from '@/models/events/eventsModel';

export async function createEventDAL(event: CreateEventDTO) {
  return eventApi.createEvent(event);
}

export async function deleteEventDAL(deleteEventDTO: DeleteEventDTO) {
  return await eventApi.deleteEvent(deleteEventDTO);
}

export async function getAllEventsDAL() {
  return await eventApi.getAllEvents();
}

export async function getSlugDateEventsDAL(slugDate: string) {
  return await eventApi.getEventsBySlugDate(slugDate);
}
