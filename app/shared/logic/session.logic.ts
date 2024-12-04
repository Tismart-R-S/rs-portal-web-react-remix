import { redirect } from '@remix-run/node';

import { LoginResponseModel } from '@data/models/login.model';
import { SessionProvider } from '@providers/session.provider';
import { UserResponseModel } from '@data/models/user.model';

export namespace SessionLogic {
  export const logIn = async (
    cookie: string,
    data: SessionProvider.SessionSaveResponse,
    route = '/'
  ) => {
    console.log('------logIn------');
    console.log(data);
    const session = await SessionProvider.save(cookie, data);

    throw redirect(route, { headers: { 'Set-Cookie': session } });
  };

  export const authenticate = async (cookie: string, route = '/') => {
    const session = await SessionProvider.get(cookie);
    const { isAuthenticated } = session;

    if (isAuthenticated) throw redirect(route);

    return isAuthenticated;
  };

  export const logOut = async (cookie: string, route = '/') => {
    const session = await SessionProvider.destroy(cookie);

    throw redirect(route, { headers: { 'Set-Cookie': session } });
  };

  export const saveToken = async (
    cookie: string,
    token: string,
    route = '/'
  ) => {
    const session = await SessionProvider.saveToken(cookie, token);

    throw redirect(route, { headers: { 'Set-Cookie': session } });
  };
}
