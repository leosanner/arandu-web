import clsx from 'clsx';

type FullWindowContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function FullWindowContainer({
  children,
  className = '',
}: FullWindowContainerProps) {
  const classConfig = clsx('h-svh', className);

  return <div className={classConfig}>{children}</div>;
}
