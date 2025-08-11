import GetAllEvents from '@/components/GetAllEvents';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function DisplayAllEventsPage() {
  return (
    <Suspense fallback={<SpinLoader />}>
      <GetAllEvents />
    </Suspense>
  );
}
