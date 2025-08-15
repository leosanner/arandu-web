'use client';

import { CalendarMenu } from '../CalendarMenu';
import { GetContext } from '@/context/getContext';
import { currentMonthbyState, currentYearByState } from '@/lib/calendar';
import clsx from 'clsx';
import { CalendarGrid } from '../CalendarGrid';

type CalendarContainerProps = {
  children: React.ReactNode;
};

export function CalendarContainer({ children }: CalendarContainerProps) {
  const { state, setState } = GetContext();

  return (
    <div
      className={clsx(
        'flex flex-col my-10 mx-5 gap-y-5',
        'sm:gap-y-7 sm:mt-15',
      )}
    >
      <CalendarMenu
        month={currentMonthbyState(state)}
        year={currentYearByState(state)}
      />
      <CalendarGrid>{children}</CalendarGrid>
    </div>
  );
}
