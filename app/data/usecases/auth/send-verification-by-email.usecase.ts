import AuthRepository from "@data/repositories/auth.repository";

const sendVerificationByEmailUseCase = async (token: string) => {
  const res = await AuthRepository.sendVerificationByEmail(token);
  return res;
};

export default sendVerificationByEmailUseCase;
