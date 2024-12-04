import { BaseResponse } from '@data/interfaces/global.interface';
import refreshTokenUseCase from '@data/usecases/auth/refresh-token.usecase';
import { SessionProvider } from '@providers/session.provider';
import { SessionLogic } from './session.logic';
import { RefreshTokenResponseModel } from '@data/models/refres-token.model';

namespace AuthLogic {
  interface AuthUseCaseResponse<T> {
    ok: boolean;
    data: T | null;
  }

  export const refreshSessionToken = async (cookie: string, route: string) => {
    const { refreshToken, isAuthenticated } = await SessionProvider.get(cookie);

    if (!isAuthenticated) return;

    const response = await refreshTokenUseCase(refreshToken);

    console.log('------refreshSessionToken------');
    console.log({ response });

    if (!response.ok) await SessionLogic.logOut(cookie, route); // cerrar session y regirigue

    const newToken = (response.data as RefreshTokenResponseModel).access_token;

    await SessionLogic.saveToken(cookie, newToken, route); // guarda token y redirigue
  };

  export const executeUseCase = async <T>(
    cookie: string,
    route: string,
    func: () => Promise<BaseResponse<any>>
  ): Promise<AuthUseCaseResponse<T>> => {
    let response = await func();

    console.log('------executeUseCase------');
    console.log({ response });

    if (response.statusCode === 403) await refreshSessionToken(cookie, route);

    const { data, ok } = response;

    return { data, ok };
  };

  export const isAuthenticated = async (cookie: string) => {
    const session = await SessionProvider.get(cookie);
    const { isAuthenticated } = session;

    return isAuthenticated;
  };
}

export default AuthLogic;
