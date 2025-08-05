import { eventsApi } from '@/lib/api/events';

export default async function DisplayAllEventsPage() {
  async function printCookies() {
    const response = await eventsApi.getAllEvents();

    console.log(response);
  }

  printCookies();

  return (
    <div>
      <p>DisplayAllEventsPage</p>
    </div>
  );
}
