import UserRepository from "@data/repositories/user.repository";
import { Context } from "~/shared/interface/global.interface";

const getUserUseCase = async (token: string, context: Context) => {
  const response = await UserRepository.getData(token, context);
  return response;
};

export default getUserUseCase;

