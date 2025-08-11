import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';

export default async function Home() {
  return (
    <>
      <Header />
      <Hero />
    </>
    // <>
    //   <div className='flex'>
    //     <Logo />
    //     <Link href='/get-started'>Get Started</Link>
    //     <Link href='/login'>Login</Link>
    //   </div>
    // </>
  );
}
