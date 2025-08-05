import { CreateEventResponse } from '@/models/events/eventPostRequest';
import { EventsInterface } from './events-interface';
import { CreateEventDTO, EventModel } from '@/models/events/eventsModel';
import { EventApiRoutes } from '../routes';
import { getCookies } from '@/lib/cookies';

export type FetchObject = RequestInit;

// TODO: method to get cookies

export class EventsApi implements EventsInterface {
  async createEvent(event: CreateEventDTO): Promise<CreateEventResponse> {
    const cookieValue = await getCookies();
    console.log(cookieValue);

    const request = await fetch(EventApiRoutes.CREATE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookie: cookieValue ? cookieValue : '',
      },
      body: JSON.stringify(event),
    });

    return request.json();
  }

  async getAllEvents(): Promise<EventModel[]> {
    const cookieValue = await getCookies();

    const fetchObject: FetchObject = {
      method: 'GET',
      headers: {
        Cookie: cookieValue ? cookieValue : '',
      },
      // next -> cache / Add memoization too
    };

    const request = await fetch(EventApiRoutes.GET_ALL_EVENTS, fetchObject);

    return request.json();
  }
}
