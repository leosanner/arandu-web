import clsx from 'clsx';
import Link from 'next/link';

type DefaultButtonProps = {
  href: string;
  className?: string;
  content: string;
};

export function DefaultButton({
  href,
  content,
  className = '',
}: DefaultButtonProps) {
  const linkClass = clsx(
    'bg-gray-500 p-2 rounded-sm ',
    'hover:bg-slate-800',
    'transition-all',
    'font-semibold text-2xl',
    'text-black',

    className,
  );

  return (
    <Link href={href} className={linkClass}>
      <div className='relative w-64 h-16 bg-slate-600 overflow-hidden group cursor-pointer'>
        <div className='absolute inset-0 bg-violet-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out'></div>
        <span className='relative z-10 flex items-center justify-center h-full text-white'>
          {content}
        </span>
      </div>
    </Link>
  );
}
