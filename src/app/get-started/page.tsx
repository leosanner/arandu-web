import { Header } from '@/components/Header';
import { Logo } from '@/components/Logo';
import { Register } from '@/components/Register';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

export function generateMetadata() {
  return {
    title: 'About',
  };
}

export default function GetStarted() {
  return (
    <>
      <Header />
      <Suspense fallback={<SpinLoader />}>
        <Register />
      </Suspense>
    </>
  );
}
