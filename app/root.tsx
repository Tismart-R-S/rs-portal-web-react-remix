import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/cloudflare";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteLoaderData,
} from "@remix-run/react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { data, redirect } from "@remix-run/node";
import "./tailwind.css";

import { Header } from "@shared/layouts";
import { RootLogic } from "@modules/index/logic/root.logic";
import { Alert } from "@shared/components";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import { Context } from "./shared/interface/global.interface";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

const queryClient = new QueryClient();

export function Layout({ children }: { children: React.ReactNode }) {
  const { user, message } = useRouteLoaderData<typeof loader>("root") || {};
  const [showAlert, setShowAlert] = useState(false);

  const dismissAlert = () => setShowAlert(false);

  useEffect(() => {
    if (message) {
      setShowAlert(true);
    }
  }, [message]);

  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header user={user} />
        {showAlert && message && (
          <Alert
            description={message.message}
            type={message.ok ? "success" : "error"}
            duration={4000}
            title={message.ok ? "Éxito" : "Error"}
            onDismiss={dismissAlert}
          />
        )}
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
      <Toaster />
      <Outlet />
    </QueryClientProvider>
  );
}

export async function loader({ request, context }: LoaderFunctionArgs) {
  const isAuthenticated = await RootLogic.authenticate(request);

  const user = await RootLogic.userData(request, context as Context);
  const path = new URL(request.url).pathname;

  if (user?.isVerified === false && path !== "/email-verified") {
    throw redirect("/email-verified");
  }

  // get flash message from session
  const flashMessage = await RootLogic.getFlashMessage(request);

  if (flashMessage !== null) {
    const { data: message, newSession } = flashMessage;

    return data(
      { user, isAuthenticated, message },
      {
        headers: {
          "Set-Cookie": newSession,
        },
      }
    );
  }

  return data({ user, isAuthenticated, message: null });
}
