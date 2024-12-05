import RecruitmentClient from "~/config/RecruitmentClient";
import { ApiRecruitmentResponseModel } from "../models/global.model";
import { ApplicantDataModel } from "../models/applicant-data.model";

namespace ApplicantDataAdapter {
  export async function get(token: string) {
    const response = await RecruitmentClient.get<
      ApiRecruitmentResponseModel<ApplicantDataModel>
    >("/api/applicant-data", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return {
      ok: true,
      statusCode: response.status,
      data: response.data,
    };
  }
}

export default ApplicantDataAdapter;