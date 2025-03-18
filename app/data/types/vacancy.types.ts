import { BaseResponse } from "../interfaces/global.interface";
import {
  VacanciesResponseModel,
  VacancyResponseModel,
} from "../models/vacancy.model";

export type GetAllVacanciesResponse = BaseResponse<
  VacanciesResponseModel | string
>;

export type GetVacancyByRqCodeResponse = BaseResponse<
  VacancyResponseModel | string
>;

export type verifyApplicationResponse = BaseResponse<null>;

export type VacancyApplicationResponse = BaseResponse<null | string>;
