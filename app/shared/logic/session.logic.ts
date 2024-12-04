import { redirect } from "@remix-run/node";

import { SessionProvider } from "@providers/session.provider";

export namespace SessionLogic {
  export const logIn = async (
    cookie: string,
    data: SessionProvider.SessionSaveResponse,
    route = "/"
  ) => {
    console.log("------logIn------");
    console.log(data);
    const session = await SessionProvider.save(cookie, data);

    throw redirect(route, { headers: { "Set-Cookie": session } });
  };

  export const authenticate = async (cookie: string, route = "/") => {
    const session = await SessionProvider.get(cookie);
    console.log("------authenticate------");
    console.log({ session });
    const { isAuthenticated } = session;

    if (isAuthenticated) throw redirect(route);

    return isAuthenticated;
  };

  export const logOut = async (cookie: string, route = "/") => {
    const session = await SessionProvider.destroy(cookie);

    throw redirect(route, { headers: { "Set-Cookie": session } });
  };

  export const saveToken = async (
    cookie: string,
    token: string,
    route = "/"
  ) => {
    const session = await SessionProvider.saveToken(cookie, token);

    throw redirect(route, { headers: { "Set-Cookie": session } });
  };

  export const save = async <T>(
    cookie: string,
    label: string,
    value: T,
    route = "/"
  ) => {
    const session = await SessionProvider.saveByLabel<T>(cookie, label, value);

    throw redirect(route, { headers: { "Set-Cookie": session } });
  };
}
