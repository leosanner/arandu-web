'use server';

import { createEvent } from '@/data-access-layer/event';
import { createEventSchema } from './create-event-schema';
import { z } from 'zod';
import { CreateEventDTO, EventModel } from '@/models/events/eventsModel';
import { formatDateToObject } from '@/utils/formatDateToObject';

type CreateEventResponse = {
  success: boolean;
  fieldErrors?: Record<string, string[]>;
  message?: string;
};

export async function handleCreateEventSubmit(
  prevState: CreateEventResponse,
  formData: FormData,
): Promise<CreateEventResponse> {
  const rawData = Object.fromEntries(formData);
  const validationFields = createEventSchema.safeParse(rawData);

  if (validationFields.success) {
    const eventInformation = validationFields.data as EventModel;
    const eventDate = new Date(eventInformation.startDate);
    const dateObject = formatDateToObject(eventDate);

    const createEventDTO: CreateEventDTO = {
      days: dateObject.days,
      hours: dateObject.hours,
      minutes: dateObject.minutes,
      month: dateObject.month,
      years: dateObject.years,
      name: eventInformation.name,
      description: eventInformation.description,
    };

    const response = await createEvent(createEventDTO);
    console.log(response);

    return {
      success: true,
    };
  }

  const errors = z.treeifyError(validationFields.error);

  if (errors.properties) {
    console.log(errors.properties);

    const fieldErrors: Record<string, string[]> = {};

    for (const [key, value] of Object.entries(errors.properties)) {
      fieldErrors[key] = value.errors;
    }

    return {
      success: false,
      fieldErrors: fieldErrors,
    };
  }

  return {
    success: false,
  };
}
