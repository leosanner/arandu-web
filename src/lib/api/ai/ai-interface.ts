import { AiMessageResponse, AiUserMessage } from '@/models/ai/ai-post-models';

export interface AiInterface {
  planUserEvents(): Promise<AiMessageResponse>;

  chatUser(userMessage: AiUserMessage): Promise<AiMessageResponse>;
}
