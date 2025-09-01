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
    // 'bg-gray-500 p-2 rounded-sm ',
    // 'hover:bg-slate-800',
    // 'transition-all',
    // 'font-semibold text-2xl',
    // 'text-black',

    className,
  );

  return (
    <Link href={href} className={linkClass}>
      <button className='group relative inline-flex h-15 items-center justify-center overflow-hidden rounded-md border border-purple-400 bg-purple-600 font-bold text-xl'>
        <div className='inline-flex h-15 translate-y-0 items-center justify-center px-12 text-zinc-200 transition duration-500 group-hover:-translate-y-[150%]'>
          {content}
        </div>
        <div className='absolute inline-flex h-15 w-full translate-y-[100%] items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0'>
          <span className='absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-pink-500/70 transition duration-500 group-hover:translate-y-0 group-hover:scale-150'></span>
          <span className='z-10'>{content}</span>
        </div>
      </button>
    </Link>
  );
}
