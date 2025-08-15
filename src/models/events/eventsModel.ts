export type EventModel = {
  startDate: string;
  endDate?: string;
  name: string;
  description: string;
  label: string;
  createdAt: string;
  id: number;
};

export type CreateEventDTO = {
  days: number;
  month: number;
  minutes: number;
  hours: number;
  years: number;
  name: string;
  description: string;
};

export type UpdateEventDTO = {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
};

export type EventDTO = {
  startDate: string;
  name: string;
  description: string;
  createdAt: string;
  id: number;
};
