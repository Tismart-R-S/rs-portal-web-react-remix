import { BaseResponse } from "~/data/interfaces/global.interface";
import {
  GetVacanciesUCResponse,
  VacanciesUCResponse,
} from "~/data/interfaces/vacancy.interface";
import { VacanciesResponseModel } from "~/data/models/vacancy.model";
import VacancyRepository from "~/data/repositories/vacancy.repository";

const getVacanciesUseCase = async (): Promise<
  BaseResponse<GetVacanciesUCResponse | string>
> => {
  const response = await VacancyRepository.getAll();

  const { data } = response;
  let newData: GetVacanciesUCResponse | string;

  if (response.ok) {
    const oldData = data as VacanciesResponseModel;

    const values = oldData.data.map((item) => {
      return {
        rqCode: item.rqCode,
        introduction: item.introduction,
        jobPositionName: item.jobPositionName,
      } as VacanciesUCResponse;
    });

    newData = { data: values, metadata: oldData.metadata };
  } else {
    newData = data as string;
  }

  return { ...response, data: newData };
};

export default getVacanciesUseCase;
