import { SessionProvider } from "@providers/session.provider";
import getUserUseCase from "@data/usecases/user/get-user.usecase";
import { UserResponseModel } from "@data/models/user.model";
import AuthLogic from "./auth.logic";
import { SessionLogic } from "./session.logic";
import { redirect } from "@remix-run/node";
import registerUseCase from "~/data/usecases/user/register.usecase";
import { RegisterRequestModel } from "~/data/models/register.model";

export namespace UserLogic {
  export const getData = async (cookie: string, route = "/") => {
    const session = await SessionProvider.get(cookie);
    const { token, isAuthenticated, user } = session;

    if (!isAuthenticated) return null;
    if (user) return user;

    const response = await AuthLogic.executeUseCase<UserResponseModel | string>(
      cookie,
      route,
      () => getUserUseCase(token)
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

  export const register = async (values: RegisterRequestModel, route = "/") => {
    const { ok, data } = await registerUseCase(values);

    if (ok) throw redirect(route);

    return data as string;
  };
}
