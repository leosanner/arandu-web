'use client';

import { calendarDays } from '@/lib/calendar';
import { CalendarContainer } from '../CalendarContainer';
import { GetContext } from '@/context/getContext';
import { CalendarDay } from '../CalendarDay';

export function Calendar() {
  const { state, setState } = GetContext();
  const arrTest = calendarDays(state);

  return (
    <>
      <CalendarContainer>
        {arrTest.map(n => {
          return <CalendarDay dayObject={n} key={n.id} />;
        })}
      </CalendarContainer>
    </>
  );
}
