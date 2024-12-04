import UserApiAdapter from '../adapters/user-api.adapter';
import { GetDataResponse } from '../types/user.types';
import RepositoryUtils from '../utils/repository.utils';

namespace UserRepository {
  export async function getData(token: string) {
    let response: GetDataResponse;

    try {
      response = await UserApiAdapter.getData(token);
    } catch (error: any) {
      response = RepositoryUtils.responseError(error);
    }

    return response;
  }
}

export default UserRepository;
