import { Logo } from '@/components/Logo';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className='flex'>
        <Logo />
        <Link href='/get-started'>Get Started</Link>
      </div>
    </>
  );
}
