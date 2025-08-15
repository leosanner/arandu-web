import clsx from 'clsx';

type CalendarGridProps = {
  children: React.ReactNode;
};

export function CalendarGrid({ children }: CalendarGridProps) {
  return (
    <div
      className={clsx(
        'grid grid-flow-row grid-cols-7',
        'bg-zinc-800',
        'overflow-x-auto',
        'rounded-md',
        'py-2',
      )}
    >
      {children}
    </div>
  );
}
