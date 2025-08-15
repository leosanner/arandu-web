import GetAllEvents from '@/components/GetAllEvents';
import { SpinLoader } from '@/components/SpinLoader';
import { structuredEventsResponse } from '@/lib/calendar/events-api-cluster';
import { Suspense } from 'react';

export default async function DisplayAllEventsPage() {
  const response = await structuredEventsResponse();

  console.log(response);

  return (
    <Suspense fallback={<SpinLoader />}>
      <GetAllEvents />
    </Suspense>
  );
}
