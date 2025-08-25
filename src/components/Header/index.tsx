'use client';

import { Menu } from 'lucide-react';
import { Logo } from '../Logo';
import clsx from 'clsx';
import { useState } from 'react';
import { NavBarLinkElements } from '../NavBarLinkElements';

export function Header() {
  const [state, setState] = useState(false);

  const closeMenu = () => setState(false);

  return (
    <header
      className={clsx(
        'flex',
        'justify-between',
        'items-center',
        'mx-4',
        'mt-8',
        'sm:mx-15 sm:mt-8',
        'md:mx-20',
        'lg:mx-30',
        'min-[]:',
      )}
    >
      <Logo />
      <button onClick={() => setState(!state)}>
        <Menu
          className={clsx(
            'w-10 h-10 sm:hidden hover:bg-gray-200 outline-0 hover:ring-1 rounded-md ',
          )}
        />
      </button>

      <div
        className={clsx(
          'fixed right-0 w-1/3 bg-zinc-800 mt-40 mr-4',
          ' outline-0 ring-1 p-2 text-xl rounded-md sm:hidden',
          'transition-all duration-100 ease-out',
          state
            ? 'translate-0'
            : 'opacity-0 pointer-events-none translate-x-full',
        )}
      >
        <div className='flex flex-col  gap-y-2'>
          <NavBarLinkElements disable={closeMenu} />
        </div>
      </div>

      <div
        className={clsx(
          'hidden text-2xl items-center',
          'sm:flex sm:gap-x-5',
          'md:text-2xl md:gap-x-7',
          'lg:text-2xl lg:gap-x-10',
        )}
      >
        <NavBarLinkElements disable={closeMenu} />
      </div>
    </header>
  );
}
