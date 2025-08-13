'use server';

import { planUserEventsDAL } from '@/data-access-layer/ai';

// TODO: load balancer

type GenerateScheduleType = {
  aiResponse?: string;
};

export async function generateSchedule(
  prevState: GenerateScheduleType,
): Promise<GenerateScheduleType> {
  const response = await planUserEventsDAL();

  return {
    aiResponse: response.message,
  };
}
