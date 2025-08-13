import { aiApi } from '@/lib/api/ai';

export async function planUserEventsDAL() {
  return await aiApi.planUserEvents();
}
