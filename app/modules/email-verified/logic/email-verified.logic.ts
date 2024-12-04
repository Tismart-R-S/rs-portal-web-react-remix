import { SessionProvider } from "@providers/session.provider";
import { redirect } from "@remix-run/node";
import AuthLogic from "@shared/logic/auth.logic";
import { SendVerifByEmailResponseModel } from "@data/models/send-verification-by-email.model";
import sendVerificationByEmailUseCase from "@data/usecases/auth/send-verification-by-email.usecase";
import verifyEmailTokenUseCase from "@data/usecases/auth/verify-email-token.usecase";
import { VerifyEmailTokenResponseModel } from "~/data/models/verify-email-token.model";
import { UserLogic } from "~/shared/logic/user.logic";
import { SessionLogic } from "~/shared/logic/session.logic";

namespace EmailVerifiedLogic {
  export const verifyShowPage = async (request: Request) => {
    const cookie = request.headers.get("cookie") || "";
    const user = await SessionProvider.getByLabel(cookie, "user");

    const params = new URL(request.url).searchParams;
    const email_token = params.get("token");

    if (user && user.isVerified === true) throw redirect("/");
    // no tiene token y no tiene sessión
    if (!user && !email_token) throw redirect("/");

    // if (!user || user?.isVerified === true) throw redirect("/");
  };

  export const resendVerificationEmail = async (request: Request) => {
    const cookie = request.headers.get("cookie") || "";
    const path = new URL(request.url).pathname;
    const token = await SessionProvider.getByLabel(cookie, "token");

    const { data, ok } = await AuthLogic.executeUseCase<
      SendVerifByEmailResponseModel | string
    >(cookie, path, () => sendVerificationByEmailUseCase(token));

    const message = ok
      ? (data as SendVerifByEmailResponseModel).message
      : (data as string);

    return { ok, message };
  };

  export const verifyEmailToken = async (
    request: Request,
    email_token: string
  ) => {
    const cookie = request.headers.get("cookie") || "";
    const token = await SessionProvider.getByLabel(cookie, "token");
    const response = await verifyEmailTokenUseCase("", email_token);

    const { data, ok } = response;

    if (ok && token) {
      const user = await UserLogic.getDataCommonWay(token);
      await SessionLogic.save(cookie, "user", user, "/account-activated");
    }

    const message = ok
      ? (data as VerifyEmailTokenResponseModel).message
      : (data as string);

    return { ok, message };
  };
}

export default EmailVerifiedLogic;
