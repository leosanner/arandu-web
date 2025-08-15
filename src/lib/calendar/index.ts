import { formatMonthName, titleCaseOneWord } from '@/utils/calendar';
import { getDay, getDaysInMonth } from 'date-fns';
import { nanoid } from 'nanoid';

// All this functions work with a state refence
// In other words, the calendar work with a context provider using as initial point state 0 (current date)
// The next month is given by state 1 and the previous by -1
// example -> ... -5 -4 -3 -2 -1  0 (current date) 1 2 3 4 5 ...

// First day of current month and last day of previous month

export function firstLastDay(state: number = 0) {
  const currentDate = new Date();
  const firstDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + state,
  );
  const lastDayPreviousMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + -1 + state,
  );

  return [firstDay, lastDayPreviousMonth];
}

// Current month displayed in the calendar using title case ex: March

export function currentMonthbyState(state: number = 0) {
  const [f, l] = firstLastDay(state);
  const month = formatMonthName(f);

  return titleCaseOneWord(month);
}

// Return the current year by state (interaction of user click arrows)

export function currentYearByState(state: number = 0) {
  const [f, l] = firstLastDay(state);

  return f.getFullYear();
}

export type CalendarDayType = {
  id: string;
  day: number;
  currentMonth: boolean;
  currentDay: boolean;
};

// Return a array of objects, using state reference as initial point
// state = 0 -> current date (month year day etc)

export function calendarDays(state: number) {
  const [f, l] = firstLastDay(state);
  const firstIndexDay = getDay(f);
  const monthSize = getDaysInMonth(f);
  const lastMonthSize = getDaysInMonth(l);

  const currentDate = new Date();

  const arr: CalendarDayType[] = [];

  for (let i = 0; i < firstIndexDay + monthSize; ++i) {
    if (i < firstIndexDay) {
      arr[i] = {
        id: nanoid(),
        currentMonth: false,
        currentDay: false,
        day: lastMonthSize - firstIndexDay + i + 1,
      };
      continue;
    }
    arr[i] = {
      id: nanoid(),
      currentMonth: true,
      currentDay: false,
      day: i - firstIndexDay + 1,
    };

    if (i - firstIndexDay + 1 === currentDate.getDate() && state === 0) {
      arr[i].currentDay = true;
    }
  }

  return arr;
}

// Return a object of the current day displayed in the calendar component

export function getComponentFullDate(day: number, state: number = 0) {
  const [f, _] = firstLastDay(state);

  return {
    day: day,
    month: f.getMonth(),
    year: f.getFullYear(),
  };
}

// Build a slug date for the given day of any date

export function slugComponentFullDate(day: number, state: number = 0) {
  const dateObject = getComponentFullDate(day, state);

  return `${dateObject.month + 1}-${dateObject.day}-${dateObject.year}`;
}
