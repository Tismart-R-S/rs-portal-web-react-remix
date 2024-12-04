import { SessionProvider } from "@providers/session.provider";
import getUserUseCase from "@data/usecases/user/get-user.usecase";
import { UserResponseModel } from "@data/models/user.model";
import AuthLogic from "./auth.logic";

export namespace UserLogic {
  export const getData = async (cookie: string, redirect = "/") => {
    const session = await SessionProvider.get(cookie);
    const { token, isAuthenticated, user } = session;

    if (!isAuthenticated) return null;
    if (user) return user;

    const response = await AuthLogic.executeUseCase<UserResponseModel | string>(
      cookie,
      redirect,
      () => getUserUseCase(token)
    );

    if (!response.ok) return null;

    return response.data as UserResponseModel;
  };

  export const getDataCommonWay = async (token: string) => {
    const response = await getUserUseCase(token);

    if (!response.ok) return null;

    return response.data as UserResponseModel;
  };
}
