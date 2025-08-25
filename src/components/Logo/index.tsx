import clsx from 'clsx';
import Link from 'next/link';

type LogoProps = {
  href?: string;
};

export function Logo({ href = '/' }: LogoProps) {
  const iconClass = clsx(
    'border-3 border-purple-900 size-10 rounded-full',
    'md:size-12',
    'transition-all duration-200 ease-in-out',
    'min-md:border-4',
  );

  return (
    <Link href={href}>
      <div className='flex items-center'>
        <div
          className={clsx(
            // 'border-3 border-purple-900 size-10 rounded-full',
            // 'md:size-12',
            // 'transition-all duration-200 ease-in-out',
            // 'min-md:border-4',
            iconClass,
          )}
        ></div>
        <div
          className={clsx(
            // '-ml-5 border-2 border-purple-900 size-10 rounded-full',
            // 'md:size-12 md:-ml-6',
            // 'transition-all duration-200 ease-in-out',
            // 'min-md:border-4',
            iconClass,
            '-ml-5 md:-ml-6',
          )}
        ></div>

        <div className='ml-1'>
          <span className={clsx('text-4xl', 'md:text-5xl')}>Arandu</span>
        </div>
      </div>
    </Link>
  );
}
