import { MetaDataModel } from "../models/global.model";

export interface VacanciesUCResponse {
  rqCode: string;
  introduction: string;
  jobPositionName: string;
}

export interface GetVacanciesUCResponse {
  data: VacanciesUCResponse[];
  metadata: MetaDataModel;
}

export interface GetVacancyByCodeUCResponse {
  rqCode: string;
  introduction: string;
  knowledge: string[];
  jobFunctions: string[];
  benefits: string[];
  jobPositionName: string;
}
