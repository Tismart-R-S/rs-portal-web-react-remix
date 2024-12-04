export interface BaseResponse<T> {
  ok: boolean;
  statusCode: number;
  data: T;
}
