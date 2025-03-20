import { Authenticator } from "remix-auth";
import { FormStrategy } from "remix-auth-form";

import { StrategyKeys } from "@shared/constants/keys.constants";
import loginUseCase from "@data/usecases/auth/login.usecase";
import { BaseResponse } from "@data/interfaces/global.interface";
import { LoginResponseModel } from "@data/models/login.model";
import { Context } from "~/shared/interface/global.interface";

type AuthenticatorResponse = BaseResponse<LoginResponseModel | string>;

export const authenticator = (context: Context) =>
  new Authenticator<AuthenticatorResponse>().use(
    new FormStrategy(async ({ form }) => {
      const email = String(form.get("email"));
      const password = String(form.get("password"));

      const res = await loginUseCase({ email, password }, context);

      return res;
    }),
    StrategyKeys.auth
  );
