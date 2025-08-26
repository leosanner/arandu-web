import { AiMessageResponse, AiUserMessage } from '@/models/ai/ai-post-models';
import { GenericResponseDTO } from '@/models/generic';

export interface AiInterface {
  planUserEvents(): Promise<AiMessageResponse>;

  chatUser(userMessage: AiUserMessage): Promise<AiMessageResponse>;

  sendEmail(): Promise<GenericResponseDTO>;
}
