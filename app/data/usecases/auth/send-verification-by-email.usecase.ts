import AuthRepository from "@data/repositories/auth.repository";
import { Context } from "~/shared/interface/global.interface";

const sendVerificationByEmailUseCase = async (
  token: string,
  context: Context
) => {
  const res = await AuthRepository.sendVerificationByEmail(token, context);
  return res;
};

export default sendVerificationByEmailUseCase;
