import { AiUserMessage, AiMessageResponse } from '@/models/ai/ai-post-models';
import { AiInterface } from './ai-interface';
import { AiApiRoutes } from '../routes';
import { getCookies } from '@/lib/cookies';
import { GenericResponseDTO } from '@/models/generic';

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

  // Call news api via MCP, find latest news and send a email

  async sendEmail(): Promise<GenericResponseDTO> {
    const cookieValue = await getCookies();

    const response = await fetch(AiApiRoutes.NEWS_REPORT, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Cookie: cookieValue ? cookieValue : '',
      },
    });

    const data: GenericResponseDTO = await response.json();

    return data;
  }
}
