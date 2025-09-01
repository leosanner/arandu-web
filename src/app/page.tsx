import { AboutUs } from '@/components/AboutUs';
import { DarkVeilContainer } from '@/components/DarkVeilContainer';
import { FullWindowContainer } from '@/components/FullWindowContainer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';

export default async function Home() {
  return (
    <>
      <FullWindowContainer>
        <DarkVeilContainer>
          <Header />
          <Hero />
        </DarkVeilContainer>
      </FullWindowContainer>
      <FullWindowContainer className='bg-slate-700'>
        <AboutUs />
      </FullWindowContainer>
    </>
  );
}
