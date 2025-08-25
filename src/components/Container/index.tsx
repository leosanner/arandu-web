import clsx from 'clsx';

type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div
      className={clsx(
        'flex flex-col ',
        'gap-y-8 mt-16 p-4',
        'max-w-[820px]',
        'sm:mx-auto',
      )}
    >
      {children}
    </div>
  );
}
