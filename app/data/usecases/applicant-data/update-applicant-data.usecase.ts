import { ApplicantUpdateRequestModel } from "~/data/models/applicant-data.model";
import ApplicantDataRepository from "~/data/repositories/applicant-data.repository";

const updateApplicantDataUseCase = async (
  token: string,
  data: ApplicantUpdateRequestModel
) => {
  return await ApplicantDataRepository.update(token, data);
};

export default updateApplicantDataUseCase;

