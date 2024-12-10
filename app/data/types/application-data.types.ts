import { BaseResponse } from "../interfaces/global.interface";
import { ApplicantDataModel } from "../models/applicant-data.model";

export type GetApplicationDataResponse = BaseResponse<
  ApplicantDataModel | string
>;
