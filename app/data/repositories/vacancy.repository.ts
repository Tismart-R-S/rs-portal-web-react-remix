import VacancyApiAdapter from "../adapters/vacancy-api.adapter";
import {
  GetAllVacanciesResponse,
  GetVacancyByRqCodeResponse,
  verifyApplicationResponse,
} from "../types/vacancy.types";
import RepositoryUtils from "../utils/repository.utils";

namespace VacancyRepository {
  export async function getAll() {
    let response: GetAllVacanciesResponse;

    try {
      response = await VacancyApiAdapter.getAll();
    } catch (error) {
      response = RepositoryUtils.recruitmentApiResponseError(error);
    }

    return response;
  }

  export async function getByRqCode(rqCode: string) {
    let response: GetVacancyByRqCodeResponse;

    try {
      response = await VacancyApiAdapter.getByRqCode(rqCode);
    } catch (error) {
      response = RepositoryUtils.recruitmentApiResponseError(error);
    }

    return response;
  }

  export async function verifyApplication(rqCode: string, token: string) {
    let response: verifyApplicationResponse;

    try {
      response = await VacancyApiAdapter.verifyApplication(rqCode, token);
    } catch (error) {
      response = RepositoryUtils.recruitmentApiResponseError(error);
    }

    return response;
  }
}

export default VacancyRepository;
