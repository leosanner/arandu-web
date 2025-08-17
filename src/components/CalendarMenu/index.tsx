import { GetContext } from '@/context/getContext';
import clsx from 'clsx';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type CalendarMenuProps = {
  month: string;
  year: number;
};

export function CalendarMenu({ month, year }: CalendarMenuProps) {
  const { state, setState } = GetContext();

  const buttonClass = clsx(
    'cursor-pointer hover:bg-slate-200 outline-0 hover:ring-1 rounded-sm',
  );

  const weekDays = [
    { short: 'D', sm: 'Domingo', full: 'Domingo' },
    { short: 'S', sm: 'Segunda', full: 'Segunda-feira' },
    { short: 'T', sm: 'Terça', full: 'Terça-feira' },
    { short: 'Q', sm: 'Quarta', full: 'Quarta-feira' },
    { short: 'Q', sm: 'Quinta', full: 'Quinta-feira' },
    { short: 'S', sm: 'Sexta', full: 'Sexta-feira' },
    { short: 'S', sm: 'Sábado', full: 'Sábado' },
  ];

  function increase() {
    setState(prevState => prevState + 1);
  }

  function decrease() {
    setState(prevState => prevState - 1);
  }

  return (
    <>
      <div className='flex justify-between align-middle'>
        <h2 className='font-semibold text-xl'>
          {month}, {year}
        </h2>

        <div className='flex gap-x-3 align-middle'>
          <button className={buttonClass}>
            <ArrowLeft onClick={decrease} />
          </button>

          <button className={buttonClass}>
            <ArrowRight onClick={increase} />
          </button>
        </div>
      </div>
      <div className='grid grid-flow-row grid-cols-7 overflow-x-auto text-center font-semibold'>
        {weekDays.map((day, i) => (
          <div key={i} className='text-center md:text-xl'>
            <span className='sm:hidden'>{day.short}</span>
            <span className='hidden sm:inline lg:hidden'>{day.sm}</span>
            <span className='hidden lg:inline'>{day.full}</span>
          </div>
        ))}
      </div>
    </>
  );
}
