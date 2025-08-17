// all events ->

import { getAllEventsDAL } from '@/data-access-layer/event';
import { EventDTO, EventModel } from '@/models/events/eventsModel';
import { firstLastDay } from '.';

{
  year: {
    month: {
      day: {
      }
    }
  }
}

type EventClusterType = Record<string, MonthClusterType>;

type MonthClusterType = Record<string, DayClusterType>;

export type DayClusterType = Record<string, EventModel[]>;

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

export async function structuredEventsResponseByState(state: number) {
  const monthEvents: DayClusterType = {};

  // All events related to the current user
  const eventCluster = await structuredEventsResponse();

  // First day of the month and last of the previous month
  const [f, l] = firstLastDay(state);

  // Information related to the time interval displayed on the screen
  const currentMonth = f.getMonth();
  const currentYear = f.getFullYear();

  // Looking for events in the current time interval displayed

  if (eventCluster[currentYear]) {
    if (eventCluster[currentYear][currentMonth]) {
      const currentMonthEvents = eventCluster[currentYear][currentMonth];

      for (const [key, event] of Object.entries(currentMonthEvents)) {
        monthEvents[key] = event;
      }
    }
  }

  return monthEvents;
}
