import { ApplicantDataModel } from "~/data/models/applicant-data.model";
import { ApiRecruitmentResponseModel } from "~/data/models/global.model";
import getApplicantDataUseCase from "~/data/usecases/applicant-data/get-applicant-data.usecase";
import { SessionProvider } from "~/providers/session.provider";
import AuthLogic from "~/shared/logic/auth.logic";

export namespace ApplicantDataLogic {
  export const applicantData = async (request: Request) => {
    const cookie = request.headers.get("cookie") || "";
    const session = await SessionProvider.get(cookie);
    const { token, isAuthenticated } = session;
    const path = new URL(request.url).pathname;
    if (!isAuthenticated) return null;

    const response = await AuthLogic.executeUseCase<
      ApiRecruitmentResponseModel<ApplicantDataModel | string[]>
    >(cookie, path, () => getApplicantDataUseCase(token));

    if (!response.ok) return null;
    return response.data;
  };
}
