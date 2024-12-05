import { AxiosError, isAxiosError } from "axios";
import {
  ApiAuthErrorModel,
  ApiRecruitmentResponseModel,
} from "../models/global.model";

namespace RepositoryUtils {
  export const responseError = <T>(
    error: AxiosError<ApiAuthErrorModel> | unknown
  ) => {
    let response;
    if (isAxiosError(error)) {
      const err = error.response!.data as ApiAuthErrorModel;
      response = {
        ok: false,
        statusCode: err.statusCode,
        data: err.message,
      } as T;
    } else {
      response = {
        ok: false,
        statusCode: 500,
        data: "Unexpected error",
      } as T;
    }

    return response;
  };

  export const recruitmentApiResponseError = <T>(
    error: AxiosError<ApiRecruitmentResponseModel<null>> | unknown
  ) => {
    let response;
    if (isAxiosError(error)) {
      const err = error.response!.data as ApiRecruitmentResponseModel<null>;
      if (err.statusCode === 401) {
        response = {
          ok: false,
          statusCode: err.statusCode,
          data: "Unauthoried error",
        } as T;
        return response;
      }
      response = {
        ok: false,
        statusCode: err.statusCode,
        data: err.errorMessages,
      } as T;
    } else {
      response = {
        ok: false,
        statusCode: 500,
        data: "Unexpected error",
      } as T;
    }
    return response;
  };
}

export default RepositoryUtils;
