import { BaseResponse } from "../interfaces/global.interface";
import { RegisterResponseModel } from "../models/register.model";
import { UserResponseModel } from "../models/user.model";

export type GetDataResponse = BaseResponse<UserResponseModel | string>;
export type RegisterResponse = BaseResponse<RegisterResponseModel | string>;
