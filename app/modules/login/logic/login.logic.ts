import { redirect } from '@remix-run/node';

import { authenticator } from '@lib/auth/authenticator.server';
import { StrategyKeys } from '@shared/constants/keys.constants';
import { LoginResponseModel } from '@data/models/login.model';
import { ApiAuthErrorModel } from '@data/models/global.model';
import { SessionProvider } from '~/providers/session.provider';

export namespace LoginLogic {
  export const login = async (request: Request, route: string) => {
    let login = await authenticator.authenticate(StrategyKeys.auth, request);

    if (login.statusCode >= 400)
      return (login.data as ApiAuthErrorModel).message as string[];

    const data = login.data as LoginResponseModel;
    console.log({ data });

    const cookie = await SessionProvider.save(
      request.headers.get('cookie') || '',
      data
    );

    throw redirect(route, {
      headers: { 'Set-Cookie': cookie },
    });
  };

  export const authenticate = async (request: Request, route: string) => {
    const session = await SessionProvider.get(
      request.headers.get('cookie') || ''
    );
    const { isAuthenticated } = session;

    if (isAuthenticated) throw redirect(route);

    return isAuthenticated;
  };
}
