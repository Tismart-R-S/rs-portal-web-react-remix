import {
  getSession,
  commitSession,
  destroySession,
} from '@lib/auth/storage.server';
import { LoginResponseModel } from '@data/models/login.model';
import { Session, SessionData } from '@remix-run/node';

export namespace SessionProvider {
  export const save = async (cookie: string, data: LoginResponseModel) => {
    let session = await getSession(cookie);
    session.set('token', data.accessToken);
    session.set('refreshToken', data.refreshToken);
    return await commitSession(session);
  };

  export const saveToken = async (cookie: string, token: string) => {
    let session = await getSession(cookie);
    session.set('token', token);
    return await commitSession(session);
  };

  export const get = async (cookie: string) => {
    const session = await getSession(cookie);
    let token: string = session.get('token') || '';
    let refreshToken: string = session.get('refreshToken') || '';
    let isAuthenticated = token ? true : false;

    return { isAuthenticated, token, refreshToken };
  };

  export const destroy = async (cookie: string) => {
    const session = await getSession(cookie);
    return await destroySession(session);
  };

  export const destroyWithSession = async (
    session: Session<SessionData, SessionData>
  ) => await destroySession(session);
}
