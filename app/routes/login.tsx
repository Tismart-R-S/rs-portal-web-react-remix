import {
  redirect,
  json,
  data,
  // LoaderFunctionArgs,
  MetaFunction,
  ActionFunctionArgs,
} from "@remix-run/node";
import { makeDomainFunction } from "domain-functions";
import { createFormAction } from "remix-forms";

import { CenterContent } from "@shared/components";
import { LoginForm } from "@modules/login/components";
import { LoginLogic } from "@modules/login/logic/login.logic";
import { loginFormValidator } from "@modules/login/utils/login-form.validator";
import { Card as CardShadcn, CardHeader, CardTitle } from "@ui/card";

export const meta: MetaFunction = () => {
  return [
    { title: "Login | R&S" },
    {
      name: "description",
      content: "Logueate y Postula; facil, seguro y rápido",
    },
  ];
};

const mutation = makeDomainFunction(loginFormValidator)(async (values) => {
  console.log(values);
  return values;
});

const formAction = createFormAction({ redirect, json });

export default function Login() {
  return (
    <CenterContent>
      <CardShadcn className="max-w-[400px] w-full mx-auto pt-1">
        <CardHeader>
          <CardTitle>
            <h1 className="text-xl text-center">Login Postulante</h1>
          </CardTitle>
        </CardHeader>
        <LoginForm />
      </CardShadcn>
    </CenterContent>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  await formAction({
    request,
    schema: loginFormValidator,
    mutation,
    beforeSuccess: async () => {
      await LoginLogic.login(request);
    },
  });

  return data({});
}
