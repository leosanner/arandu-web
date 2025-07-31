import { UserCredentialsModel } from "@/models/user/userCredentials";
import { UserGetJwtModel } from "@/models/user/userGetAPiRequest";
import {
  CreateUserAPiModel,
  CreateUserApiResponseModel,
} from "@/models/user/userPostApiRequest";

export interface UserApiInterface {
  login(userCredentials: UserCredentialsModel): Promise<UserGetJwtModel>;

  createUser(
    userInformation: CreateUserAPiModel
  ): Promise<CreateUserApiResponseModel>;
}
