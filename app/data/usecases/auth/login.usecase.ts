import { LoginRequestModel } from "@data/models/login.model";
import AuthRepository from "@data/repositories/auth.repository";

const loginUseCase = async (data: LoginRequestModel) => {
  const response = await AuthRepository.login(data);
  return response;
};

export default loginUseCase;

