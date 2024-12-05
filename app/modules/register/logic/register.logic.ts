import { SessionLogic } from "@shared/logic/session.logic";
import { UserLogic } from "@shared/logic/user.logic";

export namespace RegisterLogic {
  export const register = async (request: Request) => {
    // validate fields
    const formData = await request.formData();
    const password = String(formData.get("password"));
    const repeatPassword = String(formData.get("repeatPassword"));

    if (password !== repeatPassword) return ["Las contraseñas no coinciden"];

    const values = {
      names: String(formData.get("names")),
      lastNames: String(formData.get("lastNames")),
      email: String(formData.get("email")),
      password: String(formData.get("password")),
    };

    const register = await UserLogic.register(values, "/login");

    return register;
  };

  export const authenticate = async (request: Request) => {
    const cookie = request.headers.get("cookie") || "";
    const isAuthenticated = await SessionLogic.authenticate(cookie);

    return isAuthenticated;
  };
}
