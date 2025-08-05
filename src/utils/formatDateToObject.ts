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
