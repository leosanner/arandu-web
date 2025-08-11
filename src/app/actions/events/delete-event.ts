import { deleteEventDAL } from '@/data-access-layer/event';
import { DeleteEventDTO } from '@/models/events/eventPostRequest';

type DeleteEventResponse = {
  success: boolean;
  message?: string;
};

export async function deleteEvent(
  prevState: DeleteEventResponse,
  eventId: number,
): Promise<DeleteEventResponse> {
  const eventDTO: DeleteEventDTO = {
    id: eventId,
  };

  const response = await deleteEventDAL(eventDTO);

  if (response.success) {
    return {
      success: true,
    };
  }

  return {
    success: false,
    message: response.message,
  };
}
