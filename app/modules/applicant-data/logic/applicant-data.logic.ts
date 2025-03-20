import { ApplicantDataModel } from "~/data/models/applicant-data.model";
import getApplicantDataUseCase from "~/data/usecases/applicant-data/get-applicant-data.usecase";
import { SessionProvider } from "~/providers/session.provider";
import AuthLogic from "~/shared/logic/auth.logic";
import { ApplicantDataFormValidationType } from "../types/applicant-data-form.type";
import updateApplicantDataUseCase from "~/data/usecases/applicant-data/update-applicant-data.usecase";
import verifyApplicationUseCase from "~/data/usecases/vacancy/verify-application.usecase";
import { Context } from "~/shared/interface/global.interface";

export namespace ApplicantDataLogic {
  export const applicantData = async (request: Request, context: Context) => {
    const cookie = request.headers.get("cookie") || "";
    const session = await SessionProvider.get(cookie);
    const path = new URL(request.url).pathname;

    const response = await AuthLogic.executeUseCase(cookie, path, () =>
      getApplicantDataUseCase(session.token, context)
    );

    if (!response.ok) return null;

    return response.data as ApplicantDataModel;
  };

  export const save = async (
    request: Request,
    values: ApplicantDataFormValidationType,
    context: Context
  ) => {
    const cookie = request.headers.get("cookie") || "";
    const session = await SessionProvider.get(cookie);
    const { token } = session;
    const path = new URL(request.url).pathname;

    const response = await AuthLogic.executeUseCase(cookie, path, () =>
      updateApplicantDataUseCase(token, values, context)
    );

    console.log("applicantDataLogic.save response", response.data);
  };

  export const verifyApplication = async (
    request: Request,
    rqCode: string,
    context: Context
  ): Promise<boolean> => {
    const cookie = request.headers.get("cookie") || "";
    const session = await SessionProvider.get(cookie);
    const path = new URL(request.url).pathname;

    const response = await AuthLogic.executeUseCase(cookie, path, () =>
      verifyApplicationUseCase(rqCode, session.token, context)
    );

    if (response.statusCode === 200) return true;

    return false;
  };
}
