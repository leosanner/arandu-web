import { UserHeader } from '@/components/UserHeader';
import { Metadata } from 'next';
import { ReactNode } from 'react';

type UserLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'User',
};

export default function UserLayout({ children }: UserLayoutProps) {
  return (
    <>
      <UserHeader />
      {children}
    </>
  );
}
