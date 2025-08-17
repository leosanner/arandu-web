'use server';

import { structuredEventsResponseByState } from '@/lib/calendar/events-api-cluster';

export async function currentMonthEventsAction(state: number) {
  if (typeof state !== 'number') {
    throw new Error('Invalid params, did not receive a number.');
  }

  if (state < -10 || state > 10) {
    throw Error(
      'O intervalo de eventos está limitado para meses em relação ao momento atual.',
    );
  }

  const response = await structuredEventsResponseByState(state);

  return response;
}
