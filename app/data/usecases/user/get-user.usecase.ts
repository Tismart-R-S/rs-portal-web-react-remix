import { ApiAuthErrorModel } from '@data/models/global.model';
import { BaseResponse } from '@data/interfaces/global.interface';
import UserApiAdapter from '@data/adapters/user-api.adapter';

const userRepository = new UserApiAdapter();

const getUserUseCase = async (token: string) => {
  try {
    const res = await userRepository.getData(token);
    return res;
  } catch (error: any) {
    const err = error.response.data as ApiAuthErrorModel;
    const res = {
      statusCode: err.statusCode,
      data: null,
    } as BaseResponse<null>;
    return res;
  }
};

export default getUserUseCase;
