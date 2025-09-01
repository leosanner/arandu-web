import {
  CreateUserAPiModel,
  CreateUserApiResponseModel,
  LoginUserApiResponseModel,
} from '@/models/user/userPostApiRequest';
import { UserApiInterface } from './user-interface';
import { UserApiRoutes } from '../routes';
import { UserCredentialsModel } from '@/models/user/userCredentials';
import { cookies } from 'next/headers';
import { COOKIE_NAME } from '@/lib/consts';

export class UserApi implements UserApiInterface {
  async createUser(
    userInformation: CreateUserAPiModel,
  ): Promise<CreateUserApiResponseModel> {
    try {
      const response = await fetch(UserApiRoutes.CREATE, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInformation),
        credentials: 'include', // cookies
      });

      const responseData = await response.json();

      return responseData;
    } catch (e) {
      return {
        message: e instanceof Error ? e.message : 'Generic error',
        success: false,
      };
    }
  }

  // TODO: if user aleready logged in, dont need to call backend
  async login(
    userCredentials: UserCredentialsModel,
  ): Promise<LoginUserApiResponseModel> {
    try {
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

      if (headerCookies && COOKIE_NAME) {
        (await cookies()).set({
          name: COOKIE_NAME,
          value: headerCookies,
          httpOnly: true,
          path: '/',
        });
      }

      return data;
    } catch (e) {
      console.log(e);

      return {
        message: 'An error has ocurred, please try again or contact us.',
        success: false,
        token: '',
      };
    }
  }
}
