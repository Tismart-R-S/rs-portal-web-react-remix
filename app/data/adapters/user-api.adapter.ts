import AuthClient from '@config/AuthClient';
import { UserResponseModel } from '../models/user.model';
import { BaseResponse } from '../interfaces/global.interface';

namespace UserApiAdapter {
  export async function getData(
    token: string
  ): Promise<BaseResponse<UserResponseModel>> {
    const response = await AuthClient.get<UserResponseModel>('/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return { ok: true, statusCode: response.status, data: response.data };
  }
}

export default UserApiAdapter;
