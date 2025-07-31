import clsx from 'clsx';

type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div
      className={clsx(
        'flex flex-col ',
        'gap-y-8 mt-24 px-10',
        'max-w-[640px]',
        'sm:mx-auto',
      )}
    >
      {children}
    </div>
  );
}
