import ApplicantDataRepository from "~/data/repositories/applicant-data.repository";
import { Context } from "~/shared/interface/global.interface";

const getApplicantDataUseCase = async (token: string, context: Context) => {
  return await ApplicantDataRepository.get(token, context);
};

export default getApplicantDataUseCase;
