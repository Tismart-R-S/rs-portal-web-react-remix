import { BaseResponse } from "~/data/interfaces/global.interface";
import VacancyRepository from "~/data/repositories/vacancy.repository";
import { Context } from "~/shared/interface/global.interface";

const verifyApplicationUseCase = async (
  rqCode: string,
  token: string,
  context: Context
): Promise<BaseResponse<null>> => {
  const response = await VacancyRepository.verifyApplication(
    rqCode,
    token,
    context
  );
  console.log(response);

  return {
    ...response,
  };
};

export default verifyApplicationUseCase;
