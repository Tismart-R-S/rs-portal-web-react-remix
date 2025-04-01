import ApplicantDataRepository from "~/data/repositories/applicant-data.repository";

const getApplicantDataUseCase = async (token: string) => {
  return await ApplicantDataRepository.get(token);
};

export default getApplicantDataUseCase;
