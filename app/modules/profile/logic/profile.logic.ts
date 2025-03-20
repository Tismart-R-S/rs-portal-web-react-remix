import { Context } from "~/shared/interface/global.interface";
import { UserLogic } from "~/shared/logic/user.logic";

export namespace ProfileLogic {
  export const getProfile = async (request: Request, context: Context) => {
    const cookie = request.headers.get("cookie") || "";
    const path = new URL(request.url).pathname;

    const response = await UserLogic.getData(cookie, path, context);

    return response;
  };
}

