import {
  CreateUserAPiModel,
  CreateUserApiResponseModel,
} from '@/models/user/userPostApiRequest';
import { UserApiInterface } from './user-interface';
import { UserGetJwtModel } from '@/models/user/userGetAPiRequest';
import { UserApiRoutes } from '../routes';
import { UserCredentialsModel } from '@/models/user/userCredentials';

export class UserApi implements UserApiInterface {
  async createUser(
    userInformation: CreateUserAPiModel,
  ): Promise<CreateUserApiResponseModel> {
    const response = await fetch(UserApiRoutes.CREATE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInformation),
    });

    return response.json();
  }

  async login(userCredentials: UserCredentialsModel): Promise<UserGetJwtModel> {
    const response = fetch(UserApiRoutes.AUTH, {
      method: 'POST',
      body: JSON.stringify(userCredentials),
    });

    return (await response).json();
  }
}
