import AuthClient from "@config/AuthClient";
import { LoginRequestModel, LoginResponseModel } from "../models/login.model";
import { BaseResponse } from "../interfaces/global.interface";
import { RefreshTokenResponseModel } from "../models/refresh-token.model";
import { SendVerifByEmailResponseModel } from "../models/send-verification-by-email.model";
import { VerifyEmailTokenResponseModel } from "../models/verify-email-token.model";

namespace AuthApiAdapter {
  export async function login(
    data: LoginRequestModel
  ): Promise<BaseResponse<LoginResponseModel>> {
    const response = await AuthClient.post<LoginResponseModel>("/signin", data);

    return { ok: true, statusCode: response.status, data: response.data };
  }

  export async function refreshToken(
    token: string
  ): Promise<BaseResponse<RefreshTokenResponseModel>> {
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
    token: string
  ): Promise<BaseResponse<SendVerifByEmailResponseModel>> {
    const response = await AuthClient.get<void>("/send-verification-token", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const message = "Email de verificación reenviado con exito";

    return { ok: true, statusCode: response.status, data: { message } };
  }

  export async function verifyEmailToken(
    email_token: string
  ): Promise<BaseResponse<VerifyEmailTokenResponseModel>> {
    const response = await AuthClient.get<void>(
      `/verify-email-token?token=${email_token}`
    );

    const message = "Correo verificado con exito";

    return { ok: true, statusCode: response.status, data: { message } };
  }
}

export default AuthApiAdapter;
