import { Context } from "~/shared/interface/global.interface";
import ApplicantDataAdapter from "../adapters/applicant-data.adapter";
import { ApplicantUpdateRequestModel } from "../models/applicant-data.model";
import { GetApplicationDataResponse } from "../types/application-data.types";
import RepositoryUtils from "../utils/repository.utils";

namespace ApplicantDataRepository {
  export async function get(token: string, context: Context) {
    let response: GetApplicationDataResponse;
    try {
      response = await ApplicantDataAdapter.get(token, context);
    } catch (error) {
      response = RepositoryUtils.recruitmentApiResponseError(error);
    }
    return response;
  }

  export async function update(
    token: string,
    data: ApplicantUpdateRequestModel,
    context: Context
  ) {
    let response: GetApplicationDataResponse;
    try {
      response = await ApplicantDataAdapter.update(token, data, context);
    } catch (error) {
      response = RepositoryUtils.recruitmentApiResponseError(error);
    }
    return response;
  }
}

export default ApplicantDataRepository;
