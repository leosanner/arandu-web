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
    'bg-gray-400 p-3 rounded-sm ring-3',
    ' hover:bg-slate-300-400md:p-3 md:text-2xl ',
    'font-semibold text-2xl',
    'text-black',
    className,
  );

  return (
    <Link href={href} className={linkClass}>
      {content}
    </Link>
  );
}
