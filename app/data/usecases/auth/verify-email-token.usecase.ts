import AuthRepository from "@data/repositories/auth.repository";

const verifyEmailTokenUseCase = async (email_token: string) => {
  const res = await AuthRepository.verifyEmailToken(email_token);
  return res;
};

export default verifyEmailTokenUseCase;
