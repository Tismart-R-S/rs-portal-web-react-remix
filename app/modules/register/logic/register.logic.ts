import { UserLogic } from "@shared/logic/user.logic";
import { RegisterRequestModel } from "@data/models/register.model";
import { Context } from "~/shared/interface/global.interface";

export namespace RegisterLogic {
  export const register = async (request: Request, context: Context) => {
    const cookie = request.headers.get("cookie") || "";
    const formData = await request.formData();

    const values: RegisterRequestModel = {
      names: String(formData.get("names")),
      lastNames: String(formData.get("lastNames")),
      email: String(formData.get("email")),
      password: String(formData.get("password")),
    };

    const route = {
      current: "/register",
      redirect: "/login",
    };

    await UserLogic.register(cookie, values, route, context);
  };
}

