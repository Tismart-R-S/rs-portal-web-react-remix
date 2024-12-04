import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  redirect,
} from "@remix-run/node";
import { SessionProvider } from "~/providers/session.provider";

export async function action({ request }: ActionFunctionArgs) {
  const cookie = await SessionProvider.destroy(
    request.headers.get("cookie") || ""
  );
  throw redirect("/", { headers: { "Set-Cookie": cookie } });
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const path = new URL(request.url).pathname;
  throw redirect(path);
};

export default function Logout() {
  return null;
}
