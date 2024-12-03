import getUserUseCase from '@data/usecases/user/get-user.usecase';
import { redirect } from '@remix-run/node';
import { SessionProvider } from '~/providers/session.provider';

export namespace RootLogic {
  export const userData = async (request: Request) => {
    let session = await SessionProvider.get(
      request.headers.get('cookie') || ''
    );
    let { isAuthenticated, token } = session;

    if (!isAuthenticated) return { session: isAuthenticated, data: null };

    const res = await getUserUseCase(token);

    if (res.statusCode >= 400) {
      isAuthenticated = false;
      const cookie = await SessionProvider.destroy(
        request.headers.get('cookie') || ''
      );
      throw redirect('/', { headers: { 'Set-Cookie': cookie } });
    }

    return {
      session: isAuthenticated,
      data: res.data,
    };
  };
}
