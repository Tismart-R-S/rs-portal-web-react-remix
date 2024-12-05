import UserRepository from "@data/repositories/user.repository";
import { RegisterRequestModel } from "~/data/models/register.model";

const registerUseCase = async (data: RegisterRequestModel) => {
  const response = await UserRepository.register(data);
  return response;
};

export default registerUseCase;
