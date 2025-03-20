import { SessionProvider } from "~/providers/session.provider";
import { Context } from "~/shared/interface/global.interface";
import { SessionLogic } from "~/shared/logic/session.logic";
import { UserLogic } from "~/shared/logic/user.logic";

export namespace RootLogic {
  export const userData = async (request: Request, context: Context) => {
    const cookie = request.headers.get("cookie") || "";
    const path = new URL(request.url).pathname;
    const user = await UserLogic.getData(cookie, path, context);

    return user;
  };

  export const authenticate = async (request: Request) => {
    const cookie = request.headers.get("cookie") || "";
    const path = new URL(request.url).pathname;
    const isAuthenticated = await SessionLogic.authenticate(cookie, path, "/");

    return isAuthenticated;
  };

  export const getFlashMessage = async (request: Request) => {
    const cookie = request.headers.get("cookie") || "";

    const response = await SessionProvider.getFlashMessage(
      cookie,
      "flash_message"
    );

    return response;
  };
}

