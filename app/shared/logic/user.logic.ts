import { SessionProvider } from "@providers/session.provider";
import getUserUseCase from "@data/usecases/user/get-user.usecase";
import { UserResponseModel } from "@data/models/user.model";
import AuthLogic from "./auth.logic";
import { SessionLogic } from "./session.logic";
import registerUseCase from "~/data/usecases/user/register.usecase";
import { RegisterRequestModel } from "~/data/models/register.model";
import { IRoute } from "../interface/global.interface";

export namespace UserLogic {
  export const getData = async (cookie: string, route = "/") => {
    const session = await SessionProvider.get(cookie);
    const { token, isAuthenticated, user } = session;

    if (!isAuthenticated) return null;
    if (user) return user;

    const response = await AuthLogic.executeUseCase(cookie, route, () =>
      getUserUseCase(token)
    );

    if (!response.ok) return null;

    await SessionLogic.save(cookie, "user", user, route);

    return response.data as UserResponseModel;
  };

  export const getDataCommonWay = async (token: string) => {
    const response = await getUserUseCase(token);

    if (!response.ok) return null;

    return response.data as UserResponseModel;
  };

  export const register = async (
    cookie: string,
    values: RegisterRequestModel,
    route: IRoute
  ) => {
    const { ok, data } = await registerUseCase(values);

    if (!ok) {
      const alert = {
        type: "alert",
        message: data as string,
        ok,
      };
      await SessionLogic.flashMessage(cookie, alert, route.current);
    }

    const alert = {
      type: "alert",
      message: "Registro exitoso, ahora puedes iniciar sesión",
      ok,
    };
    await SessionLogic.flashMessage(cookie, alert, route.redirect);
  };
}
