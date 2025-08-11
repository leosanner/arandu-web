export type UserGetJwtModel = {
  matchCredentials: boolean;
  jwt: string;
  userEmail: string;
};

export type BasicUserInformationCache = {
  firstName: string;
  lastName: string;
  email: string;
};
