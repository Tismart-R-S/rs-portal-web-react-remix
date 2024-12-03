import { BaseResponse } from '../interfaces/global.interface';
import { LoginRequestModel, LoginResponseModel } from '../models/login.model';

interface AuthRepository {
  login(data: LoginRequestModel): Promise<BaseResponse<LoginResponseModel>>;
}

export default AuthRepository;
