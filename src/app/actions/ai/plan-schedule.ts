'use server';

// This action is just for development purposes

import { sendEmailByAIDAL } from '@/data-access-layer/ai';

// TODO: load balancer

type GenerateScheduleType = {
  aiResponse?: string;
};

export async function generateSchedule(
  prevState: GenerateScheduleType,
): Promise<GenerateScheduleType> {
  const response = await sendEmailByAIDAL();

  return {
    aiResponse: response.message,
  };
}
