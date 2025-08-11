import clsx from 'clsx';
import Link from 'next/link';

type LogoProps = {
  href?: string;
};

export function Logo({ href = '/' }: LogoProps) {
  return (
    <Link href={href}>
      <div className='flex items-center'>
        <div
          className={clsx(
            'border-3 border-purple-900 w-14 h-14 rounded-full',
            'md:w-20  md:h-20',
            'transition-all duration-200 ease-in-out',
            'min-md:border-4',
          )}
        ></div>
        <div
          className={clsx(
            '-ml-6 border-3 border-purple-900 w-14 h-14 rounded-full',
            'md:w-20 md:h-20 md:-ml-8',
            'transition-all duration-200 ease-in-out',
            'min-md:border-4',
          )}
        ></div>

        <div className='ml-1'>
          <span className={clsx('text-4xl', 'md:text-5xl')}>Arandu</span>
        </div>
      </div>
    </Link>
  );
}
