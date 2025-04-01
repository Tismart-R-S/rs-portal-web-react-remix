import { UserLogic } from "~/shared/logic/user.logic";

export namespace ProfileLogic {
  export const getProfile = async (request: Request) => {
    const cookie = request.headers.get("cookie") || "";
    const path = new URL(request.url).pathname;

    const response = await UserLogic.getData(cookie, path);

    return response;
  };
}

