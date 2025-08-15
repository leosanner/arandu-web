// all events ->

import { getAllEventsDAL } from '@/data-access-layer/event';
import { EventDTO, EventModel } from '@/models/events/eventsModel';

{
  year: {
    month: {
      day: {
      }
    }
  }
}

type EventClusterType = Record<number, MonthClusterType>;

type MonthClusterType = Record<number, DayClusterType>;

type DayClusterType = Record<number, EventModel[]>;

export function buildEventDTO(event: EventModel): EventDTO {
  return {
    createdAt: event.createdAt,
    description: event.description,
    id: event.id,
    name: event.name,
    startDate: event.startDate,
  };
}

// Given all the events, the function should be able to return a structured of the events

export async function structuredEventsResponse(): Promise<EventClusterType> {
  const allUserEvents: EventModel[] = await getAllEventsDAL();
  const eventCluster: EventClusterType = {};

  for (const event of allUserEvents) {
    const eventDate = new Date(event.startDate);
    const year = eventDate.getFullYear();
    const month = eventDate.getMonth();
    const day = eventDate.getDate();

    if (!(year in eventCluster)) {
      eventCluster[year] = {};
    }

    if (!(month in eventCluster[year])) {
      eventCluster[year][month] = {};
    }

    if (!(day in eventCluster[year][month])) {
      eventCluster[year][month][day] = [event];
      continue;
    }

    eventCluster[year][month][day].push(event);
  }

  return eventCluster;
}
