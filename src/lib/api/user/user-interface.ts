import { UserCredentialsModel } from '@/models/user/userCredentials';
import {
  CreateUserAPiModel,
  CreateUserApiResponseModel,
  LoginUserApiResponseModel,
} from '@/models/user/userPostApiRequest';

export interface UserApiInterface {
  login(
    userCredentials: UserCredentialsModel,
  ): Promise<LoginUserApiResponseModel>;

  createUser(
    userInformation: CreateUserAPiModel,
  ): Promise<CreateUserApiResponseModel>;
}
