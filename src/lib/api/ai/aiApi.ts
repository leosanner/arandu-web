import { AiUserMessage, AiMessageResponse } from '@/models/ai/ai-post-models';
import { AiInterface } from './ai-interface';
import { AiApiRoutes } from '../routes';
import { getCookies } from '@/lib/cookies';

export class AiApi implements AiInterface {
  async chatUser(userMessage: AiUserMessage): Promise<AiMessageResponse> {
    const cookieValue = await getCookies();

    const response = await fetch(AiApiRoutes.PLAN_EVENTS, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Cookie: cookieValue ? cookieValue : '',
      },
      body: JSON.stringify(userMessage),
    });

    const data: AiMessageResponse = await response.json();

    return data;
  }

  async planUserEvents(): Promise<AiMessageResponse> {
    const cookieValue = await getCookies();

    const response = await fetch(AiApiRoutes.PLAN_EVENTS, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Cookie: cookieValue ? cookieValue : '',
      },
    });

    const data: AiMessageResponse = await response.json();

    return data;
  }
}
