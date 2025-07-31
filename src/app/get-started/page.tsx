import { Logo } from '@/components/Logo';
import { Register } from '@/components/Register';

export function generateMetadata() {
  return {
    title: 'About',
  };
}

export default function GetStarted() {
  return (
    <>
      <Logo />
      <Register />
    </>
  );
}
