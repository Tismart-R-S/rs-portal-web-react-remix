import AuthRepository from '@data/repositories/auth.repository';
import { Context } from '~/shared/interface/global.interface';

const refreshTokenUseCase = async (refresh_token: string, context: Context) => {
  const res = await AuthRepository.refreshToken(refresh_token, context);
  return res;
};

export default refreshTokenUseCase;
