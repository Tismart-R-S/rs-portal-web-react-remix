import { BaseResponse } from "../interfaces/global.interface";
import { LoginResponseModel } from "../models/login.model";
import { RefreshTokenResponseModel } from "../models/refresh-token.model";
import { SendVerifByEmailResponseModel } from "../models/send-verification-by-email.model";
import { VerifyEmailTokenResponseModel } from "../models/verify-email-token.model";

export type LoginResponse = BaseResponse<LoginResponseModel | string>;

export type RefreshTokenResponse = BaseResponse<
  RefreshTokenResponseModel | string
>;

export type SendVerifByEmailResponse = BaseResponse<
  SendVerifByEmailResponseModel | string
>;

export type VerifyEmailTokenResponse = BaseResponse<
  VerifyEmailTokenResponseModel | string
>;
