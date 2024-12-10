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

  export const authenticate = async (
    cookie: string,
    currentRoute: string,
    redirectTo = "/"
  ) => {
    const session = await SessionProvider.get(cookie);
    console.log("------authenticate------");
    const { isAuthenticated } = session;

    const pageIfNotAuthenticated = ["/register", "/login"];
    const pageOnlyIfAuthenticated = ["/profile", "/applicant-data"];

    if (
      (isAuthenticated && pageIfNotAuthenticated.includes(currentRoute)) ||
      (!isAuthenticated && pageOnlyIfAuthenticated.includes(currentRoute))
    )
      throw redirect(redirectTo);

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
    const session = await SessionProvider.saveByLabel(cookie, label, value);

    throw redirect(route, { headers: { "Set-Cookie": session } });
  };

  export const flashMessage = async (
    cookie: string,
    data: SessionProvider.SessionFlashRequest,
    route = "/"
  ) => {
    console.log("------flashMessage------");

    const session = await SessionProvider.flashMessage(
      cookie,
      "flash_message",
      data
    );

    throw redirect(route, {
      headers: {
        "Set-Cookie": session,
      },
    });
  };
}
