import { getRecruitmentClient } from "~/config/RecruitmentClient";
import { ApiRecruitmentResponseModel } from "../models/global.model";
import {
  ApplicantDataModel,
  ApplicantUpdateRequestModel,
} from "../models/applicant-data.model";
import { Context } from "~/shared/interface/global.interface";

namespace ApplicantDataAdapter {
  export async function get(token: string, context: Context) {
    const RecruitmentClient = getRecruitmentClient(
      process.env.API_RECRUITMENT ?? context.API_RECRUITMENT
    );
    const response = await RecruitmentClient.get<
      ApiRecruitmentResponseModel<ApplicantDataModel>
    >("/applicant-data", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return {
      ok: true,
      statusCode: response.status,
      data: response.data.data,
    };
  }

  export async function update(
    token: string,
    data: ApplicantUpdateRequestModel,
    context: Context
  ) {
    const RecruitmentClient = getRecruitmentClient(
      process.env.API_RECRUITMENT ?? context.API_RECRUITMENT
    );
    const response = await RecruitmentClient.put<
      ApiRecruitmentResponseModel<ApplicantDataModel>
    >("/applicant-data/update", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return { ok: true, statusCode: response.status, data: response.data.data };
  }
}

export default ApplicantDataAdapter;
