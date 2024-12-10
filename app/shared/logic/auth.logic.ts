import { BaseResponse } from "@data/interfaces/global.interface";
import refreshTokenUseCase from "@data/usecases/auth/refresh-token.usecase";
import { SessionProvider } from "@providers/session.provider";
import { SessionLogic } from "./session.logic";
import { RefreshTokenResponseModel } from "@data/models/refresh-token.model";

namespace AuthLogic {
  export const refreshSessionToken = async (cookie: string, route: string) => {
    const { refreshToken, isAuthenticated } = await SessionProvider.get(cookie);

    if (!isAuthenticated) return;

    const response = await refreshTokenUseCase(refreshToken);

    console.log("------refreshSessionToken------");
    console.log({ response });

    if (!response.ok) await SessionLogic.logOut(cookie, route); // cerrar session y regirigue

    const newToken = (response.data as RefreshTokenResponseModel).access_token;

    await SessionLogic.saveToken(cookie, newToken, route); // guarda token y redirigue
  };

  export const executeUseCase = async <D>(
    cookie: string,
    route: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    func: () => Promise<BaseResponse<D>>
  ): Promise<BaseResponse<D>> => {
    const response = await func();

    console.log("------executeUseCase------");
    console.log({ response });

    if ([401, 403].includes(response.statusCode))
      await refreshSessionToken(cookie, route);

    return response;
  };

  export const isAuthenticated = async (cookie: string) => {
    const session = await SessionProvider.get(cookie);
    const { isAuthenticated } = session;

    return isAuthenticated;
  };
}

export default AuthLogic;
