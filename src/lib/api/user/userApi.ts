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

  // TODO: if user aleready logged in, dont need to call backend
  async login(
    userCredentials: UserCredentialsModel,
  ): Promise<LoginUserApiResponseModel> {
    const response = await fetch(UserApiRoutes.LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userCredentials),
      credentials: 'include',
    });

    const data = await response.json();

    if (!data.success) {
      return await data.body;
    }

    const headerCookies = response.headers.get('set-cookie');

    if (headerCookies) {
      (await cookies()).set({
        name: 'token',
        value: headerCookies,
        httpOnly: true,
        path: '/',
      });
    }

    return data;
  }
}
