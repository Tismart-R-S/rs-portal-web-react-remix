import { MetaDataModel } from "./global.model";

export interface VacancyResponseModel {
  uid: string;
  introduction: string;
  knowledge: string;
  jobFunctions: string;
  benefits: string;
  jobPositionName: string;
  rqCode: string;
}

export interface VacanciesResponseModel {
  data: VacancyResponseModel[];
  metadata: MetaDataModel;
}
