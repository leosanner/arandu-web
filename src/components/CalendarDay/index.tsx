import { GetContext } from '@/context/getContext';
import { CalendarDayType, slugComponentFullDate } from '@/lib/calendar';
import clsx from 'clsx';
import Link from 'next/link';

type CalendarDayProps = {
  dayObject: CalendarDayType;
};

export function CalendarDay({ dayObject }: CalendarDayProps) {
  const { currentMonth, day, id, currentDay } = dayObject;
  const { state, setState } = GetContext();

  const dayStyle: Record<string, string> = {
    true: clsx('text-white'),
    false: clsx('text-zinc-500'),
  };

  const dayStyleClass = dayStyle[String(currentMonth)];

  const divClass = clsx(
    dayStyleClass,
    'flex justify-center font-semibold cursor-pointer transition',
    'm-1 p-3 outline-0 rounded-xl text-center',
    'hover:ring-2 hover:ring-zinc-600 hover:bg-neutral-800',
    currentDay && 'bg-slate-600/70 hover:bg-slate-600',
  );

  const slugDate = slugComponentFullDate(day, state);

  return (
    <div key={id} className={divClass}>
      <div>
        <Link href={`/test/${slugDate}`}>{day}</Link>
      </div>
    </div>
  );
}
