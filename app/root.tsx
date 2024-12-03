import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import type { LinksFunction, LoaderFunctionArgs } from '@remix-run/node';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { redirect, data } from '@remix-run/node';
import { destroySession, getSession } from '@lib/auth/storage.server';

import './tailwind.css';
import { Header } from '@shared/layouts';
import getUserUseCase from './data/usecases/user/get-user.usecase';
import { UserResponseModel } from '@data/models/user.model';
import { RootLogic } from './modules/index/logic/root.logic';
import { SessionProvider } from './providers/session.provider';

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
];

const queryClient = new QueryClient();

export function Layout({ children }: { children: React.ReactNode }) {
  const loaderData = useLoaderData<typeof loader>();

  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header user={loaderData.data} />
        <main className="max-w-5xl mx-auto py-10 px-4">{children}</main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await RootLogic.userData(request);

  console.log({ user });

  return data(user);
}
