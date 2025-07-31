export type CreateUserApiResponseModel = {
  success: boolean;
  message: string;
};

export type CreateUserAPiModel = {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
};
