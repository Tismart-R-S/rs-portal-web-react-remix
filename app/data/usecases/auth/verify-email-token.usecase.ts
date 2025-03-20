import AuthRepository from "@data/repositories/auth.repository";
import { Context } from "~/shared/interface/global.interface";

const verifyEmailTokenUseCase = async (
  email_token: string,
  context: Context
) => {
  const res = await AuthRepository.verifyEmailToken(email_token, context);
  return res;
};

export default verifyEmailTokenUseCase;

