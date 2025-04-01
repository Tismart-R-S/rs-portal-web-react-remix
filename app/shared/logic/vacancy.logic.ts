import getVacanciesUseCase from "~/data/usecases/vacancy/get-vacancies.usecase";
import {
  GetVacanciesUCResponse,
  GetVacancyByCodeUCResponse,
} from "~/data/interfaces/vacancy.interface";
import getVacancysByCodeUseCase from "~/data/usecases/vacancy/get-vacancy-by-code.usecase";

namespace VacancyLogic {
  export const getVacancies = async () => {
    const response = await getVacanciesUseCase();

    if (!response.ok) return null;

    return response.data as GetVacanciesUCResponse;
  };

  export const getVacancyByCode = async (rqCode: string) => {
    const response = await getVacancysByCodeUseCase(rqCode);

    if (!response.ok) return null;

    return response.data as GetVacancyByCodeUCResponse;
  };
}

export default VacancyLogic;

