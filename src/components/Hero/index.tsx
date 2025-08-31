import clsx from 'clsx';
import { Container } from '../Container';
import { DefaultButton } from '../DefaultButton';

export function Hero() {
  const highlightElements = clsx(
    'bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent',
  );

  return (
    <Container>
      <div
        className={clsx(
          'flex',
          'flex-col',
          'items-center',
          'gap-y-15',
          'sm:gap-y-7',
          'md:gap-y-10',
          'mt-5',
          'lg:mt-20',
        )}
      >
        <div>
          <div className='text-4xl font-bold sm:text-3xl md:text-6xl flex flex-col text-center gap-y-12'>
            <p>
              <span className={highlightElements}>Planejamento</span> rápido.{' '}
              <span className={highlightElements}>Relatórios </span>
              semanais. <br />
              <span className={highlightElements}>Notícias </span> recentes.
            </p>
            <p>
              Tudo em um <span className={highlightElements}>único lugar.</span>
            </p>
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
          <DefaultButton className='' content='Comece já' href='/login' />
        </div>
      </div>
    </Container>
  );
}
