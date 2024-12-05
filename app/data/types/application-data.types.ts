import { BaseResponse } from "../interfaces/global.interface";
import { ApplicantDataModel } from "../models/applicant-data.model";
import { ApiRecruitmentResponseModel } from "../models/global.model";

export type GetApplicationDataResponse = BaseResponse<
  ApiRecruitmentResponseModel<ApplicantDataModel> | string[]
>;
