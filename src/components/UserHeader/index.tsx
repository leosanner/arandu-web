import clsx from 'clsx';
import Link from 'next/link';
import { Logo } from '../Logo';
import { CalendarDays, Plus, UserRoundPen } from 'lucide-react';

export function UserHeader() {
  return (
    <header
      className={clsx(
        'flex',
        'justify-between',
        'items-center',
        'mx-4',
        'mt-4',
        'sm:mx-15 sm:mt-8',
        'md:mx-20',
        'lg:mx-30',
      )}
    >
      <div>
        <Logo href='/user' />
      </div>

      <div className='flex gap-x-4 sm:gap-x-16 [&_svg]:size-7 md:[&_svg]:size-8 center'>
        <Link aria-label='Add event' href='/user/events/add-event'>
          <Plus />
        </Link>
        <Link aria-label='Calendar' href='/user/events/all-events'>
          <CalendarDays />
        </Link>
        <Link aria-label='User preferences' href='user/events/all-events'>
          <UserRoundPen />
        </Link>
      </div>
    </header>
  );
}
