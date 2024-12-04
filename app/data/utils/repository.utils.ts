import { ApiAuthErrorModel } from '../models/global.model';

namespace RepositoryUtils {
  export const responseError = <T>(error: any) => {
    const err = error.response.data as ApiAuthErrorModel;
    const response = {
      ok: false,
      statusCode: err.statusCode,
      data: err.message,
    } as T;

    return response;
  };
}

export default RepositoryUtils;
