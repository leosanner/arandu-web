import { Menu, User } from 'lucide-react';
import { Logo } from '../Logo';
import clsx from 'clsx';
import Link from 'next/link';

export function Header() {
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
        'min-[]:',
      )}
    >
      <Logo />
      <Menu className='w-10 h-10 sm:hidden' />
      <div
        className={clsx(
          'hidden text-2xl items-center',
          'sm:flex sm:gap-x-5',
          'md:text-2xl md:gap-x-7',
          'lg:text-2xl lg:gap-x-10',
        )}
      >
        <Link
          href=''
          className='border-b-2 border-transparent hover:border-b-2 hover:border-purple-700'
        >
          Sobre
        </Link>
        <Link
          href=''
          className='border-b-2 border-transparent hover:border-b-2 hover:border-purple-700'
        >
          Planos
        </Link>
        <Link href='/login'>
          <User
            className={clsx(
              'bg-purple-200 rounded-lg border-1 border-purple-900 hover:bg-purple-400',
              'sm:w-6 sm:h-6',
              'md:w-8 md:h-8',
              // 'lg:w-8 lg:h-8',
            )}
          />
        </Link>
      </div>
    </header>
  );
}
