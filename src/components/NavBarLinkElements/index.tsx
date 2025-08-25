import clsx from 'clsx';
import { User } from 'lucide-react';
import Link from 'next/link';

type NavBarLinkElementsProps = {
  className?: string;
  disable: () => void;
};

export function NavBarLinkElements({
  disable,
  className = '',
}: NavBarLinkElementsProps) {
  const linkStyle = clsx(
    'border-b-2 border-transparent hover:border-b-2 hover:border-purple-700',
    className,
  );

  return (
    <>
      <Link href='' className={linkStyle} onClick={disable}>
        Sobre
      </Link>
      <Link href='' className={linkStyle} onClick={disable}>
        Planos
      </Link>
      <Link href='/login' onClick={disable}>
        <User
          className={clsx(
            'bg-purple-800 rounded-lg border-1 border-purple-900 hover:bg-purple-400',
            'sm:w-6 sm:h-6',
            'md:w-8 md:h-8',
            className,
            // 'lg:w-8 lg:h-8',
          )}
        />
      </Link>
    </>
  );
}
