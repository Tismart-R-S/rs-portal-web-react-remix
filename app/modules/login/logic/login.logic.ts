import { authenticator } from "@lib/auth/authenticator.server";
import { StrategyKeys } from "@shared/constants/keys.constants";
import { LoginResponseModel } from "@data/models/login.model";
import { SessionLogic } from "@shared/logic/session.logic";
import { UserLogic } from "@shared/logic/user.logic";

export namespace LoginLogic {
  export const login = async (request: Request) => {
    const login = await authenticator.authenticate(StrategyKeys.auth, request);

    if (!login.ok) return login.data as string;

    const cookie = request.headers.get("cookie") || "";
    const access = login.data as LoginResponseModel;
    const user = await UserLogic.getDataCommonWay(access.accessToken);

    await SessionLogic.logIn(cookie, { ...access, user });

    return "";
  };

  export const authenticate = async (request: Request) => {
    const cookie = request.headers.get("cookie") || "";
    const isAuthenticated = await SessionLogic.authenticate(cookie);

    return isAuthenticated;
  };
}
