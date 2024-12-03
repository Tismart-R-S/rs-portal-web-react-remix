import AuthClient from '@config/AuthClient';
import { UserResponseModel } from '../models/user.model';
import { BaseResponse } from '../interfaces/global.interface';

class UserApiAdapter {
  async getData(token: string): Promise<BaseResponse<UserResponseModel>> {
    const response = await AuthClient.get<UserResponseModel>('/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { data, status } = response;
    return { statusCode: status, data };
  }
}

export default UserApiAdapter;
