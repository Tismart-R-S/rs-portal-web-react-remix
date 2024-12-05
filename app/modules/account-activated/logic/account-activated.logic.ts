import { SessionProvider } from "@providers/session.provider";
import { redirect } from "@remix-run/node";

namespace AccountActivatedLogic {
  export const verifyShowPage = async (request: Request) => {
    const cookie = request.headers.get("cookie") || "";
    const { user, isAuthenticated } = await SessionProvider.get(cookie);

    // with session and verified
    if (user && user.isVerified === false) throw redirect("/");

    return { isAuthenticated };
  };
}

export default AccountActivatedLogic;
