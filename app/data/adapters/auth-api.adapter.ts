import { getAuthClient } from "@config/AuthClient";
import { LoginRequestModel, LoginResponseModel } from "../models/login.model";
import { BaseResponse } from "../interfaces/global.interface";
import { RefreshTokenResponseModel } from "../models/refresh-token.model";
import { SendVerifByEmailResponseModel } from "../models/send-verification-by-email.model";
import { VerifyEmailTokenResponseModel } from "../models/verify-email-token.model";
import { Context } from "~/shared/interface/global.interface";

namespace AuthApiAdapter {
  export async function login(
    data: LoginRequestModel,
    context: Context
  ): Promise<BaseResponse<LoginResponseModel>> {
    const AuthClient = getAuthClient(process.env.API_AUTH ?? context.API_AUTH);
    console.log("AuthApiAdapter.login:", context, process.env.API_AUTH ?? context.API_AUTH)
    const response = await AuthClient.post<LoginResponseModel>("/signin", data);

    return { ok: true, statusCode: response.status, data: response.data };
  }

  export async function refreshToken(
    token: string,
    context: Context
  ): Promise<BaseResponse<RefreshTokenResponseModel>> {
    const AuthClient = getAuthClient(process.env.API_AUTH ?? context.API_AUTH);
    const response = await AuthClient.get<RefreshTokenResponseModel>(
      "/refresh-token",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return { ok: true, statusCode: response.status, data: response.data };
  }

  export async function sendVerificationByEmail(
    token: string,
    context: Context
  ): Promise<BaseResponse<SendVerifByEmailResponseModel>> {
    const AuthClient = getAuthClient(process.env.API_AUTH ?? context.API_AUTH);
    const response = await AuthClient.get<void>("/send-verification-token", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const message = "Email de verificación reenviado con exito";

    return { ok: true, statusCode: response.status, data: { message } };
  }

  export async function verifyEmailToken(
    email_token: string,
    context: Context
  ): Promise<BaseResponse<VerifyEmailTokenResponseModel>> {
    const AuthClient = getAuthClient(process.env.API_AUTH ?? context.API_AUTH);
    const response = await AuthClient.get<void>(
      `/verify-email-token?token=${email_token}`
    );

    const message = "Correo verificado con exito";

    return { ok: true, statusCode: response.status, data: { message } };
  }
}

export default AuthApiAdapter;
