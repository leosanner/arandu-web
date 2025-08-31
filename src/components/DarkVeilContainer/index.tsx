import DarkVeil from '../DarkVeil';

type DarkVeilContainerProps = {
  children: React.ReactNode;
};

export function DarkVeilContainer({ children }: DarkVeilContainerProps) {
  return (
    <div className='relative '>
      {/* Background layer */}
      <div className='fixed inset-0 -z-10'>
        <DarkVeil color={[0.01, 0.1, 0.2]} />
      </div>

      {/* Content layer */}
      <div className='relative z-0'>{children}</div>
    </div>
  );
}
