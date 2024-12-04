import { AxiosError, isAxiosError } from "axios";
import { ApiAuthErrorModel } from "../models/global.model";

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
}

export default RepositoryUtils;

