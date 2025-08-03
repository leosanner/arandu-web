import { userApiService } from '@/lib/api/user';
import { UserCredentialsModel } from '@/models/user/userCredentials';
import { CreateUserAPiModel } from '@/models/user/userPostApiRequest';

export async function createUser(userInformation: CreateUserAPiModel) {
  return userApiService.createUser(userInformation);
}

export async function loginUser(userCredentials: UserCredentialsModel) {
  return userApiService.login(userCredentials);
}
