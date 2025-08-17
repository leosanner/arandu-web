import { BusyLevel } from '@/lib/calendar/day-information';
import clsx from 'clsx';

type CalendarBusyDayDisplayProps = {
  busyLevel?: BusyLevel;
  day: number;
};

export function CalendarBusyDayDisplay({
  busyLevel = 'free',
  day,
}: CalendarBusyDayDisplayProps) {
  const busyLevelStyle: Record<BusyLevel, string> = {
    free: clsx('text-white'),
    easy: clsx('text-amber-300'),
    medium: clsx('text-amber-500'),
    hard: clsx('text-amber-700'),
  };

  const classStyle = clsx(busyLevelStyle[busyLevel], 'font-semibold');

  return (
    <div className={classStyle}>
      <span>{day}</span>
    </div>
  );
}
