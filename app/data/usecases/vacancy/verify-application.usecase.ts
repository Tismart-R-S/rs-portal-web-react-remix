import { BaseResponse } from "~/data/interfaces/global.interface";
import VacancyRepository from "~/data/repositories/vacancy.repository";

const verifyApplicationUseCase = async (
  rqCode: string,
  token: string
): Promise<BaseResponse<null>> => {
  const response = await VacancyRepository.verifyApplication(
    rqCode,
    token
  );
  console.log(response);

  return {
    ...response,
  };
};

export default verifyApplicationUseCase;
