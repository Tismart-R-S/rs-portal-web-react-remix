import AuthClient from '@config/AuthClient';
import { LoginRequestModel, LoginResponseModel } from '../models/login.model';
import { BaseResponse } from '../interfaces/global.interface';
import { RefreshTokenResponseModel } from '../models/refres-token.model';

namespace AuthApiAdapter {
  export async function login(
    data: LoginRequestModel
  ): Promise<BaseResponse<LoginResponseModel>> {
    const response = await AuthClient.post<LoginResponseModel>('/signin', data);

    return { ok: true, statusCode: response.status, data: response.data };
  }

  export async function refreshToken(
    token: string
  ): Promise<BaseResponse<RefreshTokenResponseModel>> {
    const response = await AuthClient.get<RefreshTokenResponseModel>(
      '/refresh-token',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return { ok: true, statusCode: response.status, data: response.data };
  }
}

export default AuthApiAdapter;
