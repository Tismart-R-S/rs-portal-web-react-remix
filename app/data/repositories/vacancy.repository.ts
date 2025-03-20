import { Context } from "~/shared/interface/global.interface";
import VacancyApiAdapter from "../adapters/vacancy-api.adapter";
import {
  GetAllVacanciesResponse,
  GetVacancyByRqCodeResponse,
  verifyApplicationResponse,
} from "../types/vacancy.types";
import RepositoryUtils from "../utils/repository.utils";

namespace VacancyRepository {
  export async function getAll(context: Context) {
    let response: GetAllVacanciesResponse;

    try {
      response = await VacancyApiAdapter.getAll(context);
      console.log(response);
    } catch (error) {
      console.log(error);
      response = RepositoryUtils.recruitmentApiResponseError(error);
    }

    return response;
  }

  export async function getByRqCode(rqCode: string, context: Context) {
    let response: GetVacancyByRqCodeResponse;

    try {
      response = await VacancyApiAdapter.getByRqCode(rqCode, context);
    } catch (error) {
      response = RepositoryUtils.recruitmentApiResponseError(error);
    }

    return response;
  }

  export async function verifyApplication(
    rqCode: string,
    token: string,
    context: Context
  ) {
    let response: verifyApplicationResponse;

    try {
      response = await VacancyApiAdapter.verifyApplication(
        rqCode,
        token,
        context
      );
    } catch (error) {
      response = RepositoryUtils.recruitmentApiResponseError(error);
    }

    return response;
  }
}

export default VacancyRepository;
