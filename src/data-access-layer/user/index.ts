import { UserApiInterface } from '@/lib/api/user/user-interface';
import { UserApi } from '@/lib/api/user/userApi';

export const userApiService: UserApiInterface = new UserApi();
