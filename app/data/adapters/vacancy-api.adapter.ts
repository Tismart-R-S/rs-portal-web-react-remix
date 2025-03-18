import RecruitmentClient from "@config/RecruitmentClient";
import {
  ApiRecruitmentResponseModel,
  MetaDataModel,
} from "../models/global.model";
import {
  VacanciesResponseModel,
  VacancyResponseModel,
} from "../models/vacancy.model";
import { BaseResponse } from "../interfaces/global.interface";

namespace VacancyApiAdapter {
  export async function getAll(): Promise<
    BaseResponse<VacanciesResponseModel>
  > {
    const response = await RecruitmentClient.get<
      ApiRecruitmentResponseModel<VacancyResponseModel[]>
    >("/recruitment-form");

    const data = response.data.data;
    const metadata = response.data.metadata as MetaDataModel;

    return {
      ok: true,
      statusCode: response.status,
      data: { data, metadata },
    };
  }

  export async function getByRqCode(
    rqCode: string
  ): Promise<BaseResponse<VacancyResponseModel>> {
    const response = await RecruitmentClient.get<
      ApiRecruitmentResponseModel<VacancyResponseModel>
    >(`/recruitment-form/published/get-by-rq-code/${rqCode}`);

    return { ok: true, statusCode: response.status, data: response.data.data };
  }

  export async function verifyApplication(
    rqCode: string,
    token: string
  ): Promise<BaseResponse<null>> {
    const response = await RecruitmentClient.get<void>(
      `/application/verify-application/${rqCode}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return {
      ok: true,
      statusCode: response.status,
      data: null,
    };
  }
}

export default VacancyApiAdapter;
