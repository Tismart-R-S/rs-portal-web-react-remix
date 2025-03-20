import { ApplicantUpdateRequestModel } from "~/data/models/applicant-data.model";
import ApplicantDataRepository from "~/data/repositories/applicant-data.repository";
import { Context } from "~/shared/interface/global.interface";

const updateApplicantDataUseCase = async (
  token: string,
  data: ApplicantUpdateRequestModel,
  context: Context
) => {
  return await ApplicantDataRepository.update(token, data, context);
};

export default updateApplicantDataUseCase;

