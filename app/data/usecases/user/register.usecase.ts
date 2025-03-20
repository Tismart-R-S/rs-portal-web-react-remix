import UserRepository from "@data/repositories/user.repository";
import { RegisterRequestModel } from "~/data/models/register.model";
import { Context } from "~/shared/interface/global.interface";

const registerUseCase = async (
  data: RegisterRequestModel,
  context: Context
) => {
  const response = await UserRepository.register(data, context);
  return response;
};

export default registerUseCase;

