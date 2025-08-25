import { DarkVeilContainer } from '@/components/DarkVeilContainer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';

export default async function Home() {
  return (
    <DarkVeilContainer>
      <Header />
      <Hero />
    </DarkVeilContainer>
  );
}
