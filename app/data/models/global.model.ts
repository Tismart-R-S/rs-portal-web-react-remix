export interface ApiAuthErrorModel {
  message: string | string[];
  error: string;
  statusCode: number;
}

export interface ApiRecruitmentResponseModel<T> {
  statusCode: number;
  data: T;
  success: boolean;
  errorMessages: [];
}
