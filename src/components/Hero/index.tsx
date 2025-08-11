import clsx from 'clsx';
import { Container } from '../Container';
import Link from 'next/link';

export function Hero() {
  return (
    <Container>
      <div
        className={clsx(
          'flex',
          'flex-col',
          'items-center',
          'gap-y-7',
          'sm:gap-y-7',
          'md:gap-y-10',
        )}
      >
        <div>
          <div className='text-3xl font-medium sm:text-3xl md:text-6xl flex flex-col text-center gap-y-3'>
            <p>Pense rápido. Planeje instantaneamente.</p>
            <p>IA que te acompanha.</p>
          </div>
        </div>

        <div className='hidden md:flex align-middle'>
          <span className='text-center'>
            Um aplicativo voltado para gestão pessoal com integração de
            inteligência artificial. Rápido, fácil e personalizável.
          </span>
        </div>

        <div
          className={clsx(
            'flex',
            'justify-center w-full gap-x-5',
            // 'min-[450px]:justify-center',
          )}
        >
          <Link
            href='/login'
            className='bg-purple-300 p-2 rounded-sm border-1 hover:bg-purple-400
            md:p-3 md:text-2xl '
          >
            Comece já
          </Link>
          <Link
            href=''
            className='bg-slate-100 p-2 rounded-sm border-1 hover:bg-slate-300
            md:p-3 md:text-2xl'
          >
            Aprenda mais
          </Link>
        </div>
      </div>
    </Container>
  );
}
