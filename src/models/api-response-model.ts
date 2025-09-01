export type GenericResponseDTO = {
  success: boolean;
  message: string;
};

export type fieldError = {
  fieldName: string;
  message: string;
};

export type fieldErrors = fieldError[];
