import AuthRepository from "@data/repositories/auth.repository";

const verifyEmailTokenUseCase = async (token: string, email_token: string) => {
  const res = await AuthRepository.verifyEmailToken(token, email_token);
  console.log({ res, token, email_token });
  return res;
};

export default verifyEmailTokenUseCase;
