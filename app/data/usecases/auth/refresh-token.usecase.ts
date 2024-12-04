import AuthRepository from '@data/repositories/auth.repository';

const refreshTokenUseCase = async (refresh_token: string) => {
  const res = await AuthRepository.refreshToken(refresh_token);
  return res;
};

export default refreshTokenUseCase;
