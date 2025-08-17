import { EventModel } from '@/models/events/eventsModel';
import { CalendarDayType } from '.';
import { DayClusterType } from './events-api-cluster';

export type BusyLevel = 'free' | 'easy' | 'medium' | 'hard';

// Verify if the current day has events, return a rotule related to the amount og events

export function verifyDayEvents(
  currentDay: CalendarDayType,
  monthEvents: DayClusterType,
): BusyLevel {
  for (const [day, events] of Object.entries(monthEvents)) {
    if (day === currentDay.day.toString() && currentDay.currentMonth) {
      return getDayBusyLevel(events);
    }
  }

  return 'free';
}

// Simple label implementation
// TODO: user can addapt and add levels with color (change number events, labels etc.)

export function getDayBusyLevel(events: EventModel[]): BusyLevel {
  const numberEvents = events.length ?? 0;

  if (numberEvents === 0) return 'free';
  if (numberEvents <= 2) return 'easy';
  if (numberEvents <= 5) return 'medium';
  if (numberEvents > 5) return 'hard';

  return 'free';
}
