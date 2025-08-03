import {
  CreateUserAPiModel,
  CreateUserApiResponseModel,
  LoginUserApiResponseModel,
} from '@/models/user/userPostApiRequest';
import { UserApiInterface } from './user-interface';
import { UserApiRoutes } from '../routes';
import { UserCredentialsModel } from '@/models/user/userCredentials';
import { cookies } from 'next/headers';

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
      credentials: 'include', // cookies
    });

    return response.json();
  }

  async login(
    userCredentials: UserCredentialsModel,
  ): Promise<LoginUserApiResponseModel> {
    const response = await fetch(UserApiRoutes.AUTH, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userCredentials),
      credentials: 'include',
    });

    const headerCookies = response.headers.get('set-cookie');

    if (headerCookies) {
      (await cookies()).set({
        name: 'token',
        value: headerCookies,
        httpOnly: true,
        path: '/',
      });
      console.log(headerCookies);
    }

    return response.json();
  }
}
