import { LoginRequestModel } from "@data/models/login.model";
import AuthRepository from "@data/repositories/auth.repository";
import { Context } from "~/shared/interface/global.interface";

const loginUseCase = async (data: LoginRequestModel, context: Context) => {
  const response = await AuthRepository.login(data, context);
  return response;
};

export default loginUseCase;

