export interface BaseResponse<D> {
  ok: boolean;
  statusCode: number;
  data: D;
}
