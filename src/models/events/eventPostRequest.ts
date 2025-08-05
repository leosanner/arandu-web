export type CreateEventResponse = {
  success: boolean;
  message: string;
};

export type CreateEventModel = {
  StartDate: string;
  EndDate?: string;
  name: string;
  description?: string;
  label?: string;
};
