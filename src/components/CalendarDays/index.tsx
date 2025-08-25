'use client';

import { GetContext } from '@/context/getContext';
import { calendarDays } from '@/lib/calendar';
import { CalendarDay } from '../CalendarDay';
import { currentMonthEventsAction } from './monthInformationAction';
import { useEffect, useState } from 'react';
import { DayClusterType } from '@/lib/calendar/events-api-cluster';
import {
  getDayBusyLevel,
  verifyDayEvents,
} from '@/lib/calendar/day-information';

export function CalendarDays() {
  const { state, setState } = GetContext();
  const [monthEvents, setMonthEvents] = useState<DayClusterType>({});
  const days = calendarDays(state);

  useEffect(() => {
    (async () => {
      const response = await currentMonthEventsAction(state);
      setMonthEvents(response);
    })();
  }, [state]);

  return (
    <>
      {days.map(day => {
        const dayEvents = verifyDayEvents(day, monthEvents);
        const busyLevel = getDayBusyLevel(dayEvents);

        return (
          <CalendarDay
            // dayEvents={dayEvents}
            dayObject={day}
            key={day.id}
            busyLevel={busyLevel}
          />
        );
      })}
    </>
  );
}
