'use client';

import { GetContext } from '@/context/getContext';
import { CalendarDayType, slugComponentFullDate } from '@/lib/calendar';
import clsx from 'clsx';
import Link from 'next/link';
import { CalendarBusyDayDisplay } from '../CalendarBusyDayDisplay';
import { BusyLevel } from '@/lib/calendar/day-information';
import { EventModel } from '@/models/events/eventsModel';

type CalendarDayProps = {
  dayObject: CalendarDayType;
  busyLevel: BusyLevel;
  // dayEvents: EventModel[];
};

// IMPORTANT: Only this component must be client side

export function CalendarDay({
  dayObject,
  busyLevel,
}: // dayEvents,
CalendarDayProps) {
  const { currentMonth, day, id, currentDay } = dayObject;
  const { state, setState } = GetContext();

  const dayStyle: Record<string, string> = {
    true: clsx('text-white'),
    false: clsx('text-zinc-500'),
  };

  const dayStyleClass = dayStyle[String(currentMonth)];

  const divClass = clsx(
    dayStyleClass,
    'flex justify-center cursor-pointer transition',
    'm-1 p-3 outline-0 rounded-xl text-center',
    'md:m-4',
    'hover:ring-2  hover:bg-amber-600',
    currentDay && 'bg-amber-700/70',
  );

  const slugDate = slugComponentFullDate(day, state);

  return (
    <div key={id} className={divClass}>
      <div>
        {/* TODO: implement dynamic event page */}
        <Link href={`/user/calendar/${slugDate}`}>
          {currentMonth ? (
            <CalendarBusyDayDisplay day={day} busyLevel={busyLevel} />
          ) : (
            day
          )}
        </Link>
      </div>
    </div>
  );
}
