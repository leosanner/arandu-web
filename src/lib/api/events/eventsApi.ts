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
import { GenericResponseDTO } from '@/models/api-response-model';
import { DEFAULT_ERROR_MSG } from '@/lib/consts';

export type FetchObject = RequestInit;

export class EventsApi implements EventsInterface {
  async createEvent(
    event: CreateEventDTO,
  ): Promise<CreateEventResponse | GenericResponseDTO> {
    const cookieValue = await getCookies();

    const response = await fetch(EventApiRoutes.CREATE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookie: cookieValue ? cookieValue : '',
      },
      body: JSON.stringify(event),
    });

    try {
      const data: CreateEventResponse = await response.json();

      if (response.ok && data.success) {
        // Revalidate tag for cookies
        revalidateTag(eventTags.GET_ALL_EVENTS);
      }
      return data;
    } catch (e) {
      // TODO: if invalid params using @Valid in spring boot, get the field errors

      return {
        message: DEFAULT_ERROR_MSG,
        success: false,
      };
    }
  }

  async getAllEvents(): Promise<EventModel[] | GenericResponseDTO> {
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

    try {
      const request = await fetch(EventApiRoutes.GET_ALL_EVENTS, fetchObject);

      return request.json();
    } catch (e) {
      return {
        message: e instanceof Error ? e.message : DEFAULT_ERROR_MSG,
        success: false,
      };
    }
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
