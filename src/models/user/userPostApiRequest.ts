export type CreateUserApiResponseModel = {
  success: boolean;
  message: string;
};

export type LoginUserApiResponseModel = {
  success: boolean;
  message: string;
  token: string;
};

export type CreateUserAPiModel = {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
};
