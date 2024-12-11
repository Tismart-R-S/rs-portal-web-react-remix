export interface ApiAuthErrorModel {
  message: string | string[];
  error: string;
  statusCode: number;
}

export interface ApiRecruitmentResponseModel<T> {
  statusCode: number;
  data: T;
  metadata?: MetaDataModel;
  success: boolean;
  errorMessages: [];
}

export interface MetaDataModel {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}
