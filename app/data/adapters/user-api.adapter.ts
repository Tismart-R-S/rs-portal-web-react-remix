import { getAuthClient } from "@config/AuthClient";
import { UserResponseModel } from "../models/user.model";
import { BaseResponse } from "../interfaces/global.interface";
import {
  RegisterRequestModel,
  RegisterResponseModel,
} from "../models/register.model";
import { Context } from "~/shared/interface/global.interface";

namespace UserApiAdapter {
  export async function getData(
    token: string,
    context: Context
  ): Promise<BaseResponse<UserResponseModel>> {
    const AuthClient = getAuthClient(process.env.API_AUTH ?? context.API_AUTH);
    const response = await AuthClient.get<UserResponseModel>("/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return { ok: true, statusCode: response.status, data: response.data };
  }

  export async function register(data: RegisterRequestModel, context: Context) {
    const AuthClient = getAuthClient(process.env.API_AUTH ?? context.API_AUTH);
    const response = await AuthClient.post<RegisterResponseModel>(
      "/signup",
      data
    );

    return { ok: true, statusCode: response.status, data: response.data };
  }
}

export default UserApiAdapter;

