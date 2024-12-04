import { SessionProvider } from "@providers/session.provider";
import { redirect } from "@remix-run/node";

namespace EmailVerifiedLogic {
  export const verifyShowPage = async (request: Request) => {
    const cookie = request.headers.get("cookie") || "";
    const user = await SessionProvider.getByLabel(cookie, "user");

    if (!user || user?.isVerified === true) throw redirect("/");
  };
}

export default EmailVerifiedLogic;
