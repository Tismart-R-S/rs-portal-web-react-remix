import UserApiAdapter from "../adapters/user-api.adapter";
import { RegisterRequestModel } from "../models/register.model";
import { GetDataResponse, RegisterResponse } from "../types/user.types";
import RepositoryUtils from "../utils/repository.utils";

namespace UserRepository {
  export async function getData(token: string) {
    let response: GetDataResponse;

    try {
      response = await UserApiAdapter.getData(token);
    } catch (error) {
      response = RepositoryUtils.responseError(error);
    }

    return response;
  }

  export async function register(data: RegisterRequestModel) {
    let response: RegisterResponse;

    try {
      response = await UserApiAdapter.register(data);
    } catch (error) {
      response = RepositoryUtils.responseError(error);
    }

    return response;
  }
}

export default UserRepository;
