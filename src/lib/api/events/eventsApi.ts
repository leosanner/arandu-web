import { CreateEventResponse } from '@/models/events/eventPostRequest';
import { EventsInterface } from './events-interface';
import { EventModel } from '@/models/events/eventsModel';
import { EventApiRoutes } from '../routes';
import { cookies } from 'next/headers';

export type FetchObject = RequestInit;

// TODO: method to get cookies

export class EventsApi implements EventsInterface {
  async createEvent(event: EventModel): Promise<CreateEventResponse> {
    const request = await fetch(EventApiRoutes.CREATE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookies: 'bla',
      },
      body: JSON.stringify(event),
    });

    return request.json();
  }

  async getAllEvents(): Promise<EventModel[]> {
    const _cookies = await cookies();
    const cookieValue = _cookies.get('token')?.value;

    console.log(cookieValue);

    const fetchObject: FetchObject = {
      method: 'GET',
      headers: {
        Cookie: cookieValue ? cookieValue : '',
      },
    };

    const request = await fetch(EventApiRoutes.GET_ALL_EVENTS, fetchObject);

    return request.json();
  }
}
