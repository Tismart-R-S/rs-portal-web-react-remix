import ApplicantDataAdapter from "../adapters/applicant-data.adapter";
import { GetApplicationDataResponse } from "../types/application-data.types";
import RepositoryUtils from "../utils/repository.utils";

namespace ApplicantDataRepository {
  export async function get(token: string) {
    let response: GetApplicationDataResponse;
    try {
      response = await ApplicantDataAdapter.get(token);
    } catch (error) {
      response = RepositoryUtils.recruitmentApiResponseError(error);
    }
    return response;
  }
}

export default ApplicantDataRepository;
