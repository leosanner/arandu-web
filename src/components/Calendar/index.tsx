import { DateContextProvider } from '@/context/DateContext';
import { CalendarContainer } from '../CalendarContainer';
import { CalendarDays } from '../CalendarDays';

export const dynamic = 'force-dynamic';

export function Calendar() {
  return (
    <>
      <DateContextProvider>
        <CalendarContainer>
          <CalendarDays />
        </CalendarContainer>
      </DateContextProvider>
    </>
  );
}
