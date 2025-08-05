import { eventApi } from '@/lib/api/events';
import { CreateEventDTO } from '@/models/events/eventsModel';

export async function createEvent(event: CreateEventDTO) {
  return eventApi.createEvent(event);
}
