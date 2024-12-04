import { BaseResponse } from '../interfaces/global.interface';
import { LoginResponseModel } from '../models/login.model';
import { RefreshTokenResponseModel } from '../models/refres-token.model';

export type LoginResponse = BaseResponse<LoginResponseModel | string[]>;

export type RefreshTokenResponse = BaseResponse<
  RefreshTokenResponseModel | string
>;
