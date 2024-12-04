import { redirect } from '@remix-run/node';
import { UserLogic } from '~/shared/logic/user.logic';

export namespace RootLogic {
  export const userData = async (request: Request) => {
    const cookie = request.headers.get('cookie') || '';
    const path = new URL(request.url).pathname;
    const user = await UserLogic.getData(cookie, path);

    return user;
  };
}
