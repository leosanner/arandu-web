'use server';

import { createEventDAL } from '@/data-access-layer/event';
import { createEventSchema } from './create-event-schema';
import { z } from 'zod';
import { CreateEventDTO, EventModel } from '@/models/events/eventsModel';
import {
  formatDateTimeZone,
  formatDateToObject,
} from '@/utils/formatDateToObject';

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

    console.log(eventInformation.startDate);

    const eventDate = new Date(eventInformation.startDate);
    const dateObject = formatDateToObject(eventDate);

    console.log('Event ISO UTC:');
    console.log(formatDateTimeZone(eventInformation.startDate));

    const createEventDTO: CreateEventDTO = {
      days: dateObject.days,
      hours: dateObject.hours,
      minutes: dateObject.minutes,
      month: dateObject.month,
      years: dateObject.years,
      name: eventInformation.name,
      description: eventInformation.description,
    };

    console.log('Create event DTO: ');
    console.log(createEventDTO);

    const response = await createEventDAL(createEventDTO);
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
