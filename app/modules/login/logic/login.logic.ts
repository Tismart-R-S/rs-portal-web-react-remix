import { authenticator } from "@lib/auth/authenticator.server";
import { StrategyKeys } from "@shared/constants/keys.constants";
import { LoginResponseModel } from "@data/models/login.model";
import { SessionLogic } from "@shared/logic/session.logic";
import { UserLogic } from "@shared/logic/user.logic";

export namespace LoginLogic {
  export const login = async (request: Request) => {
    const login = await authenticator.authenticate(
      StrategyKeys.auth,
      request
    );
    const cookie = request.headers.get("cookie") || "";
    const path = new URL(request.url).pathname;

    if (!login.ok) {
      const alert = {
        type: "alert",
        message: login.data as string,
        ok: false,
      };
      await SessionLogic.flashMessage(cookie, alert, path);
    }

    const access = login.data as LoginResponseModel;
    const user = await UserLogic.getDataCommonWay(access.accessToken);

    await SessionLogic.logIn(cookie, { ...access, user });
  };
}
