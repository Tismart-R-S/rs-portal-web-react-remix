import AuthApiAdapter from '../adapters/auth-api.adapter';
import { LoginRequestModel } from '../models/login.model';
import { LoginResponse, RefreshTokenResponse } from '../types/auth.types';
import RepositoryUtils from '../utils/repository.utils';

namespace AuthRepository {
  export async function login(data: LoginRequestModel) {
    let response: LoginResponse;

    try {
      response = await AuthApiAdapter.login(data);
    } catch (error) {
      response = RepositoryUtils.responseError(error);
    }

    return response;
  }

  export async function refreshToken(refresh_token: string) {
    let response: RefreshTokenResponse;

    try {
      response = await AuthApiAdapter.refreshToken(refresh_token);
    } catch (error) {
      response = RepositoryUtils.responseError(error);
    }

    return response;
  }
}

export default AuthRepository;
