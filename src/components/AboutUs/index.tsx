import clsx from 'clsx';

export function AboutUs() {
  const flexElement = clsx(
    'bg-purple-600/50 rounded-2xl ring-1',
    'w-75 sm:w-100 md:w-125',
  );
  const elementTitle = clsx('text-center text-2xl font-black text-black');
  const elementContent = clsx(
    'flex flex-col justify-center items-center align-middle h-35',
  );

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 py-10'>
      <div className='flex flex-col items-center gap-y-10'>
        <div className={flexElement}>
          <h1 className={elementTitle}>Element Title</h1>
          <div className={elementContent}>
            <p>Template Element</p>
          </div>
        </div>

        <div className={flexElement}>
          <h1 className={elementTitle}>Element Title</h1>
          <div className={elementContent}>
            <p>Template Element</p>
          </div>
        </div>

        <div className={flexElement}>
          <h1 className={elementTitle}>Element Title</h1>
          <div className={elementContent}>
            <p>Template Element</p>
          </div>
        </div>
      </div>
    </div>
  );
}
