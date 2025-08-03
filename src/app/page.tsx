import { Logo } from '@/components/Logo';
import Link from 'next/link';

export default async function Home() {
  return (
    <>
      <div className='flex'>
        <Logo />
        <Link href='/get-started'>Get Started</Link>
        <Link href='/login'>Login</Link>
      </div>
    </>
  );
}
