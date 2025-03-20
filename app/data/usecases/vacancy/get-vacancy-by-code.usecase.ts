import { BaseResponse } from "~/data/interfaces/global.interface";
import { GetVacancyByCodeUCResponse } from "~/data/interfaces/vacancy.interface";
import { VacancyResponseModel } from "~/data/models/vacancy.model";
import VacancyRepository from "~/data/repositories/vacancy.repository";
import { Context } from "~/shared/interface/global.interface";

const getVacancysByCodeUseCase = async (
  rqCode: string,
  context: Context
): Promise<BaseResponse<GetVacancyByCodeUCResponse | string>> => {
  const response = await VacancyRepository.getByRqCode(rqCode, context);

  const { data } = response;
  let newData: GetVacancyByCodeUCResponse | string;

  if (response.ok) {
    const oldData = data as VacancyResponseModel;
    newData = {
      rqCode: oldData.rqCode,
      introduction: oldData.introduction,
      knowledge: oldData.knowledge.split("\n"),
      jobFunctions: oldData.jobFunctions.split("\n"),
      benefits: oldData.benefits.split("\n"),
      jobPositionName: oldData.jobPositionName,
    };
  } else {
    newData = data as string;
  }

  return { ...response, data: newData };
};

export default getVacancysByCodeUseCase;

