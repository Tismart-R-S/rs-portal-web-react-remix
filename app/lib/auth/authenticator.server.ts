import { Authenticator } from 'remix-auth';
import { FormStrategy } from 'remix-auth-form';

import { StrategyKeys } from '@shared/constants/keys.constants';
import loginUseCase from '@data/usecases/auth/login.usecase';
import { ApiAuthErrorModel } from '@data/models/global.model';
import { BaseResponse } from '~/data/interfaces/global.interface';
import { LoginResponseModel } from '~/data/models/login.model';

export const authenticator = new Authenticator<
  BaseResponse<LoginResponseModel> | BaseResponse<ApiAuthErrorModel>
>();

authenticator.use(
  new FormStrategy(async ({ form }) => {
    let email = String(form.get('email'));
    let password = String(form.get('password'));

    const res = await loginUseCase({ email, password });
    console.log(res);

    return res;
  }),
  StrategyKeys.auth
);
