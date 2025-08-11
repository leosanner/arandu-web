export type CreateEventResponse = {
  success: boolean;
  message: string;
};

export type DeleteEventResponse = {
  success: boolean;
  message: string;
};

export type DeleteEventDTO = {
  id: number;
};

export type CreateEventModel = {
  StartDate: string;
  EndDate?: string;
  name: string;
  description?: string;
  label?: string;
};
