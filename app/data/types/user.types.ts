import { BaseResponse } from '../interfaces/global.interface';
import { UserResponseModel } from '../models/user.model';

export type GetDataResponse = BaseResponse<UserResponseModel | string>;
