import { Context } from "~/shared/interface/global.interface";
import AuthApiAdapter from "../adapters/auth-api.adapter";
import { LoginRequestModel } from "../models/login.model";
import {
  LoginResponse,
  RefreshTokenResponse,
  SendVerifByEmailResponse,
  VerifyEmailTokenResponse,
} from "../types/auth.types";
import RepositoryUtils from "../utils/repository.utils";

namespace AuthRepository {
  export async function login(data: LoginRequestModel, context: Context) {
    let response: LoginResponse;

    try {
      response = await AuthApiAdapter.login(data, context);
      console.log(response);
    } catch (error) {
      response = RepositoryUtils.responseError(error);
    }

    return response;
  }

  export async function refreshToken(refresh_token: string, context: Context) {
    let response: RefreshTokenResponse;

    try {
      response = await AuthApiAdapter.refreshToken(refresh_token, context);
    } catch (error) {
      response = RepositoryUtils.responseError(error);
    }

    return response;
  }

  export async function sendVerificationByEmail(
    token: string,
    context: Context
  ) {
    let response: SendVerifByEmailResponse;

    try {
      response = await AuthApiAdapter.sendVerificationByEmail(token, context);
    } catch (error) {
      response = RepositoryUtils.responseError(error);
    }

    return response;
  }

  export async function verifyEmailToken(
    email_token: string,
    context: Context
  ) {
    let response: VerifyEmailTokenResponse;

    try {
      response = await AuthApiAdapter.verifyEmailToken(email_token, context);
    } catch (error) {
      response = RepositoryUtils.responseError(error);
    }

    return response;
  }
}

export default AuthRepository;
