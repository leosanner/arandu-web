import { UserCredentialsModel } from '@/models/user/userCredentials';
import {
  CreateUserAPiModel,
  CreateUserApiResponseModel,
  LoginUserApiResponseModel,
} from '@/models/user/userPostApiRequest';
import { headers } from 'next/headers';

// {
//   headers: {},
//   body: { success: false, message: 'Invalid email or password.' },
//   statusCode: 'BAD_REQUEST',
//   statusCodeValue: 400
// }

export interface UserApiInterface {
  login(
    userCredentials: UserCredentialsModel,
  ): Promise<LoginUserApiResponseModel>;

  createUser(
    userInformation: CreateUserAPiModel,
  ): Promise<CreateUserApiResponseModel>;
}
