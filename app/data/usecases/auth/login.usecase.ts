import AuthApiAdapter from '@data/adapters/auth-api.adapter';
import { ApiAuthErrorModel } from '@data/models/global.model';
import { LoginRequestModel } from '@data/models/login.model';
import { BaseResponse } from '@data/interfaces/global.interface';

const authRepository = new AuthApiAdapter();

const loginUseCase = async (data: LoginRequestModel) => {
  try {
    const res = await authRepository.login(data);
    return res;
  } catch (error: any) {
    const err = error.response.data as ApiAuthErrorModel;
    const res = {
      statusCode: err.statusCode,
      data: err,
    } as BaseResponse<ApiAuthErrorModel>;
    return res;
  }
};

export default loginUseCase;
