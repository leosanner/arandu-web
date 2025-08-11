import { toDate } from 'date-fns-tz';

type DateTypeObject = {
  days: number;
  minutes: number;
  month: number;
  years: number;
  hours: number;
};

export function formatDateToObject(date: Date): DateTypeObject {
  return {
    days: date.getDay(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    month: date.getMonth(),
    years: date.getFullYear(),
  };
}

// Date format to Brazil timezone

export function formatDateTimeZone(
  date: string,
  timeZn: string = 'America/Sao_Paulo',
): Date {
  const timezoneDate = toDate(date, { timeZone: timeZn });

  return timezoneDate;
}
