import {
  CreateEventResponse,
  DeleteEventDTO,
  DeleteEventResponse,
} from '@/models/events/eventPostRequest';
import { EventsInterface } from './events-interface';
import { CreateEventDTO, EventModel } from '@/models/events/eventsModel';
import { EventApiRoutes } from '../routes';
import { getCookies } from '@/lib/cookies';
import { eventTags } from '@/lib/cache/eventCacheTag';
import { revalidateTag } from 'next/cache';

export type FetchObject = RequestInit;

export class EventsApi implements EventsInterface {
  async createEvent(event: CreateEventDTO): Promise<CreateEventResponse> {
    const cookieValue = await getCookies();

    const response = await fetch(EventApiRoutes.CREATE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookie: cookieValue ? cookieValue : '',
      },
      body: JSON.stringify(event),
    });

    const data: CreateEventResponse = await response.json();

    if (response.ok && data.success) {
      console.log('Tag revalidada');
      revalidateTag(eventTags.GET_ALL_EVENTS);
    }

    return data;
  }

  async getAllEvents(): Promise<EventModel[]> {
    const cookieValue = await getCookies();

    const fetchObject: FetchObject = {
      method: 'GET',
      headers: {
        Cookie: cookieValue ? cookieValue : '',
      },
      next: {
        tags: [eventTags.GET_ALL_EVENTS],
      },
    };

    const request = await fetch(EventApiRoutes.GET_ALL_EVENTS, fetchObject);

    return request.json();
  }

  async getEventsBySlugDate(slugDate: string): Promise<EventModel[]> {
    const cookieValue = await getCookies();

    const fetchObject: FetchObject = {
      method: 'GET',
      headers: {
        Cookie: cookieValue ? cookieValue : '',
      },
      next: {
        tags: [eventTags.GET_ALL_EVENTS],
      },
    };

    const request = await fetch(
      EventApiRoutes.GET_DAY_EVENTS + slugDate,
      fetchObject,
    );

    return request.json();
  }

  async deleteEvent(
    deleteEventDTO: DeleteEventDTO,
  ): Promise<DeleteEventResponse> {
    const cookieValue = await getCookies();

    const response = await fetch(EventApiRoutes.DELETE, {
      method: 'DELETE',
      headers: {
        Cookie: cookieValue ? cookieValue : '',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(deleteEventDTO),
      next: {
        tags: [eventTags.GET_ALL_EVENTS],
      },
    });

    const data: DeleteEventResponse = await response.json();

    return data;
  }
}
