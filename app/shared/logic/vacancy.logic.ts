import getVacanciesUseCase from "~/data/usecases/vacancy/get-vacancies.usecase";
import {
  GetVacanciesUCResponse,
  GetVacancyByCodeUCResponse,
} from "~/data/interfaces/vacancy.interface";
import getVacancysByCodeUseCase from "~/data/usecases/vacancy/get-vacancy-by-code.usecase";
import { Context } from "../interface/global.interface";

namespace VacancyLogic {
  export const getVacancies = async (context: Context) => {
    const response = await getVacanciesUseCase(context);

    if (!response.ok) return null;

    return response.data as GetVacanciesUCResponse;
  };

  export const getVacancyByCode = async (rqCode: string, context: Context) => {
    const response = await getVacancysByCodeUseCase(rqCode, context);

    if (!response.ok) return null;

    return response.data as GetVacancyByCodeUCResponse;
  };
}

export default VacancyLogic;

