import AuthClient from '@config/AuthClient';
import { LoginRequestModel, LoginResponseModel } from '../models/login.model';
import AuthRepository from '../repositories/auth.repository';
import { BaseResponse } from '../interfaces/global.interface';

class AuthApiAdapter implements AuthRepository {
  async login(
    data: LoginRequestModel
  ): Promise<BaseResponse<LoginResponseModel>> {
    const response = await AuthClient.post<LoginResponseModel>('/signin', data);
    return { statusCode: response.status, data: response.data };
  }
}

export default AuthApiAdapter;
